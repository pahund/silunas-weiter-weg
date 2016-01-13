!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n=new a["default"].spine.Spine(t.siluna.spineData);n.update(0),n.autoUpdate=!1,n.position.set(.5*s["default"].gameDimensions.w,.3*s["default"].gameDimensions.h);var i=Math.min(.8*s["default"].gameDimensions.w/n.width,.8*s["default"].gameDimensions.h/n.height);n.scale.set(i,i),p.addChild(n),n.state.setAnimationByName(0,"treading-water",!0),function r(){requestAnimationFrame(r),n.update(.01666666666667),v.render(p)}()}var u=n(1),a=i(u),o=n(2),s=i(o),l=n(4),f=i(l),c=n(5),d=i(c),y=n(12),h=i(y),v=(0,f["default"])(),p=(0,d["default"])(),m=new a["default"].loaders.Loader;h["default"].init({stage:p,renderer:v}),m.add("siluna","./data/siluna.json").load(r)},function(e,t){e.exports=PIXI},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),u=i(r);t["default"]=(0,u["default"])({speed:2e3,margin:250,gameDimensions:{w:2880,h:1800},assets:{path:"./data/",bundles:["siluna"]},maxTimeDelta:100})},function(e,t){"use strict";function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}e.exports=function i(e){return Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){!e.hasOwnProperty(t)||null===e[t]||"object"!==n(e[t])&&"function"!=typeof e[t]||Object.isFrozen(e[t])||i(e[t])}),e}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),u=i(r),a=n(2),o=i(a);t["default"]=function(){var e=u["default"].autoDetectRenderer(o["default"].gameDimensions.w,o["default"].gameDimensions.h,{backgroundColor:1087931,resolution:window.devicePixelRatio,autoResize:!0});return e.view.style.position="absolute",document.body.appendChild(e.view),e}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),u=i(r),a=n(6),o=i(a),s=n(2),l=i(s),f=n(10),c=i(f);t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?{store:null}:arguments[0],t=e.store,n=new u["default"].Container;if(n.interactive=!0,n.hitArea=new u["default"].Rectangle(0,0,l["default"].gameDimensions.w,l["default"].gameDimensions.w),t){var i=function(e){var i=e.data;return t.dispatch((0,o["default"])(c["default"].fromPixiPoint(i.getLocalPosition(n))))};n.touchstart=i,n.click=i}return n}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),u=n(10),a=i(u);t["default"]=function(e){if(!(e instanceof a["default"]))throw new TypeError("Target argument passed to moveToTap action needs to be a point");return{type:r.MOVE_TO_TAP,target:e}}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e){switch(e){case l:return a["default"];case f:return s["default"];case c:return moveToTap}}Object.defineProperty(t,"__esModule",{value:!0}),t.MOVE_TO_TAP=t.TINT=t.UPDATE=void 0,t.getByType=r;var u=n(8),a=i(u),o=n(9),s=i(o),l=t.UPDATE="UPDATE",f=t.TINT="TINT",c=t.MOVE_TO_TAP="MOVE_TO_TAP"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(7);t["default"]=function(e,t){return{type:i.UPDATE,entity:e,timeDelta:t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(7);t["default"]=function(e){return{type:i.TINT,entity:e}}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(11),o=i(a),s=function(){function e(t,n){r(this,e),this.x=t,this.y=n}return u(e,[{key:"addVector",value:function(t){return new e(this.x+t.x,this.y+t.y)}},{key:"subtractPoint",value:function(t){if(!(t instanceof e))throw new TypeError("Point argument passed to Vector.subtractPoint needs to be a point");return new o["default"](this.x-t.x,this.y-t.y)}},{key:"equals",value:function(t){return t instanceof e&&this.x===t.x&&this.y===t.y}},{key:"clone",value:function(){return new e(this.x,this.y)}}],[{key:"fromPixiPoint",value:function(t){var n=t.x,i=t.y;return new e(n,i)}}]),e}();t["default"]=s},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(t,i){n(this,e),this.x=t,this.y=i}return i(e,[{key:"add",value:function(t){return new e(this.x+t.x,this.y+t.y)}},{key:"subtract",value:function(t){return new e(this.x-t.x,this.y-t.y)}},{key:"multiply",value:function(t){return new e(this.x*t,this.y*t)}},{key:"divide",value:function(t){return new e(this.x/t,this.y/t)}},{key:"equals",value:function(e){return this.x===e.x&&this.y===e.y}},{key:"clone",value:function(){return new e(this.x,this.y)}},{key:"dotProduct",value:function(e){var t=this.normalized,n=e.normalized;return t.x*n.x+t.y*n.y}},{key:"length",get:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"lengthSqr",get:function(){return this.x*this.x+this.y*this.y}},{key:"normalized",get:function(){return new e(this.x/this.length,this.y/this.length)}}]),e}();t["default"]=r},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(){var e=Math.min(window.innerWidth/o["default"].gameDimensions.w,window.innerHeight/o["default"].gameDimensions.h);l.scale.x=e,l.scale.y=e;var t={w:Math.ceil(o["default"].gameDimensions.w*e),h:Math.ceil(o["default"].gameDimensions.h*e)};f.resize(t.w,t.h),f.view.style.left=(window.innerWidth-t.w)/2+"px",f.view.style.top=(window.innerHeight-t.h)/2+"px"}function u(e){if(s)throw new Error("resize is already initialized");l=e.stage,f=e.renderer,window.addEventListener("resize",r),r(),s=!0}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),o=i(a),s=!1,l=null,f=null;t["default"]={init:u}}]);