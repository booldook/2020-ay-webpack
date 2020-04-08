/*!
 * 
 * 				Created by booldook
 * 				Build Datetime: 2020-04-08 12:17:54
 * 			
 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./img/flight.png":
/*!************************!*\
  !*** ./img/flight.png ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAACnElEQVR4AezaAWRqcRTH8YeLEMIQHoYhPIRhGCIMD2EIIQzDQxjCMIQwhCEMYQgXD0MYwhAeQhhCGEIYQrg474uHiZd7b+de/e/Olw8AuKp+p75ZlmVZlmVZlmVZlmVZlmVZCZZDFV2cI4WsMtp4wQbyzwaXSCiriRVkhwB1JJD1HRtICC0kkHULCekOylk5LCAh9aCcVYdE8AQPlmKvkAh83YdglRFAInhFHpZSj5AYD+EIlkJFfEAiekMRlkI3kJgPoQRrzzzMITEsdR6C9RMS08qOeDqNIDGtUYG1RyUEkJgCu6Tu3wNkDwGaiJlVCHGutktqwl1DFHQQI8vDDKKghxhZVYiSIbwUf9f2MYaPhsu3Kx+ixEcOmp3+53ftbQtXx+IJNhANCpfUY1xhiFWMnVKGc3Uhyg+hiDAVUEMfc8ieJnCuPJYQLTsuqR4q6GCCAKKsBOdqQpQtUMIPtDDCGpKwCpzsDyQDGnCyM0gGlOFsTxCHzTPzrzoHBahpH80u0cdN2v+qc1ALe1fe8RXNRz6FmT+FOGSMKlS6gOwwQympme+IBR5RxxHUew4xuWsaM98RH/BxjZO07jNByFu8F/IzZA5xxAZj3OIMHlLvHhLCy6eXYW5r5otDZujh4lBOy4UI95nF1sx3wRIDNFDEQXYFyYg1ntFCCU7kYerwKJrgDufw4GTnEEe84QE15JGZhgf8Pj5EE8fIbMcHMpQ2GKGNMr5UHQjSNkEXFeTwZcvhPaWZ30cdBVifaiQ588O9j1sTpZnfxhmsiJ1CIpriXm/mWwPIDu8YoJ7MzLeKWG/N/N/4ld7Mt5pZmPl/26NDGwAAGIZh/1+98aGxFthSLggAAAAAtJh/SgyQAQbIAANkgAE6AAAAAGAB2yjQSPmosK8AAAAASUVORK5CYII=\");\n\n//# sourceURL=webpack:///./img/flight.png?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math.js */ \"./math.js\");\n/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_math_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_flight_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/flight.png */ \"./img/flight.png\");\n\r\n// const { sum, sub } = require('./math.js');\r\n\r\n\r\n\r\n\r\nconsole.log(Object(_math_js__WEBPACK_IMPORTED_MODULE_1__[\"sum\"])(10, 20));\r\nconsole.log(Object(_math_js__WEBPACK_IMPORTED_MODULE_1__[\"sub\"])(10, 20));\r\nconsole.log(\"v.1.0.0\");\r\nconsole.log(\"http://example.com\");\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\tdocument.querySelector(\".sample\").innerHTML = `<img src=\"${_img_flight_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}\">&nbsp;` + document.querySelector(\".sample\").innerHTML ;\r\n})\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./math.js":
/*!*****************!*\
  !*** ./math.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const sum = (a, b) => {\r\n\treturn a + b;\r\n}\r\nconst sub = (a, b) => {\r\n\treturn a - b;\r\n}\r\n\r\nmodule.exports = { sum, sub };\r\n\n\n//# sourceURL=webpack:///./math.js?");

/***/ })

/******/ });