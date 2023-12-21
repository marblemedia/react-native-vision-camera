//
//  ExamplePluginFilter.m
//  VisionCameraExample
//
//  Created by Thomas Coldwell on 18/12/2023.
//

#if __has_include(<VisionCamera/FrameProcessorPlugin.h>)
#import <VisionCamera/FrameProcessorPlugin.h>
#import <VisionCamera/FrameProcessorPluginRegistry.h>
#import <VisionCamera/Frame.h>

#import "VisionCameraExample-Swift.h"

// // Example for a Swift Frame Processor plugin automatic registration
VISION_EXPORT_SWIFT_FRAME_PROCESSOR(ExamplePluginFilter, example_plugin_filter)

#endif
