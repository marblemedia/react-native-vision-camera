"use strict";(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[9212],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3919:function(e,t,a){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return r}})},4996:function(e,t,a){a.d(t,{C:function(){return o},Z:function(){return i}});var n=a(2263),r=a(3919);function o(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,s=void 0!==i&&i,c=o.absolute,p=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(s)return t+a;var l=a.startsWith(t)?a:t+a.replace(/^\//,"");return p?e+l:l}(o,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},3415:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(4996),s=["components"],c={id:"capturing",title:"Taking Photos/Recording Videos",sidebar_label:"Taking Photos/Recording Videos"},p=void 0,l={unversionedId:"guides/capturing",id:"guides/capturing",isDocsHomePage:!1,title:"Taking Photos/Recording Videos",description:"Camera Actions",source:"@site/docs/guides/CAPTURING.mdx",sourceDirName:"guides",slug:"/guides/capturing",permalink:"/react-native-vision-camera/docs/guides/capturing",editUrl:"https://github.com/mrousavy/react-native-vision-camera/edit/main/docs/docs/guides/CAPTURING.mdx",tags:[],version:"current",frontMatter:{id:"capturing",title:"Taking Photos/Recording Videos",sidebar_label:"Taking Photos/Recording Videos"},sidebar:"visionSidebar",previous:{title:"Camera Formats",permalink:"/react-native-vision-camera/docs/guides/formats"},next:{title:"Frame Processors",permalink:"/react-native-vision-camera/docs/guides/frame-processors"}},d=[{value:"Camera Actions",id:"camera-actions",children:[]},{value:"Taking Photos",id:"taking-photos",children:[{value:"Taking Snapshots",id:"taking-snapshots",children:[]}]},{value:"Recording Videos",id:"recording-videos",children:[]}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",null,(0,o.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"283",height:"535",style:{float:"right"}},(0,o.kt)("image",{href:(0,i.Z)("img/demo_capture.gif"),x:"18",y:"33",width:"247",height:"469"}),(0,o.kt)("image",{href:(0,i.Z)("img/frame.png"),width:"283",height:"535"}))),(0,o.kt)("h2",{id:"camera-actions"},"Camera Actions"),(0,o.kt)("p",null,"The Camera provides certain actions using member functions which are available by using a ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"ref object"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const camera = useRef<Camera>(null)\n  // ...\n\n  return (\n    <Camera\n      ref={camera}\n      {...cameraProps}\n    />\n  )\n}\n")),(0,o.kt)("p",null,"The most important actions are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#taking-photos"},"Taking Photos"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#taking-snapshots"},"Taking Snapshots")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#recording-videos"},"Recording Videos"))),(0,o.kt)("h2",{id:"taking-photos"},"Taking Photos"),(0,o.kt)("p",null,"To take a photo you first have to enable photo capture:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<Camera {...props} photo={true} />\n")),(0,o.kt)("p",null,"Then, simply use the Camera's ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/Camera#takephoto"},(0,o.kt)("inlineCode",{parentName:"a"},"takePhoto(...)"))," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const photo = await camera.current.takePhoto({\n  flash: 'on'\n})\n")),(0,o.kt)("p",null,"You can customize capture options such as ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/TakePhotoOptions#enableautoredeyereduction"},"automatic red-eye reduction"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/TakePhotoOptions#enableautostabilization"},"automatic image stabilization"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/TakePhotoOptions#enablevirtualdevicefusion"},"combining images from constituent physical camera devices")," to create a single high quality fused image, ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/TakePhotoOptions#flash"},"enable flash"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/TakePhotoOptions#qualityprioritization"},"prioritize speed over quality")," and more using the ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," parameter. (See ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/TakePhotoOptions"},(0,o.kt)("inlineCode",{parentName:"a"},"TakePhotoOptions")),")"),(0,o.kt)("p",null,"This function returns a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/PhotoFile"},(0,o.kt)("inlineCode",{parentName:"a"},"PhotoFile"))," which contains a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/PhotoFile#path"},(0,o.kt)("inlineCode",{parentName:"a"},"path"))," property you can display in your App using an ",(0,o.kt)("inlineCode",{parentName:"p"},"<Image>")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"<FastImage>"),"."),(0,o.kt)("h3",{id:"taking-snapshots"},"Taking Snapshots"),(0,o.kt)("p",null,"Compared to iOS, Cameras on Android tend to be slower in image capture. If you care about speed, you can use the Camera's ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/Camera#takesnapshot"},(0,o.kt)("inlineCode",{parentName:"a"},"takeSnapshot(...)"))," function (Android only) which simply takes a snapshot of the Camera View instead of actually taking a photo through the Camera lens."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const snapshot = await camera.current.takeSnapshot({\n  quality: 85,\n  skipMetadata: true\n})\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"While taking snapshots is faster than taking photos, the resulting image has way lower quality. You can combine both functions to create a snapshot to present to the user at first, then deliver the actual high-res photo afterwards."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"takeSnapshot")," function also works with ",(0,o.kt)("inlineCode",{parentName:"p"},"photo={false}"),". For this reason VisionCamera will automatically fall-back to snapshot capture if you are trying to use more use-cases than the Camera natively supports. (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/devices#the-supportsparallelvideoprocessing-prop"},'"The ',(0,o.kt)("inlineCode",{parentName:"a"},"supportsParallelVideoProcessing"),' prop"'),")"))),(0,o.kt)("h2",{id:"recording-videos"},"Recording Videos"),(0,o.kt)("p",null,"To start a video recording you first have to enable video capture:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<Camera\n  {...props}\n  video={true}\n  audio={true} // <-- optional\n/>\n")),(0,o.kt)("p",null,"Then, simply use the Camera's ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/Camera#startrecording"},(0,o.kt)("inlineCode",{parentName:"a"},"startRecording(...)"))," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"camera.current.startRecording({\n  flash: 'on',\n  onRecordingFinished: (video) => console.log(video),\n  onRecordingError: (error) => console.error(error),\n})\n")),(0,o.kt)("p",null,"For any error that occured ",(0,o.kt)("em",{parentName:"p"},"while recording the video"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"onRecordingError")," callback will be invoked with a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/CameraCaptureError"},(0,o.kt)("inlineCode",{parentName:"a"},"CaptureError"))," and the recording is therefore cancelled."),(0,o.kt)("p",null,"To stop the video recording, you can call ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/Camera#stoprecording"},(0,o.kt)("inlineCode",{parentName:"a"},"stopRecording(...)")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await camera.current.stopRecording()\n")),(0,o.kt)("p",null,"Once a recording has been stopped, the ",(0,o.kt)("inlineCode",{parentName:"p"},"onRecordingFinished")," callback passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"startRecording")," function will be invoked with a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/VideoFile"},(0,o.kt)("inlineCode",{parentName:"a"},"VideoFile"))," which you can then use to display in a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-video/react-native-video"},(0,o.kt)("inlineCode",{parentName:"a"},"<Video>"))," component."),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"-next-section-frame-processors"},"\ud83d\ude80 Next section: ",(0,o.kt)("a",{parentName:"h4",href:"frame-processors"},"Frame Processors")))}m.isMDXComponent=!0}}]);