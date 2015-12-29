/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _configManager = __webpack_require__(1);

	var _configManager2 = _interopRequireDefault(_configManager);

	var _rendererManager = __webpack_require__(2);

	var _rendererManager2 = _interopRequireDefault(_rendererManager);

	var _stageManager = __webpack_require__(3);

	var _stageManager2 = _interopRequireDefault(_stageManager);

	var _resizeManager = __webpack_require__(4);

	var _resizeManager2 = _interopRequireDefault(_resizeManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * boxes.js
	 *
	 * @author <a href="https://github.com/pahund">Patrick Hund</a>
	 * @since 27 Dec 2015
	 */

	_configManager2.default.init();
	_rendererManager2.default.init();
	_stageManager2.default.init();
	_resizeManager2.default.init();

	var config = _configManager2.default.get(),
	    renderer = _rendererManager2.default.get(),
	    stage = _stageManager2.default.get(),
	    loader = new PIXI.loaders.Loader();

	loader.add("boxes", "./data/boxes.json").load(onAssetsLoaded);

	function onAssetsLoaded(loader, res) {

	    var boxes = new PIXI.spine.Spine(res.boxes.spineData);
	    boxes.skeleton.setToSetupPose();
	    boxes.update(0);
	    boxes.autoUpdate = false;

	    // create a container for the spine animation and add the animation to it
	    var boxesCage = new PIXI.Container();
	    boxesCage.addChild(boxes);

	    // measure the spine animation and position it inside its container to align it to the origin
	    var localRect = boxes.getLocalBounds();
	    boxes.position.set(-localRect.x, -localRect.y);

	    // now we can scale, position and rotate the container as any other display object
	    var scale = Math.min(config.gameDimensions.w * 0.8 / boxesCage.width, config.gameDimensions.h * 0.8 / boxesCage.height);
	    boxesCage.scale.set(scale, scale);
	    boxesCage.position.set((config.gameDimensions.w - boxesCage.width) * 0.5, (config.gameDimensions.h - boxesCage.height) * 0.5);

	    // add the container to the stage
	    stage.addChild(boxesCage);

	    // once position and scaled, set the animation to play
	    var animations = ["wag", "twist", "coil", "wag2"];
	    var animationIndex = 0;

	    function switchAnimation() {
	        boxes.state.setAnimationByName(0, animations[animationIndex], true);
	        animationIndex = animationIndex === animations.length - 1 ? 0 : animationIndex + 1;
	    }

	    stage.touchstart = switchAnimation;
	    stage.click = switchAnimation;

	    animate();
	    function animate() {
	        requestAnimationFrame(animate);

	        //boxes.update(0.01666666666667);
	        boxes.update(0.005);

	        // render the container
	        renderer.render(stage);
	    }
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * configManager.js
	 *
	 * @author <a href="https://github.com/pahund">Patrick Hund</a>
	 * @since 29 Dec 2015
	 */

	var config = null;

	function init() {
	    if (config) {
	        throw new Error("config is already initialized");
	    }

	    var gameDimensions = {
	        w: 2880,
	        h: 1800
	    };

	    config = {
	        gameDimensions: gameDimensions
	    };
	}

	function get() {
	    if (!config) {
	        throw new Error("config has not been initialized");
	    }
	    return config;
	}

	exports.default = {
	    init: init,
	    get: get
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _configManager = __webpack_require__(1);

	var _configManager2 = _interopRequireDefault(_configManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var renderer = null; /**
	                      * rendererManager.js
	                      *
	                      * @author <a href="https://github.com/pahund">Patrick Hund</a>
	                      * @since 29 Dec 2015
	                      */

	function init() {
	    var config = _configManager2.default.get();
	    if (renderer) {
	        throw new Error("renderer is already initialized");
	    }
	    renderer = PIXI.autoDetectRenderer(config.gameDimensions.w, config.gameDimensions.h, {
	        backgroundColor: 0x1099bb,
	        resolution: window.devicePixelRatio,
	        autoResize: true
	    });

	    renderer.view.style.position = "absolute";
	    document.body.appendChild(renderer.view);
	}

	function get() {
	    if (!renderer) {
	        throw new Error("renderer has not been initialized");
	    }
	    return renderer;
	}

	exports.default = {
	    init: init,
	    get: get
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * stageManager.js
	 *
	 * @author <a href="https://github.com/pahund">Patrick Hund</a>
	 * @since 29 Dec 2015
	 */

	var stage = null;

	function init() {
	    if (stage) {
	        throw new Error("stage is already initialized");
	    }
	    stage = new PIXI.Container();
	    stage.interactive = true;
	}

	function get() {
	    if (!stage) {
	        throw new Error("stage has not been initialized");
	    }
	    return stage;
	}

	exports.default = {
	    init: init,
	    get: get
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _configManager = __webpack_require__(1);

	var _configManager2 = _interopRequireDefault(_configManager);

	var _stageManager = __webpack_require__(3);

	var _stageManager2 = _interopRequireDefault(_stageManager);

	var _rendererManager = __webpack_require__(2);

	var _rendererManager2 = _interopRequireDefault(_rendererManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialized = false; /**
	                          * resizeManager.js
	                          *
	                          * @author <a href="https://github.com/pahund">Patrick Hund</a>
	                          * @since 29 Dec 2015
	                          */

	function resize() {
	    var config = _configManager2.default.get(),
	        stage = _stageManager2.default.get(),
	        renderer = _rendererManager2.default.get();

	    // Determine which screen dimension is most constrained
	    var ratio = Math.min(window.innerWidth / config.gameDimensions.w, window.innerHeight / config.gameDimensions.h);

	    // Scale the view appropriately to fill that dimension
	    stage.scale.x = ratio;
	    stage.scale.y = ratio;

	    // Update the renderer dimensions
	    var rendererDimensions = {
	        w: Math.ceil(config.gameDimensions.w * ratio),
	        h: Math.ceil(config.gameDimensions.h * ratio)
	    };

	    renderer.resize(rendererDimensions.w, rendererDimensions.h);

	    renderer.view.style.left = (window.innerWidth - rendererDimensions.w) / 2 + "px";
	    renderer.view.style.top = (window.innerHeight - rendererDimensions.h) / 2 + "px";
	}

	function init() {
	    if (initialized) {
	        throw new Error("resize is already initialized");
	    }
	    window.addEventListener("resize", resize);
	    resize();
	    initialized = true;
	}

	exports.default = {
	    init: init
	};

/***/ }
/******/ ]);