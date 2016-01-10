!function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={exports:{},id:r,loaded:!1};return e[r].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var u=n(4),i=r(u),a=n(5),o=r(a),s=n(11),f=r(s),d=n(10),l=r(d),c=n(36),p=r(c),y=n(8),v=r(y),m=n(28),g=(r(m),(0,i["default"])()),h=(0,f["default"])(),_=(0,o["default"])({store:h});l["default"].init({stage:_,renderer:g}),p["default"].init({store:h,stage:_}),function b(){requestAnimationFrame(b);var e=h.getState();Object.keys(e.entities).forEach(function(e){return h.dispatch((0,v["default"])(e))}),p["default"].update(),g.render(_)}()},function(e,t){e.exports=PIXI},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(3),i=r(u);t["default"]=(0,i["default"])({speed:50,margin:250,gameDimensions:{w:2880,h:1800}})},function(e,t){"use strict";function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}e.exports=function r(e){return Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){!e.hasOwnProperty(t)||null===e[t]||"object"!==n(e[t])&&"function"!=typeof e[t]||Object.isFrozen(e[t])||r(e[t])}),e}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),i=r(u),a=n(2),o=r(a);t["default"]=function(){var e=i["default"].autoDetectRenderer(o["default"].gameDimensions.w,o["default"].gameDimensions.h,{backgroundColor:1087931,resolution:window.devicePixelRatio,autoResize:!0});return e.view.style.position="absolute",document.body.appendChild(e.view),e}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),i=r(u),a=n(6),o=r(a),s=n(2),f=r(s);t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?{store:null}:arguments[0],t=e.store,n=new i["default"].Container;if(n.interactive=!0,n.hitArea=new i["default"].Rectangle(0,0,f["default"].gameDimensions.w,f["default"].gameDimensions.w),t){var r=function(e){var r=e.data;return t.dispatch((0,o["default"])(r.getLocalPosition(n),f["default"].speed))};n.touchstart=r,n.click=r}return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7);t["default"]=function(e,t){return{type:r.MOVE_TO_TAP,position:e,speed:t}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(e){switch(e){case f:return a["default"];case d:return s["default"];case l:return moveToTap}}Object.defineProperty(t,"__esModule",{value:!0}),t.MOVE_TO_TAP=t.TINT=t.UPDATE=void 0,t.getByType=u;var i=n(8),a=r(i),o=n(9),s=r(o),f=t.UPDATE="UPDATE",d=t.TINT="TINT",l=t.MOVE_TO_TAP="MOVE_TO_TAP"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7);t["default"]=function(e){return{type:r.UPDATE,entity:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7);t["default"]=function(e){return{type:r.TINT,entity:e}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(){var e=Math.min(window.innerWidth/o["default"].gameDimensions.w,window.innerHeight/o["default"].gameDimensions.h);f.scale.x=e,f.scale.y=e;var t={w:Math.ceil(o["default"].gameDimensions.w*e),h:Math.ceil(o["default"].gameDimensions.h*e)};d.resize(t.w,t.h),d.view.style.left=(window.innerWidth-t.w)/2+"px",d.view.style.top=(window.innerHeight-t.h)/2+"px"}function i(e){if(s)throw new Error("resize is already initialized");f=e.stage,d=e.renderer,window.addEventListener("resize",u),u(),s=!0}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),o=r(a),s=!1,f=null,d=null;t["default"]={init:i}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(12),i=n(22),a=r(i),o=n(23),s=r(o),f=n(24),d=r(f),l=n(25),c=r(l),p=n(26),y=r(p),v=n(27),m=r(v),g=n(7),h=n(2),_=r(h),b=n(28),w=r(b);t["default"]=function(){var e=(0,u.createStore)(w["default"],{entities:{siluna:{hasSprite:(0,y["default"])("images/siluna.png",{anchor:{x:.5,y:.1},position:{x:_["default"].gameDimensions.w/2,y:_["default"].gameDimensions.h/2}}),moves:(0,a["default"])(-10,10),rotates:(0,c["default"])(.05)},sirena:{hasSprite:(0,y["default"])("images/sirena.png"),movesTo:(0,s["default"])(_["default"].gameDimensions.w-_["default"].margin,_["default"].gameDimensions.h-_["default"].margin,_["default"].speed)},sirena2:{hasSprite:(0,y["default"])("images/sirena.png",{position:{x:_["default"].gameDimensions.w,y:_["default"].gameDimensions.h}}),movesTo:(0,s["default"])(_["default"].margin,_["default"].margin,_["default"].speed),movesToTap:(0,d["default"])(_["default"].speed)},sirena3:{hasSprite:(0,y["default"])("images/sirena.png",{position:{x:0,y:_["default"].gameDimensions.h}}),movesTo:(0,s["default"])(_["default"].gameDimensions.w-_["default"].margin,_["default"].margin,_["default"].speed)},sirena4:{hasSprite:(0,y["default"])("images/sirena.png",{position:{x:_["default"].gameDimensions.w,y:0}}),movesTo:(0,s["default"])(_["default"].margin,_["default"].gameDimensions.h-_["default"].margin,_["default"].speed)},sirena5:{hasSprite:(0,y["default"])("images/sirena.png",{position:{x:_["default"].gameDimensions.w/2,y:0}}),movesTo:(0,s["default"])(_["default"].gameDimensions.w/2,_["default"].gameDimensions.h-_["default"].margin,_["default"].speed)},sirena6:{hasSprite:(0,y["default"])("images/sirena.png",{position:{x:0,y:_["default"].gameDimensions.h/2}}),movesTo:(0,s["default"])(_["default"].gameDimensions.w-_["default"].margin,_["default"].gameDimensions.h/2,_["default"].speed)},sirena7:{hasSprite:(0,y["default"])("images/sirena.png",{position:{x:_["default"].gameDimensions.w,y:_["default"].gameDimensions.h/2}}),movesTo:(0,s["default"])(_["default"].margin,_["default"].gameDimensions.h/2,_["default"].speed)},sirena8:{hasSprite:(0,y["default"])("images/sirena.png",{position:{x:_["default"].gameDimensions.w/2,y:_["default"].gameDimensions.h}}),movesTo:(0,s["default"])(_["default"].gameDimensions.w/2,_["default"].margin,_["default"].speed)},sinalta:{hasSprite:(0,y["default"])("images/sirena.png",{anchor:{x:.5,y:.1},position:{x:_["default"].gameDimensions.w/2,y:_["default"].gameDimensions.h/2}}),moves:(0,a["default"])(3,4),rotates:(0,c["default"])(.01),respondsToTap:(0,m["default"])(g.TINT,"sinalta")}}});return e}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var u=n(13),i=r(u),a=n(15),o=r(a),s=n(19),f=r(s),d=n(20),l=r(d),c=n(21),p=r(c);t.createStore=i["default"],t.combineReducers=o["default"],t.bindActionCreators=f["default"],t.applyMiddleware=l["default"],t.compose=p["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){function n(){return f}function r(e){d.push(e);var t=!0;return function(){if(t){t=!1;var n=d.indexOf(e);d.splice(n,1)}}}function u(e){if(!a["default"](e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,f=s(f,e)}finally{l=!1}return d.slice().forEach(function(e){return e()}),e}function i(e){s=e,u({type:o.INIT})}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var s=e,f=t,d=[],l=!1;return u({type:o.INIT}),{dispatch:u,subscribe:r,getState:n,replaceReducer:i}}t.__esModule=!0,t["default"]=u;var i=n(14),a=r(i),o={INIT:"@@redux/INIT"};t.ActionTypes=o},function(e,t){"use strict";function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function r(e){if(!e||"object"!==("undefined"==typeof e?"undefined":n(e)))return!1;var t="function"==typeof e.constructor?Object.getPrototypeOf(e):Object.prototype;if(null===t)return!0;var r=t.constructor;return"function"==typeof r&&r instanceof r&&u(r)===i}t.__esModule=!0,t["default"]=r;var u=function(e){return Function.prototype.toString.call(e)},i=u(Object);e.exports=t["default"]},function(e,t,n){(function(r){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){var n=t&&t.type,r=n&&'"'+n.toString()+'"'||"an action";return'Reducer "'+e+'" returned undefined handling '+r+". To ignore an action, you must explicitly return the previous state."}function a(e,t,n){var r=Object.keys(t),u=n&&n.type===f.ActionTypes.INIT?"initialState argument passed to createStore":"previous state received by the reducer";if(0===r.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!l["default"](e))return"The "+u+' has unexpected type of "'+{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following '+('keys: "'+r.join('", "')+'"');var i=Object.keys(e).filter(function(e){return r.indexOf(e)<0});return i.length>0?"Unexpected "+(i.length>1?"keys":"key")+" "+('"'+i.join('", "')+'" found in '+u+". ")+"Expected to find one of the known reducer keys instead: "+('"'+r.join('", "')+'". Unexpected keys will be ignored.'):void 0}function o(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:f.ActionTypes.INIT});if("undefined"==typeof r)throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var u="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:u}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+f.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function s(e){var t,n=v["default"](e,function(e){return"function"==typeof e});try{o(n)}catch(u){t=u}var s=p["default"](n,function(){});return function(e,u){if(void 0===e&&(e=s),t)throw t;var o=!1,f=p["default"](n,function(t,n){var r=e[n],a=t(r,u);if("undefined"==typeof a){var s=i(n,u);throw new Error(s)}return o=o||a!==r,a});if("production"!==r.env.NODE_ENV){var d=a(e,f,u);d&&console.error(d)}return o?f:e}}t.__esModule=!0,t["default"]=s;var f=n(13),d=n(14),l=u(d),c=n(17),p=u(c),y=n(18),v=u(y);e.exports=t["default"]}).call(t,n(16))},function(e,t){"use strict";function n(){f=!1,a.length?s=a.concat(s):d=-1,s.length&&r()}function r(){if(!f){var e=setTimeout(n);f=!0;for(var t=s.length;t;){for(a=s,s=[];++d<t;)a&&a[d].run();d=-1,t=s.length}a=null,f=!1,clearTimeout(e)}}function u(e,t){this.fun=e,this.array=t}function i(){}var a,o=e.exports={},s=[],f=!1,d=-1;o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new u(e,t)),1!==s.length||f||setTimeout(r,0)},u.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=i,o.addListener=i,o.once=i,o.off=i,o.removeListener=i,o.removeAllListeners=i,o.emit=i,o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){"use strict";function n(e,t){return Object.keys(e).reduce(function(n,r){return n[r]=t(e[r],r),n},{})}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){return Object.keys(e).reduce(function(n,r){return t(e[r])&&(n[r]=e[r]),n},{})}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function u(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){return function(){return t(e.apply(void 0,arguments))}}function a(e,t){if("function"==typeof e)return i(e,t);if("object"!==("undefined"==typeof e?"undefined":r(e))||null===e||void 0===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":"undefined"==typeof e?"undefined":r(e))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');return s["default"](e,function(e){return i(e,t)})}t.__esModule=!0,t["default"]=a;var o=n(17),s=u(o);e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(e){return function(n,r){var u=e(n,r),a=u.dispatch,s=[],f={getState:u.getState,dispatch:function(e){return a(e)}};return s=t.map(function(e){return e(f)}),a=o["default"].apply(void 0,s)(u.dispatch),i({},u,{dispatch:a})}}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=u;var a=n(21),o=r(a);e.exports=t["default"]},function(e,t){"use strict";function n(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(3),i=r(u);t["default"]=function(e,t){return(0,i["default"])({dx:e,dy:t})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(3),i=r(u);t["default"]=function(e,t){var n=arguments.length<=2||void 0===arguments[2]?1:arguments[2];return(0,i["default"])({x:e,y:t,speed:n})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(3),i=r(u);t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?1:arguments[0];return(0,i["default"])({speed:e})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(3),i=r(u);t["default"]=function(e){return(0,i["default"])({dr:e})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(3),i=r(u),a={position:{x:0,y:0},anchor:{x:.5,y:.5},rotation:0,tint:16777215};t["default"]=function(e){var t=arguments.length<=1||void 0===arguments[1]?a:arguments[1],n=t.position,r=void 0===n?a.position:n,u=t.anchor,o=void 0===u?a.anchor:u,s=t.rotation,f=void 0===s?a.rotation:s,d=t.tint,l=void 0===d?a.tint:d;return(0,i["default"])({image:e,position:r,anchor:o,rotation:f,tint:l})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(3),i=r(u);t["default"]=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];return(0,i["default"])({actionType:e,args:n})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(12),i=n(29),a=r(i);t["default"]=(0,u.combineReducers)({entities:a["default"]})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return e[t.entity]}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),s=n(30),f=r(s),d=n(34),l=r(d),c=n(35),p=r(c);t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments.length<=1||void 0===arguments[1]?null:arguments[1];switch(t.type){case o.UPDATE:return a({},e,u({},t.entity,(0,f["default"])(i(e,t))));case o.MOVE_TO_TAP:return(0,p["default"])(e,t.position,t.speed);case o.TINT:return a({},e,u({},t.entity,(0,l["default"])(i(e,t))))}return e}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var u=function(){function e(e,t){var n=[],r=!0,u=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){u=!0,i=s}finally{try{!r&&o["return"]&&o["return"]()}finally{if(u)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var a=n(31),o=r(a),s=n(32),f=r(s),d=n(33),l=r(d),c=n(3),p=r(c),y={moves:o["default"],movesTo:f["default"],rotates:l["default"]};t["default"]=function(e){var t=e.hasSprite;if(!t)return e;var n=i({},e);return Object.keys(e).filter(function(e){return void 0!==y[e]}).forEach(function(r){var i=e[r],a=y[r](i,t),o=u(a,2);i=o[0],t=o[1],i&&(n[r]=i)}),t&&(n.hasSprite=t),(0,p["default"])(n)}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),a=r(i),o=n(22),s=r(o),f=n(3),d=r(f);t["default"]=function(e,t){var n=e.dx,r=e.dy,i=t.position.x+n,o=t.position.y+r;return(i>a["default"].gameDimensions.w||0>i)&&(n=-1*n),(o>a["default"].gameDimensions.h||0>o)&&(r=-1*r),[(0,s["default"])(n,r),(0,d["default"])(u({},t,{position:{x:i,y:o}}))]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(e){var t=e.x,n=e.y;if(0===t||0===n)return 1;var r=Math.abs(t),u=Math.abs(n);return r>u?u/r:r/u}function i(e,t,n){var r={x:e.x<0?-1*a(e.x,e.y,t)*n:a(e.x,e.y,t)*n,y:e.y<0?-1*a(e.y,e.x,t)*n:a(e.y,e.x,t)*n};return Math.abs(r.x)>=Math.abs(e.x)&&(r.x=e.x),Math.abs(r.y)>=Math.abs(e.y)&&(r.y=e.y),r}function a(e,t,n){return Math.abs(e)<Math.abs(t)?n:1}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),f=r(s);t["default"]=function(e,t){var n={x:e.x,y:e.y},r=e.speed,a={x:t.position.x,y:t.position.y},s={x:n.x-a.x,y:n.y-a.y},d=u(s),l=i(s,d,r);return a.x+=l.x,a.y+=l.y,[a.x===n.x&&a.y===n.y?void 0:e,(0,f["default"])(o({},t,{position:a}))]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=r(i);t["default"]=function(e,t){var n=e.dr,r=t.rotation+n;return[e,(0,a["default"])(u({},t,{rotation:r}))]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=r(i);t["default"]=function(e){var t=e.hasSprite;return t?(0,a["default"])(u({},e,{hasSprite:u({},t,{tint:16777215*Math.random()})})):e}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=r(i),o=n(23),s=r(o);t["default"]=function(e,t,n){var r={};return Object.keys(e).forEach(function(i){var o=e[i],f=o.movesToTap;r[i]=f?(0,a["default"])(u({},o,{movesTo:(0,s["default"])(t.x,t.y,n)})):o}),r}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e){if(v)throw new Error("sprite manager is already initialized");m=e.store,g=e.stage,h=new Map,d()}function a(e){return h.get(e)}function o(e){var t=e.image,n=e.position,r=e.anchor,u=e.rotation,i=e.tint,a=new p["default"].Sprite.fromImage(t);return a.position=n,a.anchor=r,a.rotation=u,a.tint=i,a}function s(e,t){var n=t.actionType,r=t.args;e.interactive=!0;var i=(0,y.getByType)(n);e.click=function(){return m.dispatch(i.apply(void 0,u(r)))},e.touchstart=function(){return m.dispatch(i.apply(void 0,u(r)))}}function f(e,t,n){var r=o(t);return n&&s(r,n),g.addChild(r),h.set(e,r),r}function d(){var e=m.getState(),t=!0,n=!1,r=void 0;try{for(var u,i=h[Symbol.iterator]();!(t=(u=i.next()).done);t=!0){var a=l(u.value,2),o=a[0],s=a[1],d=e.entities[o];if(d){if(d.hasSprite){var c=d.hasSprite,p=c.position,y=c.rotation,v=c.tint;s.position=p,s.rotation=y,s.tint=v}}else h["delete"](o)}}catch(g){n=!0,r=g}finally{try{!t&&i["return"]&&i["return"]()}finally{if(n)throw r}}Object.keys(e.entities).forEach(function(t){var n=e.entities[t],r=n.hasSprite,u=n.respondsToTap;!h.has(t)&&r&&f(t,r,u)})}var l=function(){function e(e,t){var n=[],r=!0,u=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){u=!0,i=s}finally{try{!r&&o["return"]&&o["return"]()}finally{if(u)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),p=r(c),y=n(7),v=!1,m=null,g=null,h=null;t["default"]={init:i,update:d,get:a}}]);