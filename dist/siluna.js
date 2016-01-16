!function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={exports:{},id:r,loaded:!1};return e[r].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){var n=new i["default"].spine.Spine(t.siluna.spineData);n.skeleton.setToSetupPose(),n.update(0),n.autoUpdate=!1;var r=new i["default"].Container;r.addChild(n);var u=n.getLocalBounds();n.position.set(-u.x,-u.y);var a=Math.min(.8*s["default"].gameDimensions.w/r.width,.8*s["default"].gameDimensions.h/r.height);r.scale.set(a,a),r.position.set(.5*(s["default"].gameDimensions.w-r.width),.5*(s["default"].gameDimensions.h-r.height)),T.addChild(r),n.state.setAnimationByName(0,"treading-water",!0),function o(){requestAnimationFrame(o),n.update(.01666666666667),h.render(T)}()}var a=n(1),i=r(a),o=n(2),s=r(o),c=n(4),f=r(c),_=n(5),l=r(_),d=n(16),E=r(d),h=(0,f["default"])(),T=(0,l["default"])(),I=new i["default"].loaders.Loader;E["default"].init({stage:T,renderer:h}),I.add("siluna","./data/siluna.json").load(u)},function(e,t){e.exports=PIXI},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(3),a=r(u);t["default"]=(0,a["default"])({speed:{movement:1e3,rotation:360},margin:250,gameDimensions:{w:2880,h:1800},assets:{path:"./data/",bundles:["siluna"]},maxTimeDelta:100})},function(e,t){"use strict";function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}e.exports=function r(e){return Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){!e.hasOwnProperty(t)||null===e[t]||"object"!==n(e[t])&&"function"!=typeof e[t]||Object.isFrozen(e[t])||r(e[t])}),e}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),a=r(u),i=n(2),o=r(i);t["default"]=function(){var e=a["default"].autoDetectRenderer(o["default"].gameDimensions.w,o["default"].gameDimensions.h,{backgroundColor:1087931,resolution:window.devicePixelRatio,autoResize:!0});return e.view.style.position="absolute",document.body.appendChild(e.view),e}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),a=r(u),i=n(6),o=r(i),s=n(2),c=r(s),f=n(11),_=r(f);t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?{store:null}:arguments[0],t=e.store,n=new a["default"].Container;if(n.interactive=!0,n.hitArea=new a["default"].Rectangle(0,0,c["default"].gameDimensions.w,c["default"].gameDimensions.w),t){var r=function(e){var r=e.data;t.dispatch((0,o["default"])(_["default"].fromPixiPoint(r.getLocalPosition(n))))};n.touchstart=r,n.click=r}return n}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(7),a=n(11),i=r(a);t["default"]=function(e){if(!(e instanceof i["default"]))throw new TypeError("Target argument passed to tapOnScreen action needs to be a point");return{type:u.TAP_ON_SCREEN,target:e}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(e){switch(e){case I:return f["default"];case A:return i["default"];case y:return s["default"];case N:return E["default"];case p:return l["default"];case O:return T["default"]}}Object.defineProperty(t,"__esModule",{value:!0}),t.ROTATE_TO_POINT=t.MOVE_TO_POINT=t.TINT=t.UPDATE=t.CURRENT_ENTITY=t.CURRENT_TAP=t.ANIMATE=t.TAP_ON_SCREEN=void 0,t.getByType=u;var a=n(8),i=r(a),o=n(9),s=r(o),c=n(6),f=r(c),_=n(10),l=r(_),d=n(13),E=r(d),h=n(15),T=r(h),I=t.TAP_ON_SCREEN="TAP_ON_SCREEN",O=t.ANIMATE="ANIMATE",A=(t.CURRENT_TAP="CURRENT_TAP",t.CURRENT_ENTITY="CURRENT_ENTITY",t.UPDATE="UPDATE"),y=t.TINT="TINT",N=t.MOVE_TO_POINT="MOVE_TO_POINT",p=t.ROTATE_TO_POINT="ROTATE_TO_POINT"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7);t["default"]=function(e,t){return{type:r.UPDATE,entity:e,timeDelta:t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7);t["default"]=function(e){return{type:r.TINT,entity:e}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(7),a=n(11),i=r(a),o=n(2),s=r(o);t["default"]=function(e,t){var n=arguments.length<=2||void 0===arguments[2]?s["default"].speed.rotation:arguments[2];if(!(t instanceof i["default"]))throw new TypeError("Target argument passed to rotateToPoint action needs to be a point");return{type:u.ROTATE_TO_POINT,entity:e,target:t,speed:n}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),o=r(i),s=function(){function e(t,n){u(this,e),this.x=t,this.y=n}return a(e,[{key:"addVector",value:function(t){if(!(t instanceof o["default"]))throw new TypeError("vector argument passed to Point.addVector needs to be a vector");return new e(this.x+t.x,this.y+t.y)}},{key:"subtractVector",value:function(t){if(!(t instanceof o["default"]))throw new TypeError("vector argument passed to Point.subtractVector needs to be a vector");return new e(this.x-t.x,this.y-t.y)}},{key:"subtractPoint",value:function(t){if(!(t instanceof e))throw new TypeError("Point argument passed to Point.subtractPoint needs to be a point");return new o["default"](this.x-t.x,this.y-t.y)}},{key:"equals",value:function(t){return t instanceof e&&this.x===t.x&&this.y===t.y}},{key:"clone",value:function(){return new e(this.x,this.y)}}],[{key:"fromPixiPoint",value:function(t){var n=t.x,r=t.y;return new e(n,r)}}]),e}();t["default"]=s},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t,n){var r=e-t;return r>n?t+n:-n>r?t-n:e}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(t,r){n(this,e),this.x=t,this.y=r}return u(e,[{key:"add",value:function(t){return new e(this.x+t.x,this.y+t.y)}},{key:"subtract",value:function(t){return new e(this.x-t.x,this.y-t.y)}},{key:"multiply",value:function(t){return new e(this.x*t,this.y*t)}},{key:"divide",value:function(t){return new e(this.x/t,this.y/t)}},{key:"approach",value:function(t,n){return new e(r(t.x,this.x,n),r(t.y,this.y,n))}},{key:"equals",value:function(e){return this.x===e.x&&this.y===e.y}},{key:"clone",value:function(){return new e(this.x,this.y)}},{key:"dotProduct",value:function(e){var t=this.normalized,n=e.normalized;return t.x*n.x+t.y*n.y}},{key:"length",get:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"lengthSqr",get:function(){return this.x*this.x+this.y*this.y}},{key:"normalized",get:function(){return new e(this.x/this.length,this.y/this.length)}},{key:"deg",get:function(){return 180*this.rad/Math.PI}},{key:"rad",get:function(){return Math.atan2(this.x,-this.y)}}],[{key:"fromDeg",value:function(t){return e.fromRad(t*(Math.PI/180))}},{key:"fromRad",value:function(t){return new e(Math.sin(t),Math.cos(t))}}]),e}();t["default"]=a},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(7),a=n(14),i=n(11),o=r(i),s=n(2),c=r(s);t["default"]=function(e,t){var n=arguments.length<=2||void 0===arguments[2]?c["default"].speed.movement:arguments[2],r=arguments.length<=3||void 0===arguments[3]?a.NO_EASING:arguments[3];if(!(t instanceof o["default"]))throw new TypeError("Target argument passed to moveToPoint action needs to be a point");return{type:u.MOVE_TO_POINT,entity:e,target:t,speed:n,easing:r}}},function(e,t){"use strict";function n(e,t,n,r){return n*e/r+t}function r(e,t,n,r){return n*(e/=r)*e+t}function u(e,t,n,r){return-n*(e/=r)*(e-2)+t}function a(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}function i(e,t,n,r){return n*(e/=r)*e*e+t}function o(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function s(e,t,n,r){return(e/=r/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}function c(e,t,n,r){return n*(e/=r)*e*e*e+t}function f(e,t,n,r){return-n*((e=e/r-1)*e*e*e-1)+t}function _(e,t,n,r){return(e/=r/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t}function l(e,t,n,r){return n*(e/=r)*e*e*e*e+t}function d(e,t,n,r){return n*((e=e/r-1)*e*e*e*e+1)+t}function E(e,t,n,r){return(e/=r/2)<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t}function h(e,t,n,r){return-n*Math.cos(e/r*(Math.PI/2))+n+t}function T(e,t,n,r){return n*Math.sin(e/r*(Math.PI/2))+t}function I(e,t,n,r){return-n/2*(Math.cos(Math.PI*e/r)-1)+t}function O(e,t,n,r){return 0==e?t:n*Math.pow(2,10*(e/r-1))+t}function A(e,t,n,r){return e==r?t+n:n*(-Math.pow(2,-10*e/r)+1)+t}function y(e,t,n,r){return 0==e?t:e==r?t+n:(e/=r/2)<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(-Math.pow(2,-10*--e)+2)+t}function N(e,t,n,r){return-n*(Math.sqrt(1-(e/=r)*e)-1)+t}function p(e,t,n,r){return n*Math.sqrt(1-(e=e/r-1)*e)+t}function v(e,t,n,r){return(e/=r/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t}function S(e,t,n,r){var u=1.70158,a=0,i=n;return 0==e?t:1==(e/=r)?t+n:(a||(a=.3*r),i<Math.abs(n)?(i=n,u=a/4):u=a/(2*Math.PI)*Math.asin(n/i),-(i*Math.pow(2,10*(e-=1))*Math.sin((e*r-u)*(2*Math.PI)/a))+t)}function U(e,t,n,r){var u=1.70158,a=0,i=n;return 0==e?t:1==(e/=r)?t+n:(a||(a=.3*r),i<Math.abs(n)?(i=n,u=a/4):u=a/(2*Math.PI)*Math.asin(n/i),i*Math.pow(2,-10*e)*Math.sin((e*r-u)*(2*Math.PI)/a)+n+t)}function w(e,t,n,r){var u=1.70158,a=0,i=n;return 0==e?t:2==(e/=r/2)?t+n:(a||(a=r*(.3*1.5)),i<Math.abs(n)?(i=n,u=a/4):u=a/(2*Math.PI)*Math.asin(n/i),1>e?-.5*(i*Math.pow(2,10*(e-=1))*Math.sin((e*r-u)*(2*Math.PI)/a))+t:i*Math.pow(2,-10*(e-=1))*Math.sin((e*r-u)*(2*Math.PI)/a)*.5+n+t)}function m(e,t,n,r,u){return void 0==u&&(u=1.70158),n*(e/=r)*e*((u+1)*e-u)+t}function M(e,t,n,r,u){return void 0==u&&(u=1.70158),n*((e=e/r-1)*e*((u+1)*e+u)+1)+t}function g(e,t,n,r,u){return void 0==u&&(u=1.70158),(e/=r/2)<1?n/2*(e*e*(((u*=1.525)+1)*e-u))+t:n/2*((e-=2)*e*(((u*=1.525)+1)*e+u)+2)+t}function P(e,t,n,r){return n-C(r-e,0,n,r)+t}function C(e,t,n,r){return(e/=r)<1/2.75?n*(7.5625*e*e)+t:2/2.75>e?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:2.5/2.75>e?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t}function b(e,t,n,r){return r/2>e?.5*P(2*e,0,n,r)+t:.5*C(2*e-r,0,n,r)+.5*n+t}function x(e){switch(e){case R:return n;case k:return r;case B:return u;case D:return a;case Q:return i;case j:return o;case z:return s;case L:return c;case q:return f;case V:return _;case X:return l;case K:return d;case G:return E;case Y:return h;case F:return T;case H:return I;case W:return O;case J:return A;case Z:return y;case $:return N;case ee:return p;case te:return v;case ne:return S;case re:return U;case ue:return w;case ae:return m;case ie:return M;case oe:return g;case se:return P;case ce:return C;case fe:return b}}Object.defineProperty(t,"__esModule",{value:!0}),t.noEasing=n,t.easeInQuad=r,t.easeOutQuad=u,t.easeInOutQuad=a,t.easeInCubic=i,t.easeOutCubic=o,t.easeInOutCubic=s,t.easeInQuart=c,t.easeOutQuart=f,t.easeInOutQuart=_,t.easeInQuint=l,t.easeOutQuint=d,t.easeInOutQuint=E,t.easeInSine=h,t.easeOutSine=T,t.easeInOutSine=I,t.easeInExpo=O,t.easeOutExpo=A,t.easeInOutExpo=y,t.easeInCirc=N,t.easeOutCirc=p,t.easeInOutCirc=v,t.easeInElastic=S,t.easeOutElastic=U,t.easeInOutElastic=w,t.easeInBack=m,t.easeOutBack=M,t.easeInOutBack=g,t.easeInBounce=P,t.easeOutBounce=C,t.easeInOutBounce=b,t.getByType=x;var R=t.NO_EASING="NO_EASING",k=t.EASE_IN_QUAD="EASE_IN_QUAD",B=t.EASE_OUT_QUAD="EASE_OUT_QUAD",D=t.EASE_IN_OUT_QUAD="EASE_IN_OUT_QUAD",Q=t.EASE_IN_CUBIC="EASE_IN_CUBIC",j=t.EASE_OUT_CUBIC="EASE_OUT_CUBIC",z=t.EASE_IN_OUT_CUBIC="EASE_IN_OUT_CUBIC",L=t.EASE_IN_QUART="EASE_IN_QUART",q=t.EASE_OUT_QUART="EASE_OUT_QUART",V=t.EASE_IN_OUT_QUART="EASE_IN_OUT_QUART",X=t.EASE_IN_QUINT="EASE_IN_QUINT",K=t.EASE_OUT_QUINT="EASE_OUT_QUINT",G=t.EASE_IN_OUT_QUINT="EASE_IN_OUT_QUINT",Y=t.EASE_IN_SINE="EASE_IN_SINE",F=t.EASE_OUT_SINE="EASE_OUT_SINE",H=t.EASE_IN_OUT_SINE="EASE_IN_OUT_SINE",W=t.EASE_IN_EXPO="EASE_IN_EXPO",J=t.EASE_OUT_EXPO="EASE_OUT_EXPO",Z=t.EASE_IN_OUT_EXPO="EASE_IN_OUT_EXPO",$=t.EASE_IN_CIRC="EASE_IN_CIRC",ee=t.EASE_OUT_CIRC="EASE_OUT_CIRC",te=t.EASE_IN_OUT_CIRC="EASE_IN_OUT_CIRC",ne=t.EASE_IN_ELASTIC="EASE_IN_ELASTIC",re=t.EASE_OUT_ELASTIC="EASE_OUT_ELASTIC",ue=t.EASE_IN_OUT_ELASTIC="EASE_IN_OUT_ELASTIC",ae=t.EASE_IN_BACK="EASE_IN_BACK",ie=t.EASE_OUT_BACK="EASE_OUT_BACK",oe=t.EASE_IN_OUT_BACK="EASE_IN_OUT_BACK",se=t.EASE_IN_BOUNCE="EASE_IN_BOUNCE",ce=t.EASE_OUT_BOUNCE="EASE_OUT_BOUNCE",fe=t.EASE_IN_OUT_BOUNCE="EASE_IN_OUT_BOUNCE"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7);t["default"]=function(e,t){return{type:r.ANIMATE,entity:e,animation:t}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(){var e=Math.min(window.innerWidth/o["default"].gameDimensions.w,window.innerHeight/o["default"].gameDimensions.h);c.scale.x=e,c.scale.y=e;var t={w:Math.ceil(o["default"].gameDimensions.w*e),h:Math.ceil(o["default"].gameDimensions.h*e)};f.resize(t.w,t.h),f.view.style.left=(window.innerWidth-t.w)/2+"px",f.view.style.top=(window.innerHeight-t.h)/2+"px"}function a(e){if(s)throw new Error("resize is already initialized");c=e.stage,f=e.renderer,window.addEventListener("resize",u),u(),s=!0}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),o=r(i),s=!1,c=null,f=null;t["default"]={init:a}}]);