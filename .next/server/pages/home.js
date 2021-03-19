module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/home/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/pages/component/button/index.less":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/pages/component/button/index.less ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/pages/component/index/index.less":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/pages/component/index/index.less ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".component-box {\n  padding-top: 20px;\n  display: flex;\n  overflow-y: auto;\n  max-width: 100%;\n  background: #fff;\n  position: relative;\n}\n.component-box .left-menu {\n  width: 20%;\n  overflow: hidden;\n  flex: none;\n  height: calc(100vh - 84px);\n}\n.component-box .left-menu .container {\n  height: 100%;\n  max-height: 100vh;\n  overflow: hidden;\n}\n.component-box .left-menu .container .menu-inline {\n  display: block;\n  min-height: 100%;\n  border-right: 1px solid #f0f0f0;\n}\n.component-box .left-menu .container .menu-item {\n  overflow: hidden;\n  font-size: 14px;\n  text-overflow: ellipsis;\n  height: 40px;\n  line-height: 40px;\n  padding-left: 40px;\n  box-sizing: border-box;\n  cursor: default;\n}\n.component-box .left-menu .container .menu-item-click {\n  cursor: pointer;\n}\n.component-box .left-menu .container .menu-item-name {\n  padding-left: 50px;\n  color: rgba(0, 0, 0, 0.85);\n}\n.component-box .left-menu .container .menu-item-name:hover {\n  color: #1890ff;\n}\n.component-box .left-menu .container .menu-item-group-name {\n  font-weight: bold;\n  margin: 5px 0;\n}\n.component-box .left-menu .container .menu-item-group-type-name {\n  padding-left: 45px;\n  color: rgba(0, 0, 0, 0.45);\n  margin: 5px 0;\n}\n.component-box .left-menu .container .menu-item-group-type-name::after {\n  content: \"\";\n  top: -2px;\n  position: relative;\n  display: block;\n  width: calc(100% - 20px);\n  height: 1px;\n  background: #f0f0f0;\n}\n.component-box .left-menu .container .menu-item-current {\n  background-color: #e6f7ff;\n  color: #1890ff;\n}\n.component-box .left-menu:hover .container {\n  overflow-y: auto;\n}\n.component-box .right-content {\n  min-height: 500px;\n  padding: 0 170px 32px 64px;\n}\n", "",{"version":3,"sources":["webpack://./src/pages/component/index/index.less"],"names":[],"mappings":"AAAA;EACI,iBAAA;EACA,aAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AACJ;AAPA;EASQ,UAAA;EACA,gBAAA;EACA,UAAA;EACA,0BAAA;AACR;AAbA;EAcY,YAAA;EACA,iBAAA;EACA,gBAAA;AAEZ;AAlBA;EAkBgB,cAAA;EACA,gBAAA;EACA,+BAAA;AAGhB;AAvBA;EAuBgB,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AAGhB;AAFgB;EACI,eAAA;AAIpB;AAFgB;EACI,kBAAA;EACA,0BAAA;AAIpB;AAFoB;EACI,cAAA;AAIxB;AADgB;EACI,iBAAA;EACA,aAAA;AAGpB;AADgB;EACI,kBAAA;EACA,0BAAA;EACA,aAAA;AAGpB;AAFoB;EACI,WAAA;EACA,SAAA;EACA,kBAAA;EACA,cAAA;EACA,wBAAA;EACA,WAAA;EACA,mBAAA;AAIxB;AA7DA;EA8DgB,yBAAA;EACA,cAAA;AAEhB;AACQ;EAEQ,gBAAA;AAAhB;AApEA;EA0EQ,iBAAA;EACA,0BAAA;AAHR","sourcesContent":[".component-box {\n    padding-top: 20px;\n    display: flex;\n    overflow-y: auto;\n    max-width: 100%;\n    background: #fff;\n    position: relative;\n\n    .left-menu {\n        width: 20%;\n        overflow: hidden;\n        flex: none;\n        height: calc(100vh - 84px);\n        .container {\n            height: 100%;\n            max-height: 100vh;\n            overflow: hidden;\n            .menu-inline {\n                display: block;\n                min-height: 100%;\n                border-right: 1px solid #f0f0f0;\n            }\n            .menu-item {\n                overflow: hidden;\n                font-size: 14px;\n                text-overflow: ellipsis;\n                height: 40px;\n                line-height: 40px;\n                padding-left: 40px;\n                box-sizing: border-box;\n                cursor: default;\n                &-click {\n                    cursor: pointer;\n                }\n                &-name {\n                    padding-left: 50px;\n                    color: rgba(0, 0, 0, 0.85);\n\n                    &:hover {\n                        color: #1890ff;\n                    }\n                }\n                &-group-name {\n                    font-weight: bold;\n                    margin: 5px 0;\n                }\n                &-group-type-name {\n                    padding-left: 45px;\n                    color: rgba(0, 0, 0, 0.45);\n                    margin: 5px 0;\n                    &::after {\n                        content: \"\";\n                        top: -2px;\n                        position: relative;\n                        display: block;\n                        width: calc(100% - 20px);\n                        height: 1px;\n                        background: #f0f0f0;\n                    }\n                }\n            }\n            .menu-item-current {\n                background-color: #e6f7ff;\n                color: #1890ff;\n            }\n        }\n        &:hover {\n            .container {\n                overflow-y: auto;\n            }\n        }\n    }\n\n    .right-content {\n        min-height: 500px;\n        padding: 0 170px 32px 64px;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
/*!***********************************!*\
  !*** (webpack)/webpack/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/
function () {
  // webpackBootstrap

  /******/
  var __webpack_modules__ = {
    /***/
    880:
    /***/
    function _(module) {
      module.exports = function (module) {
        if (!module.webpackPolyfill) {
          module.deprecate = function () {};

          module.paths = []; // module.parent = undefined by default

          if (!module.children) module.children = [];
          Object.defineProperty(module, "loaded", {
            enumerable: true,
            get: function get() {
              return module.l;
            }
          });
          Object.defineProperty(module, "id", {
            enumerable: true,
            get: function get() {
              return module.i;
            }
          });
          module.webpackPolyfill = 1;
        }

        return module;
      };
      /***/

    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __nccwpck_require__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    if (__webpack_module_cache__[moduleId]) {
      /******/
      return __webpack_module_cache__[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    var threw = true;
    /******/

    try {
      /******/
      __webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
      /******/


      threw = false;
      /******/
    } finally {
      /******/
      if (threw) delete __webpack_module_cache__[moduleId];
      /******/
    }
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/compat */

  /******/

  /******/


  __nccwpck_require__.ab = __dirname + "/";
  /************************************************************************/

  /******/
  // module exports must be returned from runtime so entry inlining is disabled

  /******/
  // startup

  /******/
  // Load entry module and return exports

  /******/

  return __nccwpck_require__(880);
  /******/
}();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./pages/home/index.tsx":
/*!******************************!*\
  !*** ./pages/home/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_pages_component_index_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/pages/component/index/index */ "./src/pages/component/index/index.tsx");


function Home(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_pages_component_index_index__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}

/***/ }),

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_history_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/history.min.js */ "./src/utils/history.min.js");
/* harmony import */ var _utils_history_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_history_min_js__WEBPACK_IMPORTED_MODULE_0__);

var browserHistory = Object(_utils_history_min_js__WEBPACK_IMPORTED_MODULE_0__["createBrowserHistory"])();
/* harmony default export */ __webpack_exports__["default"] = (browserHistory);

/***/ }),

/***/ "./src/pages/component/button/index.less":
/*!***********************************************!*\
  !*** ./src/pages/component/button/index.less ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/pages/component/button/index.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/pages/component/button/index.tsx":
/*!**********************************************!*\
  !*** ./src/pages/component/button/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./src/pages/component/button/index.less");

 // import Button from "../../../../src/components/button";

function ButtonPage(props) {
  // return <Button>测试</Button>;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u6D4B\u8BD5");
}

/* harmony default export */ __webpack_exports__["default"] = (ButtonPage);

/***/ }),

/***/ "./src/pages/component/index/index.less":
/*!**********************************************!*\
  !*** ./src/pages/component/index/index.less ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/pages/component/index/index.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/pages/component/index/index.tsx":
/*!*********************************************!*\
  !*** ./src/pages/component/index/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./src/pages/component/index/index.less");
/* harmony import */ var _menuConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuConfig */ "./src/pages/component/index/menuConfig.ts");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type */ "./src/pages/component/index/type.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../history */ "./src/history.js");







 //处理菜单

var route = [];
var firstMenuItem = null;

var addRoute = function addRoute(menu, parentMenu) {
  var type = "";

  if (menu.name) {
    if (!parentMenu) {
      type = _type__WEBPACK_IMPORTED_MODULE_5__["MenuTypeEnum"].groupName;
    } else if (Array.isArray(menu.children) && menu.children.length > 0) {
      type = _type__WEBPACK_IMPORTED_MODULE_5__["MenuTypeEnum"].groupTypeName;
    } else {
      type = _type__WEBPACK_IMPORTED_MODULE_5__["MenuTypeEnum"].name;
    }

    var menuItemData = {
      type: type,
      name: menu.name,
      path: menu.path,
      component: menu.component
    };

    if (type === _type__WEBPACK_IMPORTED_MODULE_5__["MenuTypeEnum"].name && !firstMenuItem && menu.component && menu.path) {
      firstMenuItem = menuItemData;
    }

    route.push(menuItemData);
  }

  if (Array.isArray(menu.children) && menu.children.length > 0) {
    menu.children.forEach(function (item) {
      addRoute(item, menu);
    });
  }
};

Array.isArray(_menuConfig__WEBPACK_IMPORTED_MODULE_4__["default"]) && _menuConfig__WEBPACK_IMPORTED_MODULE_4__["default"].forEach(function (menu) {
  addRoute(menu, null);
});

function Component(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      currentMenuPath = _useState2[0],
      setCurrentMenuPath = _useState2[1]; // 当前菜单Path


  var currentComponentRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null); // 具体菜单的样式

  var menuItemClassName = function menuItemClassName(item) {
    var _classnames;

    var type = item.type,
        path = item.path;
    return classnames__WEBPACK_IMPORTED_MODULE_6___default()("menu-item", (_classnames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "menu-item-".concat(type), type), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "menu-item-click", path), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "menu-item-current", path === currentMenuPath), _classnames));
  };

  var selectMenu = function selectMenu(e, menu) {
    var type = menu.type,
        path = menu.path;

    if (path && path !== currentMenuPath) {
      // 如果不是组件子类，则直接跳转到其他页面
      if (type !== _type__WEBPACK_IMPORTED_MODULE_5__["MenuTypeEnum"].name) {
        _history__WEBPACK_IMPORTED_MODULE_7__["default"].push(path);
        return;
      }

      if (menu.component) {
        currentComponentRef.current = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(menu.component["default"]);
      } else {
        currentComponentRef.current = null;
      }

      setCurrentMenuPath(path);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (firstMenuItem) {
      selectMenu(null, firstMenuItem);
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "component-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "left-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "menu-inline"
  }, Array.isArray(route) && route.map(function (item, index) {
    if (item.type !== _type__WEBPACK_IMPORTED_MODULE_5__["MenuTypeEnum"].name) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        key: "".concat(item.name).concat(index),
        className: menuItemClassName(item),
        onClick: function onClick(e) {
          selectMenu(e, item);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "text"
      }, item.name));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      className: menuItemClassName(item),
      key: "".concat(item.name).concat(index),
      onClick: function onClick(e) {
        selectMenu(e, item);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "text"
    }, item.name));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "right-content"
  }, currentComponentRef.current));
}

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./src/pages/component/index/menuConfig.ts":
/*!*************************************************!*\
  !*** ./src/pages/component/index/menuConfig.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var menuList = [{
  name: "开发指南",
  children: [{
    path: "/installation",
    name: "安装",
    component: __webpack_require__(/*! ../button/index */ "./src/pages/component/button/index.tsx")
  }, {
    path: "/quickstart",
    name: "快速上手"
  }, {
    path: "/transition",
    name: "内置过渡动画"
  }]
}, {
  name: "组件",
  children: [{
    name: "Basic",
    children: [{
      path: "/layout",
      name: "Layout 布局"
    }, {
      path: "/container",
      name: "Container 布局容器"
    }, {
      path: "/color",
      name: "Color 色彩"
    }, {
      path: "/typography",
      name: "Typography 字体"
    }, {
      path: "/border",
      name: "Border 边框"
    }, {
      path: "/icon",
      name: "Icon 图标"
    }, {
      path: "/button",
      name: "Button 按钮"
    }, {
      path: "/link",
      name: "Link 文字链接"
    }]
  }, {
    name: "Form",
    children: [{
      path: "/table",
      name: "Table表格"
    }, {
      path: "/radio",
      name: "Radio 单选框"
    }, {
      path: "/checkbox",
      name: "Checkbox 多选框"
    }, {
      path: "/input",
      name: "Input 输入框"
    }, {
      path: "/input-number",
      name: "InputNumber 计数器"
    }, {
      path: "/select",
      name: "Select 选择器"
    }, {
      path: "/cascader",
      name: "Cascader 级联选择器"
    }, {
      path: "/switch",
      name: "Switch 开关"
    }, {
      path: "/slider",
      name: "Slider 滑块"
    }, {
      path: "/upload",
      name: "Upload 上传"
    }, {
      path: "/rate",
      name: "Rate 评分"
    }, {
      path: "/color-picker",
      name: "ColorPicker 颜色选择器"
    }, {
      path: "/transfer",
      name: "Transfer 穿梭框"
    }, {
      path: "/form",
      name: "Form 表单"
    }]
  }, {
    name: "Data",
    children: [{
      path: "/tag",
      name: "Tag 标签"
    }, {
      path: "/progress",
      name: "Progress 进度条"
    }, {
      path: "/tree",
      name: "Tree 树形控件"
    }, {
      path: "/pagination",
      name: "Pagination 分页"
    }, {
      path: "/badge",
      name: "Badge 标记"
    }, {
      path: "/avatar",
      name: "Avatar 头像"
    }]
  }, {
    name: "Notice",
    children: [{
      path: "/alert",
      name: "Alert 警告"
    }, {
      path: "/loading",
      name: "Loading 加载"
    }, {
      path: "/message",
      name: "Message 消息提示"
    }, {
      path: "/message-box",
      name: "MessageBox 弹框"
    }, {
      path: "/notification",
      name: "Notification 通知"
    }]
  }, {
    name: "Navigation",
    children: [{
      path: "/menu",
      name: "NavMenu 导航菜单"
    }, {
      path: "/tabs",
      name: "Tabs 标签页"
    }, {
      path: "/breadcrumb",
      name: "Breadcrumb 面包屑"
    }, {
      path: "/page-header",
      name: "PageHeader 页头"
    }, {
      path: "/dropdown",
      name: "Dropdown 下拉菜单"
    }, {
      path: "/steps",
      name: "Steps 步骤条"
    }]
  }, {
    name: "Others",
    children: [{
      path: "/dialog",
      name: "Dialog 对话框"
    }, {
      path: "/tooltip",
      name: "Tooltip 文字提示"
    }, {
      path: "/popover",
      name: "Popover 弹出框"
    }, {
      path: "/popconfirm",
      name: "Popconfirm 气泡确认框"
    }, {
      path: "/card",
      name: "Card 卡片"
    }, {
      path: "/carousel",
      name: "Carousel 走马灯"
    }, {
      path: "/collapse",
      name: "Collapse 折叠面板"
    }, {
      path: "/timeline",
      name: "Timeline 时间线"
    }, {
      path: "/divider",
      name: "Divider 分割线"
    }, {
      path: "/calendar",
      name: "Calendar 日历"
    }, {
      path: "/image",
      name: "Image 图片"
    }, {
      path: "/backtop",
      name: "Backtop 回到顶部"
    }, {
      path: "/infiniteScroll",
      name: "InfiniteScroll 无限滚动"
    }, {
      path: "/drawer",
      name: "Drawer 抽屉"
    }]
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (menuList);

/***/ }),

/***/ "./src/pages/component/index/type.ts":
/*!*******************************************!*\
  !*** ./src/pages/component/index/type.ts ***!
  \*******************************************/
/*! exports provided: MenuTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTypeEnum", function() { return MenuTypeEnum; });
// 菜单类型
var MenuTypeEnum; // 菜单类型

(function (MenuTypeEnum) {
  MenuTypeEnum["name"] = "name";
  MenuTypeEnum["groupName"] = "group-name";
  MenuTypeEnum["groupTypeName"] = "group-type-name";
})(MenuTypeEnum || (MenuTypeEnum = {}));

/***/ }),

/***/ "./src/utils/history.min.js":
/*!**********************************!*\
  !*** ./src/utils/history.min.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0, _defineProperty2["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/*! For license information please see history.min.js.LICENSE.txt */


!function (e, t) {
  "object" == ( false ? undefined : (0, _typeof2["default"])(exports)) && "object" == ( false ? undefined : (0, _typeof2["default"])(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(self, function () {
  return function () {
    "use strict";

    var e = {
      "./config/index.js": function configIndexJs(e, t, a) {
        a.r(t), a.d(t, {
          BeforeUnloadEventType: function BeforeUnloadEventType() {
            return n;
          },
          HashChangeEventType: function HashChangeEventType() {
            return o;
          },
          PopStateEventType: function PopStateEventType() {
            return r;
          },
          actionType: function actionType() {
            return s;
          },
          enumValueType: function enumValueType() {
            return i;
          }
        });
        var n = "beforeunload",
            o = "hashchange",
            r = "popstate",
            s = {
          push: "PUSH",
          replace: "REPLACE",
          pop: "POP"
        },
            i = {
          object: "Object",
          array: "Array",
          basic: "Basic"
        };
      },
      "./node_modules/resolve-pathname/esm/resolve-pathname.js": function node_modulesResolvePathnameEsmResolvePathnameJs(e, t, a) {
        function n(e) {
          return "/" === e.charAt(0);
        }

        function o(e, t) {
          for (var a = t, n = a + 1, o = e.length; n < o; a += 1, n += 1) {
            e[a] = e[n];
          }

          e.pop();
        }

        a.r(t), a.d(t, {
          "default": function _default() {
            return r;
          }
        });

        var r = function r(e, t) {
          void 0 === t && (t = "");
          var a,
              r = e && e.split("/") || [],
              s = t && t.split("/") || [],
              i = e && n(e),
              c = t && n(t),
              l = i || c;
          if (e && n(e) ? s = r : r.length && (s.pop(), s = s.concat(r)), !s.length) return "/";

          if (s.length) {
            var u = s[s.length - 1];
            a = "." === u || ".." === u || "" === u;
          } else a = !1;

          for (var h = 0, p = s.length; p >= 0; p--) {
            var f = s[p];
            "." === f ? o(s, p) : ".." === f ? (o(s, p), h++) : h && (o(s, p), h--);
          }

          if (!l) for (; h--; h) {
            s.unshift("..");
          }
          !l || "" === s[0] || s[0] && n(s[0]) || s.unshift("");
          var d = s.join("/");
          return a && "/" !== d.substr(-1) && (d += "/"), d;
        };
      },
      "./src/createBrowserHistory.js": function srcCreateBrowserHistoryJs(e, t, a) {
        a.r(t), a.d(t, {
          "default": function _default() {
            return s;
          }
        });
        var n = a("./utils/index.js"),
            o = a("./config/index.js"),
            r = a("./utils/LocationUtils.js");

        function s() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var _e$window = e.window,
              t = _e$window === void 0 ? document.defaultView : _e$window,
              _e$isShowBeforeUnload = e.isShowBeforeUnload,
              a = _e$isShowBeforeUnload === void 0 ? !1 : _e$isShowBeforeUnload,
              s = e.basename ? (0, n.stripTrailingSlash)((0, n.addLeadingSlash)(e.basename)) : "",
              i = t.history,
              c = (0, n.createEventList)({
            removeCallback: f
          }),
              l = (0, n.createEventList)({
            isNeedResult: !0,
            removeCallback: f
          });
          var u = o.actionType.pop,
              h = (0, r.createLocation)({
            path: t.location,
            basename: s,
            state: i.state
          });

          function p(e) {
            var a = (0, r.createLocation)({
              path: t.location,
              basename: s,
              state: i.state
            });
            (0, r.createPath)(a) !== (0, r.createPath)(h) && function (e) {
              if (d) d = !1, console.log("blockedPopTx", d);else {
                var _t = {
                  action: o.actionType.pop,
                  location: e
                };

                if (l.length) {
                  if (l.call(_t)) console.log(h, e), h = e;else {
                    var _t2 = h.state.index - e.state.index;

                    console.log("isNotOk", d, h, e), y(_t2);
                  }
                } else m(_t);
              }
            }(a);
          }

          function f() {
            t.removeEventListener(o.PopStateEventType, p);
          }

          t.addEventListener(o.PopStateEventType, p);
          var d = null;

          function g(e) {
            var t = e.action,
                a = e.location;
            return !l.length || l.call({
              action: t,
              location: a
            });
          }

          function m(e) {
            u = e.action, h = e.location, c.call({
              action: u,
              location: h
            });
          }

          function y(e) {
            i.go(e);
          }

          function b(e) {
            a && (e.preventDefault(), e.returnValue = "");
          }

          return {
            get action() {
              return u;
            },

            get location() {
              return h;
            },

            createHref: function createHref(e) {
              if ("string" == typeof e) return (0, r.createPath)((0, r.createLocation)({
                path: e,
                basename: s
              }));
            },
            push: function push(e, t) {
              var a = o.actionType.push,
                  n = Object.assign({}, t, {
                index: h.state && h.state.index + 1
              }),
                  c = (0, r.createLocation)({
                path: e,
                state: n,
                basename: s
              }),
                  l = {
                action: a,
                location: c
              };

              if (g(l)) {
                try {
                  var _e = (0, r.getBaseHref)() + s + (0, r.createPath)(c);

                  i.pushState(n, "", _e);
                } catch (e) {
                  console.error(e);
                }

                m(l);
              }
            },
            replace: function replace(e, t) {
              var a = o.actionType.push,
                  n = Object.assign({}, t, {
                index: h.state && h.state.index
              }),
                  c = (0, r.createLocation)({
                path: e,
                state: n,
                basename: s
              }),
                  l = {
                action: a,
                location: c
              };

              if (g(l)) {
                try {
                  var _e2 = (0, r.getBaseHref)() + s + (0, r.createPath)(c);

                  i.replaceState(n, "", _e2);
                } catch (e) {
                  console.error(e);
                }

                m(l);
              }
            },
            go: y,
            back: function back() {
              y(-1);
            },
            forward: function forward() {
              y(1);
            },
            listen: function listen(e) {
              return c.push(e);
            },
            block: function block(e) {
              var a = l.push(e);
              return 1 === l.length && t.addEventListener(o.BeforeUnloadEventType, b), function () {
                a(), l.length || t.removeEventListener(o.BeforeUnloadEventType, b);
              };
            }
          };
        }
      },
      "./src/createHashHistory.js": function srcCreateHashHistoryJs(e, t, a) {
        a.r(t), a.d(t, {
          "default": function _default() {
            return s;
          }
        });
        var n = a("./utils/index.js"),
            o = a("./config/index.js"),
            r = a("./utils/LocationUtils.js");

        function s() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var _e$window2 = e.window,
              t = _e$window2 === void 0 ? document.defaultView : _e$window2,
              _e$isShowBeforeUnload2 = e.isShowBeforeUnload,
              a = _e$isShowBeforeUnload2 === void 0 ? !1 : _e$isShowBeforeUnload2,
              s = e.basename ? (0, n.stripTrailingSlash)((0, n.addLeadingSlash)(e.basename)) : "",
              i = t.history,
              c = (0, n.createEventList)({
            removeCallback: f
          }),
              l = (0, n.createEventList)({
            isNeedResult: !0,
            removeCallback: f
          });
          var u = o.actionType.pop,
              h = (0, r.createLocation)({
            path: t.location.hash.substr(1),
            basename: s,
            state: i.state
          });

          function p(e) {
            var a = (0, r.createLocation)({
              path: t.location.hash.substr(1),
              basename: s,
              state: i.state
            });
            (0, r.createPath)(a) !== (0, r.createPath)(h) && function (e) {
              {
                var _t3 = {
                  action: o.actionType.pop,
                  location: e
                };

                if (l.length) {
                  if (l.call(_t3)) h = e;else {
                    m(h.state.index - e.state.index);
                  }
                } else g(_t3);
              }
            }(a);
          }

          function f() {
            t.removeEventListener(o.HashChangeEventType, p);
          }

          t.addEventListener(o.HashChangeEventType, p);

          function d(e) {
            var t = e.action,
                a = e.location;
            return !l.length || l.call({
              action: t,
              location: a
            });
          }

          function g(e) {
            u = e.action, h = e.location, c.call({
              action: u,
              location: h
            });
          }

          function m(e) {
            i.go(e);
          }

          function y(e) {
            a && (e.preventDefault(), e.returnValue = "");
          }

          return {
            get action() {
              return u;
            },

            get location() {
              return h;
            },

            createHref: function createHref(e) {
              if ("string" == typeof e) return (0, r.createPath)((0, r.createLocation)({
                path: e,
                basename: s
              }));
            },
            push: function push(e, t) {
              var a = o.actionType.push,
                  n = Object.assign({}, t, {
                index: h.state && h.state.index + 1
              }),
                  c = (0, r.createLocation)({
                path: e,
                state: n,
                basename: s
              }),
                  l = {
                action: a,
                location: c
              };

              if (d(l)) {
                try {
                  var _e3 = (0, r.getBaseHref)() + "#" + s + (0, r.createPath)(c);

                  i.pushState(n, "", _e3);
                } catch (e) {
                  console.error(e);
                }

                g(l);
              }
            },
            replace: function replace(e, t) {
              var a = o.actionType.push,
                  n = Object.assign({}, t, {
                index: h.state && h.state.index
              }),
                  c = (0, r.createLocation)({
                path: e,
                state: n,
                basename: s
              }),
                  l = {
                action: a,
                location: c
              };

              if (d(l)) {
                try {
                  var _e4 = (0, r.getBaseHref)() + "#" + s + (0, r.createPath)(c);

                  i.replaceState(n, "", _e4);
                } catch (e) {
                  console.error(e);
                }

                g(l);
              }
            },
            go: m,
            back: function back() {
              m(-1);
            },
            forward: function forward() {
              m(1);
            },
            listen: function listen(e) {
              return c.push(e);
            },
            block: function block(e) {
              var a = l.push(e);
              return 1 === l.length && t.addEventListener(o.BeforeUnloadEventType, y), function () {
                a(), l.length || t.removeEventListener(o.BeforeUnloadEventType, y);
              };
            }
          };
        }
      },
      "./src/index.js": function srcIndexJs(e, t, a) {
        a.r(t), a.d(t, {
          createHashHistory: function createHashHistory() {
            return n["default"];
          },
          createBrowserHistory: function createBrowserHistory() {
            return o["default"];
          },
          createLocation: function createLocation() {
            return r.createLocation;
          },
          createPath: function createPath() {
            return r.createPath;
          },
          getBaseHref: function getBaseHref() {
            return r.getBaseHref;
          },
          hasBasename: function hasBasename() {
            return r.hasBasename;
          },
          locationsAreEqual: function locationsAreEqual() {
            return r.locationsAreEqual;
          },
          parsePath: function parsePath() {
            return r.parsePath;
          },
          stripBasename: function stripBasename() {
            return r.stripBasename;
          },
          addLeadingSlash: function addLeadingSlash() {
            return s.addLeadingSlash;
          },
          createEventList: function createEventList() {
            return s.createEventList;
          },
          getUniqueKey: function getUniqueKey() {
            return s.getUniqueKey;
          },
          getValueType: function getValueType() {
            return s.getValueType;
          },
          isObject: function isObject() {
            return s.isObject;
          },
          stripLeadingSlash: function stripLeadingSlash() {
            return s.stripLeadingSlash;
          },
          stripTrailingSlash: function stripTrailingSlash() {
            return s.stripTrailingSlash;
          },
          valueEqual: function valueEqual() {
            return s.valueEqual;
          }
        });
        var n = a("./src/createHashHistory.js"),
            o = a("./src/createBrowserHistory.js"),
            r = a("./utils/LocationUtils.js"),
            s = a("./utils/index.js");
      },
      "./utils/LocationUtils.js": function utilsLocationUtilsJs(e, t, a) {
        a.r(t), a.d(t, {
          createLocation: function createLocation() {
            return o;
          },
          parsePath: function parsePath() {
            return r;
          },
          createPath: function createPath() {
            return s;
          },
          hasBasename: function hasBasename() {
            return i;
          },
          stripBasename: function stripBasename() {
            return c;
          },
          getBaseHref: function getBaseHref() {
            return l;
          },
          locationsAreEqual: function locationsAreEqual() {
            return u;
          }
        });
        var n = a("./utils/index.js");
        a("./node_modules/resolve-pathname/esm/resolve-pathname.js");

        function o() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var t = e.path,
              a = e.basename,
              _e$key = e.key,
              o = _e$key === void 0 ? (0, n.getUniqueKey)() : _e$key,
              _e$state = e.state,
              s = _e$state === void 0 ? {
            index: 0
          } : _e$state,
              i = e.currentLocation;
          return _objectSpread(_objectSpread({}, r(t, a, i)), {}, {
            key: o,
            state: s
          });
        }

        function r(e, t, a) {
          var n = {
            pathname: "/",
            search: "",
            hash: ""
          };
          "string" == typeof e ? n.pathname = e || "/" : n = Object.assign(n, _objectSpread({}, e));
          var o = n.pathname.indexOf("#");
          o > -1 && (n.hash = n.pathname.substr(o), n.pathname = n.pathname.substr(0, o));
          var r = n.pathname.indexOf("?");
          return r > -1 && (n.search = n.pathname.substr(r), n.pathname = n.pathname.substr(0, r)), n.pathname = c(n.pathname, t), a ? n.pathname ? "/" !== n.pathname.charAt(0) && (n.pathname = resolvePathname(n.pathname, a.pathname)) : n.pathname = a.pathname : n.pathname || (n.pathname = "/"), {
            pathname: n.pathname,
            search: "?" === n.search ? "" : n.search,
            hash: "#" === n.hash ? "" : n.hash
          };
        }

        function s() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var t = e.pathname,
              a = e.search,
              n = e.hash;
          var o = t || "/";
          return a && "?" !== a && (o += "?" === a.charAt(0) ? a : "?".concat(a)), n && "#" !== n && (o += "#" === n.charAt(0) ? n : "#".concat(n)), o;
        }

        function i() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(t.length));
        }

        function c() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          return i(e, t) ? e.substr(t.length) : e;
        }

        function l() {
          var e = document.querySelector("base"),
              t = "";

          if (e && e.getAttribute("href")) {
            var _e5 = window.location.href,
                _a = _e5.indexOf("#");

            t = -1 === _a ? _e5 : _e5.slice(0, _a);
          }

          return t;
        }

        function u(e, t) {
          return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && e.key === t.key && (0, n.valueEqual)(e.state, t.state);
        }
      },
      "./utils/index.js": function utilsIndexJs(e, t, a) {
        a.r(t), a.d(t, {
          createEventList: function createEventList() {
            return o;
          },
          getUniqueKey: function getUniqueKey() {
            return r;
          },
          isObject: function isObject() {
            return s;
          },
          getValueType: function getValueType() {
            return i;
          },
          valueEqual: function valueEqual() {
            return c;
          },
          addLeadingSlash: function addLeadingSlash() {
            return l;
          },
          stripLeadingSlash: function stripLeadingSlash() {
            return u;
          },
          stripTrailingSlash: function stripTrailingSlash() {
            return h;
          }
        });
        var n = a("./config/index.js");

        function o() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var _e$isNeedResult = e.isNeedResult,
              t = _e$isNeedResult === void 0 ? !1 : _e$isNeedResult,
              a = e.removeCallback;
          var n = [];
          return {
            get length() {
              return n.length;
            },

            push: function push(e) {
              return n.push(e), function () {
                n = n.filter(function (t) {
                  return t !== e;
                }), n.length || a && a();
              };
            },
            call: function call(e) {
              var a = !0;

              for (var _o = 0, _r = n.length; _o < _r; _o++) {
                var _r2 = n[_o];
                if (a = _r2 && _r2(e), t && !a) break;
              }

              return a;
            }
          };
        }

        function r() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var t = Date.now().toString(32) + e.toString(),
              a = [],
              n = 1,
              o = 0;

          for (var _e6 = 1, _r3 = t.length; _e6 <= _r3; _e6++) {
            _e6 === n && (a[o] = String.fromCharCode(65 + Math.floor(22 * Math.random())), o++, n *= 2), a[o] = t[_e6 - 1], o++;
          }

          return a.join("");
        }

        function s(e) {
          return e && "object" == (0, _typeof2["default"])(e) && "[object Object]" === toString.call(e);
        }

        function i(e) {
          var t = n.enumValueType.basic;
          s(e) && (t = n.enumValueType.object), Array.isArray(e) && (t = n.enumValueType.array);
        }

        function c(e, t) {
          var a = i(e);
          if (a !== i(t)) return !1;
          if (a === n.enumValueType.basic) return e === t;

          if (a === n.enumValueType.object) {
            var _a2 = Object.keys(e);

            for (var _n = 0, _o2 = _a2.length; _n < _o2; _n++) {
              var _o3 = _a2[_n];
              if (!c(e[_o3], t[_o3])) return !1;
            }
          }

          if (a === n.enumValueType.array) {
            if (e.length !== t.length) return falsei;

            for (var _a3 = 0, _n2 = e.length; _a3 < _n2; _a3++) {
              if (!c(e[_a3], t[_a3])) return !1;
            }
          }

          return !1;
        }

        function l(e) {
          return "/" === e.charAt(0) ? e : "/" + e;
        }

        function u(e) {
          return "/" === e.charAt(0) ? e.substr(1) : e;
        }

        function h(e) {
          return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
        }
      }
    },
        t = {};

    function a(n) {
      if (t[n]) return t[n].exports;
      var o = t[n] = {
        exports: {}
      };
      return e[n](o, o.exports, a), o.exports;
    }

    return a.d = function (e, t) {
      for (var n in t) {
        a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
          enumerable: !0,
          get: t[n]
        });
      }
    }, a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, a.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, a("./src/index.js");
  }();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jb21wb25lbnQvYnV0dG9uL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbXBvbmVudC9pbmRleC9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS93ZWJwYWNrL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbXBvbmVudC9idXR0b24vaW5kZXgubGVzcz8wZjMxIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jb21wb25lbnQvYnV0dG9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50L2luZGV4L2luZGV4Lmxlc3M/MDNhMyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50L2luZGV4L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50L2luZGV4L21lbnVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbXBvbmVudC9pbmRleC90eXBlLnRzIiwid2VicGFjazovLy96eWxpYW5nSGlzdG9yeS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3p5bGlhbmdIaXN0b3J5L2NvbmZpZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8venlsaWFuZ0hpc3Rvcnkvbm9kZV9tb2R1bGVzL3Jlc29sdmUtcGF0aG5hbWUvZXNtL3Jlc29sdmUtcGF0aG5hbWUuanMiLCJ3ZWJwYWNrOi8vL3p5bGlhbmdIaXN0b3J5L3NyYy9jcmVhdGVCcm93c2VySGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8venlsaWFuZ0hpc3Rvcnkvc3JjL2NyZWF0ZUhhc2hIaXN0b3J5LmpzIiwid2VicGFjazovLy96eWxpYW5nSGlzdG9yeS91dGlscy9Mb2NhdGlvblV0aWxzLmpzIiwid2VicGFjazovLy96eWxpYW5nSGlzdG9yeS91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8venlsaWFuZ0hpc3Rvcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3p5bGlhbmdIaXN0b3J5L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjazovenlsaWFuZ0hpc3Rvcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrOi96eWxpYW5nSGlzdG9yeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrOi96eWxpYW5nSGlzdG9yeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIl9hcnJheUxpa2VUb0FycmF5IiwiYXJyIiwibGVuIiwibGVuZ3RoIiwiaSIsImFycjIiLCJBcnJheSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfYXJyYXlXaXRoSG9sZXMiLCJpc0FycmF5IiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfX2VzTW9kdWxlIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJfYXJyIiwiX24iLCJfZCIsIl9lIiwidW5kZWZpbmVkIiwiX2kiLCJfcyIsIm5leHQiLCJkb25lIiwicHVzaCIsImVyciIsIl9ub25JdGVyYWJsZVJlc3QiLCJUeXBlRXJyb3IiLCJhcnJheVdpdGhIb2xlcyIsInJlcXVpcmUiLCJpdGVyYWJsZVRvQXJyYXlMaW1pdCIsInVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5Iiwibm9uSXRlcmFibGVSZXN0IiwiX3NsaWNlZFRvQXJyYXkiLCJfdHlwZW9mIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJhcnJheUxpa2VUb0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwibyIsIm1pbkxlbiIsIm4iLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsIm5hbWUiLCJmcm9tIiwidGVzdCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJjb25jYXQiLCJqb2luIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiaWQiLCJfaXRlbSIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsImdldCIsImwiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX25jY3dwY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJ0aHJldyIsImFiIiwiX19kaXJuYW1lIiwiYnJvd3Nlckhpc3RvcnkiLCJjcmVhdGVCcm93c2VySGlzdG9yeSIsInJvdXRlIiwiZmlyc3RNZW51SXRlbSIsImFkZFJvdXRlIiwidHlwZSIsIm1lbnUiLCJNZW51VHlwZUVudW0iLCJtZW51SXRlbURhdGEiLCJwYXRoIiwiY29tcG9uZW50IiwidXNlU3RhdGUiLCJjdXJyZW50TWVudVBhdGgiLCJzZXRDdXJyZW50TWVudVBhdGgiLCJjdXJyZW50Q29tcG9uZW50UmVmIiwidXNlUmVmIiwibWVudUl0ZW1DbGFzc05hbWUiLCJjbGFzc25hbWVzIiwic2VsZWN0TWVudSIsImhpc3RvcnkiLCJSZWFjdCIsInVzZUVmZmVjdCIsIm1lbnVMaXN0IiwiZmFjdG9yeSIsImRlZmluZSIsIkJlZm9yZVVubG9hZEV2ZW50VHlwZSIsIkhhc2hDaGFuZ2VFdmVudFR5cGUiLCJQb3BTdGF0ZUV2ZW50VHlwZSIsImFjdGlvblR5cGUiLCJyZXBsYWNlIiwicG9wIiwiZW51bVZhbHVlVHlwZSIsIm9iamVjdCIsImFycmF5IiwiYmFzaWMiLCJwYXRobmFtZSIsImluZGV4IiwiayIsInRvUGFydHMiLCJ0byIsImZyb21QYXJ0cyIsImlzVG9BYnMiLCJpc0Fic29sdXRlIiwiaXNGcm9tQWJzIiwibXVzdEVuZEFicyIsImxhc3QiLCJoYXNUcmFpbGluZ1NsYXNoIiwidXAiLCJwYXJ0Iiwic3BsaWNlT25lIiwicmVzdWx0Iiwic3Vic3RyIiwib3B0aW9ucyIsIndpbmRvdyIsImRvY3VtZW50IiwiaXNTaG93QmVmb3JlVW5sb2FkIiwiYmFzZW5hbWUiLCJnbG9iYWxIaXN0b3J5IiwibGlzdGVuZXJzIiwicmVtb3ZlQ2FsbGJhY2siLCJyZW1vdmVQb3BTdGF0ZUV2ZW50TGlzdGVuRnVuYyIsImJsb2NrZXJzIiwiaXNOZWVkUmVzdWx0IiwiYWN0aW9uIiwibG9jYXRpb24iLCJzdGF0ZSIsImV2ZW50IiwibmV4dExvY2F0aW9uIiwiYmxvY2tlZFBvcFR4IiwiY29uc29sZSIsInNlbmREYXRhIiwibGFzdEluZGV4IiwiZ28iLCJhcHBseVRvIiwicHJvcHMiLCJjcmVhdGVIcmVmIiwibmV3QWN0aW9uIiwibmV3U3RhdGUiLCJuZXdMb2NhdGlvbiIsImFsbG93VG8iLCJ1cmwiLCJlIiwiYmFjayIsImZvcndhcmQiLCJsaXN0ZW4iLCJsaXN0ZW5lciIsImJsb2NrIiwiYmxvY2tlciIsInVuYmxvY2siLCJwcm9tcHRCZWZvcmVVbmxvYWQiLCJyZW1vdmVIYXNoQ2hhbmdlRXZlbnRMaXN0ZW5GdW5jIiwicGFyYW1zIiwiY3VycmVudExvY2F0aW9uIiwicGFyc2VQYXRoIiwibG9jYXRpb25SZXN1bHQiLCJzZWFyY2giLCJoYXNoIiwiaGFzaEluZGV4Iiwic2VhcmNoSW5kZXgiLCJzdHJpcEJhc2VuYW1lIiwicmVzb2x2ZVBhdGhuYW1lIiwicHJlZml4IiwidG9Mb3dlckNhc2UiLCJoYXNCYXNlbmFtZSIsImdldEJhc2VIcmVmIiwiYmFzZSIsImhyZWYiLCJiIiwiYSIsImZuIiwiYXJnIiwiYmFzZURhdGEiLCJEYXRlIiwibmV3S2V5IiwidmVyaWZpY2F0aW9uRGF0YSIsIm5ld0tleUluZGV4IiwiaiIsIlN0cmluZyIsIk1hdGgiLCJ2YWwiLCJpc09iamVjdCIsInZhbHVlQiIsInZhbHVlQVR5cGUiLCJnZXRWYWx1ZVR5cGUiLCJ2YWx1ZUEiLCJrZXlzIiwidmFsdWVFcXVhbCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJkZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7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QUFJLEVBQUU7QUFGVixLQXJCTSxFQXlCTjtBQUNJbUQsVUFBSSxFQURSO0FBRUluRCxVQUFJLEVBQUU7QUFGVixLQXpCTSxFQTZCTjtBQUNJbUQsVUFBSSxFQURSO0FBRUluRCxVQUFJLEVBQUU7QUFGVixLQTdCTSxFQWlDTjtBQUNJbUQsVUFBSSxFQURSO0FBRUluRCxVQUFJLEVBQUU7QUFGVixLQWpDTSxFQXFDTjtBQUNJbUQsVUFBSSxFQURSO0FBRUluRCxVQUFJLEVBQUU7QUFGVixLQXJDTSxFQXlDTjtBQUNJbUQsVUFBSSxFQURSO0FBRUluRCxVQUFJLEVBQUU7QUFGVixLQXpDTSxFQTZDTjtBQUNJbUQsVUFBSSxFQURSO0FBRUluRCxVQUFJLEVBQUU7QUFGVixLQTdDTSxFQWlETjtBQUNJbUQsVUFBSSxFQURSO0FBRUluRCxVQUFJLEVBQUU7QUFGVixLQWpETSxFQXFETjtBQUNJbUQsVUFBSSxFQURSO0FBRUluRCxVQUFJLEVBQUU7QUFGVixLQXJETTtBQUZkLEdBdENNLEVBbUdOO0FBQ0lBLFFBQUksRUFEUjtBQUVJaUMsWUFBUSxFQUFFLENBQ047QUFDSWtCLFVBQUksRUFEUjtBQUVJbkQsVUFBSSxFQUFFO0FBRlYsS0FETSxFQUtOO0FBQ0ltRCxVQUFJLEVBRFI7QUFFSW5ELFVBQUksRUFBRTtBQUZWLEtBTE0sRUFTTjtBQUNJbUQsVUFBSSxFQURSO0FBRUluRCxVQUFJLEVBQUU7QUFGVixLQVRNLEVBYU47QUFDSW1ELFVBQUksRUFEUjtBQUVJbkQsVUFBSSxFQUFFO0FBRlYsS0FiTSxFQWlCTjtBQUNJbUQsVUFBSSxFQURSO0FBRUluRCxVQUFJLEVBQUU7QUFGVixLQWpCTSxFQXFCTjtBQUNJbUQsVUFBSSxFQURSO0FBRUluRCxVQUFJLEVBQUU7QUFGVixLQXJCTTtBQUZkLEdBbkdNLEVBZ0lOO0FBQ0lBLFFBQUksRUFEUjtBQUVJaUMsWUFBUSxFQUFFLENBQ047QUFDSWtCLFVBQUksRUFEUjtBQUVJbkQsVUFBSSxFQUFFO0FBRlYsS0FETSxFQUtOO0FBQ0ltRCxVQUFJLEVBRFI7QUFF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QkFBMkJBO0FBQ2hDLGlCQUEwQixRQUFuQkEsV0FBbUIsR0FBTUEsU0FBTixDQUFNQSxDQUFOLEdBQTFCO0FBR0s7O0FBQUEsc0JBQTRCQTtBQUNqQyxpQkFBd0MsUUFBakNBLFNBQVlBLFdBQVpBLEVBQWlDLEdBQU1BLFdBQVcsQ0FBakIsQ0FBTUEsQ0FBTixHQUF4QztBQUFrRUE7QUFBQUE7O1FDdkloRWYsSUFBMkIsRTs7QUFHL0Isa0JBQTZCRTtBQUU1QixVQUFHRixFQUFILENBQUdBLENBQUgsRUFDQyxPQUFPQSxLQUFQO0FBR0QsVUFBSXBGLElBQVNvRixPQUFxQztBQUdqRG5GLGlCQUFTO0FBSHdDLE9BQWxEO0FBVUEsYUFIQTRFLFFBQXNDN0UsRUFBdEM2RSxhQUdPN0UsRUFBUDtBQ2pCRDs7QUFBQSxXQ0ZBeU4sTUFBd0IsZ0JBQVVDO0FBQ2pDLFdBQUksSUFBSjtBQUNJRCxxQkFBa0NuTixDQUFTbU4sT0FBM0NBLENBQTJDQSxDQUEzQ0EsSUFDRmpOLDRCQUFvQztBQUFFRSx1QkFBRjtBQUFvQndFLGVBQUt3STtBQUF6QixTQUFwQ2xOLENBREVpTjtBQURKO0FBRERBLE9DREFBLE1BQXdCO0FBQUEsYUFBZWpOLHdDQUFmLENBQWVBLENBQWY7QURDeEJpTixPRUFBQSxNQUF5QnhOO0FBQ0gsNEJBQVhlLE1BQVcsSUFBZUEsT0FBZixlQUNwQlIseUJBQStCUSxPQUEvQlIsYUFBbUQ7QUFBRUQsZUFBTztBQUFULE9BQW5EQyxDQURvQixFQUdyQkEsdUNBQTZDO0FBQUVELGdCQUFPO0FBQVQsT0FBN0NDLENBSHFCO0FGRHRCaU4sT0RFT0EsRUFBUCxnQkFBT0EsQ0FBUDtBUk9BLEcsRUFBQTtBQVZBLEU7Ozs7Ozs7Ozs7OztBWUFBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2hvbWUvaW5kZXgudHN4XCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb21wb25lbnQtYm94IHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY29tcG9uZW50LWJveCAubGVmdC1tZW51IHtcXG4gIHdpZHRoOiAyMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZmxleDogbm9uZTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDg0cHgpO1xcbn1cXG4uY29tcG9uZW50LWJveCAubGVmdC1tZW51IC5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29tcG9uZW50LWJveCAubGVmdC1tZW51IC5jb250YWluZXIgLm1lbnUtaW5saW5lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMGYwZjA7XFxufVxcbi5jb21wb25lbnQtYm94IC5sZWZ0LW1lbnUgLmNvbnRhaW5lciAubWVudS1pdGVtIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIGhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLmNvbXBvbmVudC1ib3ggLmxlZnQtbWVudSAuY29udGFpbmVyIC5tZW51LWl0ZW0tY2xpY2sge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29tcG9uZW50LWJveCAubGVmdC1tZW51IC5jb250YWluZXIgLm1lbnUtaXRlbS1uYW1lIHtcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbn1cXG4uY29tcG9uZW50LWJveCAubGVmdC1tZW51IC5jb250YWluZXIgLm1lbnUtaXRlbS1uYW1lOmhvdmVyIHtcXG4gIGNvbG9yOiAjMTg5MGZmO1xcbn1cXG4uY29tcG9uZW50LWJveCAubGVmdC1tZW51IC5jb250YWluZXIgLm1lbnUtaXRlbS1ncm91cC1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiA1cHggMDtcXG59XFxuLmNvbXBvbmVudC1ib3ggLmxlZnQtbWVudSAuY29udGFpbmVyIC5tZW51LWl0ZW0tZ3JvdXAtdHlwZS1uYW1lIHtcXG4gIHBhZGRpbmctbGVmdDogNDVweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgbWFyZ2luOiA1cHggMDtcXG59XFxuLmNvbXBvbmVudC1ib3ggLmxlZnQtbWVudSAuY29udGFpbmVyIC5tZW51LWl0ZW0tZ3JvdXAtdHlwZS1uYW1lOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRvcDogLTJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbn1cXG4uY29tcG9uZW50LWJveCAubGVmdC1tZW51IC5jb250YWluZXIgLm1lbnUtaXRlbS1jdXJyZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmY3ZmY7XFxuICBjb2xvcjogIzE4OTBmZjtcXG59XFxuLmNvbXBvbmVudC1ib3ggLmxlZnQtbWVudTpob3ZlciAuY29udGFpbmVyIHtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5jb21wb25lbnQtYm94IC5yaWdodC1jb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgcGFkZGluZzogMCAxNzBweCAzMnB4IDY0cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9jb21wb25lbnQvaW5kZXgvaW5kZXgubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQVBBO0VBU1EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FBQ1I7QUFiQTtFQWNZLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRVo7QUFsQkE7RUFrQmdCLGNBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBR2hCO0FBdkJBO0VBdUJnQixnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBR2hCO0FBRmdCO0VBQ0ksZUFBQTtBQUlwQjtBQUZnQjtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7QUFJcEI7QUFGb0I7RUFDSSxjQUFBO0FBSXhCO0FBRGdCO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBR3BCO0FBRGdCO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7QUFHcEI7QUFGb0I7RUFDSSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBSXhCO0FBN0RBO0VBOERnQix5QkFBQTtFQUNBLGNBQUE7QUFFaEI7QUFDUTtFQUVRLGdCQUFBO0FBQWhCO0FBcEVBO0VBMEVRLGlCQUFBO0VBQ0EsMEJBQUE7QUFIUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29tcG9uZW50LWJveCB7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgLmxlZnQtbWVudSB7XFxuICAgICAgICB3aWR0aDogMjAlO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIGZsZXg6IG5vbmU7XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4NHB4KTtcXG4gICAgICAgIC5jb250YWluZXIge1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICAgIC5tZW51LWlubGluZSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjBmMGYwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAubWVudS1pdGVtIHtcXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgICAgICAgICAgICAgICYtY2xpY2sge1xcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICYtbmFtZSB7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTg5MGZmO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICYtZ3JvdXAtbmFtZSB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgJi1ncm91cC10eXBlLW5hbWUge1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xcbiAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTJweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLm1lbnUtaXRlbS1jdXJyZW50IHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmZjtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxODkwZmY7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XFxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5yaWdodC1jb250ZW50IHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgICAgICAgcGFkZGluZzogMCAxNzBweCAzMnB4IDY0cHg7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24oKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyA4ODA6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdHZhciB0aHJldyA9IHRydWU7XG4vKioqKioqLyBcdFx0dHJ5IHtcbi8qKioqKiovIFx0XHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fbmNjd3Bja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbi8qKioqKiovIFx0XHR9IGZpbmFsbHkge1xuLyoqKioqKi8gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvY29tcGF0ICovXG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRfX25jY3dwY2tfcmVxdWlyZV9fLmFiID0gX19kaXJuYW1lICsgXCIvXCI7LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oODgwKTtcbi8qKioqKiovIH0pKClcbjsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vLi4vc3JjL3BhZ2VzL2NvbXBvbmVudC9pbmRleC9pbmRleFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPENvbXBvbmVudCAvPjtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gXCIuL3V0aWxzL2hpc3RvcnkubWluLmpzXCI7XHJcbmNvbnN0IGJyb3dzZXJIaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcclxuZXhwb3J0IGRlZmF1bHQgYnJvd3Nlckhpc3Rvcnk7XHJcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vaW5kZXgubGVzc1wiO1xyXG4vLyBpbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9idXR0b25cIjtcclxuXHJcbmZ1bmN0aW9uIEJ1dHRvblBhZ2UocHJvcHMpIHtcclxuICAvLyByZXR1cm4gPEJ1dHRvbj7mtYvor5U8L0J1dHRvbj47XHJcbiAgcmV0dXJuIDxkaXY+5rWL6K+VPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblBhZ2U7XHJcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vaW5kZXgubGVzc1wiO1xyXG5pbXBvcnQgbWVudUxpc3QgZnJvbSBcIi4vbWVudUNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBNZW51SXRlbU9iamVjdCwgTWVudVR5cGVFbnVtIH0gZnJvbSBcIi4vdHlwZVwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgaGlzdG9yeSBmcm9tIFwiLi4vLi4vLi4vaGlzdG9yeVwiO1xyXG5cclxuLy/lpITnkIboj5zljZVcclxubGV0IHJvdXRlID0gW107XHJcbmxldCBmaXJzdE1lbnVJdGVtOiBNZW51SXRlbU9iamVjdCB8IG51bGwgPSBudWxsO1xyXG5jb25zdCBhZGRSb3V0ZTogKFxyXG4gICAgbWVudTogTWVudUl0ZW1PYmplY3QsXHJcbiAgICBwYXJlbnRNZW51OiBudWxsIHwgTWVudUl0ZW1PYmplY3RcclxuKSA9PiB2b2lkID0gKG1lbnUsIHBhcmVudE1lbnUpID0+IHtcclxuICAgIGxldCB0eXBlOiBNZW51VHlwZUVudW0gfCBzdHJpbmcgPSBcIlwiO1xyXG4gICAgaWYgKG1lbnUubmFtZSkge1xyXG4gICAgICAgIGlmICghcGFyZW50TWVudSkge1xyXG4gICAgICAgICAgICB0eXBlID0gTWVudVR5cGVFbnVtLmdyb3VwTmFtZTtcclxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobWVudS5jaGlsZHJlbikgJiYgbWVudS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSBNZW51VHlwZUVudW0uZ3JvdXBUeXBlTmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0eXBlID0gTWVudVR5cGVFbnVtLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtRGF0YSA9IHtcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgbmFtZTogbWVudS5uYW1lLFxyXG4gICAgICAgICAgICBwYXRoOiBtZW51LnBhdGgsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogbWVudS5jb21wb25lbnQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHR5cGUgPT09IE1lbnVUeXBlRW51bS5uYW1lICYmXHJcbiAgICAgICAgICAgICFmaXJzdE1lbnVJdGVtICYmXHJcbiAgICAgICAgICAgIG1lbnUuY29tcG9uZW50ICYmXHJcbiAgICAgICAgICAgIG1lbnUucGF0aFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBmaXJzdE1lbnVJdGVtID0gbWVudUl0ZW1EYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICByb3V0ZS5wdXNoKG1lbnVJdGVtRGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShtZW51LmNoaWxkcmVuKSAmJiBtZW51LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBtZW51LmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgYWRkUm91dGUoaXRlbSwgbWVudSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5BcnJheS5pc0FycmF5KG1lbnVMaXN0KSAmJlxyXG4gICAgbWVudUxpc3QuZm9yRWFjaCgobWVudSkgPT4ge1xyXG4gICAgICAgIGFkZFJvdXRlKG1lbnUsIG51bGwpO1xyXG4gICAgfSk7XHJcblxyXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMpIHtcclxuICAgIGNvbnN0IFtjdXJyZW50TWVudVBhdGgsIHNldEN1cnJlbnRNZW51UGF0aF0gPSB1c2VTdGF0ZShcIlwiKTsgLy8g5b2T5YmN6I+c5Y2VUGF0aFxyXG4gICAgY29uc3QgY3VycmVudENvbXBvbmVudFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICAvLyDlhbfkvZPoj5zljZXnmoTmoLflvI9cclxuICAgIGNvbnN0IG1lbnVJdGVtQ2xhc3NOYW1lOiAobWVudTogTWVudUl0ZW1PYmplY3QpID0+IE9iamVjdCA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB0eXBlLCBwYXRoIH0gPSBpdGVtO1xyXG4gICAgICAgIHJldHVybiBjbGFzc25hbWVzKFwibWVudS1pdGVtXCIsIHtcclxuICAgICAgICAgICAgW2BtZW51LWl0ZW0tJHt0eXBlfWBdOiB0eXBlLFxyXG4gICAgICAgICAgICBbYG1lbnUtaXRlbS1jbGlja2BdOiBwYXRoLFxyXG4gICAgICAgICAgICBbYG1lbnUtaXRlbS1jdXJyZW50YF06IHBhdGggPT09IGN1cnJlbnRNZW51UGF0aCxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0TWVudTogKGU6IGFueSwgbWVudTogTWVudUl0ZW1PYmplY3QpID0+IHZvaWQgPSAoZSwgbWVudSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdHlwZSwgcGF0aCB9ID0gbWVudTtcclxuICAgICAgICBpZiAocGF0aCAmJiBwYXRoICE9PSBjdXJyZW50TWVudVBhdGgpIHtcclxuICAgICAgICAgICAgLy8g5aaC5p6c5LiN5piv57uE5Lu25a2Q57G777yM5YiZ55u05o6l6Lez6L2s5Yiw5YW25LuW6aG16Z2iXHJcbiAgICAgICAgICAgIGlmICh0eXBlICE9PSBNZW51VHlwZUVudW0ubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtZW51LmNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbXBvbmVudFJlZi5jdXJyZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgICAgICAgICBtZW51LmNvbXBvbmVudC5kZWZhdWx0XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbXBvbmVudFJlZi5jdXJyZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0Q3VycmVudE1lbnVQYXRoKHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZmlyc3RNZW51SXRlbSkge1xyXG4gICAgICAgICAgICBzZWxlY3RNZW51KG51bGwsIGZpcnN0TWVudUl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWJveFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtaW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KHJvdXRlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgIT09IE1lbnVUeXBlRW51bS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtpdGVtLm5hbWV9JHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bWVudUl0ZW1DbGFzc05hbWUoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0TWVudShlLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e21lbnVJdGVtQ2xhc3NOYW1lKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtpdGVtLm5hbWV9JHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RNZW51KGUsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWNvbnRlbnRcIj57Y3VycmVudENvbXBvbmVudFJlZi5jdXJyZW50fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgeyBNZW51SXRlbU9iamVjdCB9IGZyb20gXCIuL3R5cGVcIjtcclxuY29uc3QgbWVudUxpc3Q6IEFycmF5PE1lbnVJdGVtT2JqZWN0PiA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIuW8gOWPkeaMh+WNl1wiLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IFwiL2luc3RhbGxhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCLlronoo4VcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogcmVxdWlyZShcIi4uL2J1dHRvbi9pbmRleFwiKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogXCIvcXVpY2tzdGFydFwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCLlv6vpgJ/kuIrmiYtcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogXCIvdHJhbnNpdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCLlhoXnva7ov4fmuKHliqjnlLtcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIue7hOS7tlwiLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQmFzaWNcIixcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi9sYXlvdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJMYXlvdXQg5biD5bGAXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL2NvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRhaW5lciDluIPlsYDlrrnlmahcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvY29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDb2xvciDoibLlvalcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvdHlwb2dyYXBoeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlR5cG9ncmFwaHkg5a2X5L2TXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL2JvcmRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkJvcmRlciDovrnmoYZcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvaWNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkljb24g5Zu+5qCHXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL2J1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkJ1dHRvbiDmjInpkq5cIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvbGlua1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkxpbmsg5paH5a2X6ZO+5o6lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiRm9ybVwiLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL3RhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVGFibGXooajmoLxcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvcmFkaW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJSYWRpbyDljZXpgInmoYZcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvY2hlY2tib3hcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDaGVja2JveCDlpJrpgInmoYZcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvaW5wdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJJbnB1dCDovpPlhaXmoYZcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvaW5wdXQtbnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSW5wdXROdW1iZXIg6K6h5pWw5ZmoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL3NlbGVjdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlNlbGVjdCDpgInmi6nlmahcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvY2FzY2FkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDYXNjYWRlciDnuqfogZTpgInmi6nlmahcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvc3dpdGNoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiU3dpdGNoIOW8gOWFs1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi9zbGlkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJTbGlkZXIg5ruR5Z2XXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL3VwbG9hZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlVwbG9hZCDkuIrkvKBcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvcmF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlJhdGUg6K+E5YiGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL2NvbG9yLXBpY2tlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbG9yUGlja2VyIOminOiJsumAieaLqeWZqFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi90cmFuc2ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRyYW5zZmVyIOepv+aireahhlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi9mb3JtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRm9ybSDooajljZVcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJEYXRhXCIsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvdGFnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVGFnIOagh+etvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi9wcm9ncmVzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlByb2dyZXNzIOi/m+W6puadoVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi90cmVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVHJlZSDmoJHlvaLmjqfku7ZcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvcGFnaW5hdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlBhZ2luYXRpb24g5YiG6aG1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL2JhZGdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQmFkZ2Ug5qCH6K6wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL2F2YXRhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkF2YXRhciDlpLTlg49cIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJOb3RpY2VcIixcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi9hbGVydFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkFsZXJ0IOitpuWRilwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi9sb2FkaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTG9hZGluZyDliqDovb1cIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvbWVzc2FnZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk1lc3NhZ2Ug5raI5oGv5o+Q56S6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL21lc3NhZ2UtYm94XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTWVzc2FnZUJveCDlvLnmoYZcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvbm90aWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTm90aWZpY2F0aW9uIOmAmuefpVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk5hdmlnYXRpb25cIixcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi9tZW51XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTmF2TWVudSDlr7zoiKroj5zljZVcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvdGFic1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRhYnMg5qCH562+6aG1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL2JyZWFkY3J1bWJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJCcmVhZGNydW1iIOmdouWMheWxkVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi9wYWdlLWhlYWRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlBhZ2VIZWFkZXIg6aG15aS0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL2Ryb3Bkb3duXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRHJvcGRvd24g5LiL5ouJ6I+c5Y2VXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL3N0ZXBzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiU3RlcHMg5q2l6aqk5p2hXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiT3RoZXJzXCIsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvZGlhbG9nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRGlhbG9nIOWvueivneahhlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi90b29sdGlwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVG9vbHRpcCDmloflrZfmj5DnpLpcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvcG9wb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlBvcG92ZXIg5by55Ye65qGGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL3BvcGNvbmZpcm1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJQb3Bjb25maXJtIOawlOazoeehruiupOahhlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi9jYXJkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2FyZCDljaHniYdcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvY2Fyb3VzZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDYXJvdXNlbCDotbDpqaznga9cIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvY29sbGFwc2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDb2xsYXBzZSDmipjlj6DpnaLmnb9cIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvdGltZWxpbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJUaW1lbGluZSDml7bpl7Tnur9cIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvZGl2aWRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkRpdmlkZXIg5YiG5Ymy57q/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL2NhbGVuZGFyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2FsZW5kYXIg5pel5Y6GXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL2ltYWdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSW1hZ2Ug5Zu+54mHXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL2JhY2t0b3BcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJCYWNrdG9wIOWbnuWIsOmhtumDqFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi9pbmZpbml0ZVNjcm9sbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkluZmluaXRlU2Nyb2xsIOaXoOmZkOa7muWKqFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi9kcmF3ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJEcmF3ZXIg5oq95bGJXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbl07XHJcbmV4cG9ydCBkZWZhdWx0IG1lbnVMaXN0O1xyXG4iLCIvLyDoj5zljZXnsbvlnotcclxuZXhwb3J0IGVudW0gTWVudVR5cGVFbnVtIHtcclxuICAgIFwibmFtZVwiID0gXCJuYW1lXCIsXHJcbiAgICBcImdyb3VwTmFtZVwiID0gXCJncm91cC1uYW1lXCIsXHJcbiAgICBcImdyb3VwVHlwZU5hbWVcIiA9IFwiZ3JvdXAtdHlwZS1uYW1lXCIsXHJcbn1cclxuXHJcbi8vIOiPnOWNleexu+Wei1xyXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVJdGVtT2JqZWN0IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHBhdGg/OiBzdHJpbmc7XHJcbiAgICBjaGlsZHJlbj86IEFycmF5PE1lbnVJdGVtT2JqZWN0PjtcclxuICAgIGNvbXBvbmVudD86IGFueTtcclxuICAgIHR5cGU/OiBNZW51VHlwZUVudW0gfCBzdHJpbmc7XHJcbn1cclxuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wienlsaWFuZ0hpc3RvcnlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wienlsaWFuZ0hpc3RvcnlcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJleHBvcnQgY29uc3QgQmVmb3JlVW5sb2FkRXZlbnRUeXBlID0gXCJiZWZvcmV1bmxvYWRcIjtcclxuZXhwb3J0IGNvbnN0IEhhc2hDaGFuZ2VFdmVudFR5cGUgPSBcImhhc2hjaGFuZ2VcIjtcclxuZXhwb3J0IGNvbnN0IFBvcFN0YXRlRXZlbnRUeXBlID0gXCJwb3BzdGF0ZVwiO1xyXG5cclxuLyoqXHJcbiAqIOWOhuWPsuagiOS4iuS4gOasoeaTjeS9nOeahOexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGUgPSB7XHJcbiAgcHVzaDogXCJQVVNIXCIsIC8vIOaOqOWFpeagiFxyXG4gIHJlcGxhY2U6IFwiUkVQTEFDRVwiLCAvLyDmm7/mjaLmoIhcclxuICBwb3A6IFwiUE9QXCIsIC8vIOWIneWni+WAvFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIOaVsOaNruexu+Wei+aemuS4vlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW1WYWx1ZVR5cGUgPSB7XHJcbiAgb2JqZWN0OiBcIk9iamVjdFwiLFxyXG4gIGFycmF5OiBcIkFycmF5XCIsXHJcbiAgYmFzaWM6IFwiQmFzaWNcIixcclxufTtcclxuIiwiZnVuY3Rpb24gaXNBYnNvbHV0ZShwYXRobmFtZSkge1xuICByZXR1cm4gcGF0aG5hbWUuY2hhckF0KDApID09PSAnLyc7XG59XG5cbi8vIEFib3V0IDEuNXggZmFzdGVyIHRoYW4gdGhlIHR3by1hcmcgdmVyc2lvbiBvZiBBcnJheSNzcGxpY2UoKVxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAodmFyIGkgPSBpbmRleCwgayA9IGkgKyAxLCBuID0gbGlzdC5sZW5ndGg7IGsgPCBuOyBpICs9IDEsIGsgKz0gMSkge1xuICAgIGxpc3RbaV0gPSBsaXN0W2tdO1xuICB9XG5cbiAgbGlzdC5wb3AoKTtcbn1cblxuLy8gVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBiYXNlZCBoZWF2aWx5IG9uIG5vZGUncyB1cmwucGFyc2VcbmZ1bmN0aW9uIHJlc29sdmVQYXRobmFtZSh0bywgZnJvbSkge1xuICBpZiAoZnJvbSA9PT0gdW5kZWZpbmVkKSBmcm9tID0gJyc7XG5cbiAgdmFyIHRvUGFydHMgPSAodG8gJiYgdG8uc3BsaXQoJy8nKSkgfHwgW107XG4gIHZhciBmcm9tUGFydHMgPSAoZnJvbSAmJiBmcm9tLnNwbGl0KCcvJykpIHx8IFtdO1xuXG4gIHZhciBpc1RvQWJzID0gdG8gJiYgaXNBYnNvbHV0ZSh0byk7XG4gIHZhciBpc0Zyb21BYnMgPSBmcm9tICYmIGlzQWJzb2x1dGUoZnJvbSk7XG4gIHZhciBtdXN0RW5kQWJzID0gaXNUb0FicyB8fCBpc0Zyb21BYnM7XG5cbiAgaWYgKHRvICYmIGlzQWJzb2x1dGUodG8pKSB7XG4gICAgLy8gdG8gaXMgYWJzb2x1dGVcbiAgICBmcm9tUGFydHMgPSB0b1BhcnRzO1xuICB9IGVsc2UgaWYgKHRvUGFydHMubGVuZ3RoKSB7XG4gICAgLy8gdG8gaXMgcmVsYXRpdmUsIGRyb3AgdGhlIGZpbGVuYW1lXG4gICAgZnJvbVBhcnRzLnBvcCgpO1xuICAgIGZyb21QYXJ0cyA9IGZyb21QYXJ0cy5jb25jYXQodG9QYXJ0cyk7XG4gIH1cblxuICBpZiAoIWZyb21QYXJ0cy5sZW5ndGgpIHJldHVybiAnLyc7XG5cbiAgdmFyIGhhc1RyYWlsaW5nU2xhc2g7XG4gIGlmIChmcm9tUGFydHMubGVuZ3RoKSB7XG4gICAgdmFyIGxhc3QgPSBmcm9tUGFydHNbZnJvbVBhcnRzLmxlbmd0aCAtIDFdO1xuICAgIGhhc1RyYWlsaW5nU2xhc2ggPSBsYXN0ID09PSAnLicgfHwgbGFzdCA9PT0gJy4uJyB8fCBsYXN0ID09PSAnJztcbiAgfSBlbHNlIHtcbiAgICBoYXNUcmFpbGluZ1NsYXNoID0gZmFsc2U7XG4gIH1cblxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gZnJvbVBhcnRzLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgcGFydCA9IGZyb21QYXJ0c1tpXTtcblxuICAgIGlmIChwYXJ0ID09PSAnLicpIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICBpZiAoIW11c3RFbmRBYnMpIGZvciAoOyB1cC0tOyB1cCkgZnJvbVBhcnRzLnVuc2hpZnQoJy4uJyk7XG5cbiAgaWYgKFxuICAgIG11c3RFbmRBYnMgJiZcbiAgICBmcm9tUGFydHNbMF0gIT09ICcnICYmXG4gICAgKCFmcm9tUGFydHNbMF0gfHwgIWlzQWJzb2x1dGUoZnJvbVBhcnRzWzBdKSlcbiAgKVxuICAgIGZyb21QYXJ0cy51bnNoaWZ0KCcnKTtcblxuICB2YXIgcmVzdWx0ID0gZnJvbVBhcnRzLmpvaW4oJy8nKTtcblxuICBpZiAoaGFzVHJhaWxpbmdTbGFzaCAmJiByZXN1bHQuc3Vic3RyKC0xKSAhPT0gJy8nKSByZXN1bHQgKz0gJy8nO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVQYXRobmFtZTtcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlRXZlbnRMaXN0LFxyXG4gIHN0cmlwVHJhaWxpbmdTbGFzaCxcclxuICBhZGRMZWFkaW5nU2xhc2gsXHJcbn0gZnJvbSBcIi4uL3V0aWxzL2luZGV4XCI7XHJcbmltcG9ydCB7XHJcbiAgQmVmb3JlVW5sb2FkRXZlbnRUeXBlLFxyXG4gIEhhc2hDaGFuZ2VFdmVudFR5cGUsXHJcbiAgUG9wU3RhdGVFdmVudFR5cGUsXHJcbiAgYWN0aW9uVHlwZSxcclxufSBmcm9tIFwiLi4vY29uZmlnL2luZGV4XCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlUGF0aCxcclxuICBjcmVhdGVMb2NhdGlvbixcclxuICBnZXRCYXNlSHJlZixcclxufSBmcm9tIFwiLi4vdXRpbHMvTG9jYXRpb25VdGlsc1wiO1xyXG4vKipcclxuICog5Yib5bu6aGlzdG9yeei3r+eUsVxyXG4gKiBAcGFyYW0geyp9IG9wdGlvbnNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KG9wdGlvbnMgPSB7fSkge1xyXG4gIGNvbnN0IHsgd2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcsIGlzU2hvd0JlZm9yZVVubG9hZCA9IGZhbHNlIH0gPSBvcHRpb25zO1xyXG5cclxuICBjb25zdCBiYXNlbmFtZSA9IG9wdGlvbnMuYmFzZW5hbWVcclxuICAgID8gc3RyaXBUcmFpbGluZ1NsYXNoKGFkZExlYWRpbmdTbGFzaChvcHRpb25zLmJhc2VuYW1lKSlcclxuICAgIDogXCJcIjtcclxuXHJcbiAgLy8g5YWo5bGAaGlzdG9yeVxyXG4gIGNvbnN0IGdsb2JhbEhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcclxuXHJcbiAgLy8g6K6i6ZiF6ICF6Zif5YiXXHJcbiAgY29uc3QgbGlzdGVuZXJzID0gY3JlYXRlRXZlbnRMaXN0KHtcclxuICAgIHJlbW92ZUNhbGxiYWNrOiByZW1vdmVQb3BTdGF0ZUV2ZW50TGlzdGVuRnVuYyxcclxuICB9KTtcclxuICAvLyDmj5DnpLrkuovku7bpmJ/liJdcclxuICBjb25zdCBibG9ja2VycyA9IGNyZWF0ZUV2ZW50TGlzdCh7XHJcbiAgICBpc05lZWRSZXN1bHQ6IHRydWUsXHJcbiAgICByZW1vdmVDYWxsYmFjazogcmVtb3ZlUG9wU3RhdGVFdmVudExpc3RlbkZ1bmMsXHJcbiAgfSk7XHJcblxyXG4gIGxldCBhY3Rpb24gPSBhY3Rpb25UeXBlLnBvcDtcclxuICBsZXQgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbih7XHJcbiAgICBwYXRoOiB3aW5kb3cubG9jYXRpb24sXHJcbiAgICBiYXNlbmFtZSxcclxuICAgIHN0YXRlOiBnbG9iYWxIaXN0b3J5LnN0YXRlLFxyXG4gIH0pO1xyXG5cclxuICAvKipcclxuICAgKiBQb3BTdGF0ZUV2ZW50IOebkeWQrOaWueazlVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHBvcFN0YXRlRXZlbnRMaXN0ZW5GdW5jKGV2ZW50KSB7XHJcbiAgICBsZXQgbmV4dExvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oe1xyXG4gICAgICBwYXRoOiB3aW5kb3cubG9jYXRpb24sXHJcbiAgICAgIGJhc2VuYW1lLFxyXG4gICAgICBzdGF0ZTogZ2xvYmFsSGlzdG9yeS5zdGF0ZSxcclxuICAgIH0pO1xyXG4gICAgLy8gSWdub3JlIGV4dHJhbmVvdXMgaGFzaGNoYW5nZSBldmVudHMuXHJcbiAgICAvLyDov5nph4zmhJ/op4nlj6/ku6Xkvb/nlKhldmVudOS4reeahOaVsOaNru+8jOS9huaYr+i/meagt+WGmeWPr+S7pemBv+WFjeS4jeWQjOeOr+Wig2hhc2jkuK3mlbDmja7lvILluLjnmoTpl67pophcclxuICAgIGlmIChjcmVhdGVQYXRoKG5leHRMb2NhdGlvbikgIT09IGNyZWF0ZVBhdGgobG9jYXRpb24pKSB7XHJcbiAgICAgIGhhbmRsZVBvcChuZXh0TG9jYXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlUG9wU3RhdGVFdmVudExpc3RlbkZ1bmMoKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihQb3BTdGF0ZUV2ZW50VHlwZSwgcG9wU3RhdGVFdmVudExpc3RlbkZ1bmMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572u55uR5ZCsLOWPquacieWGjWdvLGJhY2ssZm9yd2FyZOS4ieenjeaDheWGteS4i+S8muinpuWPkVxyXG4gICAqL1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFBvcFN0YXRlRXZlbnRUeXBlLCBwb3BTdGF0ZUV2ZW50TGlzdGVuRnVuYyk7XHJcblxyXG4gIGxldCBibG9ja2VkUG9wVHggPSBudWxsO1xyXG4gIC8qKlxyXG4gICAqIGhhc2jmlLnlj5jlh7rlj5Hkuovku7ZcclxuICAgKi9cclxuICBmdW5jdGlvbiBoYW5kbGVQb3AobmV4dExvY2F0aW9uKSB7XHJcbiAgICBpZiAoYmxvY2tlZFBvcFR4KSB7XHJcbiAgICAgIGJsb2NrZWRQb3BUeCA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJsb2NrZWRQb3BUeFwiLCBibG9ja2VkUG9wVHgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbmV4dEFjdGlvbiA9IGFjdGlvblR5cGUucG9wO1xyXG4gICAgICBjb25zdCBzZW5kRGF0YSA9IHtcclxuICAgICAgICBhY3Rpb246IG5leHRBY3Rpb24sXHJcbiAgICAgICAgbG9jYXRpb246IG5leHRMb2NhdGlvbixcclxuICAgICAgfTtcclxuICAgICAgaWYgKGJsb2NrZXJzLmxlbmd0aCkge1xyXG4gICAgICAgIGxldCBpc09rID0gYmxvY2tlcnMuY2FsbChzZW5kRGF0YSk7XHJcbiAgICAgICAgaWYgKCFpc09rKSB7XHJcbiAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBsb2NhdGlvbi5zdGF0ZS5pbmRleCAtIG5leHRMb2NhdGlvbi5zdGF0ZS5pbmRleDtcclxuICAgICAgICAgIC8vIGJsb2NrZWRQb3BUeCA9IHRydWU7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImlzTm90T2tcIiwgYmxvY2tlZFBvcFR4LCBsb2NhdGlvbiwgbmV4dExvY2F0aW9uKTtcclxuICAgICAgICAgIGdvKGxhc3RJbmRleCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uLCBuZXh0TG9jYXRpb24pO1xyXG4gICAgICAgICAgbG9jYXRpb24gPSBuZXh0TG9jYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFwcGx5VG8oc2VuZERhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnlJ/miJDpk77mjqVcclxuICAgKi9cclxuICBmdW5jdGlvbiBjcmVhdGVIcmVmKHBhdGgpIHtcclxuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICByZXR1cm4gY3JlYXRlUGF0aChcclxuICAgICAgICBjcmVhdGVMb2NhdGlvbih7XHJcbiAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgYmFzZW5hbWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaYr+WQpuWFgeiuuOi3s+i9rFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGFsbG93VG8ocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgYWN0aW9uLCBsb2NhdGlvbiB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCByZXN1bHQgPSAhYmxvY2tlcnMubGVuZ3RoIHx8IGJsb2NrZXJzLmNhbGwoeyBhY3Rpb24sIGxvY2F0aW9uIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWFgeiuuOi3s+i9rFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGFwcGx5VG8ocHJvcHMpIHtcclxuICAgIGFjdGlvbiA9IHByb3BzLmFjdGlvbjtcclxuICAgIGxvY2F0aW9uID0gcHJvcHMubG9jYXRpb247XHJcbiAgICBsaXN0ZW5lcnMuY2FsbCh7IGFjdGlvbiwgbG9jYXRpb24gfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmt7vliqDot6/nlLFcclxuICAgKi9cclxuICBmdW5jdGlvbiBwdXNoKHBhdGgsIHN0YXRlKSB7XHJcbiAgICBjb25zdCBuZXdBY3Rpb24gPSBhY3Rpb25UeXBlLnB1c2g7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgIGluZGV4OiBsb2NhdGlvbi5zdGF0ZSAmJiBsb2NhdGlvbi5zdGF0ZS5pbmRleCArIDEsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG5ld0xvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oe1xyXG4gICAgICBwYXRoLFxyXG4gICAgICBzdGF0ZTogbmV3U3RhdGUsXHJcbiAgICAgIGJhc2VuYW1lLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzZW5kRGF0YSA9IHtcclxuICAgICAgYWN0aW9uOiBuZXdBY3Rpb24sXHJcbiAgICAgIGxvY2F0aW9uOiBuZXdMb2NhdGlvbixcclxuICAgIH07XHJcbiAgICBpZiAoYWxsb3dUbyhzZW5kRGF0YSkpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBnZXRCYXNlSHJlZigpICsgYmFzZW5hbWUgKyBjcmVhdGVQYXRoKG5ld0xvY2F0aW9uKTtcclxuICAgICAgICBnbG9iYWxIaXN0b3J5LnB1c2hTdGF0ZShuZXdTdGF0ZSwgXCJcIiwgdXJsKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgIH1cclxuICAgICAgYXBwbHlUbyhzZW5kRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmm7/mjaJcclxuICAgKi9cclxuICBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XHJcbiAgICBjb25zdCBuZXdBY3Rpb24gPSBhY3Rpb25UeXBlLnB1c2g7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgIGluZGV4OiBsb2NhdGlvbi5zdGF0ZSAmJiBsb2NhdGlvbi5zdGF0ZS5pbmRleCxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgbmV3TG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbih7IHBhdGgsIHN0YXRlOiBuZXdTdGF0ZSwgYmFzZW5hbWUgfSk7XHJcbiAgICBjb25zdCBzZW5kRGF0YSA9IHtcclxuICAgICAgYWN0aW9uOiBuZXdBY3Rpb24sXHJcbiAgICAgIGxvY2F0aW9uOiBuZXdMb2NhdGlvbixcclxuICAgIH07XHJcbiAgICBpZiAoYWxsb3dUbyhzZW5kRGF0YSkpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBnZXRCYXNlSHJlZigpICsgYmFzZW5hbWUgKyBjcmVhdGVQYXRoKG5ld0xvY2F0aW9uKTtcclxuICAgICAgICBnbG9iYWxIaXN0b3J5LnJlcGxhY2VTdGF0ZShuZXdTdGF0ZSwgXCJcIiwgdXJsKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgIH1cclxuICAgICAgYXBwbHlUbyhzZW5kRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDot7PovaxcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcclxuICAgKi9cclxuICBmdW5jdGlvbiBnbyhpbmRleCkge1xyXG4gICAgZ2xvYmFsSGlzdG9yeS5nbyhpbmRleCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlm57pgIBcclxuICAgKi9cclxuICBmdW5jdGlvbiBiYWNrKCkge1xyXG4gICAgZ28oLTEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5YmN6L+bXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZm9yd2FyZCgpIHtcclxuICAgIGdvKDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5rOo5YaM6K6i6ZiF6ICFXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICAgKi9cclxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcclxuICAgIHJldHVybiBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLliLfmlrDliY3nmoTlpITnkIbmk43kvZxcclxuICAgKiDlj6rmnIloaXN0b3J5LmJhY2soKSDlkowgaGlzdG9yeS5mb3J3YXJkKCnkvJrop6blj5FGXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gcHJvbXB0QmVmb3JlVW5sb2FkKGV2ZW50KSB7XHJcbiAgICBpZiAoIWlzU2hvd0JlZm9yZVVubG9hZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBDYW5jZWwgdGhlIGV2ZW50IGFzIHN0YXRlZCBieSB0aGUgc3RhbmRhcmQuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gQ2hyb21lIHJlcXVpcmVzIHJldHVyblZhbHVlIHRvIGJlIHNldC5cclxuICAgIGV2ZW50LnJldHVyblZhbHVlID0gXCJcIjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaPkOekulxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGJsb2NrKGJsb2NrZXIpIHtcclxuICAgIGxldCB1bmJsb2NrID0gYmxvY2tlcnMucHVzaChibG9ja2VyKTtcclxuICAgIGlmIChibG9ja2Vycy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoQmVmb3JlVW5sb2FkRXZlbnRUeXBlLCBwcm9tcHRCZWZvcmVVbmxvYWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHVuYmxvY2soKTtcclxuICAgICAgaWYgKCFibG9ja2Vycy5sZW5ndGgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihCZWZvcmVVbmxvYWRFdmVudFR5cGUsIHByb21wdEJlZm9yZVVubG9hZCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBsZXQgaGlzdG9yeSA9IHtcclxuICAgIGdldCBhY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBhY3Rpb247XHJcbiAgICB9LFxyXG4gICAgZ2V0IGxvY2F0aW9uKCkge1xyXG4gICAgICByZXR1cm4gbG9jYXRpb247XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlSHJlZixcclxuICAgIHB1c2gsXHJcbiAgICByZXBsYWNlLFxyXG4gICAgZ28sXHJcbiAgICBiYWNrLFxyXG4gICAgZm9yd2FyZCxcclxuICAgIGxpc3RlbixcclxuICAgIGJsb2NrLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBoaXN0b3J5O1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlRXZlbnRMaXN0LFxyXG4gIHN0cmlwVHJhaWxpbmdTbGFzaCxcclxuICBhZGRMZWFkaW5nU2xhc2gsXHJcbn0gZnJvbSBcIi4uL3V0aWxzL2luZGV4XCI7XHJcbmltcG9ydCB7XHJcbiAgQmVmb3JlVW5sb2FkRXZlbnRUeXBlLFxyXG4gIEhhc2hDaGFuZ2VFdmVudFR5cGUsXHJcbiAgUG9wU3RhdGVFdmVudFR5cGUsXHJcbiAgYWN0aW9uVHlwZSxcclxufSBmcm9tIFwiLi4vY29uZmlnL2luZGV4XCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlUGF0aCxcclxuICBjcmVhdGVMb2NhdGlvbixcclxuICBnZXRCYXNlSHJlZixcclxufSBmcm9tIFwiLi4vdXRpbHMvTG9jYXRpb25VdGlsc1wiO1xyXG4vKipcclxuICog5Yib5bu6aGlzdG9yeei3r+eUsVxyXG4gKiBAcGFyYW0geyp9IG9wdGlvbnNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhhc2hIaXN0b3J5KG9wdGlvbnMgPSB7fSkge1xyXG4gIGNvbnN0IHsgd2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcsIGlzU2hvd0JlZm9yZVVubG9hZCA9IGZhbHNlIH0gPSBvcHRpb25zO1xyXG5cclxuICBjb25zdCBiYXNlbmFtZSA9IG9wdGlvbnMuYmFzZW5hbWVcclxuICAgID8gc3RyaXBUcmFpbGluZ1NsYXNoKGFkZExlYWRpbmdTbGFzaChvcHRpb25zLmJhc2VuYW1lKSlcclxuICAgIDogXCJcIjtcclxuXHJcbiAgLy8g5YWo5bGAaGlzdG9yeVxyXG4gIGNvbnN0IGdsb2JhbEhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcclxuXHJcbiAgLy8g6K6i6ZiF6ICF6Zif5YiXXHJcbiAgY29uc3QgbGlzdGVuZXJzID0gY3JlYXRlRXZlbnRMaXN0KHtcclxuICAgIHJlbW92ZUNhbGxiYWNrOiByZW1vdmVIYXNoQ2hhbmdlRXZlbnRMaXN0ZW5GdW5jLFxyXG4gIH0pO1xyXG4gIC8vIOaPkOekuuS6i+S7tumYn+WIl1xyXG4gIGNvbnN0IGJsb2NrZXJzID0gY3JlYXRlRXZlbnRMaXN0KHtcclxuICAgIGlzTmVlZFJlc3VsdDogdHJ1ZSxcclxuICAgIHJlbW92ZUNhbGxiYWNrOiByZW1vdmVIYXNoQ2hhbmdlRXZlbnRMaXN0ZW5GdW5jLFxyXG4gIH0pO1xyXG5cclxuICBsZXQgYWN0aW9uID0gYWN0aW9uVHlwZS5wb3A7XHJcbiAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oe1xyXG4gICAgcGF0aDogd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpLFxyXG4gICAgYmFzZW5hbWUsXHJcbiAgICBzdGF0ZTogZ2xvYmFsSGlzdG9yeS5zdGF0ZSxcclxuICB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogaGFzaENoYW5nZUV2ZW50IOebkeWQrOaWueazlVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhhc2hDaGFuZ2VFdmVudExpc3RlbkZ1bmMoZXZlbnQpIHtcclxuICAgIGxldCBuZXh0TG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbih7XHJcbiAgICAgIHBhdGg6IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSxcclxuICAgICAgYmFzZW5hbWUsXHJcbiAgICAgIHN0YXRlOiBnbG9iYWxIaXN0b3J5LnN0YXRlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSWdub3JlIGV4dHJhbmVvdXMgaGFzaGNoYW5nZSBldmVudHMuXHJcbiAgICAvLyDov5nph4zmhJ/op4nlj6/ku6Xkvb/nlKhldmVudOS4reeahOaVsOaNru+8jOS9huaYr+i/meagt+WGmeWPr+S7pemBv+WFjeS4jeWQjOeOr+Wig2hhc2jkuK3mlbDmja7lvILluLjnmoTpl67pophcclxuICAgIGlmIChjcmVhdGVQYXRoKG5leHRMb2NhdGlvbikgIT09IGNyZWF0ZVBhdGgobG9jYXRpb24pKSB7XHJcbiAgICAgIGhhbmRsZVBvcChuZXh0TG9jYXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlSGFzaENoYW5nZUV2ZW50TGlzdGVuRnVuYygpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKEhhc2hDaGFuZ2VFdmVudFR5cGUsIGhhc2hDaGFuZ2VFdmVudExpc3RlbkZ1bmMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572u55uR5ZCsLOWPquacieWGjWdvLGJhY2ssZm9yd2FyZOS4ieenjeaDheWGteS4i+S8muinpuWPkVxyXG4gICAqL1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEhhc2hDaGFuZ2VFdmVudFR5cGUsIGhhc2hDaGFuZ2VFdmVudExpc3RlbkZ1bmMpO1xyXG5cclxuICBsZXQgYmxvY2tlZFBvcFR4ID0gbnVsbDtcclxuICAvKipcclxuICAgKiBoYXNo5pS55Y+Y5Ye65Y+R5LqL5Lu2XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gaGFuZGxlUG9wKG5leHRMb2NhdGlvbikge1xyXG4gICAgaWYgKGJsb2NrZWRQb3BUeCkge1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbmV4dEFjdGlvbiA9IGFjdGlvblR5cGUucG9wO1xyXG4gICAgICBjb25zdCBzZW5kRGF0YSA9IHtcclxuICAgICAgICBhY3Rpb246IG5leHRBY3Rpb24sXHJcbiAgICAgICAgbG9jYXRpb246IG5leHRMb2NhdGlvbixcclxuICAgICAgfTtcclxuICAgICAgaWYgKGJsb2NrZXJzLmxlbmd0aCkge1xyXG4gICAgICAgIGxldCBpc09rID0gYmxvY2tlcnMuY2FsbChzZW5kRGF0YSk7XHJcbiAgICAgICAgaWYgKCFpc09rKSB7XHJcbiAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBsb2NhdGlvbi5zdGF0ZS5pbmRleCAtIG5leHRMb2NhdGlvbi5zdGF0ZS5pbmRleDtcclxuICAgICAgICAgIGdvKGxhc3RJbmRleCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxvY2F0aW9uID0gbmV4dExvY2F0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhcHBseVRvKHNlbmREYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5oiQ6ZO+5o6lXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gY3JlYXRlSHJlZihwYXRoKSB7XHJcbiAgICBpZiAodHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgcmV0dXJuIGNyZWF0ZVBhdGgoXHJcbiAgICAgICAgY3JlYXRlTG9jYXRpb24oe1xyXG4gICAgICAgICAgcGF0aCxcclxuICAgICAgICAgIGJhc2VuYW1lLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmmK/lkKblhYHorrjot7PovaxcclxuICAgKi9cclxuICBmdW5jdGlvbiBhbGxvd1RvKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IGFjdGlvbiwgbG9jYXRpb24gfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuICFibG9ja2Vycy5sZW5ndGggfHwgYmxvY2tlcnMuY2FsbCh7IGFjdGlvbiwgbG9jYXRpb24gfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlhYHorrjot7PovaxcclxuICAgKi9cclxuICBmdW5jdGlvbiBhcHBseVRvKHByb3BzKSB7XHJcbiAgICBhY3Rpb24gPSBwcm9wcy5hY3Rpb247XHJcbiAgICBsb2NhdGlvbiA9IHByb3BzLmxvY2F0aW9uO1xyXG4gICAgbGlzdGVuZXJzLmNhbGwoeyBhY3Rpb24sIGxvY2F0aW9uIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5re75Yqg6Lev55SxXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gcHVzaChwYXRoLCBzdGF0ZSkge1xyXG4gICAgY29uc3QgbmV3QWN0aW9uID0gYWN0aW9uVHlwZS5wdXNoO1xyXG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICBpbmRleDogbG9jYXRpb24uc3RhdGUgJiYgbG9jYXRpb24uc3RhdGUuaW5kZXggKyAxLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBuZXdMb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHtcclxuICAgICAgcGF0aCxcclxuICAgICAgc3RhdGU6IG5ld1N0YXRlLFxyXG4gICAgICBiYXNlbmFtZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc2VuZERhdGEgPSB7XHJcbiAgICAgIGFjdGlvbjogbmV3QWN0aW9uLFxyXG4gICAgICBsb2NhdGlvbjogbmV3TG9jYXRpb24sXHJcbiAgICB9O1xyXG4gICAgaWYgKGFsbG93VG8oc2VuZERhdGEpKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gZ2V0QmFzZUhyZWYoKSArIFwiI1wiICsgYmFzZW5hbWUgKyBjcmVhdGVQYXRoKG5ld0xvY2F0aW9uKTtcclxuICAgICAgICBnbG9iYWxIaXN0b3J5LnB1c2hTdGF0ZShuZXdTdGF0ZSwgXCJcIiwgdXJsKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgIH1cclxuICAgICAgYXBwbHlUbyhzZW5kRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmm7/mjaJcclxuICAgKi9cclxuICBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XHJcbiAgICBjb25zdCBuZXdBY3Rpb24gPSBhY3Rpb25UeXBlLnB1c2g7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgIGluZGV4OiBsb2NhdGlvbi5zdGF0ZSAmJiBsb2NhdGlvbi5zdGF0ZS5pbmRleCxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgbmV3TG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbih7IHBhdGgsIHN0YXRlOiBuZXdTdGF0ZSwgYmFzZW5hbWUgfSk7XHJcbiAgICBjb25zdCBzZW5kRGF0YSA9IHtcclxuICAgICAgYWN0aW9uOiBuZXdBY3Rpb24sXHJcbiAgICAgIGxvY2F0aW9uOiBuZXdMb2NhdGlvbixcclxuICAgIH07XHJcbiAgICBpZiAoYWxsb3dUbyhzZW5kRGF0YSkpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBnZXRCYXNlSHJlZigpICsgXCIjXCIgKyBiYXNlbmFtZSArIGNyZWF0ZVBhdGgobmV3TG9jYXRpb24pO1xyXG4gICAgICAgIGdsb2JhbEhpc3RvcnkucmVwbGFjZVN0YXRlKG5ld1N0YXRlLCBcIlwiLCB1cmwpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgfVxyXG4gICAgICBhcHBseVRvKHNlbmREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOi3s+i9rFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGdvKGluZGV4KSB7XHJcbiAgICBnbG9iYWxIaXN0b3J5LmdvKGluZGV4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWbnumAgFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGJhY2soKSB7XHJcbiAgICBnbygtMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDliY3ov5tcclxuICAgKi9cclxuICBmdW5jdGlvbiBmb3J3YXJkKCkge1xyXG4gICAgZ28oMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDms6jlhozorqLpmIXogIVcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xyXG4gICAgcmV0dXJuIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouWIt+aWsOWJjeeahOWkhOeQhuaTjeS9nFxyXG4gICAqIOWPquaciWhpc3RvcnkuYmFjaygpIOWSjCBoaXN0b3J5LmZvcndhcmQoKeS8muinpuWPkUZcclxuICAgKi9cclxuICBmdW5jdGlvbiBwcm9tcHRCZWZvcmVVbmxvYWQoZXZlbnQpIHtcclxuICAgIGlmICghaXNTaG93QmVmb3JlVW5sb2FkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIENhbmNlbCB0aGUgZXZlbnQgYXMgc3RhdGVkIGJ5IHRoZSBzdGFuZGFyZC5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBDaHJvbWUgcmVxdWlyZXMgcmV0dXJuVmFsdWUgdG8gYmUgc2V0LlxyXG4gICAgZXZlbnQucmV0dXJuVmFsdWUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5o+Q56S6XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gYmxvY2soYmxvY2tlcikge1xyXG4gICAgbGV0IHVuYmxvY2sgPSBibG9ja2Vycy5wdXNoKGJsb2NrZXIpO1xyXG4gICAgaWYgKGJsb2NrZXJzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihCZWZvcmVVbmxvYWRFdmVudFR5cGUsIHByb21wdEJlZm9yZVVubG9hZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgdW5ibG9jaygpO1xyXG4gICAgICBpZiAoIWJsb2NrZXJzLmxlbmd0aCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKEJlZm9yZVVubG9hZEV2ZW50VHlwZSwgcHJvbXB0QmVmb3JlVW5sb2FkKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGxldCBoaXN0b3J5ID0ge1xyXG4gICAgZ2V0IGFjdGlvbigpIHtcclxuICAgICAgcmV0dXJuIGFjdGlvbjtcclxuICAgIH0sXHJcbiAgICBnZXQgbG9jYXRpb24oKSB7XHJcbiAgICAgIHJldHVybiBsb2NhdGlvbjtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVIcmVmLFxyXG4gICAgcHVzaCxcclxuICAgIHJlcGxhY2UsXHJcbiAgICBnbyxcclxuICAgIGJhY2ssXHJcbiAgICBmb3J3YXJkLFxyXG4gICAgbGlzdGVuLFxyXG4gICAgYmxvY2ssXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGhpc3Rvcnk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0VW5pcXVlS2V5LCB2YWx1ZUVxdWFsIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHJlc29sdmVQYXRoTmFtZSBmcm9tIFwicmVzb2x2ZS1wYXRobmFtZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKHBhcmFtcyA9IHt9KSB7XHJcbiAgY29uc3Qge1xyXG4gICAgcGF0aCwgLy8g5Zyw5Z2AXHJcbiAgICBiYXNlbmFtZSwgLy9cclxuICAgIGtleSA9IGdldFVuaXF1ZUtleSgpLCAvLyDllK/kuIDlgLxcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICBpbmRleDogMCxcclxuICAgIH0sIC8vIOeKtuaAgeWPguaVsFxyXG4gICAgY3VycmVudExvY2F0aW9uLCAvLyDlvZPliY1sb2NhdGlvblxyXG4gIH0gPSBwYXJhbXM7XHJcbiAgY29uc3QgYmFzZVBhdGhJbmZvID0gcGFyc2VQYXRoKHBhdGgsIGJhc2VuYW1lLCBjdXJyZW50TG9jYXRpb24pO1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5iYXNlUGF0aEluZm8sXHJcbiAgICBrZXksXHJcbiAgICBzdGF0ZSxcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICog6Kej5p6Q6Lev5b6EXHJcbiAqIEBwYXJhbSB7Kn19IHBhdGhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhdGgocGF0aCwgYmFzZW5hbWUsIGN1cnJlbnRMb2NhdGlvbikge1xyXG4gIGxldCBsb2NhdGlvblJlc3VsdCA9IHtcclxuICAgIHBhdGhuYW1lOiBcIi9cIixcclxuICAgIHNlYXJjaDogXCJcIixcclxuICAgIGhhc2g6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgaWYgKHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICBsb2NhdGlvblJlc3VsdC5wYXRobmFtZSA9IHBhdGggfHwgXCIvXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxvY2F0aW9uUmVzdWx0ID0gT2JqZWN0LmFzc2lnbihsb2NhdGlvblJlc3VsdCwgeyAuLi5wYXRoIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8g5YWI6L+H5rukaGFzaOWAvO+8jOeEtuWQjuWGjei/h+a7pHNlYXJjaOeahOWGheWuuVxyXG5cclxuICBjb25zdCBoYXNoSW5kZXggPSBsb2NhdGlvblJlc3VsdC5wYXRobmFtZS5pbmRleE9mKFwiI1wiKTtcclxuICAvLyDlrZjlnKhoYXNo5YC8XHJcbiAgaWYgKGhhc2hJbmRleCA+IC0xKSB7XHJcbiAgICAvLyBoYXNo5YC8XHJcbiAgICBsb2NhdGlvblJlc3VsdC5oYXNoID0gbG9jYXRpb25SZXN1bHQucGF0aG5hbWUuc3Vic3RyKGhhc2hJbmRleCk7XHJcbiAgICAvLyBwYXRobmFtZSDlgLxcclxuICAgIGxvY2F0aW9uUmVzdWx0LnBhdGhuYW1lID0gbG9jYXRpb25SZXN1bHQucGF0aG5hbWUuc3Vic3RyKDAsIGhhc2hJbmRleCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzZWFyY2hJbmRleCA9IGxvY2F0aW9uUmVzdWx0LnBhdGhuYW1lLmluZGV4T2YoXCI/XCIpO1xyXG4gIGlmIChzZWFyY2hJbmRleCA+IC0xKSB7XHJcbiAgICAvLyBzZWFyY2gg5YC8XHJcbiAgICBsb2NhdGlvblJlc3VsdC5zZWFyY2ggPSBsb2NhdGlvblJlc3VsdC5wYXRobmFtZS5zdWJzdHIoc2VhcmNoSW5kZXgpO1xyXG4gICAgLy8gcGF0aG5hbWUg5YC8XHJcbiAgICBsb2NhdGlvblJlc3VsdC5wYXRobmFtZSA9IGxvY2F0aW9uUmVzdWx0LnBhdGhuYW1lLnN1YnN0cigwLCBzZWFyY2hJbmRleCk7XHJcbiAgfVxyXG5cclxuICBsb2NhdGlvblJlc3VsdC5wYXRobmFtZSA9IHN0cmlwQmFzZW5hbWUobG9jYXRpb25SZXN1bHQucGF0aG5hbWUsIGJhc2VuYW1lKTtcclxuXHJcbiAgaWYgKGN1cnJlbnRMb2NhdGlvbikge1xyXG4gICAgaWYgKCFsb2NhdGlvblJlc3VsdC5wYXRobmFtZSkge1xyXG4gICAgICBsb2NhdGlvblJlc3VsdC5wYXRobmFtZSA9IGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIH0gZWxzZSBpZiAobG9jYXRpb25SZXN1bHQucGF0aG5hbWUuY2hhckF0KDApICE9PSBcIi9cIikge1xyXG4gICAgICBsb2NhdGlvblJlc3VsdC5wYXRobmFtZSA9IHJlc29sdmVQYXRobmFtZShcclxuICAgICAgICBsb2NhdGlvblJlc3VsdC5wYXRobmFtZSxcclxuICAgICAgICBjdXJyZW50TG9jYXRpb24ucGF0aG5hbWVcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gV2hlbiB0aGVyZSBpcyBubyBwcmlvciBsb2NhdGlvbiBhbmQgcGF0aG5hbWUgaXMgZW1wdHksIHNldCBpdCB0byAvXHJcbiAgICBpZiAoIWxvY2F0aW9uUmVzdWx0LnBhdGhuYW1lKSB7XHJcbiAgICAgIGxvY2F0aW9uUmVzdWx0LnBhdGhuYW1lID0gXCIvXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aG5hbWU6IGxvY2F0aW9uUmVzdWx0LnBhdGhuYW1lLFxyXG4gICAgc2VhcmNoOiBsb2NhdGlvblJlc3VsdC5zZWFyY2ggPT09IFwiP1wiID8gXCJcIiA6IGxvY2F0aW9uUmVzdWx0LnNlYXJjaCxcclxuICAgIGhhc2g6IGxvY2F0aW9uUmVzdWx0Lmhhc2ggPT09IFwiI1wiID8gXCJcIiA6IGxvY2F0aW9uUmVzdWx0Lmhhc2gsXHJcbiAgfTtcclxufVxyXG5cclxuLy8g5Yib5bu6cGF0aFxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbiA9IHt9KSB7XHJcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoLCBoYXNoIH0gPSBsb2NhdGlvbjtcclxuXHJcbiAgbGV0IHBhdGggPSBwYXRobmFtZSB8fCBcIi9cIjtcclxuXHJcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2ggIT09IFwiP1wiKVxyXG4gICAgcGF0aCArPSBzZWFyY2guY2hhckF0KDApID09PSBcIj9cIiA/IHNlYXJjaCA6IGA/JHtzZWFyY2h9YDtcclxuXHJcbiAgaWYgKGhhc2ggJiYgaGFzaCAhPT0gXCIjXCIpIHBhdGggKz0gaGFzaC5jaGFyQXQoMCkgPT09IFwiI1wiID8gaGFzaCA6IGAjJHtoYXNofWA7XHJcblxyXG4gIHJldHVybiBwYXRoO1xyXG59XHJcblxyXG4vLyDmmK/lkKbljIXlkKtiYXNlbmFtZVxyXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZW5hbWUocGF0aCA9IFwiXCIsIHByZWZpeCA9IFwiXCIpIHtcclxuICByZXR1cm4gKFxyXG4gICAgcGF0aC50b0xvd2VyQ2FzZSgpLmluZGV4T2YocHJlZml4LnRvTG93ZXJDYXNlKCkpID09PSAwICYmXHJcbiAgICBcIi8/I1wiLmluZGV4T2YocGF0aC5jaGFyQXQocHJlZml4Lmxlbmd0aCkpICE9PSAtMVxyXG4gICk7XHJcbn1cclxuXHJcbi8vIOWOu+mZpGJhc2VuYW1lXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpcEJhc2VuYW1lKHBhdGggPSBcIlwiLCBwcmVmaXggPSBcIlwiKSB7XHJcbiAgcmV0dXJuIGhhc0Jhc2VuYW1lKHBhdGgsIHByZWZpeCkgPyBwYXRoLnN1YnN0cihwcmVmaXgubGVuZ3RoKSA6IHBhdGg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5ZiYXNlbmFtZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhc2VIcmVmKCkge1xyXG4gIGxldCBiYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJhc2VcIik7XHJcbiAgbGV0IGhyZWYgPSBcIlwiO1xyXG5cclxuICBpZiAoYmFzZSAmJiBiYXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIikpIHtcclxuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIGxldCBoYXNoSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIik7XHJcbiAgICBocmVmID0gaGFzaEluZGV4ID09PSAtMSA/IHVybCA6IHVybC5zbGljZSgwLCBoYXNoSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGhyZWY7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBsb2NhdGlvbiDmr5TovoNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbChhLCBiKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIGEucGF0aG5hbWUgPT09IGIucGF0aG5hbWUgJiZcclxuICAgIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJlxyXG4gICAgYS5oYXNoID09PSBiLmhhc2ggJiZcclxuICAgIGEua2V5ID09PSBiLmtleSAmJlxyXG4gICAgdmFsdWVFcXVhbChhLnN0YXRlLCBiLnN0YXRlKVxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZW51bVZhbHVlVHlwZSB9IGZyb20gXCIuLi9jb25maWcvaW5kZXhcIjtcclxuLyoqXHJcbiAqIOWIm+W7uuS6i+S7tumYn+WIl1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50TGlzdChvcHRpb25zID0ge30pIHtcclxuICBjb25zdCB7IGlzTmVlZFJlc3VsdCA9IGZhbHNlLCByZW1vdmVDYWxsYmFjayB9ID0gb3B0aW9ucztcclxuICBsZXQgbGlzdCA9IFtdO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0IGxlbmd0aCgpIHtcclxuICAgICAgcmV0dXJuIGxpc3QubGVuZ3RoO1xyXG4gICAgfSxcclxuICAgIHB1c2goZm4pIHtcclxuICAgICAgbGlzdC5wdXNoKGZuKTtcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBsaXN0ID0gbGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGZuKTtcclxuICAgICAgICBpZiAoIWxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICByZW1vdmVDYWxsYmFjayAmJiByZW1vdmVDYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjYWxsKGFyZykge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBjb25zdCBmbiA9IGxpc3RbaV07XHJcbiAgICAgICAgcmVzdWx0ID0gZm4gJiYgZm4oYXJnKTtcclxuICAgICAgICBpZiAoaXNOZWVkUmVzdWx0ICYmICFyZXN1bHQpIHtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5ZSv5LiAa2V5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pcXVlS2V5KGJhc2VEYXRhID0gXCJcIikge1xyXG4gIGNvbnN0IHRpbWVTdHIgPSBEYXRlLm5vdygpLnRvU3RyaW5nKDMyKTtcclxuICBsZXQga2V5ID0gdGltZVN0ciArIGJhc2VEYXRhLnRvU3RyaW5nKCk7XHJcbiAgbGV0IG5ld0tleSA9IFtdO1xyXG4gIGxldCB2ZXJpZmljYXRpb25EYXRhID0gMTsgLy8g5qCh6aqM56CB5L2N572uXHJcbiAgbGV0IG5ld0tleUluZGV4ID0gMDtcclxuICAvLyDph4fnlKjmtbfkvKbmoKHpqoznoIHljp/nkIblpITnkIZcclxuICBmb3IgKGxldCBqID0gMSwgbGVuID0ga2V5Lmxlbmd0aDsgaiA8PSBsZW47IGorKykge1xyXG4gICAgaWYgKGogPT09IHZlcmlmaWNhdGlvbkRhdGEpIHtcclxuICAgICAgbmV3S2V5W25ld0tleUluZGV4XSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoXHJcbiAgICAgICAgNjUgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAweDE2KVxyXG4gICAgICApO1xyXG4gICAgICBuZXdLZXlJbmRleCsrO1xyXG4gICAgICB2ZXJpZmljYXRpb25EYXRhID0gMiAqIHZlcmlmaWNhdGlvbkRhdGE7XHJcbiAgICB9XHJcbiAgICBuZXdLZXlbbmV3S2V5SW5kZXhdID0ga2V5W2ogLSAxXTtcclxuICAgIG5ld0tleUluZGV4Kys7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3S2V5LmpvaW4oXCJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcclxuICByZXR1cm4gKFxyXG4gICAgb2JqICYmIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgJiYgdG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgT2JqZWN0XVwiXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluaVsOaNruexu+Wei1xyXG4gKiDov5nph4zlj6rogIPomZHln7rmnKzmlbDmja7nsbvlnovvvIxzeW1ib2znrYnkuI3lnKjogIPomZHojIPnlbTlhoVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZVR5cGUodmFsKSB7XHJcbiAgbGV0IHR5cGUgPSBlbnVtVmFsdWVUeXBlLmJhc2ljO1xyXG4gIGlmIChpc09iamVjdCh2YWwpKSB7XHJcbiAgICB0eXBlID0gZW51bVZhbHVlVHlwZS5vYmplY3Q7XHJcbiAgfVxyXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcclxuICAgIHR5cGUgPSBlbnVtVmFsdWVUeXBlLmFycmF5O1xyXG4gIH1cclxufVxyXG4vKipcclxuICog5q+U6L6D5Lik5Liq5YC85piv5ZCm55u4562JXHJcbiAqIEBwYXJhbSB7Kn0gQVxyXG4gKiBAcGFyYW0geyp9IEJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZUVxdWFsKHZhbHVlQSwgdmFsdWVCKSB7XHJcbiAgY29uc3QgdmFsdWVBVHlwZSA9IGdldFZhbHVlVHlwZSh2YWx1ZUEpO1xyXG4gIGNvbnN0IHZhbHVlQlR5cGUgPSBnZXRWYWx1ZVR5cGUodmFsdWVCKTtcclxuXHJcbiAgLy8g57G75Z6L5LiN55u4562J55qE6IKv5a6a5LiN5LiA5qC3XHJcbiAgaWYgKHZhbHVlQVR5cGUgIT09IHZhbHVlQlR5cGUpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIOWfuuehgOexu+Wei+ebtOaOpeWFqOetieWIpOaWrVxyXG4gIGlmICh2YWx1ZUFUeXBlID09PSBlbnVtVmFsdWVUeXBlLmJhc2ljKSB7XHJcbiAgICByZXR1cm4gdmFsdWVBID09PSB2YWx1ZUI7XHJcbiAgfVxyXG5cclxuICAvLyDlr7nosaHnmoTpgJLlvZLosIPnlKhcclxuICBpZiAodmFsdWVBVHlwZSA9PT0gZW51bVZhbHVlVHlwZS5vYmplY3QpIHtcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZUEpO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGtleXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcclxuICAgICAgY29uc3QgaXNFcXVhbCA9IHZhbHVlRXF1YWwodmFsdWVBW2tleV0sIHZhbHVlQltrZXldKTtcclxuICAgICAgaWYgKCFpc0VxdWFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIOaVsOe7hOWFiOWIpOaWremVv+W6pu+8jOeEtuWQjuWGjeWIpOaWreavj+S4gOS4quWAvFxyXG4gIGlmICh2YWx1ZUFUeXBlID09PSBlbnVtVmFsdWVUeXBlLmFycmF5KSB7XHJcbiAgICBpZiAodmFsdWVBLmxlbmd0aCA9PT0gdmFsdWVCLmxlbmd0aCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWVBLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaXNFcXVhbCA9IHZhbHVlRXF1YWwodmFsdWVBW2ldLCB2YWx1ZUJbaV0pO1xyXG4gICAgICAgIGlmICghaXNFcXVhbCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlaTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLy8g5re75Yqg6aaW6YOo55qEIC9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZExlYWRpbmdTbGFzaChwYXRoKSB7XHJcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSBcIi9cIiA/IHBhdGggOiBcIi9cIiArIHBhdGg7XHJcbn1cclxuLy8g5Y676Zmk6aaW6YOo55qEIC9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmlwTGVhZGluZ1NsYXNoKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09IFwiL1wiID8gcGF0aC5zdWJzdHIoMSkgOiBwYXRoO1xyXG59XHJcbi8vIOWOu+mZpOWwvumDqOeahCAvXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpcFRyYWlsaW5nU2xhc2gocGF0aCkge1xyXG4gIHJldHVybiBwYXRoLmNoYXJBdChwYXRoLmxlbmd0aCAtIDEpID09PSBcIi9cIiA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==