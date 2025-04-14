//
//  RenderingUtils.swift
//  VisionCameraExample
//
//  Created by Thomas Coldwell on 19/12/2023.
//

import Foundation
import CoreVideo
import CoreMedia
import UIKit

func allocateBufferPool(inputFormatDescription: CMFormatDescription) -> CVPixelBufferPool? {
  let inputMediaSubType = CMFormatDescriptionGetMediaSubType(inputFormatDescription)
  let inputDimensions = CMVideoFormatDescriptionGetDimensions(inputFormatDescription)
  let poolAttributes: NSDictionary? = nil
  let pixelBufferAttributes: [String: Any] = [
    kCVPixelBufferWidthKey as String: Int(inputDimensions.width),
    kCVPixelBufferHeightKey as String: Int(inputDimensions.height),
    kCVPixelBufferPixelFormatTypeKey as String: UInt(kCMPixelFormat_32BGRA),
    kCVPixelBufferIOSurfacePropertiesKey as String: [:],
    kCVPixelBufferMetalCompatibilityKey as String: true
  ]
  var pixelBufferPool: CVPixelBufferPool?
  CVPixelBufferPoolCreate(kCFAllocatorDefault, poolAttributes, pixelBufferAttributes as NSDictionary, &pixelBufferPool)
  return pixelBufferPool
}
