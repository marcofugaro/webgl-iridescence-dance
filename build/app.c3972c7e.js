!function(e){function t(t){for(var n,a,l=t[0],c=t[1],s=t[2],f=0,p=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(t);p.length;)p.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,l=1;l<r.length;l++){var c=r[l];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={0:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;i.push([216,1]),r()}({199:function(e,t){},216:function(e,t,r){"use strict";r.r(t);r(77),r(42),r(87),r(88);var n=r(15),o=r.n(n),i=(r(30),r(93),r(65),r(32),r(24),r(100),r(147),r(101),r(46),r(102),r(103),r(34),r(25),r(35),r(70),r(47),r(152),r(0)),a=r(122),l=r.n(a),c=r(123),s=r.n(c),u=r(124),f=r.n(u),p=r(125),h=r.n(p),d=r(126),m=r.n(d),b=r(127),v=r(136),g=r(128);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(r,!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var C=0;function k(e){return"__private_"+C+++"_"+e}var E=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.background,a=void 0===n?"#000":n,c=r.backgroundAlpha,u=void 0===c?1:c,f=r.fov,p=void 0===f?45:f,d=r.near,w=void 0===d?.01:d,O=r.far,x=void 0===O?100:O,C=P(r,["background","backgroundAlpha","fov","near","far"]);if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.defineProperty(this,S,{writable:!0,value:[]}),Object.defineProperty(this,_,{writable:!0,value:new i.Eb}),Object.defineProperty(this,D,{writable:!0,value:void 0}),Object.defineProperty(this,R,{writable:!0,value:void 0}),this.resize=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.width,n=void 0===r?window.innerWidth:r,o=e.height,i=void 0===o?window.innerHeight:o,a=e.pixelRatio,l=void 0===a?Math.min(t.maxPixelRatio,window.devicePixelRatio):a;return t.width=n,t.height=i,t.pixelRatio=l,t.renderer.getPixelRatio()!==l&&t.renderer.setPixelRatio(l),t.renderer.setSize(n,i),t.camera.isPerspectiveCamera&&(t.camera.aspect=n/i),t.camera.updateProjectionMatrix(),t.composer&&t.composer.setSize(l*n,l*i),t.scene.traverse(function(e){"function"==typeof e.resize&&e.resize({width:n,height:i,pixelRatio:l})}),t.draw(),t},this.saveScreenshot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.width,n=void 0===r?2560:r,o=e.height,i=void 0===o?1440:o,a=e.fileName,l=void 0===a?"image.png":a;t.resize({width:n,height:i,pixelRatio:1}),t.draw();var c=t.canvas.toDataURL("image/png");t.resize(),t.draw(),T(l,c)},this.update=function(e,r){return t.orbitControls&&(t.orbitControls.update(),t.camera.up.fromArray(t.orbitControls.up),t.camera.position.fromArray(t.orbitControls.position),j(t,_)[_].fromArray(t.orbitControls.target),t.camera.lookAt(j(t,_)[_])),t.scene.traverse(function(t){"function"==typeof t.update&&t.update(e,r)}),t.world&&(t.world.step(e),t.world.bodies.forEach(function(t){"function"==typeof t.update&&t.update(e,r)})),t.tween&&t.tween.update(),j(t,S)[S].forEach(function(t){return t(e,r)}),t},this.draw=function(){return t.composer?(t.composer.passes.forEach(function(e,t,r){var n=t===r.length-1;e.renderToScreen=!!n}),t.composer.render()):t.renderer.render(t.scene,t.camera),t},this.start=function(){if(null===j(t,D)[D])return j(t,D)[D]=window.requestAnimationFrame(t.animate),t.isRunning=!0,t},this.stop=function(){if(null!==j(t,D)[D])return window.cancelAnimationFrame(j(t,D)[D]),j(t,D)[D]=null,t.isRunning=!1,t},this.animate=function(){if(t.isRunning){window.requestAnimationFrame(t.animate),t.stats&&t.stats.begin();var e=performance.now(),r=Math.min(t.maxDeltaTime,(e-j(t,R)[R])/1e3);t.time+=r,j(t,R)[R]=e,t.update(r,t.time),t.draw(),t.stats&&t.stats.end()}},this.traverse=function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];t.scene.traverse(function(t){"function"==typeof t[e]&&t[e].apply(t,n)})},this.renderer=new i.Jb(y({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,failIfMajorPerformanceCaveat:!0},C)),this.renderer.sortObjects=!1,this.canvas=this.renderer.domElement,this.renderer.setClearColor(a,u),this.maxPixelRatio=C.maxPixelRatio||2,this.maxDeltaTime=C.maxDeltaTime||1/30,this.camera=new i.db(p,1,w,x),this.scene=new i.qb,this.gl=this.renderer.getContext(),this.time=0,this.isRunning=!1,j(this,R)[R]=performance.now(),j(this,D)[D]=null,window.addEventListener("resize",this.resize),window.addEventListener("orientationchange",this.resize),this.resize(),this.touchHandler=s()(this.canvas,{target:this.canvas,filtered:!0}),this.touchHandler.on("start",function(e,r){return t.traverse("onPointerDown",e,r)}),this.touchHandler.on("move",function(e,r){return t.traverse("onPointerMove",e,r)}),this.touchHandler.on("end",function(e,r){return t.traverse("onPointerUp",e,r)}),C.postprocessing&&(this.composer=new v.a(this.renderer),this.composer.addPass(new g.a(this.scene,this.camera))),C.orbitControls&&(this.orbitControls=l()(y({element:this.canvas,parent:window,distance:5},C.orbitControls instanceof Object?C.orbitControls:{})),this.camera.position.fromArray(this.orbitControls.position),this.camera.lookAt((new i.Eb).fromArray(this.orbitControls.target))),C.world&&(this.world=C.world),C.tween&&(this.tween=C.tween),C.showFps&&(this.stats=new h.a,this.stats.showPanel(0),document.body.appendChild(this.stats.dom)),C.controls){var k=o()(C.controls);if(this.controls=C.hideControls?k:m()(k),C.closeControls){var E=document.querySelector('[class*="controlPanel"]');E.style.display="none",document.querySelector('[class*="controlPanel"] button').click(),E.style.display="block"}}var F=Object(b.getGPUTier)({glContext:this.renderer.getContext()});this.gpu={name:F.type,tier:Number(F.tier.slice(-1)),isMobile:F.tier.toLowerCase().includes("mobile")}}var t,r,n;return t=e,(r=[{key:"onUpdate",value:function(e){j(this,S)[S].push(e)}}])&&x(t.prototype,r),n&&x(t,n),e}(),S=k("updateListeners"),_=k("tmpTarget"),D=k("rafID"),R=k("lastTime");function T(e,t){var r=f()(t),n=document.createElement("a");n.download=e,n.href=window.URL.createObjectURL(r),n.onclick=setTimeout(function(){window.URL.revokeObjectURL(r),n.removeAttribute("href")},0),n.click()}r(72),r(73),r(74),r(182),r(183),r(184),r(186),r(75),r(195),r(76);var F=r(129),M=r.n(F),z=r(50),L=r.n(z),A=r(49),U=r.n(A),I=r(130);r(201),r(202);function B(e,t,r,n,o,i,a){try{var l=e[i](a),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}function G(e,t){return q.apply(this,arguments)}function q(){var e;return e=regeneratorRuntime.mark(function e(t,r){var n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new i.xb).name=t,n.encoding=r.encoding||i.H,N(t,n,r),e.prev=4,e.next=7,U()(t,{crossorigin:"anonymous"});case 7:return o=e.sent,n.image=o,n.needsUpdate=!0,r.renderer,e.abrupt("return",n);case 14:throw e.prev=14,e.t0=e.catch(4),new Error("Could not load texture ".concat(t));case 17:case"end":return e.stop()}},e,null,[[4,14]])}),(q=function(){var t=this,r=arguments;return new Promise(function(n,o){var i=e.apply(t,r);function a(e){B(i,n,o,a,l,"next",e)}function l(e){B(i,n,o,a,l,"throw",e)}a(void 0)})}).apply(this,arguments)}function N(e,t,r){if("boolean"==typeof r.flipY&&(t.flipY=r.flipY),void 0!==r.mapping&&(t.mapping=r.mapping),void 0!==r.format)t.format=r.format;else{var n=e.search(/\.(jpg|jpeg)$/)>0||0===e.search(/^data:image\/jpeg/);t.format=n?i.nb:i.kb}r.repeat&&t.repeat.copy(r.repeat),t.wrapS=r.wrapS||i.h,t.wrapT=r.wrapT||i.h,t.minFilter=r.minFilter||i.J,t.magFilter=r.magFilter||i.I,t.generateMipmaps=!1!==r.generateMipmaps}r(118);var $=r(131),Y=r.n($),H=r(137),J=r(132),V=r(133),Q=r(134);function X(e,t,r,n,o,i,a){try{var l=e[i](a),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}function W(e,t){return K.apply(this,arguments)}function K(){var e;return e=regeneratorRuntime.mark(function e(t,r){var n,o,a,l,c,s,u,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.renderer){e.next=3;break}throw new Error("PBR Map requires renderer to passed in the options for ".concat(t,"!"));case 3:if(!r.equirectangular){e.next=13;break}return e.next=6,G(t,{renderer:n});case 6:return o=e.sent,a=new Q.a(o,{resolution:1024}),(l=a.update(n)).renderTarget=a.renderTarget,o.dispose(),o.image.data=null,e.abrupt("return",Z(l,r));case 13:if(c=t,s=r.hdr,u=s?".hdr":".png",p="".concat(c.replace(/\/$/,""),"/"),h=u,f=["".concat(p,"px").concat(h),"".concat(p,"nx").concat(h),"".concat(p,"py").concat(h),"".concat(p,"ny").concat(h),"".concat(p,"pz").concat(h),"".concat(p,"nz").concat(h)],!s){e.next=19;break}return e.abrupt("return",new Promise(function(e,t){(new H.a).load(i.Cb,f,function(t){return e(Z(t,r))},null,function(){return t(new Error("Could not load PBR map: ".concat(c)))})}));case 19:return e.abrupt("return",new Promise(function(e,t){(new i.m).load(f,function(t){t.encoding=i.ob,e(Z(t,r))},null,function(){return t(new Error("Could not load PBR map: ".concat(c)))})}));case 20:case"end":return e.stop()}var p,h},e)}),(K=function(){var t=this,r=arguments;return new Promise(function(n,o){var i=e.apply(t,r);function a(e){X(i,n,o,a,l,"next",e)}function l(e){X(i,n,o,a,l,"throw",e)}a(void 0)})}).apply(this,arguments)}function Z(e,t){if(t.pbr||"number"==typeof t.level){var r=new J.a(e);if(r.update(t.renderer),t.pbr){var n=new V.a(r.cubeLods);n.update(t.renderer),e=n.CubeUVRenderTarget.texture,n.dispose()}else{var o=Y()(Math.floor(t.level),0,r.cubeLods.length);e=r.cubeLods[o].texture}r.dispose()}return t.mapping&&(e.mapping=t.mapping),e}function ee(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function te(e,t,r,n,o,i,a){try{var l=e[i](a),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}function re(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var i=e.apply(t,r);function a(e){te(i,n,o,a,l,"next",e)}function l(e){te(i,n,o,a,l,"throw",e)}a(void 0)})}}function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(r,!0).forEach(function(t){ie(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ie(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ae(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function le(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ce(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var se=0;function ue(e){return"__private_"+se+++"_"+e}var fe=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.defineProperty(this,pe,{writable:!0,value:[]}),Object.defineProperty(this,he,{writable:!0,value:{}}),Object.defineProperty(this,de,{writable:!0,value:[]}),Object.defineProperty(this,me,{writable:!0,value:10}),Object.defineProperty(this,be,{writable:!0,value:[]}),this.get=function(e){if(!e)throw new TypeError("Must specify an URL for AssetManager.get()");if(!(e in ce(t,he)[he]))throw new Error("The asset ".concat(e," is not in the loaded files."));return ce(t,he)[he][e]}}var t,r,n,o,i,a;return t=e,(r=[{key:"addProgressListener",value:function(e){if("function"!=typeof e)throw new TypeError("onProgress must be a function");ce(this,de)[de].push(e)}},{key:"queue",value:function(e){var t=e.url,r=e.type,n=ae(e,["url","type"]);if(!t)throw new TypeError("Must specify a URL or opt.url for AssetManager.queue()");return this._getQueued(t)||ce(this,pe)[pe].push(oe({url:t,type:r||this._extractType(t)},n)),t}},{key:"_getQueued",value:function(e){return ce(this,pe)[pe].find(function(t){return t.url===e})}},{key:"_extractType",value:function(e){var t=e.slice(e.lastIndexOf("."));switch(!0){case/\.(gltf|glb)$/i.test(t):return"gltf";case/\.json$/i.test(t):return"json";case/\.svg$/i.test(t):return"svg";case/\.(jpe?g|png|gif|bmp|tga|tif)$/i.test(t):return"image";case/\.(wav|mp3)$/i.test(t):return"audio";case/\.(mp4|webm|ogg|ogv)$/i.test(t):return"video";default:throw new Error("Could not load ".concat(e,", unknown file extension!"))}}},{key:"loadSingle",value:(a=re(regeneratorRuntime.mark(function e(t){var r,n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.renderer,n=ae(t,["renderer"]),r){e.next=3;break}throw new Error("You must provide a renderer to the loadSingle function.");case 3:return e.prev=3,o=Date.now(),e.next=7,this._loadItem(oe({renderer:r},n));case 7:return ce(this,he)[he][n.url]=e.sent,window.DEBUG&&console.log("\ud83d\udce6 Loaded single asset %c".concat(n.url,"%c in ").concat(L()(Date.now()-o)),"color:blue","color:black"),e.abrupt("return",n.url);case 12:e.prev=12,e.t0=e.catch(3),delete ce(this,he)[he][n.url],console.error("\ud83d\udce6  Could not load ".concat(n.url,":\n").concat(e.t0));case 16:case"end":return e.stop()}},e,this,[[3,12]])})),function(e){return a.apply(this,arguments)})},{key:"load",value:(i=re(regeneratorRuntime.mark(function e(t){var r,n,o,i,a,l=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.renderer){e.next=3;break}throw new Error("You must provide a renderer to the load function.");case 3:if(n=ce(this,pe)[pe].slice(),ce(this,pe)[pe].length=0,0!==(o=n.length)){e.next=9;break}return setTimeout(function(){return ce(l,de)[de].forEach(function(e){return e(1)})},0),e.abrupt("return");case 9:return i=Date.now(),e.next=12,M()(n,function(){var e=re(regeneratorRuntime.mark(function e(t,n){var i,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=Date.now(),e.next=4,l._loadItem(oe({renderer:r},t));case 4:ce(l,he)[he][t.url]=e.sent,window.DEBUG&&l.log("Loaded %c".concat(t.url,"%c in ").concat(L()(Date.now()-i)),"color:blue","color:black"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l.logError("Skipping ".concat(t.url," from asset loading:\n").concat(e.t0));case 11:a=(n+1)/o,ce(l,de)[de].forEach(function(e){return e(a)});case 13:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t,r){return e.apply(this,arguments)}}(),{concurrency:ce(this,me)[me]});case 12:window.DEBUG&&(a=ce(this,be)[be].filter(function(e){return"error"===e.type}),this.groupLog("\ud83d\udce6 Assets loaded in ".concat(L()(Date.now()-i)," \u23f1 ").concat(a.length>0?"%c \u26a0\ufe0f Skipped ".concat(a.length," asset").concat(a.length>1?"s":""," "):""),a.length>0?"color:white;background:red;":""));case 13:case"end":return e.stop()}},e,this)})),function(e){return i.apply(this,arguments)})},{key:"_loadItem",value:(o=re(regeneratorRuntime.mark(function e(t){var r,n,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.url,n=t.type,o=t.renderer,i=ae(t,["url","type","renderer"]),!(r in ce(this,he)[he])){e.next=3;break}return e.abrupt("return",ce(this,he)[he][r]);case 3:e.t0=n,e.next="gltf"===e.t0?6:"json"===e.t0?7:"env-map"===e.t0?8:"svg"===e.t0?9:"image"===e.t0?9:"texture"===e.t0?10:"audio"===e.t0?11:"video"===e.t0?12:13;break;case 6:return e.abrupt("return",new Promise(function(e,t){(new I.a).load(r,e,null,function(e){return t(new Error("Could not load GLTF asset ".concat(r,":\n").concat(e)))})}));case 7:return e.abrupt("return",fetch(r).then(function(e){return e.json()}));case 8:return e.abrupt("return",W(r,oe({renderer:o},i)));case 9:return e.abrupt("return",U()(r,{crossorigin:"anonymous"}));case 10:return e.abrupt("return",G(r,oe({renderer:o},i)));case 11:return e.abrupt("return",fetch(r).then(function(e){return e.arrayBuffer()}));case 12:return e.abrupt("return",fetch(r).then(function(e){return e.blob()}));case 13:throw new Error("Could not load ".concat(r,", the type ").concat(n," is unknown!"));case 14:case"end":return e.stop()}},e,this)})),function(e){return o.apply(this,arguments)})},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];ce(this,be)[be].push({type:"log",text:t})}},{key:"logError",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];ce(this,be)[be].push({type:"error",text:t})}},{key:"groupLog",value:function(){var e;(e=console).groupCollapsed.apply(e,arguments),ce(this,be)[be].forEach(function(e){var t;(t=console)[e.type].apply(t,ee(e.text))}),console.groupEnd(),ce(this,be)[be].length=0}}])&&le(t.prototype,r),n&&le(t,n),e}(),pe=ue("queue"),he=ue("cache"),de=ue("onProgressListeners"),me=ue("asyncConcurrency"),be=ue("logs"),ve=new fe,ge=(r(120),r(121),"#define GLSLIFY 1\nfloat hue2rgb(float f1, float f2, float hue) {\n    if (hue < 0.0)\n        hue += 1.0;\n    else if (hue > 1.0)\n        hue -= 1.0;\n    float res;\n    if ((6.0 * hue) < 1.0)\n        res = f1 + (f2 - f1) * 6.0 * hue;\n    else if ((2.0 * hue) < 1.0)\n        res = f2;\n    else if ((3.0 * hue) < 2.0)\n        res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;\n    else\n        res = f1;\n    return res;\n}\n\nvec3 hsl2rgb(vec3 hsl) {\n    vec3 rgb;\n    \n    if (hsl.y == 0.0) {\n        rgb = vec3(hsl.z); // Luminance\n    } else {\n        float f2;\n        \n        if (hsl.z < 0.5)\n            f2 = hsl.z * (1.0 + hsl.y);\n        else\n            f2 = hsl.z + hsl.y - hsl.y * hsl.z;\n            \n        float f1 = 2.0 * hsl.z - f2;\n        \n        rgb.r = hue2rgb(f1, f2, hsl.x + (1.0/3.0));\n        rgb.g = hue2rgb(f1, f2, hsl.x);\n        rgb.b = hue2rgb(f1, f2, hsl.x - (1.0/3.0));\n    }   \n    return rgb;\n}\n\nvec3 hsl2rgb(float h, float s, float l) {\n    return hsl2rgb(vec3(h, s, l));\n}\n\nuniform float time;\nuniform float powerFactor;\nuniform float multiplicator;\nuniform float speed;\n\nvarying vec3 vNormal;\nvarying vec3 vPosition;\n\nvoid main() {\n  // The camera sometimes would be too close to the position,\n  // so the vector would point to the negative position.\n  // Multiplicating the camera position by a big number fixes it.\n  vec3 cameraDirection = normalize(cameraPosition * 1000.0 - vPosition);\n\n  float iridescence = pow(dot(vNormal, cameraDirection), powerFactor) * multiplicator;\n\n  // circle the hue\n  float hue = mod(iridescence + time * speed, 1.0);\n  vec3 color = hsl2rgb(hue, 1.0, 0.5);\n\n  gl_FragColor = vec4(color, 1.0);\n}\n");function we(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var ye,Oe,Pe,xe,je,Ce,ke,Ee,Se=i.rb.normal_vert.replace("#include <defaultnormal_vertex>",i.rb.defaultnormal_vertex.replace("transformedNormal = normalMatrix * transformedNormal;","transformedNormal = mat3(modelMatrix) * transformedNormal;")),_e=(ye=Se,Pe=(Oe={header:"varying vec3 vPosition;",main:"vPosition = position;"}).header,xe=void 0===Pe?"":Pe,je=Oe.main,Ce=void 0===je?"":je,ke=we(Oe,["header","main"]),Ee=ye,Object.keys(ke).forEach(function(e){Ee=Ee.replace(e,ke[e])}),Ee.replace("void main() {","\n    ".concat(xe,"\n    void main() {\n      ").concat(Ce,"\n    ")));function De(e){return(De="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Re(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Te(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Fe(e,t){return!t||"object"!==De(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Me(e){return(Me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ze(e,t){return(ze=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Le=ve.queue({url:"assets/ephebe_twerking.glb",type:"gltf"}),Ae=function(e){function t(e){var r,n=e.webgl,o=Re(e,["webgl"]);!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=Fe(this,Me(t).call(this,o))).webgl=n;var a=ve.get(Le),l=a.scene;l.traverse(function(e){e.isMesh&&(r.ephebe=e)}),r.mixer=new i.b(l);var c=a.animations[0].clone();r.mixer.clipAction(c).play();var s=r.webgl.controls.ephebe,u=s.powerFactor,f=s.speed,p=s.multiplicator;return r.ephebe.material=new i.tb({uniforms:{time:{value:0},powerFactor:{value:u},speed:{value:f},multiplicator:{value:p}},vertexShader:_e,fragmentShader:ge}),r.ephebe.material.skinning=!0,r.webgl.controls.$onChanges(function(e){e["ephebe.powerFactor"]&&(r.ephebe.material.uniforms.powerFactor.value=e["ephebe.powerFactor"].value),e["ephebe.speed"]&&(r.ephebe.material.uniforms.speed.value=e["ephebe.speed"].value),e["ephebe.multiplicator"]&&(r.ephebe.material.uniforms.multiplicator.value=e["ephebe.multiplicator"].value)}),l.scale.multiplyScalar(.25),l.rotateY(Math.PI),l.translateX(-.1),r.add(l),r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ze(e,t)}(t,i["w"]),r=t,(n=[{key:"update",value:function(e,t){this.mixer.update(e),this.ephebe.material.uniforms.time.value=t}}])&&Te(r.prototype,n),o&&Te(r,o),t}(),Ue=(r(215),"#define GLSLIFY 1\nfloat hue2rgb(float f1, float f2, float hue) {\n    if (hue < 0.0)\n        hue += 1.0;\n    else if (hue > 1.0)\n        hue -= 1.0;\n    float res;\n    if ((6.0 * hue) < 1.0)\n        res = f1 + (f2 - f1) * 6.0 * hue;\n    else if ((2.0 * hue) < 1.0)\n        res = f2;\n    else if ((3.0 * hue) < 2.0)\n        res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;\n    else\n        res = f1;\n    return res;\n}\n\nvec3 hsl2rgb(vec3 hsl) {\n    vec3 rgb;\n    \n    if (hsl.y == 0.0) {\n        rgb = vec3(hsl.z); // Luminance\n    } else {\n        float f2;\n        \n        if (hsl.z < 0.5)\n            f2 = hsl.z * (1.0 + hsl.y);\n        else\n            f2 = hsl.z + hsl.y - hsl.y * hsl.z;\n            \n        float f1 = 2.0 * hsl.z - f2;\n        \n        rgb.r = hue2rgb(f1, f2, hsl.x + (1.0/3.0));\n        rgb.g = hue2rgb(f1, f2, hsl.x);\n        rgb.b = hue2rgb(f1, f2, hsl.x - (1.0/3.0));\n    }   \n    return rgb;\n}\n\nvec3 hsl2rgb(float h, float s, float l) {\n    return hsl2rgb(vec3(h, s, l));\n}\n\nuniform float time;\nuniform float powerFactor;\nuniform float multiplicator;\nuniform float speed;\nuniform vec3 firstColor;\nuniform vec3 secondColor;\n\nvarying vec3 vNormal;\nvarying vec3 vPosition;\n\nvoid main() {\n  // The camera sometimes would be too close to the position,\n  // so the vector would point to the negative position.\n  // Multiplicating the camera position by a big number fixes it.\n  vec3 cameraDirection = normalize(cameraPosition * 1000.0 - vPosition);\n\n  float iridescence = pow(dot(vNormal, cameraDirection), powerFactor) * multiplicator;\n\n  // show all colors\n  float hue = mod(iridescence + time * speed, 1.0);\n  vec3 rainbowColor = hsl2rgb(hue, 1.0, 0.5);\n\n  // alternate between two colors,\n  // the function looks like this /\\/\\/\\/\\/\n  vec3 color = mix(firstColor, secondColor, abs(1.0 - mod(iridescence + time * speed, 2.0)));\n\n  gl_FragColor = vec4(color, 1.0);\n}\n"),Ie=r(135),Be=new(r.n(Ie).a);function Ge(){switch(arguments.length){case 1:return Be.noise2D(0,arguments.length<=0?void 0:arguments[0]);case 2:return Be.noise2D(arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1]);case 3:return Be.noise3D(arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1],arguments.length<=2?void 0:arguments[2]);case 4:return Be.noise4D(arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1],arguments.length<=2?void 0:arguments[2],arguments.length<=3?void 0:arguments[3]);default:throw new Error("Invalid number of arguments passed to the noise() function")}}function qe(e){return(qe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ne(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function $e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ye(e,t){return!t||"object"!==qe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function He(e){return(He=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Je(e,t){return(Je=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ve=20,Qe=256;function Xe(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=0;r<e.length;r+=3){var n=r,o=r+1,i=r+2,a=Math.hypot(e[n],e[i]),l=.05*Math.pow(a,2);e[o]=(.5*Ge(.4*e[n],.4*e[i],.05*t)+.5)*l}}var We=function(e){function t(e){var r,n=e.webgl,o=Ne(e,["webgl"]);!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=Ye(this,He(t).call(this,o))).webgl=n;var a=r.webgl.controls.hills,l=a.powerFactor,c=a.speed,s=a.multiplicator,u=a.firstColor,f=a.secondColor;return r.material=new i.tb({uniforms:{time:{value:0},powerFactor:{value:l},speed:{value:c},multiplicator:{value:s},firstColor:{type:"c",value:new i.j(u)},secondColor:{type:"c",value:new i.j(f)}},vertexShader:_e,fragmentShader:Ue}),r.webgl.controls.$onChanges(function(e){e["hills.powerFactor"]&&(r.material.uniforms.powerFactor.value=e["hills.powerFactor"].value),e["hills.speed"]&&(r.material.uniforms.speed.value=e["hills.speed"].value),e["hills.multiplicator"]&&(r.material.uniforms.multiplicator.value=e["hills.multiplicator"].value),e["hills.firstColor"]&&(r.material.uniforms.firstColor.value=new i.j(e["hills.firstColor"].value)),e["hills.secondColor"]&&(r.material.uniforms.secondColor.value=new i.j(e["hills.secondColor"].value))}),r.geometry=new i.eb(Ve,Ve,Qe,Qe),r.geometry.rotateX(-Math.PI/2),Xe(r.geometry.attributes.position.array),r.geometry.computeVertexNormals(),r.mesh=new i.S(r.geometry,r.material),r.add(r.mesh),r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Je(e,t)}(t,i["w"]),r=t,(n=[{key:"update",value:function(e,t){this.material.uniforms.time.value=t,Xe(this.geometry.attributes.position.array,t),this.geometry.attributes.position.needsUpdate=!0,this.geometry.computeVertexNormals()}}])&&$e(r.prototype,n),o&&$e(r,o),t}();window.DEBUG=window.location.search.includes("debug");var Ke=new E({canvas:document.querySelector("#app"),controls:{background:"#070758",ephebe:{powerFactor:o.a.Slider(.8,{min:.01,max:5,step:.01}),speed:o.a.Slider(.1,{min:.01,max:10,step:.01}),multiplicator:o.a.Slider(.6,{min:.01,max:10,step:.01})},hills:{powerFactor:o.a.Slider(1.13,{min:.01,max:5,step:.01}),speed:o.a.Slider(.3,{min:.01,max:10,step:.01}),multiplicator:o.a.Slider(2.5,{min:.01,max:20,step:.01}),firstColor:"#CE1DC5",secondColor:"#00E6CC"}},closeControls:!window.DEBUG,showFps:window.DEBUG,orbitControls:{distance:5,target:[0,1.2,0],phi:.4*Math.PI,phiBounds:!window.DEBUG&&[0,.5*Math.PI],distanceBounds:!window.DEBUG&&[5,5]}});Ke.renderer.setClearColor(Ke.controls.background,1),Ke.controls.$onChanges(function(e){var t=e.background;t&&Ke.renderer.setClearColor(t.value,1)}),window.DEBUG&&(window.webgl=Ke),Ke.canvas.style.visibility="hidden",ve.load({renderer:Ke.renderer}).then(function(){Ke.canvas.style.visibility="",Ke.scene.ephebe=new Ae({webgl:Ke}),Ke.scene.add(Ke.scene.ephebe),Ke.scene.hills=new We({webgl:Ke}),Ke.scene.add(Ke.scene.hills),Ke.start(),Ke.draw()})}});
//# sourceMappingURL=app.c3972c7e.js.map