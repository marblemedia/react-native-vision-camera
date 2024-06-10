import type { DependencyList } from 'react'
import { useMemo } from 'react'
import { withFrameRefCounting } from '../frame-processors/withFrameRefCounting'
import type { AugmentFrameProcessor } from '../types/CameraProps'
import type { Frame } from '../types/Frame'

/**
 * Create a new Frame Processor function which you can pass to the `<Camera>`.
 * (See ["Frame Processors"](https://react-native-vision-camera.com/docs/guides/frame-processors))
 *
 * Make sure to add the `'worklet'` directive to the top of the Frame Processor function, otherwise it will not get compiled into a worklet.
 *
 * Also make sure to memoize the returned object, so that the Camera doesn't reset the Frame Processor Context each time.
 * @worklet
 */
export function createFrameProcessor(frameProcessor: (frame: Frame) => void): AugmentFrameProcessor {
  return {
    frameProcessor: withFrameRefCounting(frameProcessor),
    type: 'augment',
  }
}

/**
 * Returns a memoized Frame Processor function wich you can pass to the `<Camera>`.
 * (See ["Frame Processors"](https://react-native-vision-camera.com/docs/guides/frame-processors))
 *
 * Make sure to add the `'worklet'` directive to the top of the Frame Processor function, otherwise it will not get compiled into a worklet.
 *
 * @param frameProcessor The Frame Processor - can optionally return a frame which will be displayed
 * @param dependencies The React dependencies which will be copied into the VisionCamera JS-Runtime.
 * @returns The memoized Frame Processor.
 * @example
 * ```ts
 * const frameProcessor = useFrameProcessor((frame) => {
 *   'worklet'
 *   const faces = scanFaces(frame)
 *   console.log(`Faces: ${faces}`)
 * }, [])
 * ```
 */
export function useFrameProcessor(frameProcessor: (frame: Frame) => Frame | void, dependencies: DependencyList): AugmentFrameProcessor {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => createFrameProcessor(frameProcessor), dependencies)
}
