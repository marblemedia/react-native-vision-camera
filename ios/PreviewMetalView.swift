//
//  PreviewMetalView.swift
//  VisionCamera
//
//  Created by Thomas Coldwell on 19/07/2022.
//  Copyright © 2022 mrousavy. All rights reserved.
//

import Foundation
import Metal
import MetalKit

class PreviewMetalView: MTKView {
  private let syncQueue = DispatchQueue(label: "Preview View Sync Queue", qos: .userInitiated, attributes: [], autoreleaseFrequency: .workItem)

  var pixelBuffer: CVPixelBuffer? {
    didSet {
      syncQueue.sync {
        internalPixelBuffer = pixelBuffer
      }
    }
  }

  private var internalPixelBuffer: CVPixelBuffer?

  private let resolution: CGSize

  private var textureCache: CVMetalTextureCache?
  private var vertexCoordBuffer: MTLBuffer!
  private var textCoordBuffer: MTLBuffer!
  private var sampler: MTLSamplerState!
  private var renderPipelineState: MTLRenderPipelineState!
  private var commandQueue: MTLCommandQueue?

  // TODO: This fix below does not work. MTKView does not seemingly autorelease its drawables as is documented here: https://developer.apple.com/documentation/quartzcore/cametallayer#3385893
  // Required to invalidate CADisplayLink when MTKView gets removed from parent
  // Known issue reported here: https://openradar.appspot.com/23977735
  override public func didMoveToSuperview() {
    ReactLogger.log(level: .info, message: "Cleaning up the metal view!")
    super.didMoveToSuperview()
    if let link = value(forKey: "displayLink") as? CADisplayLink, superview == nil {
      ReactLogger.log(level: .info, message: "Invalidating display link for metal view!")
      link.invalidate()
    }
  }

  init(frame frameRect: CGRect, device: MTLDevice?, resolution: CGSize) {
    self.resolution = resolution
    super.init(frame: frameRect, device: device)
    configureMetal()
    createTextureCache()
    colorPixelFormat = .bgra8Unorm
  }

  @available(*, unavailable)
  required init(coder _: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  func setupTransform() {
    var scaleX = Float(frame.width / CGFloat(resolution.width))
    var scaleY = Float(frame.height / CGFloat(resolution.height))
    scaleX = scaleY / scaleX
    scaleY = 1.0

    let vertexData: [Float] = [
      -scaleX, -scaleY, 0.0, 1.0,
      scaleX, -scaleY, 0.0, 1.0,
      -scaleX, scaleY, 0.0, 1.0,
      scaleX, scaleY, 0.0, 1.0,
    ]
    vertexCoordBuffer = device!.makeBuffer(bytes: vertexData, length: vertexData.count * MemoryLayout<Float>.size, options: [])
    let textData: [Float] = [
      0.0, 1.0,
      1.0, 1.0,
      0.0, 0.0,
      1.0, 0.0,
    ]
    textCoordBuffer = device?.makeBuffer(bytes: textData, length: textData.count * MemoryLayout<Float>.size, options: [])
  }

  func configureMetal() {
    /*
     * Sets up the metal pipeline with passthrough vertex and frag shaders,
     * a sampler descriptor for reading from the texture and a command queue
     * for the GPU
     */
    // TODO: Move shaders to framework and access defualt lib from framework bundle
    let defaultLibrary = device!.makeDefaultLibrary()!
    let pipelineDescriptor = MTLRenderPipelineDescriptor()
    pipelineDescriptor.colorAttachments[0].pixelFormat = .bgra8Unorm
    pipelineDescriptor.vertexFunction = defaultLibrary.makeFunction(name: "vertexPassThrough")
    pipelineDescriptor.fragmentFunction = defaultLibrary.makeFunction(name: "fragmentPassThrough")
    // To determine how textures are sampled, create a sampler descriptor to query for a sampler state from the device.
    let samplerDescriptor = MTLSamplerDescriptor()
    samplerDescriptor.sAddressMode = .clampToEdge
    samplerDescriptor.tAddressMode = .clampToEdge
    samplerDescriptor.minFilter = .linear
    samplerDescriptor.magFilter = .linear
    sampler = device!.makeSamplerState(descriptor: samplerDescriptor)
    // Save the render pipeline state config so the GPU can run efficiently
    do {
      renderPipelineState = try device!.makeRenderPipelineState(descriptor: pipelineDescriptor)
    } catch {
      fatalError("Unable to create preview Metal view pipeline state. (\(error))")
    }

    setupTransform()

    // Command queue for the GPU command buffers
    commandQueue = device!.makeCommandQueue()
  }

  func createTextureCache() {
    /*
     * Create a metal texture cache so we aren't reallocating memory for each new metal texture!
     */
    var newTextureCache: CVMetalTextureCache?
    if CVMetalTextureCacheCreate(kCFAllocatorDefault, nil, device!, nil, &newTextureCache) == kCVReturnSuccess {
      textureCache = newTextureCache
    } else {
      assertionFailure("Unable to allocate texture cache")
    }
  }

  private func render() {
    var pixelBuffer: CVPixelBuffer?

    syncQueue.sync {
      pixelBuffer = internalPixelBuffer
    }

    guard currentDrawable != nil,
          let currentRenderPassDescriptor = currentRenderPassDescriptor,
          let previewPixelBuffer = pixelBuffer else {
      return
    }

    // Create a Metal texture from the image buffer.
    let width = CVPixelBufferGetWidth(previewPixelBuffer)
    let height = CVPixelBufferGetHeight(previewPixelBuffer)

    if textureCache == nil {
      createTextureCache()
    }
    var cvTextureOut: CVMetalTexture?
    CVMetalTextureCacheCreateTextureFromImage(kCFAllocatorDefault,
                                              textureCache!,
                                              previewPixelBuffer,
                                              nil,
                                              .bgra8Unorm,
                                              width,
                                              height,
                                              0,
                                              &cvTextureOut)
    guard let cvTexture = cvTextureOut, let texture = CVMetalTextureGetTexture(cvTexture) else {
      print("Failed to create preview texture")

      CVMetalTextureCacheFlush(textureCache!, 0)
      return
    }

    // Set up command buffer and encoder
    guard let commandQueue = commandQueue else {
      print("Failed to create Metal command queue")
      CVMetalTextureCacheFlush(textureCache!, 0)
      return
    }

    guard let commandBuffer = commandQueue.makeCommandBuffer() else {
      print("Failed to create Metal command buffer")
      CVMetalTextureCacheFlush(textureCache!, 0)
      return
    }

    guard let commandEncoder = commandBuffer.makeRenderCommandEncoder(descriptor: currentRenderPassDescriptor) else {
      print("Failed to create Metal command encoder")
      CVMetalTextureCacheFlush(textureCache!, 0)
      return
    }

    commandEncoder.label = "Passthrough render pass"
    commandEncoder.setRenderPipelineState(renderPipelineState!)
    commandEncoder.setVertexBuffer(vertexCoordBuffer, offset: 0, index: 0)
    commandEncoder.setVertexBuffer(textCoordBuffer, offset: 0, index: 1)
    commandEncoder.setFragmentTexture(texture, index: 0)
    commandEncoder.setFragmentSamplerState(sampler, index: 0)
    commandEncoder.drawPrimitives(type: .triangleStrip, vertexStart: 0, vertexCount: 4)
    commandEncoder.endEncoding()

    // Draw to the screen.
    commandBuffer.present(currentDrawable!)
    commandBuffer.commit()
  }

  override func draw(_: CGRect) {
    // lol drawables do not get autoreleased?
    // maybe ARC doesn't clean up IOSurfaces?
    autoreleasepool {
      self.render()
    }
  }
}
