!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){function n(){i.state.setAnimationByName(0,d[l],!0),l=l===d.length-1?0:l+1}var i=new r["default"].spine.Spine(t.boxes.spineData);i.skeleton.setToSetupPose(),i.update(0),i.autoUpdate=!1;var o=new r["default"].Container;o.addChild(i);var a=i.getLocalBounds();i.position.set(-a.x,-a.y);var u=Math.min(.8*s["default"].gameDimensions.w/o.width,.8*s["default"].gameDimensions.h/o.height);o.scale.set(u,u),o.position.set(.5*(s["default"].gameDimensions.w-o.width),.5*(s["default"].gameDimensions.h-o.height)),h.addChild(o);var d=["wag","twist","coil","wag2"],l=0;h.touchstart=n,h.click=n,function f(){requestAnimationFrame(f),i.update(.005),p.render(h)}()}var a=n(1),r=i(a),u=n(2),s=i(u),d=n(4),l=i(d),f=n(5),c=i(f),w=n(6),m=i(w),p=(0,l["default"])(),h=(0,c["default"])(),v=new r["default"].loaders.Loader;m["default"].init({config:s["default"],stage:h,renderer:p}),v.add("boxes","./data/boxes.json").load(o)},function(e,t){e.exports=PIXI},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),a=i(o);t["default"]=(0,a["default"])({gameDimensions:{w:2880,h:1800}})},function(e,t){"use strict";function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}e.exports=function i(e){return Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){!e.hasOwnProperty(t)||null===e[t]||"object"!==n(e[t])&&"function"!=typeof e[t]||Object.isFrozen(e[t])||i(e[t])}),e}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=i(o),r=n(2),u=i(r);t["default"]=function(){var e=a["default"].autoDetectRenderer(u["default"].gameDimensions.w,u["default"].gameDimensions.h,{backgroundColor:1087931,resolution:window.devicePixelRatio,autoResize:!0});return e.view.style.position="absolute",document.body.appendChild(e.view),e}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=i(o);t["default"]=function(){var e=new a["default"].Container;return e.interactive=!0,e}},function(e,t){"use strict";function n(){var e=Math.min(window.innerWidth/a.gameDimensions.w,window.innerHeight/a.gameDimensions.h);r.scale.x=e,r.scale.y=e;var t={w:Math.ceil(a.gameDimensions.w*e),h:Math.ceil(a.gameDimensions.h*e)};u.resize(t.w,t.h),u.view.style.left=(window.innerWidth-t.w)/2+"px",u.view.style.top=(window.innerHeight-t.h)/2+"px"}function i(e){if(o)throw new Error("resize is already initialized");a=e.config,r=e.stage,u=e.renderer,window.addEventListener("resize",n),n(),o=!0}Object.defineProperty(t,"__esModule",{value:!0});var o=!1,a=null,r=null,u=null;t["default"]={init:i}}]);