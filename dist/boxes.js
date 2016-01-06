!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){function n(){i.state.setAnimationByName(0,d[l],!0),l=l===d.length-1?0:l+1}var i=new a["default"].spine.Spine(t.boxes.spineData);i.skeleton.setToSetupPose(),i.update(0),i.autoUpdate=!1;var o=new a["default"].Container;o.addChild(i);var u=i.getLocalBounds();i.position.set(-u.x,-u.y);var r=Math.min(.8*s["default"].gameDimensions.w/o.width,.8*s["default"].gameDimensions.h/o.height);o.scale.set(r,r),o.position.set(.5*(s["default"].gameDimensions.w-o.width),.5*(s["default"].gameDimensions.h-o.height)),v.addChild(o);var d=["wag","twist","coil","wag2"],l=0;v.touchstart=n,v.click=n,function f(){requestAnimationFrame(f),i.update(.005),m.render(v)}()}var u=n(1),a=i(u),r=n(2),s=i(r),d=n(4),l=i(d),f=n(5),c=i(f),p=n(10),w=i(p),m=(0,l["default"])(),v=(0,c["default"])(),_=new a["default"].loaders.Loader;w["default"].init({stage:v,renderer:m}),_.add("boxes","./data/boxes.json").load(o)},function(e,t){e.exports=PIXI},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=i(o);t["default"]=(0,u["default"])({speed:50,margin:250,gameDimensions:{w:2880,h:1800}})},function(e,t){"use strict";function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}e.exports=function i(e){return Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){!e.hasOwnProperty(t)||null===e[t]||"object"!==n(e[t])&&"function"!=typeof e[t]||Object.isFrozen(e[t])||i(e[t])}),e}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=i(o),a=n(2),r=i(a);t["default"]=function(){var e=u["default"].autoDetectRenderer(r["default"].gameDimensions.w,r["default"].gameDimensions.h,{backgroundColor:1087931,resolution:window.devicePixelRatio,autoResize:!0});return e.view.style.position="absolute",document.body.appendChild(e.view),e}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=i(o),a=n(6),r=i(a),s=n(2),d=i(s);t["default"]=function(e){var t=(e.renderer,e.store),n=new u["default"].Container,i=function(e){var i=e.data;return t.dispatch((0,r["default"])(i.getLocalPosition(n),d["default"].speed))};return n.hitArea=new u["default"].Rectangle(0,0,d["default"].gameDimensions.w,d["default"].gameDimensions.w),n.interactive=!0,n.touchstart=i,n.click=i,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(7);t["default"]=function(e,t){return{type:i.MOVE_TO_TAP,position:e,speed:t}}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e){switch(e){case d:return a["default"];case l:return s["default"];case f:return moveToTap}}Object.defineProperty(t,"__esModule",{value:!0}),t.MOVE_TO_TAP=t.TINT=t.UPDATE=void 0,t.getByType=o;var u=n(8),a=i(u),r=n(9),s=i(r),d=t.UPDATE="UPDATE",l=t.TINT="TINT",f=t.MOVE_TO_TAP="MOVE_TO_TAP"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(7);t["default"]=function(e){return{type:i.UPDATE,entity:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(7);t["default"]=function(e){return{type:i.TINT,entity:e}}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=Math.min(window.innerWidth/r["default"].gameDimensions.w,window.innerHeight/r["default"].gameDimensions.h);d.scale.x=e,d.scale.y=e;var t={w:Math.ceil(r["default"].gameDimensions.w*e),h:Math.ceil(r["default"].gameDimensions.h*e)};l.resize(t.w,t.h),l.view.style.left=(window.innerWidth-t.w)/2+"px",l.view.style.top=(window.innerHeight-t.h)/2+"px"}function u(e){if(s)throw new Error("resize is already initialized");d=e.stage,l=e.renderer,window.addEventListener("resize",o),o(),s=!0}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a),s=!1,d=null,l=null;t["default"]={init:u}}]);