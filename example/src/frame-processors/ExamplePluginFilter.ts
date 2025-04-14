import { VisionCameraProxy, Frame } from 'react-native-vision-camera'

const plugin = VisionCameraProxy.initFrameProcessorPlugin('example_plugin_filter')

export function examplePluginFilter(frame: Frame): Frame {
  'worklet'

  if (plugin == null) throw new Error('Failed to load Frame Processor Plugin "example_plugin_filter"!')

  return plugin.call(frame) as unknown as Frame
}
