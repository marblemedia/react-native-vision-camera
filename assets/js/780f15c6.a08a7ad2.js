"use strict";(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[309],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),k=m(a),u=n,c=k["".concat(s,".").concat(u)]||k[u]||d[u]||i;return a?r.createElement(c,o(o({ref:t},l),{},{components:a})):r.createElement(c,o({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var m=2;m<i;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5777:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return l},default:function(){return k}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],p={id:"Camera",title:"Class: Camera",sidebar_label:"Camera",sidebar_position:0,custom_edit_url:null},s=void 0,m={unversionedId:"api/classes/Camera",id:"api/classes/Camera",isDocsHomePage:!1,title:"Class: Camera",description:"A powerful `` component.",source:"@site/docs/api/classes/Camera.md",sourceDirName:"api/classes",slug:"/api/classes/Camera",permalink:"/react-native-vision-camera/docs/api/classes/Camera",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Camera",title:"Class: Camera",sidebar_label:"Camera",sidebar_position:0,custom_edit_url:null},sidebar:"visionSidebar",previous:{title:"Overview",permalink:"/react-native-vision-camera/docs/api/"},next:{title:"CameraCaptureError",permalink:"/react-native-vision-camera/docs/api/classes/CameraCaptureError"}},l=[{value:"A powerful <code>&lt;Camera&gt;</code> component.",id:"a-powerful-camera-component",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"focus",id:"focus",children:[]},{value:"startRecording",id:"startrecording",children:[]},{value:"stopRecording",id:"stoprecording",children:[]},{value:"takePhoto",id:"takephoto",children:[]},{value:"takeSnapshot",id:"takesnapshot",children:[]},{value:"getAvailableCameraDevices",id:"getavailablecameradevices",children:[]},{value:"getCameraPermissionStatus",id:"getcamerapermissionstatus",children:[]},{value:"getMicrophonePermissionStatus",id:"getmicrophonepermissionstatus",children:[]},{value:"requestCameraPermission",id:"requestcamerapermission",children:[]},{value:"requestMicrophonePermission",id:"requestmicrophonepermission",children:[]}]}],d={toc:l};function k(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"a-powerful-camera-component"},"A powerful ",(0,i.kt)("inlineCode",{parentName:"h3"},"<Camera>")," component."),(0,i.kt)("p",null,"Read the ",(0,i.kt)("a",{parentName:"p",href:"https://mrousavy.github.io/react-native-vision-camera/"},"VisionCamera documentation")," for more information."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<Camera>")," component's most important (and therefore ",(0,i.kt)("em",{parentName:"p"},"required"),") properties are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/CameraProps#device"},(0,i.kt)("inlineCode",{parentName:"a"},"device")),": Specifies the ",(0,i.kt)("a",{parentName:"li",href:"../interfaces/CameraDevice"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraDevice"))," to use. Get a ",(0,i.kt)("a",{parentName:"li",href:"../interfaces/CameraDevice"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraDevice"))," by using the ",(0,i.kt)("a",{parentName:"li",href:"../#usecameradevices"},(0,i.kt)("inlineCode",{parentName:"a"},"useCameraDevices()"))," hook, or manually by using the ",(0,i.kt)("a",{parentName:"li",href:"Camera#getavailablecameradevices"},(0,i.kt)("inlineCode",{parentName:"a"},"Camera.getAvailableCameraDevices()"))," function."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/CameraProps#isactive"},(0,i.kt)("inlineCode",{parentName:"a"},"isActive")),": A boolean value that specifies whether the Camera should actively stream video frames or not. This can be compared to a Video component, where ",(0,i.kt)("inlineCode",{parentName:"li"},"isActive")," specifies whether the video is paused or not. If you fully unmount the ",(0,i.kt)("inlineCode",{parentName:"li"},"<Camera>")," component instead of using ",(0,i.kt)("inlineCode",{parentName:"li"},"isActive={false}"),", the Camera will take a bit longer to start again.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const devices = useCameraDevices('wide-angle-camera')\n  const device = devices.back\n\n  if (device == null) return <LoadingView />\n  return (\n    <Camera\n      style={StyleSheet.absoluteFill}\n      device={device}\n      isActive={true}\n    />\n  )\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"component"))),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"PureComponent"),"<",(0,i.kt)("a",{parentName:"p",href:"../interfaces/CameraProps"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraProps")),">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Camera"))))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"focus"},"focus"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"focus"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"point"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"Focus the camera to a specific point in the coordinate system."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," ",(0,i.kt)("a",{parentName:"p",href:"CameraRuntimeError"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraRuntimeError"))," When any kind of error occured while focussing. Use the ",(0,i.kt)("a",{parentName:"p",href:"CameraRuntimeError#code"},(0,i.kt)("inlineCode",{parentName:"a"},"code"))," property to get the actual error"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await camera.current.focus({\n  x: tapEvent.x,\n  y: tapEvent.y\n})\n")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"point")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/Point"},(0,i.kt)("inlineCode",{parentName:"a"},"Point"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The point to focus to. This should be relative to the Camera view's coordinate system, and expressed in Pixel on iOS and Points on Android.  ",(0,i.kt)("em",{parentName:"td"}," ",(0,i.kt)("inlineCode",{parentName:"em"},"(0, 0)")," means ",(0,i.kt)("strong",{parentName:"em"},"top left"),".  ")," ",(0,i.kt)("inlineCode",{parentName:"td"},"(CameraView.width, CameraView.height)")," means ",(0,i.kt)("strong",{parentName:"td"},"bottom right"),".  Make sure the value doesn't exceed the CameraView's dimensions.")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/d3105fa/src/Camera.tsx#L234"},"Camera.tsx:234")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"startrecording"},"startRecording"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"startRecording"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Start a new video recording."),(0,i.kt)("p",null,"Records in the following formats:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"iOS"),": QuickTime (",(0,i.kt)("inlineCode",{parentName:"li"},".mov"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Android"),": MPEG4 (",(0,i.kt)("inlineCode",{parentName:"li"},".mp4"),")")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"blocking"))," This function is synchronized/blocking."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," ",(0,i.kt)("a",{parentName:"p",href:"CameraCaptureError"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraCaptureError"))," When any kind of error occured while starting the video recording. Use the ",(0,i.kt)("a",{parentName:"p",href:"CameraCaptureError#code"},(0,i.kt)("inlineCode",{parentName:"a"},"code"))," property to get the actual error"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"camera.current.startRecording({\n  onRecordingFinished: (video) => console.log(video),\n  onRecordingError: (error) => console.error(error),\n})\nsetTimeout(() => {\n  camera.current.stopRecording()\n}, 5000)\n")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/RecordVideoOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"RecordVideoOptions")))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/d3105fa/src/Camera.tsx#L179"},"Camera.tsx:179")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stoprecording"},"stopRecording"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"stopRecording"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"Stop the current video recording."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," ",(0,i.kt)("a",{parentName:"p",href:"CameraCaptureError"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraCaptureError"))," When any kind of error occured while stopping the video recording. Use the ",(0,i.kt)("a",{parentName:"p",href:"CameraCaptureError#code"},(0,i.kt)("inlineCode",{parentName:"a"},"code"))," property to get the actual error"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await camera.current.startRecording()\nsetTimeout(async () => {\n const video = await camera.current.stopRecording()\n}, 5000)\n")),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/d3105fa/src/Camera.tsx#L208"},"Camera.tsx:208")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"takephoto"},"takePhoto"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"takePhoto"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"../interfaces/PhotoFile"},(0,i.kt)("inlineCode",{parentName:"a"},"PhotoFile")),">"),(0,i.kt)("p",null,"Take a single photo and write it's content to a temporary file."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," ",(0,i.kt)("a",{parentName:"p",href:"CameraCaptureError"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraCaptureError"))," When any kind of error occured while capturing the photo. Use the ",(0,i.kt)("a",{parentName:"p",href:"CameraCaptureError#code"},(0,i.kt)("inlineCode",{parentName:"a"},"code"))," property to get the actual error"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const photo = await camera.current.takePhoto({\n  qualityPrioritization: 'quality',\n  flash: 'on',\n  enableAutoRedEyeReduction: true\n})\n")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/TakePhotoOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"TakePhotoOptions")))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"../interfaces/PhotoFile"},(0,i.kt)("inlineCode",{parentName:"a"},"PhotoFile")),">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/d3105fa/src/Camera.tsx#L122"},"Camera.tsx:122")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"takesnapshot"},"takeSnapshot"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"takeSnapshot"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"../interfaces/PhotoFile"},(0,i.kt)("inlineCode",{parentName:"a"},"PhotoFile")),">"),(0,i.kt)("p",null,"Take a snapshot of the current preview view."),(0,i.kt)("p",null,"This can be used as an alternative to ",(0,i.kt)("a",{parentName:"p",href:"Camera#takephoto"},(0,i.kt)("inlineCode",{parentName:"a"},"takePhoto()"))," if speed is more important than quality"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," ",(0,i.kt)("a",{parentName:"p",href:"CameraCaptureError"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraCaptureError"))," When any kind of error occured while taking a snapshot. Use the ",(0,i.kt)("a",{parentName:"p",href:"CameraCaptureError#code"},(0,i.kt)("inlineCode",{parentName:"a"},"code"))," property to get the actual error"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"platform"))," Android"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const photo = await camera.current.takeSnapshot({\n  quality: 85,\n  skipMetadata: true\n})\n")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/TakeSnapshotOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"TakeSnapshotOptions")))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"../interfaces/PhotoFile"},(0,i.kt)("inlineCode",{parentName:"a"},"PhotoFile")),">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/d3105fa/src/Camera.tsx#L146"},"Camera.tsx:146")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getavailablecameradevices"},"getAvailableCameraDevices"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"getAvailableCameraDevices"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"../interfaces/CameraDevice"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraDevice")),"[]",">"),(0,i.kt)("p",null,"Get a list of all available camera devices on the current phone."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," ",(0,i.kt)("a",{parentName:"p",href:"CameraRuntimeError"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraRuntimeError"))," When any kind of error occured while getting all available camera devices. Use the ",(0,i.kt)("a",{parentName:"p",href:"CameraRuntimeError#code"},(0,i.kt)("inlineCode",{parentName:"a"},"code"))," property to get the actual error"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const devices = await Camera.getAvailableCameraDevices()\nconst filtered = devices.filter((d) => matchesMyExpectations(d))\nconst sorted = devices.sort(sortDevicesByAmountOfCameras)\nreturn {\n  back: sorted.find((d) => d.position === "back"),\n  front: sorted.find((d) => d.position === "front")\n}\n')),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"../interfaces/CameraDevice"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraDevice")),"[]",">"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/d3105fa/src/Camera.tsx#L259"},"Camera.tsx:259")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getcamerapermissionstatus"},"getCameraPermissionStatus"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"getCameraPermissionStatus"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"../#camerapermissionstatus"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraPermissionStatus")),">"),(0,i.kt)("p",null,"Gets the current Camera Permission Status. Check this before mounting the Camera to ensure\nthe user has permitted the app to use the camera."),(0,i.kt)("p",null,"To actually prompt the user for camera permission, use ",(0,i.kt)("a",{parentName:"p",href:"Camera#requestcamerapermission"},(0,i.kt)("inlineCode",{parentName:"a"},"requestCameraPermission()")),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," ",(0,i.kt)("a",{parentName:"p",href:"CameraRuntimeError"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraRuntimeError"))," When any kind of error occured while getting the current permission status. Use the ",(0,i.kt)("a",{parentName:"p",href:"CameraRuntimeError#code"},(0,i.kt)("inlineCode",{parentName:"a"},"code"))," property to get the actual error"),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"../#camerapermissionstatus"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraPermissionStatus")),">"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/d3105fa/src/Camera.tsx#L274"},"Camera.tsx:274")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getmicrophonepermissionstatus"},"getMicrophonePermissionStatus"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"getMicrophonePermissionStatus"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"../#camerapermissionstatus"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraPermissionStatus")),">"),(0,i.kt)("p",null,"Gets the current Microphone-Recording Permission Status. Check this before mounting the Camera to ensure\nthe user has permitted the app to use the microphone."),(0,i.kt)("p",null,"To actually prompt the user for microphone permission, use ",(0,i.kt)("a",{parentName:"p",href:"Camera#requestmicrophonepermission"},(0,i.kt)("inlineCode",{parentName:"a"},"requestMicrophonePermission()")),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," ",(0,i.kt)("a",{parentName:"p",href:"CameraRuntimeError"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraRuntimeError"))," When any kind of error occured while getting the current permission status. Use the ",(0,i.kt)("a",{parentName:"p",href:"CameraRuntimeError#code"},(0,i.kt)("inlineCode",{parentName:"a"},"code"))," property to get the actual error"),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"../#camerapermissionstatus"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraPermissionStatus")),">"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/d3105fa/src/Camera.tsx#L289"},"Camera.tsx:289")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"requestcamerapermission"},"requestCameraPermission"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"requestCameraPermission"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"../#camerapermissionrequestresult"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraPermissionRequestResult")),">"),(0,i.kt)("p",null,'Shows a "request permission" alert to the user, and resolves with the new camera permission status.'),(0,i.kt)("p",null,"If the user has previously blocked the app from using the camera, the alert will not be shown\nand ",(0,i.kt)("inlineCode",{parentName:"p"},'"denied"')," will be returned."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," ",(0,i.kt)("a",{parentName:"p",href:"CameraRuntimeError"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraRuntimeError"))," When any kind of error occured while requesting permission. Use the ",(0,i.kt)("a",{parentName:"p",href:"CameraRuntimeError#code"},(0,i.kt)("inlineCode",{parentName:"a"},"code"))," property to get the actual error"),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"../#camerapermissionrequestresult"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraPermissionRequestResult")),">"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/d3105fa/src/Camera.tsx#L304"},"Camera.tsx:304")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"requestmicrophonepermission"},"requestMicrophonePermission"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"requestMicrophonePermission"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"../#camerapermissionrequestresult"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraPermissionRequestResult")),">"),(0,i.kt)("p",null,'Shows a "request permission" alert to the user, and resolves with the new microphone permission status.'),(0,i.kt)("p",null,"If the user has previously blocked the app from using the microphone, the alert will not be shown\nand ",(0,i.kt)("inlineCode",{parentName:"p"},'"denied"')," will be returned."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," ",(0,i.kt)("a",{parentName:"p",href:"CameraRuntimeError"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraRuntimeError"))," When any kind of error occured while requesting permission. Use the ",(0,i.kt)("a",{parentName:"p",href:"CameraRuntimeError#code"},(0,i.kt)("inlineCode",{parentName:"a"},"code"))," property to get the actual error"),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"../#camerapermissionrequestresult"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraPermissionRequestResult")),">"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/d3105fa/src/Camera.tsx#L319"},"Camera.tsx:319")))}k.isMDXComponent=!0}}]);