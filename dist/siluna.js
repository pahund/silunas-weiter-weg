!function(e){function n(t){if(i[t])return i[t].exports;var a=i[t]={exports:{},id:t,loaded:!1};return e[t].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var i={};return n.m=e,n.c=i,n.p="",n(0)}([function(e,n,i){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function a(e,n){var i=new PIXI.spine.Spine(n.siluna.spineData);i.skeleton.setToSetupPose(),i.update(0),i.autoUpdate=!1;var t=new PIXI.Container;t.addChild(i);var a=i.getLocalBounds();i.position.set(-a.x,-a.y);var o=Math.min(.8*w.gameDimensions.w/t.width,.8*w.gameDimensions.h/t.height);t.scale.set(o,o),t.position.set(.5*(h.width-t.width),.5*(h.height-t.height)),m.addChild(t),i.state.setAnimationByName(0,"tail_wagging",!0),function r(){requestAnimationFrame(r),i.update(.01666666666667),h.render(m)}()}var o=i(1),r=t(o),s=i(2),d=t(s),u=i(3),l=t(u),c=i(4),f=t(c),w=(0,r["default"])(),h=(0,d["default"])({config:w}),m=(0,l["default"])(),g=new PIXI.loaders.Loader;f["default"].init({config:w,stage:m,renderer:h}),g.add("siluna","./data/siluna.json").load(a)},function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){var e={w:2880,h:1800};return{gameDimensions:e}}},function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(e){var n=e.config,i=PIXI.autoDetectRenderer(n.gameDimensions.w,n.gameDimensions.h,{backgroundColor:1087931,resolution:window.devicePixelRatio,autoResize:!0});return i.view.style.position="absolute",document.body.appendChild(i.view),i}},function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){var e=new PIXI.Container;return e.interactive=!0,e}},function(e,n){"use strict";function i(){var e=Math.min(window.innerWidth/o.gameDimensions.w,window.innerHeight/o.gameDimensions.h);r.scale.x=e,r.scale.y=e;var n={w:Math.ceil(o.gameDimensions.w*e),h:Math.ceil(o.gameDimensions.h*e)};s.resize(n.w,n.h),s.view.style.left=(window.innerWidth-n.w)/2+"px",s.view.style.top=(window.innerHeight-n.h)/2+"px"}function t(e){if(a)throw new Error("resize is already initialized");o=e.config,r=e.stage,s=e.renderer,window.addEventListener("resize",i),i(),a=!0}Object.defineProperty(n,"__esModule",{value:!0});var a=!1,o=null,r=null,s=null;n["default"]={init:t}}]);