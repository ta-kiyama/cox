module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/effects/$await.js":
/*!*******************************!*\
  !*** ./src/effects/$await.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbols */ \"./src/symbols.js\");\n/* harmony import */ var _generateEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generateEffect */ \"./src/generateEffect.js\");\n/* harmony import */ var _generateEffectProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generateEffectProps */ \"./src/generateEffectProps.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_generateEffectProps__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(options => Object(_generateEffect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_symbols__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cox, options)));\n\n//# sourceURL=webpack:///./src/effects/$await.js?");

/***/ }),

/***/ "./src/effects/$call.js":
/*!******************************!*\
  !*** ./src/effects/$call.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbols */ \"./src/symbols.js\");\n/* harmony import */ var _generateEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generateEffect */ \"./src/generateEffect.js\");\n/* harmony import */ var _generateEffectProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generateEffectProps */ \"./src/generateEffectProps.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_generateEffectProps__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(options => Object(_generateEffect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_symbols__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call, options)));\n\n//# sourceURL=webpack:///./src/effects/$call.js?");

/***/ }),

/***/ "./src/effects/$chain.js":
/*!*******************************!*\
  !*** ./src/effects/$chain.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbols */ \"./src/symbols.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _generateEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generateEffect */ \"./src/generateEffect.js\");\n/* harmony import */ var _generateEffectProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generateEffectProps */ \"./src/generateEffectProps.js\");\n\n\n\n\n\nconst generateChainEffectCallback = function* (thisArg, ...actors) {\n  const lastResolver = !Array.isArray(actors[actors.length - 1]) && actors.pop();\n\n  for (const [selector, ...args] of actors) {\n    const callback = selector(thisArg);\n    thisArg = yield _index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].call(callback, thisArg, ...args);\n  }\n\n  if (lastResolver) thisArg = yield Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lastResolver, thisArg);\n\n  return thisArg;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_generateEffectProps__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(options => Object(_generateEffect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_symbols__WEBPACK_IMPORTED_MODULE_0__[\"default\"].chain, options, generateChainEffectCallback)));\n\n//# sourceURL=webpack:///./src/effects/$chain.js?");

/***/ }),

/***/ "./src/effects/$cox.js":
/*!*****************************!*\
  !*** ./src/effects/$cox.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbols */ \"./src/symbols.js\");\n/* harmony import */ var _generateEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generateEffect */ \"./src/generateEffect.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_generateEffect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_symbols__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cox));\n\n//# sourceURL=webpack:///./src/effects/$cox.js?");

/***/ }),

/***/ "./src/effects/$new.js":
/*!*****************************!*\
  !*** ./src/effects/$new.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbols */ \"./src/symbols.js\");\n/* harmony import */ var _generateEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generateEffect */ \"./src/generateEffect.js\");\n/* harmony import */ var _generateEffectProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generateEffectProps */ \"./src/generateEffectProps.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_generateEffectProps__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(options => Object(_generateEffect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_symbols__WEBPACK_IMPORTED_MODULE_0__[\"default\"].new, options)));\n\n//# sourceURL=webpack:///./src/effects/$new.js?");

/***/ }),

/***/ "./src/effects/$throw.js":
/*!*******************************!*\
  !*** ./src/effects/$throw.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbols */ \"./src/symbols.js\");\n/* harmony import */ var _generateEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generateEffect */ \"./src/generateEffect.js\");\n/* harmony import */ var _generateEffectProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generateEffectProps */ \"./src/generateEffectProps.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_generateEffectProps__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(options => Object(_generateEffect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_symbols__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cox, options)));\n\n//# sourceURL=webpack:///./src/effects/$throw.js?");

/***/ }),

/***/ "./src/execNextArg.js":
/*!****************************!*\
  !*** ./src/execNextArg.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbols */ \"./src/symbols.js\");\n\n\n\nconst execNextArg = value => {\n  const {\n    callback,\n    args,\n    thisArg,\n    type,\n    options\n  } = value || {};\n\n  switch (type) {\n    case _symbols__WEBPACK_IMPORTED_MODULE_1__[\"default\"].cox:\n      return [callback(...args), options];\n    case _symbols__WEBPACK_IMPORTED_MODULE_1__[\"default\"].call:\n      return [callback.call(thisArg, ...args), options];\n    case _symbols__WEBPACK_IMPORTED_MODULE_1__[\"default\"].new:\n      return [new callback(...args), options];\n    case _symbols__WEBPACK_IMPORTED_MODULE_1__[\"default\"].chain:\n      return [_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wrap(callback)(thisArg, ...args), options];\n    default:\n      return [value, {}];\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (execNextArg);\n\n//# sourceURL=webpack:///./src/execNextArg.js?");

/***/ }),

/***/ "./src/generateEffect.js":
/*!*******************************!*\
  !*** ./src/generateEffect.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./symbols */ \"./src/symbols.js\");\n\n\nconst generateEffect = (typeSymbol, options = {}, defaultEffect) => (...args) => {\n  if (Array.isArray(args[0])) args = args[0];\n\n  const callback = defaultEffect || args.shift();\n  const thisArg = (() => {\n    switch (typeSymbol) {\n      case _symbols__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call:\n        return args.shift();\n      case _symbols__WEBPACK_IMPORTED_MODULE_0__[\"default\"].chain:\n        return args.shift()();\n      default:\n        return undefined;\n    }\n  })();\n\n  return {\n    callback,\n    args,\n    thisArg,\n    type: typeSymbol,\n    options: {\n      isAsync: !!options.isAsync,\n      isError: !!options.isError\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (generateEffect);\n\n//# sourceURL=webpack:///./src/generateEffect.js?");

/***/ }),

/***/ "./src/generateEffectProps.js":
/*!************************************!*\
  !*** ./src/generateEffectProps.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst generateEffectProps = callback => options => ({\n  value: callback(options),\n  writable: true,\n  configurable: true\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (generateEffectProps);\n\n//# sourceURL=webpack:///./src/generateEffectProps.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: coxSymbols, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./symbols */ \"./src/symbols.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"coxSymbols\", function() { return _symbols__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _utils_wrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/wrap */ \"./src/utils/wrap.js\");\n/* harmony import */ var _utils_step__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/step */ \"./src/utils/step.js\");\n/* harmony import */ var _utils_stepAsync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/stepAsync */ \"./src/utils/stepAsync.js\");\n/* harmony import */ var _effects_$cox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./effects/$cox */ \"./src/effects/$cox.js\");\n/* harmony import */ var _effects_$call__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./effects/$call */ \"./src/effects/$call.js\");\n/* harmony import */ var _effects_$new__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./effects/$new */ \"./src/effects/$new.js\");\n/* harmony import */ var _effects_$chain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./effects/$chain */ \"./src/effects/$chain.js\");\n/* harmony import */ var _effects_$await__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./effects/$await */ \"./src/effects/$await.js\");\n/* harmony import */ var _effects_$throw__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./effects/$throw */ \"./src/effects/$throw.js\");\n\n\n\n\n\n\n\n\n\n\n\nObject.defineProperties(_effects_$cox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  wrap: _utils_wrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  step: _utils_step__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  stepAsync: _utils_stepAsync__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  call: Object(_effects_$call__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(),\n  new: Object(_effects_$new__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(),\n  chain: Object(_effects_$chain__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(),\n  await: Object(_effects_$await__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({ isAsync: true }),\n  throw: Object(_effects_$throw__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({ isError: true })\n});\n\nObject.defineProperties(_effects_$cox__WEBPACK_IMPORTED_MODULE_4__[\"default\"].await, {\n  call: Object(_effects_$call__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({ isAsync: true }),\n  new: Object(_effects_$new__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({ isAsync: true }),\n  chain: Object(_effects_$chain__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ isAsync: true })\n});\n\nObject.defineProperties(_effects_$cox__WEBPACK_IMPORTED_MODULE_4__[\"default\"].throw, {\n  call: Object(_effects_$call__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({ isError: true }),\n  new: Object(_effects_$new__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({ isError: true }),\n  chain: Object(_effects_$chain__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ isError: true }),\n  await: Object(_effects_$await__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({ isError: true, isAsync: true })\n});\n\nObject.defineProperties(_effects_$cox__WEBPACK_IMPORTED_MODULE_4__[\"default\"].throw.await, {\n  call: Object(_effects_$call__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({ isError: true, isAsync: true }),\n  new: Object(_effects_$new__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({ isError: true, isAsync: true }),\n  chain: Object(_effects_$chain__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ isError: true, isAsync: true })\n});\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_effects_$cox__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/symbols.js":
/*!************************!*\
  !*** ./src/symbols.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  cox: Symbol(\"cox\"),\n  call: Symbol(\"call\"),\n  new: Symbol(\"new\"),\n  chain: Symbol(\"chain\")\n});\n\n//# sourceURL=webpack:///./src/symbols.js?");

/***/ }),

/***/ "./src/utils/step.js":
/*!***************************!*\
  !*** ./src/utils/step.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _execNextArg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../execNextArg */ \"./src/execNextArg.js\");\n/* harmony import */ var _generateEffectProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generateEffectProps */ \"./src/generateEffectProps.js\");\n\n\n\nconst step = value => {\n  const [nextArg, options] = Object(_execNextArg__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value);\n\n  if (options.isAsync) throw new TypeError(\"cox-generator cannot use `await`. please use cox-async-generator instead.\");\n  if (options.isError) throw nextArg;\n\n  return nextArg;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_generateEffectProps__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(options => step)());\n\n//# sourceURL=webpack:///./src/utils/step.js?");

/***/ }),

/***/ "./src/utils/stepAsync.js":
/*!********************************!*\
  !*** ./src/utils/stepAsync.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _execNextArg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../execNextArg */ \"./src/execNextArg.js\");\n/* harmony import */ var _generateEffectProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generateEffectProps */ \"./src/generateEffectProps.js\");\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n\n\n\nconst stepAsync = (() => {\n  var _ref = _asyncToGenerator(function* (value) {\n    value = value instanceof Promise ? (yield value).value : value;\n\n    const [nextArg, options] = Object(_execNextArg__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value);\n\n    if (options.isError) throw nextArg;\n\n    return options.isAsync ? yield nextArg : nextArg;\n  });\n\n  return function stepAsync(_x) {\n    return _ref.apply(this, arguments);\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_generateEffectProps__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(options => stepAsync)());\n\n//# sourceURL=webpack:///./src/utils/stepAsync.js?");

/***/ }),

/***/ "./src/utils/wrap.js":
/*!***************************!*\
  !*** ./src/utils/wrap.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step */ \"./src/utils/step.js\");\n/* harmony import */ var _stepAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stepAsync */ \"./src/utils/stepAsync.js\");\n/* harmony import */ var _generateEffectProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generateEffectProps */ \"./src/generateEffectProps.js\");\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n\n\n\n\nconst step = _step__WEBPACK_IMPORTED_MODULE_0__[\"default\"].value;\nconst stepAsync = _stepAsync__WEBPACK_IMPORTED_MODULE_1__[\"default\"].value;\n\nconst wrap = gen => function wrap() {\n  const itr = gen.apply(this, arguments);\n  const firstResult = itr.next();\n  const isAsync = firstResult instanceof Promise;\n\n  if (isAsync) {\n    return _asyncToGenerator(function* () {\n      let { value, done } = yield firstResult;\n\n      while (!done) {\n        const nextArg = yield stepAsync(value);\n        const result = yield itr.next(nextArg);\n\n        value = result.value;\n        done = result.done;\n      }\n\n      return value;\n    })();\n  } else {\n    let { value, done } = firstResult;\n\n    while (!done) {\n      const nextArg = step(value);\n      const result = itr.next(nextArg);\n\n      value = result.value;\n      done = result.done;\n    }\n\n    return value;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_generateEffectProps__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(options => wrap)());\n\n//# sourceURL=webpack:///./src/utils/wrap.js?");

/***/ })

/******/ });