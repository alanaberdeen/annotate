(function(e){function t(t){for(var o,n,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],o=!0,n=1;n<a.length;n++){var s=a[n];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var o={},n={app:0},r={app:0},i=[];function s(e){return c.p+"js/"+({"Dashboard~Demo~Editor":"Dashboard~Demo~Editor",Dashboard:"Dashboard",Editor:"Editor",Demo:"Demo",Loading:"Loading"}[e]||e)+"."+{"Dashboard~Demo~Editor":"5b8de688",Dashboard:"b1c4f7b8",Editor:"fd475de8",Demo:"92daa6fe",Loading:"36890303"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"Dashboard~Demo~Editor":1,Dashboard:1,Editor:1,Loading:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var o="css/"+({"Dashboard~Demo~Editor":"Dashboard~Demo~Editor",Dashboard:"Dashboard",Editor:"Editor",Demo:"Demo",Loading:"Loading"}[e]||e)+"."+{"Dashboard~Demo~Editor":"7b1d0c96",Dashboard:"9ce8f199",Editor:"6153be10",Demo:"31d6cfe0",Loading:"344f8b96"}[e]+".css",r=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===o||u===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete n[e],p.parentNode.removeChild(p),a(i)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,a){o=r[e]=[t,a]}));t.push(o[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var a=r[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",d.name="ChunkLoadError",d.type=o,d.request=n,a[1](d)}r[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(a,o,function(t){return e[t]}.bind(null,o));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},1:function(e,t){},2:function(e,t){},"28c2":function(e,t,a){},3:function(e,t){},4:function(e,t){},"8b62":function(e,t,a){"use strict";var o=a("28c2"),n=a.n(o);n.a},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-main",[a("router-view")],1),a("v-snackbar",{attrs:{timeout:-1},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" This site uses cookies to function optimally. "),a("v-btn",{attrs:{dark:"",text:""},on:{click:function(t){return e.acceptCookies()}}},[e._v(" OK ")])],1)],1)},r=[],i={name:"App",data:function(){return{snackbar:!0}},methods:{acceptCookies:function(){this.snackbar=!1,window.localStorage.setItem("acceptCookies","false")}},created:function(){window.localStorage.acceptCookies&&"false"===window.localStorage.acceptCookies&&(this.snackbar=!1)}},s=i,c=a("2877"),l=a("6544"),u=a.n(l),d=a("7496"),p=a("8336"),m=a("f6c4"),v=a("2db4"),f=Object(c["a"])(s,n,r,!1,null,null,null),h=f.exports;u()(f,{VApp:d["a"],VBtn:p["a"],VMain:m["a"],VSnackbar:v["a"]});a("d3b7");var g=a("8c4f"),y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-toolbar",{staticClass:"primary",attrs:{flat:"",dense:"",dark:""}},[a("router-link",{attrs:{to:"/"}},[a("v-toolbar-title",{staticClass:"white--text"},[e._v(" AIDA ")])],1),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{icon:"",to:"/dashboard"}},[a("v-icon",[e._v(" mdi-apps ")])],1),a("v-btn",{attrs:{icon:"",href:"https://github.com/alanaberdeen/AIDA/wiki"}},[a("v-icon",[e._v(" mdi-book-open-outline ")])],1)],1)],1),a("v-container",[a("v-layout",{attrs:{"justify-center":"","pb-3":""}},[a("h1",{staticClass:"display-4 primary--text"},[e._v(" AIDA ")])]),a("v-layout",{attrs:{"justify-center":"","pb-5":""}},[a("h2",{staticClass:"display-1"},[e._v(" Annotate Image Data by Asssigment ")])]),a("v-layout",{attrs:{"justify-center":"",row:"",wrap:"","pb-10":""}},[a("v-flex",{attrs:{xs8:"",sm3:"",md2:"","my-1":"","mx-2":""}},[a("v-btn",{attrs:{dark:"",block:"",to:"/demo"}},[a("v-icon",{attrs:{left:""}},[e._v(" mdi-play ")]),e._v(" try it out ")],1)],1),a("v-flex",{attrs:{xs8:"",sm3:"","my-1":"",md2:""}},[a("v-btn",{attrs:{block:"",href:"https://github.com/alanaberdeen/AIDA"}},[a("v-icon",{attrs:{left:""}},[e._v(" mdi-github ")]),e._v(" Github ")],1)],1),a("v-flex",{attrs:{xs8:"",sm3:"",md2:"","my-1":"","mx-2":""}},[a("v-btn",{attrs:{block:"",href:"https://github.com/alanaberdeen/AIDA/wiki"}},[a("v-icon",{attrs:{left:""}},[e._v(" mdi-book-open-outline ")]),e._v(" Docs ")],1)],1)],1),a("v-layout",{attrs:{"mb-4":""}},[a("v-flex",{attrs:{md8:"","offset-md2":"",sm10:"","offset-sm1":"",xs12:""}},[a("h3",{staticClass:"primary--text title"},[e._v(" The Basic Idea ")]),a("v-divider",{staticClass:"my-1"}),a("p",[e._v(" AIDA brings an open source web-based work-flow to image annotation. ")]),a("p",[e._v(" Currently, in the biomedical imaging space, image annotation is largely confined to shrink-wrapped software on a single computer with limited interactive capabilities and few, usually closed, data formats. ")]),a("p",[e._v(" AIDA is a web interface that enables distributed teams of researchers to directly annotate images with easy to use on screen drawing tools. AIDA supports the creation of well defined annotation trials which include a series of high resolution images and a specific set of annotation tasks. ")]),a("p",[e._v(" For documentation and further information see the "),a("a",{attrs:{href:"https://github.com/alanaberdeen/AIDA/wiki"}},[e._v("Wiki")]),e._v(". ")])],1)],1),a("v-layout",{attrs:{"mb-4":""}},[a("v-flex",{attrs:{md8:"","offset-md2":"",sm10:"","offset-sm1":"",xs12:""}},[a("h3",{staticClass:"primary--text title"},[e._v(" How has it been implemented? ")]),a("v-divider",{staticClass:"my-1"}),a("p",[e._v(" The user interface is a "),a("a",{attrs:{href:"https://vuejs.org/"}},[e._v("VueJS")]),e._v(" Single Page Application, encapsulating and interacting with two other significant JavaScript libraries: "),a("a",{attrs:{href:"https://openseadragon.github.io/"}},[e._v("OpenSeaDragon")]),e._v(" to manipulate the high-res images and "),a("a",{attrs:{href:"http://paperjs.org/"}},[e._v("PaperJS")]),e._v(" to provide the drawing functionality. "),a("a",{attrs:{href:"http://vuetifyjs.com/"}},[e._v("VuetifyJS")]),e._v(" is used as a UI component library which implements the material design language. ")])],1)],1),a("v-layout",{attrs:{"my-4":""}},[a("v-flex",{attrs:{md8:"","offset-md2":"",sm10:"","offset-sm1":"",xs12:""}},[a("h3",{staticClass:"primary--text title"},[e._v(" What's planned? ")]),a("v-divider",{staticClass:"my-1"}),a("p",[e._v(" The software is published as Open Source under the permissive "),a("a",{attrs:{href:"https://github.com/alanaberdeen/AIDA/blob/master/LICENSE"}},[e._v("MIT license")]),e._v(". ")]),a("p",[e._v(" The next stage of development will be to integrate intelligent tools that leverage the power of machine learning techniques. We hope to enhance the ability of the user to quickly and accurately mark up images through predictive assistance. ")])],1)],1),a("v-layout",{attrs:{"my-4":""}},[a("v-flex",{attrs:{md8:"","offset-md2":"",sm10:"","offset-sm1":"",xs12:""}},[a("h3",{staticClass:"primary--text title"},[e._v(" About ")]),a("v-divider",{staticClass:"my-1"}),a("p",[e._v(" This is a project of "),a("a",{attrs:{href:"https://alanaberdeen.com"}},[e._v("Alan Aberdeen")]),e._v(", Jens Rittscher, and Nasullah Khalid at the University of Oxford, specifically the "),a("a",{attrs:{href:"https://www.ludwig.ox.ac.uk/jens-rittscher-group-page"}},[e._v("Quantitative Biological Imaging Group")]),e._v(". ")])],1)],1)],1)],1)},w=[],b=(a("8b62"),a("a523")),x=a("ce7e"),S=a("0e8f"),I=a("132d"),k=a("a722"),j=a("2fa4"),A=a("71d9"),D=a("2a7f"),O={},C=Object(c["a"])(O,y,w,!1,null,"028d4750",null),P=C.exports;u()(C,{VBtn:p["a"],VContainer:b["a"],VDivider:x["a"],VFlex:S["a"],VIcon:I["a"],VLayout:k["a"],VSpacer:j["a"],VToolbar:A["a"],VToolbarItems:D["a"],VToolbarTitle:D["b"]}),o["a"].use(g["a"]);var L=new g["a"]({mode:"history",base:"/",routes:[{path:"/",name:"landing",component:P},{path:"/dashboard",name:"dashboard",component:function(){return Promise.all([a.e("Dashboard~Demo~Editor"),a.e("Dashboard")]).then(a.bind(null,"7277"))}},{path:"/edit",name:"edit",component:function(){return Promise.all([a.e("Dashboard~Demo~Editor"),a.e("Editor")]).then(a.bind(null,"49d7"))}},{path:"/loading/:filePath",name:"loading",component:function(){return a.e("Loading").then(a.bind(null,"45d6"))}},{path:"/demo",name:"demo",component:function(){return Promise.all([a.e("Dashboard~Demo~Editor"),a.e("Editor"),a.e("Demo")]).then(a.bind(null,"680c"))}}]}),T=a("2f62"),E=(a("99af"),a("7db0"),a("4160"),a("caad"),a("fb6a"),a("0d03"),a("b0c0"),a("a9e3"),a("ac1f"),a("8a79"),a("2532"),a("1276"),a("159b"),a("96cf"),a("1da1")),_=a("c51a"),N=a.n(_),F=a("df7c"),z=a.n(F),R={loadProject:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var a,o,n,r,i,s,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.state,o=t.dispatch,e.next=3,o("image/clearImages",null,{root:!0});case 3:return e.next=5,o("app/synchroniseAnnotationAndOSDCanvas",null,{root:!0});case 5:if(a.projectFilePath.endsWith(".json")){e.next=9;break}return o("getDefaultImageAnnotation"),o("getProjectImage"),e.abrupt("return");case 9:return e.prev=9,n="".concat(location.origin,"/data/").concat(a.projectFilePath),e.next=13,fetch(n);case 13:return r=e.sent,e.next=16,r.json();case 16:if(i=e.sent,e.prev=17,!Object.prototype.hasOwnProperty.call(i,"annotation")){e.next=28;break}return s=i.annotation,o("setAnnotationFilePath",s),e.next=23,fetch("".concat(location.origin,"/data/annotations/").concat(s));case 23:return c=e.sent,e.next=26,c.json();case 26:l=e.sent,o("annotation/loadAnnotation",l,{root:!0});case 28:e.next=33;break;case 30:e.prev=30,e.t0=e["catch"](17),o("getDefaultImageAnnotation");case 33:try{u=[".tif",".tiff",".czi",".dcm",".dicom",".ndpi",".qptiff",".scn",".svs",".vsi",".jp2",".j2k"],Object.prototype.hasOwnProperty.call(i,"images")&&i.images.forEach((function(e){var t=z.a.extname(e.path);u.includes(t)?o("image/addOSDImage",{name:e.name,fileType:"iiif",source:e.path,function:"project",opacity:1},{root:!0}):o("image/addOSDImage",".dzi"===t?{name:e.name,fileType:"dzi",source:"".concat(location.origin,"/data/images/").concat(e.path),function:"project",opacity:1}:{name:e.name,fileType:"simple",source:"".concat(location.origin,"/data/images/").concat(e.path),function:"project",opacity:1},{root:!0})})),Object.prototype.hasOwnProperty.call(i,"editor")&&o("app/loadEditorConfig",i.editor,{root:!0})}catch(d){o("getProjectImage")}e.next=40;break;case 36:e.prev=36,e.t1=e["catch"](9),o("getDefaultImageAnnotation"),o("getProjectImage");case 40:case"end":return e.stop()}}),e,null,[[9,36],[17,30]])})));function t(t){return e.apply(this,arguments)}return t}(),setAnnotationFilePath:function(e,t){var a=e.commit;a("setAnnotationFilePath",t)},saveProject:function(e){return Object(E["a"])(regeneratorRuntime.mark((function t(){var a,o,n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.dispatch,o=e.state,n=e.rootState,t.prev=1,t.next=4,a("annotation/refreshAnnotationState",null,{root:!0});case 4:return r="".concat(location.origin,"/save"),t.next=7,fetch(r,{method:"POST",body:JSON.stringify({editor:{activeImageIndex:n.image.activeImageIndex,activeStep:n.app.activeStep,activeLayerIndex:n.app.activeLayerIndex,type:n.app.type,steps:n.app.steps},annotation:{data:n.annotation.project,filePath:o.annotationFilePath},images:n.image.images})});case 7:if(i=t.sent,200!==i.status){t.next=13;break}a("app/activateSnackbar",{text:"Saved annotation data",color:"success"},{root:!0}),a("annotation/setSaveState",{changesSaved:!0,lastSaveTimeStamp:new Date},{root:!0}),t.next=14;break;case 13:throw i.statusText;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](1);try{window.localStorage.setItem("annotation",JSON.stringify(n.annotation.project)),a("app/activateSnackbar",{text:"Could not reach server, data saved in browser",color:"warning"},{root:!0}),a("annotation/setSaveState",{changesSaved:!0,lastSaveTimeStamp:new Date},{root:!0})}catch(s){a("app/activateSnackbar",{text:"Annotation data could not be saved",color:"error"},{root:!0})}case 19:case"end":return t.stop()}}),t,null,[[1,16]])})))()},getDefaultImageAnnotation:function(e){return Object(E["a"])(regeneratorRuntime.mark((function t(){var a,o,n,r,i,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.state,o=e.dispatch,n=z.a.extname(a.projectFilePath),r=a.projectFilePath.split(n)[0].split("images/")[1],i="".concat(location.origin,"/data/annotations/").concat(r,".json"),t.prev=4,t.next=7,fetch(i);case 7:return s=t.sent,t.next=10,s.json();case 10:c=t.sent,o("annotation/loadAnnotation",c,{root:!0}),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](4),o("annotation/loadAnnotation",null,{root:!0});case 17:case"end":return t.stop()}}),t,null,[[4,14]])})))()},setProjectFilePath:function(e,t){var a=e.commit;a("setProjectFilePath",t)},getProjectImage:function(e){return Object(E["a"])(regeneratorRuntime.mark((function t(){var a,o,n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.state,o=e.rootState,n=e.dispatch,t.next=3,n("image/clearImages",null,{root:!0});case 3:r=[".tif",".tiff",".czi",".dcm",".dicom",".ndpi",".qptiff",".scn",".svs",".vsi",".jp2",".j2k"],i=z.a.extname(a.projectFilePath),r.includes(i)?n("image/addOSDImage",{name:o.image.projectImageName,fileType:"iiif",source:a.projectFilePath,function:"project",opacity:1},{root:!0}):a.projectFilePath.endsWith(".dzi")?n("image/addOSDImage",{name:o.image.projectImageName,fileType:"dzi",source:"".concat(location.origin,"/data/").concat(a.projectFilePath),function:"project",opacity:1},{root:!0}):n("image/addOSDImage",{name:o.image.projectImageName,fileType:"simple",source:"".concat(location.origin,"/data/").concat(a.projectFilePath),function:"project",opacity:1},{root:!0});case 6:case"end":return t.stop()}}),t)})))()},getProjectImageProperties:function(e){return Object(E["a"])(regeneratorRuntime.mark((function t(){var a,o,n,r,i,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.state,o=e.dispatch,n="".concat(location.origin,"/data/").concat(a.projectFilePath.slice(0,-4),"_files/vips-properties.xml"),t.next=4,fetch(n);case 4:return r=t.sent,t.t0=JSON,t.t1=N.a,t.next=9,r.text();case 9:t.t2=t.sent,t.t3={ignoreDeclaration:!0,compact:!0,ignoreComment:!0,alwaysChildren:!0,attributesKey:"attributes",textKey:"text"},t.t4=t.t1.xml2json.call(t.t1,t.t2,t.t3),i=t.t0.parse.call(t.t0,t.t4),s=Number(i.image.properties.property.find((function(e){return"openslide.mpp-x"===e.name.text})).value.text),c=Number(i.image.properties.property.find((function(e){return"openslide.mpp-y"===e.name.text})).value.text),o("image/setPixelScaleFactor",{mppX:s,mppY:c},{root:!0});case 16:case"end":return t.stop()}}),t)})))()}},V={setAvailableImages:function(e,t){e.availableImages=t},setProjectFilePath:function(e,t){e.projectFilePath=t},setAnnotationFilePath:function(e,t){e.annotationFilePath=t}},M={availableImages:[],projectFilePath:"",annotationFilePath:""},B={namespaced:!0,state:M,actions:R,mutations:V},U={loadEditorConfig:function(e,t){var a=e.dispatch;Object.prototype.hasOwnProperty.call(t,"activeLayerIndex")&&a("setActiveLayerIndex",t.activeLayerIndex),Object.prototype.hasOwnProperty.call(t,"activeImageIndex")&&a("image/setActiveImageIndex",t.activeImageIndex,{root:!0}),Object.prototype.hasOwnProperty.call(t,"steps")&&a("setSteps",t.steps),Object.prototype.hasOwnProperty.call(t,"activeStep")&&a("setActiveStep",t.steps[t.activeStep])},setSteps:function(e,t){var a=e.commit;a("setSteps",t)},setTask:function(e,t){var a=e.commit;a("setTask",t)},dismissSnackbar:function(e){var t=e.commit;t("dismissSnackbar")},activateSnackbar:function(e,t){var a=e.commit;a("activateSnackbar",t)},synchroniseAnnotationAndOSDCanvas:function(e){var t=e.commit,a=e.rootState;t("synchroniseAnnotationAndOSDCanvas",a.image.OSDviewer)},setActiveStepAndLayer:function(e,t){var a=e.dispatch;a("setActiveLayerIndex",t),a("setActiveStep",t)},setActiveStep:function(e,t){var a=e.commit,o=e.dispatch;"number"===typeof t.specificLayer&&o("annotation/setActiveLayerIndex",t.specificLayer,{root:!0}),a("setActiveStep",t.id-1)},setActiveLayerIndex:function(e,t){var a=e.commit;a("setActiveLayerIndex",t)},toggleSettings:function(e){var t=e.commit;t("toggleSettings")},setActiveValidationIndex:function(e,t){var a=e.commit;a("setActiveValidationIndex",t)},setupForValidation:function(e){var t=e.commit;t("setupForValidation")},loadDemo:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.dispatch,e.next=3,a("synchroniseAnnotationAndOSDCanvas");case 3:if(o=window.localStorage.annotation,!o){e.next=9;break}return e.next=7,a("annotation/loadAnnotation",JSON.parse(o),{root:!0});case 7:e.next=10;break;case 9:a("annotation/loadAnnotation",null,{root:!0});case 10:return e.next=12,a("image/clearImages",null,{root:!0});case 12:return e.next=14,a("image/addOSDImage",{name:"Example image",fileType:"dzi",source:"https://s3-eu-west-1.amazonaws.com/aida-example/SampleKi67.dzi",function:"project",opacity:1},{root:!0});case 14:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),toggleToolsDrawer:function(e){var t=e.commit;t("toggleToolsDrawer")},setToolsDrawerState:function(e,t){var a=e.commit;a("setToolsDrawerState",t)},toggleStudioDrawer:function(e){var t=e.commit;t("toggleStudioDrawer")},setStudioDrawerState:function(e,t){var a=e.commit;a("setStudioDrawerState",t)},createNewItem:function(e,t){var a=e.state,o=e.rootState,n=e.commit;t.studyName=a.studyName,t.imageName=o.image.projectImageName,n("createNewItem",t)}},K=(a("841c"),a("2222")),Z=a.n(K),J={setTask:function(e,t){e.task=t},activateSnackbar:function(e,t){e.snackbar.active=!0,e.snackbar.text=t.text?t.text:"notification",e.snackbar.color=t.color?t.color:"info",e.snackbar.timeout=t.timeout?t.timeout:4e3},dismissSnackbar:function(e){e.snackbar.active=!1},synchroniseAnnotationAndOSDCanvas:function(e,t){t.addHandler("animation",(function(){Z.a.view.autoUpdate=!1,Z.a.project.layers.forEach((function(e){e.getItems().forEach((function(e){e.visible=!1}))}));var e=t.world.getItemAt(0),a=e.viewportToImageCoordinates(t.viewport.getCenter(!0)),o=t.viewport.getZoom(!0);Z.a.view.zoom=e.viewportToImageZoom(o),Z.a.view.center=new Z.a.Point(a.x,a.y);var n=Z.a.view.bounds;Z.a.view.itemsTree.search({minX:n.x,minY:n.y,maxX:n.x+n.width,maxY:n.y+n.height}).forEach((function(e){e.item.visible=!0})),Z.a.view.autoUpdate=!0,Z.a.view.update()})),t.addHandler("resize",(function(a){Z.a.view.autoUpdate=!1,Z.a.project.layers.forEach((function(e){e.getItems().forEach((function(e){e.visible=!1}))}));var o=t.world.getItemAt(0);Z.a.view.viewSize.width=a.newContainerSize.x,Z.a.view.viewSize.height=a.newContainerSize.y;var n=t.viewport.getZoom(!0);Z.a.view.zoom=o.viewportToImageZoom(n);var r=o.viewportToImageCoordinates(t.viewport.getCenter(!0));Z.a.view.center=new Z.a.Point(r.x,r.y);var i=Z.a.view.bounds;Z.a.view.itemsTree.search({minX:i.x,minY:i.y,maxX:i.x+i.width,maxY:i.y+i.height}).forEach((function(e){e.item.visible=!0}));var s=Math.ceil(Z.a.view.viewSize.width*e.strokeScale/(1e3*t.viewport.getMaxZoom()));Z.a.project.getItems().forEach((function(e){e.strokeWidth=s,Object.prototype.hasOwnProperty.call(e,"drawLabel")&&e.drawLabel()})),Z.a.view.autoUpdate=!0,Z.a.view.update()})),t.world.addHandler("add-item",(function(a){Z.a.view.autoUpdate=!1;var o=t.world.getItemAt(0),n=document.getElementById("view");Z.a.view.viewSize.width=n.offsetWidth,Z.a.view.viewSize.height=n.offsetHeight;var r=t.viewport.getZoom(!0);Z.a.view.zoom=o.viewportToImageZoom(r);var i=o.viewportToImageCoordinates(t.viewport.getCenter(!0));Z.a.view.center=new Z.a.Point(i.x,i.y);var s=Math.ceil(Z.a.view.viewSize.width*e.strokeScale/(1e3*t.viewport.getMaxZoom()));Z.a.project.getItems().forEach((function(e){e.strokeWidth=s,Object.prototype.hasOwnProperty.call(e,"drawLabel")&&e.drawLabel()})),Z.a.view.autoUpdate=!0,Z.a.view.update()}))},setActiveStep:function(e,t){e.activeStep=t},setActiveLayerIndex:function(e,t){e.activeLayerIndex=t},toggleSettings:function(e){e.settingsFlag=!e.settingsFlag},setActiveValidationIndex:function(e,t){e.activeValidationIndex=t},setSteps:function(e,t){t?e.steps=t:(e.toolsDrawer=!1,e.studioDrawer=!1,"review"===e.task?e.steps=[{id:1,instruction:"Review the data",type:"review"}]:"validate"===e.task?e.steps=[{id:1,instruction:"Cycle through each of the predicted Megakaryocyte classifications and verify whether the prediction is correct or incorrect. In cases where you are not certain, flag the prediction for review.",type:"validate"}]:(e.toolsDrawer=!0,e.studioDrawer=!0,e.steps=null))},toggleToolsDrawer:function(e){e.toolsDrawer=!e.toolsDrawer},toggleStudioDrawer:function(e){e.studioDrawer=!e.studioDrawer},setToolsDrawerState:function(e,t){e.toolsDrawer=t},setStudioDrawerState:function(e,t){e.studioDrawer=t}},X={getStepTools:function(e){return e.steps&&e.steps[e.activeStep].tools?e.steps[e.activeStep].tools:["pan","circle","rectangle","path","pencil","polygon","paint","paste","edit","move","node","count","delete","megas","filter","super-pixel","ruler","reshape"]}},Y={task:"",toolsDrawer:!0,studioDrawer:!0,snackbar:{active:!1,text:"this is a notification",color:"info",timeout:4e3},type:"dzi",activeImageIndex:0,activeLayerIndex:0,activeStep:0,steps:null,settingsFlag:!1,activeValidationIndex:0,strokeScale:5},W={namespaced:!0,state:Y,actions:U,mutations:J,getters:X},H=(a("4de4"),a("d81d"),{getMaxZoom:function(e){return e.OSDviewer?Math.round(e.OSDviewer.viewport.getMaxZoom()):10},getZoom:function(e){if(e.OSDviewer){var t=e.OSDviewer.viewport.getZoom();return t<100?Math.round(10*t)/10:Math.round(t)}return"na"},getImageWidth:function(e){if(e.OSDviewer)return e.OSDviewer.world.getItemCount()>0?e.OSDviewer.world.getItemAt(0).getContentSize.x:0},getImages:function(e){var t=e.images.filter((function(e){return"overlay"!==e["function"]}));return e.OSDviewer&&e.OSDviewer.world.getItemCount()>0&&t.length>0?t.map((function(t){var a=e.OSDviewer.world.getItemAt(t.index);if(a)return{image:a,id:t.index,opacity:a.getOpacity(),name:t.name,visible:a.getOpacity()>0,opacityCache:0}})):[]}}),q=(a("25f0"),a("3ca3"),a("ddb0"),a("2b3d"),{addOSDImage:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t,a){var o,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=t.commit,"iiif"!==a.fileType){e.next=9;break}return e.next=4,fetch("".concat(location.origin,"/iiif"));case 4:return n=e.sent,e.next=7,n.text();case 7:r=e.sent,a.source=new URL("".concat(encodeURIComponent(a.source),"/info.json"),r).toString();case 9:o("addOSDImage",a);case 10:case"end":return e.stop()}}),e)})));function t(t,a){return e.apply(this,arguments)}return t}(),clearImages:function(e){var t=e.commit;t("clearImages")},setProjectImageName:function(e,t){var a=e.commit;a("setProjectImageName",t)},setupOsdCanvas:function(e,t){var a=e.commit;a("setupOsdCanvas",t)},resetImageState:function(e){var t=e.commit,a=e.rootState;t("resetImageState",a)},setActiveImageIndex:function(e,t){var a=e.commit;a("setActiveImageIndex",t)},setActiveImageOpacity:function(e,t){var a=e.commit;a("setActiveImageOpacity",t)},setActiveImageName:function(e,t){var a=e.commit;a("setActiveImageName",t)},setZoom:function(e,t){var a=e.state,o=t instanceof KeyboardEvent?Number(t.target.value):Number(t);o>0&&a.OSDviewer.viewport.zoomTo(o)},setPixelScaleFactor:function(e,t){var a=e.commit;a("setPixelScaleFactor",t)}}),G=(a("c740"),a("5530")),$=a("aa78"),Q=a.n($),ee={setProjectImageName:function(e,t){e.projectImageName=t},resetImageState:function(e){e.OSDviewer.navigator.destroy(),e.OSDviewer.destroy(),e={OSDviewer:null,OSDworld:null,activeImageIndex:0,view:{viewSize:[null,null],imageSize:[null,null],imageCenter:[null,null],imageZoom:null},image:"",imageAccessToken:""}},setupOsdCanvas:function(e,t){e.OSDviewer=new Q.a.Viewer({id:t,showNavigationControl:!1,showNavigator:!0,navigatorId:"navigator",navigatorAutoResize:!1}),e.OSDviewer.addHandler("canvas-key",(function(e){"KeyR"!==e.originalEvent.code&&"KeyF"!==e.originalEvent.code||(e.preventDefaultAction=!0)}))},setActiveImageIndex:function(e,t){"number"===typeof t?e.activeImageIndex=t:"string"===typeof t&&(e.activeImageIndex=e.images.findIndex((function(e){return e.name===t})))},setActiveImageName:function(e,t){t instanceof KeyboardEvent?o["a"].set(e.images[e.activeImageIndex],"name",t.target.value):o["a"].set(e.images[e.activeImageIndex],"name",t)},setActiveImageOpacity:function(e,t){var a=t instanceof KeyboardEvent?t.target.value/100:t/100;a=Math.min(Math.max(a,0),1);var n=e.OSDviewer.world.getItemAt(e.activeImageIndex);n&&n.setOpacity(a),o["a"].set(e.images[e.activeImageIndex],"opacity",a)},addOSDImage:function(e,t){"iiif"===t.fileType||"dzi"===t.fileType?e.OSDviewer.addTiledImage({tileSource:t.source,opacity:t.opacity}):"simple"===t.fileType&&e.OSDviewer.addSimpleImage({url:t.source,opacity:t.opacity}),e.images.push(Object(G["a"])(Object(G["a"])({},t),{},{index:e.OSDviewer.world.getItemCount()}))},clearImages:function(e){e.images=[]},setPixelScaleFactor:function(e,t){e.pixelScaleFactor.mppX=t.mppX,e.pixelScaleFactor.mppY=t.mppY}},te={OSDviewer:null,OSDworld:null,activeImageIndex:0,projectImageName:"",images:[],pixelScaleFactor:{mppX:null,mppY:null}},ae={namespaced:!0,state:te,getters:H,actions:q,mutations:ee},oe=a("b85c"),ne=(a("cb29"),{defaultColors:function(){return[{fill:{hue:170,saturation:.44,lightness:.69,alpha:.7},stroke:{hue:170,saturation:.44,lightness:.69,alpha:1}},{fill:{hue:60,saturation:1,lightness:.85,alpha:.7},stroke:{hue:60,saturation:1,lightness:.85,alpha:1}},{fill:{hue:248,saturation:.3,lightness:.79,alpha:.7},stroke:{hue:248,saturation:.3,lightness:.79,alpha:1}},{fill:{hue:6,saturation:.94,lightness:.72,alpha:.7},stroke:{hue:6,saturation:.94,lightness:.72,alpha:1}},{fill:{hue:205,saturation:.49,lightness:.66,alpha:.7},stroke:{hue:205,saturation:.49,lightness:.66,alpha:1}},{fill:{hue:32,saturation:.97,lightness:.69,alpha:.7},stroke:{hue:32,saturation:.97,lightness:.69,alpha:1}},{fill:{hue:82,saturation:.64,lightness:.64,alpha:.7},stroke:{hue:82,saturation:.64,lightness:.64,alpha:1}},{fill:{hue:329,saturation:.89,lightness:.9,alpha:.7},stroke:{hue:329,saturation:.89,lightness:.9,alpha:1}},{fill:{hue:0,saturation:0,lightness:.85,alpha:.7},stroke:{hue:0,saturation:0,lightness:.85,alpha:1}},{fill:{hue:299,saturation:.32,lightness:.62,alpha:.7},stroke:{hue:299,saturation:.32,lightness:.62,alpha:1}}]},drawItem:function(e){var t=this;if(e){var a;if("circle"===e.type)a=new Z.a.Shape.Circle({center:e.center,radius:e.radius,data:{type:"circle",countable:!0,class:e["class"],data:e.data},locked:e.locked}),this.drawItemColor(a,e);else if("rectangle"===e.type)a=new Z.a.Shape.Rectangle({point:[e.x,e.y],size:[e.width,e.height],data:{type:"rectangle",class:e["class"],data:e.data},locked:e.locked}),this.drawItemColor(a,e);else if("path"===e.type)a=new Z.a.Path({segments:e.segments,closed:!!e.closed&&e.closed,data:{type:"path",class:e["class"],data:e.data},locked:e.locked}),this.drawItemColor(a,e);else if("cpath"===e.type){var o=[];e.children.forEach((function(e){var a=t.drawItem(e),n=a.toPath();a.remove(),o.push(n)})),a=new Z.a.CompoundPath({children:o,fillRule:"evenodd",data:{type:"cpath",class:e["class"],data:e.data},locked:e.locked}),this.drawItemColor(a,e)}else if("raster"===e.type){var n=Object.prototype.hasOwnProperty.call(e,"position")?new Z.a.Point(e.position.x,e.position.y):new Z.a.Point(0,0);a=new Z.a.Raster({crossOrigin:"anonymous",source:e.source,position:n,data:{type:"raster",countable:!1,class:e["class"],data:e.data},locked:e.locked})}return a.strokeScaling=!1,a}},getItemState:function(e){var t=this;if("circle"===e.data.type)return{class:e.data["class"],type:"circle",color:this.getColor(e),center:{x:e.position.x,y:e.position.y},radius:e.bounds.width/2,locked:e.locked,data:e.data.data};if("rectangle"===e.data.type)return Object(G["a"])(Object(G["a"])({},e.data),{},{color:this.getColor(e),x:e.bounds.x,y:e.bounds.y,width:e.bounds.width,height:e.bounds.height,locked:e.locked});if("path"===e.data.type)return{class:e.data["class"],type:"path",color:this.getColor(e),segments:this.getSegments(e),closed:e.closed,locked:e.locked,data:e.data.data};if("cpath"===e.data.type){var a=[];return e.children.forEach((function(e){a.push(t.getItemState(e))})),{class:e.data["class"],type:"cpath",color:this.getColor(e),children:a,locked:e.locked,data:e.data.data}}if("imageEdit"===e.data.type){var o=e.rasterize(),n=o.toDataURL();return{class:e.data["class"],type:"raster",source:n,position:{x:e.position.x,y:e.position.y},data:e.data.data}}if("raster"===e.data.type){var r=e.layer.getItems({match:function(e){return e.locked},overlapping:e.bounds});r.unshift(e);var i=new Z.a.Group(r);i.sendToBack();var s=i.rasterize(e.resolution.height,!1),c=s.toDataURL();return{class:e.data["class"],type:"raster",source:c,position:{x:e.position.x,y:e.position.y},data:e.data.data}}},getSegments:function(e){for(var t=[],a=0,o=e.segments.length;a<o;a++){var n=e.segments[a];n.hasHandles()?t.push([[n.point.x,n.point.y],[n.handleIn.x,n.handleIn.y],[n.handleOut.x,n.handleOut.y]]):t.push([n.point.x,n.point.y])}return t},getColor:function(e){return{fill:e.fillColor?{hue:e.fillColor.hue,saturation:e.fillColor.saturation,lightness:e.fillColor.lightness,alpha:e.fillColor.alpha}:null,stroke:e.strokeColor?{hue:e.strokeColor.hue,saturation:e.strokeColor.saturation,lightness:e.strokeColor.lightness,alpha:e.strokeColor.alpha}:null}},drawItemColor:function(e,t){var a=this.defaultColors();(e.closed||"Shape"===e.className)&&t.color&&t.color.fill&&("string"===typeof t.color.fill?(e.fillColor=t.color.fill,e.fillColor.alpha=.2):e.fillColor=new Z.a.Color({hue:t.color.fill.hue,saturation:t.color.fill.saturation,lightness:t.color.fill.lightness,alpha:t.color.fill.alpha})),t.color&&t.color.stroke?"string"===typeof t.color.stroke?e.strokeColor=t.color.stroke:e.strokeColor=new Z.a.Color({hue:t.color.stroke.hue,saturation:t.color.stroke.saturation,lightness:t.color.stroke.lightness,alpha:t.color.stroke.alpha}):e.strokeColor=a[e.layer.index%a.length].stroke}}),re={loadAnnotation:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t,a){var o,n,r,i,s,c,l,u,d,p,m,v;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=t.dispatch,n=t.commit,Z.a.view.autoUpdate=!1,n("resetProjectState"),!a){e.next=58;break}r=[],i=Object(oe["a"])(a.layers),e.prev=6,i.s();case 8:if((s=i.n()).done){e.next=46;break}return c=s.value,e.next=12,o("createLayer");case 12:return e.next=14,o("setActiveLayerName",c.name);case 14:return e.next=16,o("setActiveLayerType",c.type);case 16:l=Object(oe["a"])(c.items),e.prev=17,l.s();case 19:if((u=l.n()).done){e.next=35;break}if(d=u.value,"overlay"!==d.type){e.next=29;break}return e.next=24,o("image/addOSDImage",{function:"overlay",fileType:d.fileType,source:d.source,name:c.name,opacity:c.opacity},{root:!0});case 24:return e.next=26,o("image/setActiveImageIndex",c.name,{root:!0});case 26:n("addItemToActiveLayer",d),e.next=33;break;case 29:p=ne.drawItem(d),m=p.bounds,v={minX:m.x,minY:m.y,maxX:m.x+m.width,maxY:m.y+m.height,item:p},r.push(v);case 33:e.next=19;break;case 35:e.next=40;break;case 37:e.prev=37,e.t0=e["catch"](17),l.e(e.t0);case 40:return e.prev=40,l.f(),e.finish(40);case 43:o("setActiveLayerOpacity",100*c.opacity);case 44:e.next=8;break;case 46:e.next=51;break;case 48:e.prev=48,e.t1=e["catch"](6),i.e(e.t1);case 51:return e.prev=51,i.f(),e.finish(51);case 54:Z.a.view.itemsTree.load(r),a.activeLayerIndex&&o("setActiveLayerIndex",a.activeLayerIndex),e.next=62;break;case 58:return e.next=60,o("createLayer");case 60:o("setActiveLayerName","Layer 1"),o("setActiveLayerType","paths");case 62:Z.a.view.autoUpdate=!0,Z.a.view.update();case 64:case"end":return e.stop()}}),e,null,[[6,48,51,54],[17,37,40,43]])})));function t(t,a){return e.apply(this,arguments)}return t}(),resetAnnotationState:function(e){var t=e.commit;t("resetAnnotationState")},refreshAnnotationState:function(e,t){var a=e.commit;a("refreshAnnotationState",t)},prepareCanvas:function(e){var t=e.rootState;Z.a.view.element.style.pointerEvents="auto",t.app.activeLayerIndex&&Z.a.project.layers[t.app.activeLayerIndex].activate()},createLayer:function(e){var t=e.commit;t("createLayer")},setActiveLayerIndex:function(e,t){var a=e.state,o=e.dispatch;if(Z.a.project.layers[t].activate(),o("app/setActiveLayerIndex",t,{root:!0}),"overlay"===a.project.layers[t].type){var n=a.project.layers[t].name;o("image/setActiveImageIndex",n,{root:!0})}},setActiveLayerOpacity:function(e,t){var a=e.state,o=e.dispatch,n=e.commit;n("setActiveLayerOpacity",t);var r=Z.a.project.activeLayer.index;"overlay"===a.project.layers[r].type&&o("image/setActiveImageOpacity",t,{root:!0})},setActiveLayerName:function(e,t){var a=e.commit;a("setActiveLayerName",t)},setActiveLayerType:function(e,t){var a=e.commit;a("setActiveLayerType",t)},deleteActiveLayer:function(e){var t=e.commit;t("deleteActiveLayer")},setProjectName:function(e,t){var a=e.commit;a("setProjectName",t)},setSelectedItems:function(e,t){var a=e.commit;a("setSelectedItems",t)},drawBoundingBoxes:function(e,t){var a=e.commit;a("drawBoundingBoxes",t)},setSaveState:function(e,t){var a=e.commit;a("setSaveState",t)},flagAnnotationEdits:function(e){var t=e.commit;t("setSaveState",{changesSaved:!1})}},ie=(a("a434"),{resetProjectState:function(e){o["a"].set(e,"project",{name:"An AIDA project",layers:[]})},addItemToActiveLayer:function(e,t){var a=e.project.layers[Z.a.project.activeLayer.index];a.items.push(t)},refreshAnnotationState:function(e){Z.a.project.layers.forEach((function(t){var a=e.project.layers[t.index];o["a"].set(e.project.layers,t.index,{name:a.name,opacity:t.opacity,type:a.type,items:a.items.filter((function(e){return"overlay"===e.type}))})}));var t,a=Z.a.project.getItems({className:function(e){return"Path"===e||"Shape"===e||"CompoundPath"===e||"Raster"===e},match:function(e){return"CompoundPath"!==e.parent.className}}),n=Object(oe["a"])(a);try{for(n.s();!(t=n.n()).done;){var r=t.value;e.project.layers[r.layer.index].items.push(ne.getItemState(r))}}catch(i){n.e(i)}finally{n.f()}e.projectStateRefreshIndex=e.projectStateRefreshIndex+1},createLayer:function(e){var t=new Z.a.Layer;e.project.layers.push({name:"Layer "+(e.project.layers.length+1),opacity:t.opacity,items:[]})},setActiveLayerOpacity:function(e,t){var a=t instanceof KeyboardEvent?t.target.value/100:t/100;a=Math.min(Math.max(a,0),1),Z.a.project.activeLayer.opacity=a,o["a"].set(e.project.layers[Z.a.project.activeLayer.index],"opacity",a)},setActiveLayerName:function(e,t){var a=t instanceof KeyboardEvent?t.target.value:t;Z.a.project.activeLayer.name=a,o["a"].set(e.project.layers[Z.a.project.activeLayer.index],"name",a)},setActiveLayerType:function(e,t){o["a"].set(e.project.layers[Z.a.project.activeLayer.index],"type",t)},deleteActiveLayer:function(e){e.project.layers.splice(Z.a.project.activeLayer.index,1),Z.a.project.activeLayer.remove()},setProjectName:function(e,t){t instanceof KeyboardEvent?e.project.name=t.target.value:e.project.name=t},setSelectedItems:function(e,t){e.selectedItems=t},drawBoundingBoxes:function(e,t){var a=new Z.a.Layer({name:"Validate"});a.opacity=1,t.forEach((function(t){var a=new Z.a.Path.Rectangle({point:[t.boundingBox.x,t.boundingBox.y],size:[t.boundingBox.width,t.boundingBox.height],data:{name:t.name,type:"rectangle",predictionClass:t["class"].predictionClass,predictionScore:t["class"].predictionScore,validationClass:t["class"].validationClass,validationScore:t["class"].validationScore}});a.strokeColor=e.defaultColors[a.layer.index%e.defaultColors.length].stroke}))},setSaveState:function(e,t){e.saveState.changesSaved=t.changesSaved,t.lastSaveTimeStamp&&(e.saveState.lastSaveTimeStamp=t.lastSaveTimeStamp)}}),se={getColor:function(e,t,a){var o=a.app.activeLayerIndex;return e.defaultColors[o%e.defaultColors.length]},getItemsForValidation:function(e){var t=e.project.layers.filter((function(e){return"Validate"===e.name}));return t.length>0?t[0].items:[]}},ce={project:{name:"An AIDA project",layers:[]},projectStateRefreshIndex:0,selectedItems:[],currentColor:null,defaultColors:ne.defaultColors(),saveState:{changesSaved:!0,lastSaveTimeStamp:null}},le={namespaced:!0,state:ce,getters:se,actions:re,mutations:ie};o["a"].use(T["a"]);var ue=new T["a"].Store({modules:{backend:B,app:W,image:ae,annotation:le}}),de=a("f309");o["a"].use(de["a"]);var pe=new de["a"]({icons:{iconfont:"mdi"}});o["a"].config.productionTip=!1,new o["a"]({router:L,store:ue,vuetify:pe,render:function(e){return e(h)}}).$mount("#app")}});
//# sourceMappingURL=app.81bfa2af.js.map