//
//  Frame.m
//  VisionCamera
//
//  Created by Marc Rousavy on 08.06.21.
//  Copyright © 2021 mrousavy. All rights reserved.
//

#import "Frame.h"
#import <CoreMedia/CMSampleBuffer.h>
#import <Foundation/Foundation.h>

@implementation Frame {
  CMSampleBufferRef _Nonnull buffer;
  UIImageOrientation orientation;
  Boolean hasRetainedBuffer;
}

- (instancetype)initWithBuffer:(CMSampleBufferRef _Nonnull)buffer orientation:(UIImageOrientation)orientation {
  self = [super init];
  if (self) {
    hasRetainedBuffer = false;
    _buffer = buffer;
    _orientation = orientation;
  }
  return self;
}

- (instancetype) initWithRetainedBuffer:(CMSampleBufferRef)buffer orientation:(UIImageOrientation)orientation {
  self = [super init];
  if (self) {
    CFRetain(buffer);
    hasRetainedBuffer = true;
    _buffer = buffer;
    _orientation = orientation;
  }
  return self;
}

- (void) dealloc {
  if (hasRetainedBuffer == false) {
    return;
  }
  CMSampleBufferInvalidate(_buffer);
  CFRelease(_buffer);
  buffer = NULL;
}

@synthesize buffer = _buffer;
@synthesize orientation = _orientation;

@end
