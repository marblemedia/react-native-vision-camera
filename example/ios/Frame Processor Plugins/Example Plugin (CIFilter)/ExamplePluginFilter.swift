//
//  ExamplePluginFilter.swift
//  VisionCameraExample
//
//  Created by Thomas Coldwell on 19/12/2023.
//

#if VISION_CAMERA_ENABLE_FRAME_PROCESSORS
import VisionCamera
import Vision
import CoreImage

// Example for a Swift Frame Processor plugin
@objc(ExamplePluginFilter)
public class ExamplePluginFilter: FrameProcessorPlugin {
  
  // GPU based image processing
  private let ciContext = CIContext(mtlDevice: MTLCreateSystemDefaultDevice()!)
  private let grayColor = CIColor(red: 0.0, green: 0.0, blue: 0.0, alpha: 0.9)
  private let maskUrl = Bundle.main.url(forResource: "mask", withExtension: "png")!
  private let backgroundFilter = CIFilter(name: "CISourceOverCompositing")!
  private let alphaBlendFilter = CIFilter(name: "CIBlendWithAlphaMask")!
  
  // Pixel buffer pool
  private var initialising = false
  private var pixelBufferPool: CVPixelBufferPool? = nil
  
  public override init(proxy: VisionCameraProxyHolder, options: [AnyHashable : Any]? = nil) {
    super.init(proxy: proxy, options: options)

    print("ExamplePluginFilter initialized with options: \(String(describing: options))")
  }

  public override func callback(_ frame: Frame, withArguments arguments: [AnyHashable: Any]?) -> Any? {
    // Access the underlying pixel buffer
    let imageBuffer = CMSampleBufferGetImageBuffer(frame.buffer)
    let formatDescription = CMSampleBufferGetFormatDescription(frame.buffer)
    guard let imageBuffer = imageBuffer,
          let formatDescription = formatDescription else {
      return frame
    }
    // For now we have to create the pixel buffer pool here as we don't have access to the
    // format description easily in the init...
    if initialising {
      return frame
    }
    if pixelBufferPool == nil {
      initialising = true
      pixelBufferPool = allocateBufferPool(inputFormatDescription: formatDescription)
      if pixelBufferPool == nil {
        fatalError("Could not init pixel buffer pool")
      }
      initialising = false
    }
    // Image processing
    // 0. Wrap as a CIImage for processing
    // 1. Greyed out background
    // 2. Blend with alpha mask
    let cameraImage = CIImage(cvPixelBuffer: imageBuffer)
    let maskImage = CIImage(contentsOf: maskUrl)
    backgroundFilter.setValue(cameraImage, forKey: kCIInputBackgroundImageKey)
    backgroundFilter.setValue(CIImage(color: grayColor), forKey: kCIInputImageKey)
    let backgroundImage = backgroundFilter.outputImage!
    alphaBlendFilter.setValue(cameraImage, forKey: kCIInputImageKey)
    alphaBlendFilter.setValue(backgroundImage, forKey: kCIInputBackgroundImageKey)
    alphaBlendFilter.setValue(maskImage, forKey: kCIInputMaskImageKey)
    let blendedImage = alphaBlendFilter.outputImage!
    // Render to an output pixel buffer (from a pool)
    var presentationPixelBuffer: CVPixelBuffer!
    CVPixelBufferPoolCreatePixelBuffer(kCFAllocatorDefault, pixelBufferPool!, &presentationPixelBuffer)
    ciContext.render(blendedImage, to: presentationPixelBuffer)
    // CVPixelBuffer -> CMSampleBuffer -> Frame
    var outputFormat: CMFormatDescription?
    CMVideoFormatDescriptionCreateForImageBuffer(allocator: kCFAllocatorDefault, imageBuffer: presentationPixelBuffer, formatDescriptionOut: &outputFormat)
    var timingInfo = CMSampleTimingInfo(
      duration: CMSampleBufferGetDuration(frame.buffer),
      presentationTimeStamp: CMSampleBufferGetPresentationTimeStamp(frame.buffer),
      decodeTimeStamp: CMSampleBufferGetDecodeTimeStamp(frame.buffer)
    )
    var sampleBufferOut: CMSampleBuffer?
    let createSampleBufferStatus = CMSampleBufferCreateReadyWithImageBuffer(
      allocator: kCFAllocatorDefault,
      imageBuffer: presentationPixelBuffer,
      formatDescription: outputFormat!,
      sampleTiming: &timingInfo,
      sampleBufferOut: &sampleBufferOut
    )
    guard let sampleBufferOut = sampleBufferOut, createSampleBufferStatus != kCMSampleBufferError_AllocationFailed else {
      print("Could not create output sample buffer - failed with status: \(createSampleBufferStatus)")
      return frame
    }
    let outputFrame = Frame(buffer: sampleBufferOut, orientation: frame.orientation, isMirrored: false)
    outputFrame.incrementRefCount()
    return outputFrame
    
  }
}
#endif

