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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head-manager-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/get-page-files.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

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

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

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

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

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

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

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

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");

/***/ }),

/***/ "./node_modules/next/dist/client/experimental-script.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/client/experimental-script.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _slicedToArray2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.initScriptLoader = initScriptLoader;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _headManagerContext = __webpack_require__(/*! ../next-server/lib/head-manager-context */ "../next-server/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

var ScriptCache = new Map();
var LoadCache = new Set();
var ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy', 'preload'];

var loadScript = function loadScript(props) {
  var src = props.src,
      id = props.id,
      _props$onLoad = props.onLoad,
      onLoad = _props$onLoad === void 0 ? function () {} : _props$onLoad,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML,
      _props$children = props.children,
      children = _props$children === void 0 ? '' : _props$children,
      onError = props.onError;
  var cacheKey = id || src;

  if (ScriptCache.has(src)) {
    if (!LoadCache.has(cacheKey)) {
      LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

      ScriptCache.get(src).then(onLoad, onError);
    }

    return;
  }

  var el = document.createElement('script');
  var loadPromise = new Promise(function (resolve, reject) {
    el.addEventListener('load', function () {
      resolve();

      if (onLoad) {
        onLoad.call(this);
      }
    });
    el.addEventListener('error', function () {
      reject();

      if (onError) {
        onError();
      }
    });
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
    LoadCache.add(cacheKey);
  }

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
        k = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    var attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  var _props$strategy = props.strategy,
      strategy = _props$strategy === void 0 ? 'defer' : _props$strategy;

  if (strategy === 'defer') {
    loadScript(props);
  } else if (strategy === 'lazy') {
    window.addEventListener('load', function () {
      (0, _requestIdleCallback.requestIdleCallback)(function () {
        return loadScript(props);
      });
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback.requestIdleCallback)(function () {
      return loadScript(props);
    });
  } else {
    window.addEventListener('load', function () {
      (0, _requestIdleCallback.requestIdleCallback)(function () {
        return loadScript(props);
      });
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  var _props$src = props.src,
      src = _props$src === void 0 ? '' : _props$src,
      _props$onLoad2 = props.onLoad,
      onLoad = _props$onLoad2 === void 0 ? function () {} : _props$onLoad2,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML,
      _props$children2 = props.children,
      children = _props$children2 === void 0 ? '' : _props$children2,
      _props$strategy2 = props.strategy,
      strategy = _props$strategy2 === void 0 ? 'defer' : _props$strategy2,
      onError = props.onError,
      _props$preload = props.preload,
      preload = _props$preload === void 0 ? false : _props$preload,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(props, ["src", "onLoad", "dangerouslySetInnerHTML", "children", "strategy", "onError", "preload"]); // Context is available only during SSR

  var _ref = (0, _react.useContext)(_headManagerContext.HeadManagerContext),
      updateScripts = _ref.updateScripts,
      scripts = _ref.scripts;

  (0, _react.useEffect)(function () {
    if (strategy === 'defer') {
      loadScript(props);
    } else if (strategy === 'lazy') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (true) {
    return null;
  }

  if (strategy === 'dangerouslyBlockRendering') {
    var syncProps = (0, _extends2["default"])({}, restProps);

    for (var _i2 = 0, _Object$entries2 = Object.entries({
      src: src,
      onLoad: onLoad,
      onError: onError,
      dangerouslySetInnerHTML: dangerouslySetInnerHTML,
      children: children
    }); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = (0, _slicedToArray2["default"])(_Object$entries2[_i2], 2),
          k = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];

      if (!value) {
        continue;
      }

      if (k === 'children') {
        syncProps.dangerouslySetInnerHTML = {
          __html: typeof value === 'string' ? value : Array.isArray(value) ? value.join('') : ''
        };
      } else {
        ;
        syncProps[k] = value;
      }
    }

    return /*#__PURE__*/_react["default"].createElement("script", syncProps);
  } else if (strategy === 'defer') {
    if (updateScripts && preload) {
      scripts.defer = (scripts.defer || []).concat([src]);
      updateScripts(scripts);
    }
  } else if (strategy === 'eager') {
    if (updateScripts) {
      scripts.eager = (scripts.eager || []).concat([(0, _extends2["default"])({
        src: src,
        onLoad: onLoad,
        onError: onError
      }, restProps)]);
      updateScripts(scripts);
    }
  }

  return null;
}

var _default = Script;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = initHeadManager;
exports.DOMAttributeNames = void 0;
var DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM(_ref) {
  var type = _ref.type,
      props = _ref.props;
  var el = document.createElement(type);

  for (var p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    var attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      ;
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  var children = props.children,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  var headEl = document.getElementsByTagName('head')[0];
  var headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://err.sh/next.js/next-head-count-missing');
      return;
    }
  }

  var headCount = Number(headCountEl.content);
  var oldTags = [];

  for (var i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  var newTags = components.map(reactElementToDOM).filter(function (newTag) {
    for (var k = 0, len = oldTags.length; k < len; k++) {
      var oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(function (t) {
    return t.parentNode.removeChild(t);
  });
  newTags.forEach(function (t) {
    return headEl.insertBefore(t, headCountEl);
  });
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  var updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: function updateHead(head) {
      var promise = updatePromise = Promise.resolve().then(function () {
        if (promise !== updatePromise) return;
        updatePromise = null;
        var tags = {};
        head.forEach(function (h) {
          var components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        var titleComponent = tags.title ? tags.title[0] : null;
        var title = '';

        if (titleComponent) {
          var children = titleComponent.props.children;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(function (type) {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

var cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _objectWithoutProperties2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _defineProperty2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _regenerator = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _toConsumableArray2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _typeof2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

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

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
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

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__(/*! ../next-server/server/get-page-files */ "../next-server/server/get-page-files");

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

var _experimentalScript = _interopRequireDefault(__webpack_require__(/*! ../client/experimental-script */ "./node_modules/next/dist/client/experimental-script.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || (0, _typeof2["default"])(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function dedupe(bundles) {
  var files = new Set();
  var kept = [];

  var _iterator = _createForOfIteratorHelper(bundles),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var bundle = _step.value;
      if (files.has(bundle.file)) continue;
      files.add(bundle.file);
      kept.push(bundle);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return kept;
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  var sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  var pageFiles = inAmpMode ? [] : (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles: sharedFiles,
    pageFiles: pageFiles,
    allFiles: (0, _toConsumableArray2["default"])(new Set([].concat((0, _toConsumableArray2["default"])(sharedFiles), (0, _toConsumableArray2["default"])(pageFiles))))
  };
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


var Document = /*#__PURE__*/function (_react$Component) {
  (0, _inherits2["default"])(Document, _react$Component);

  var _super = _createSuper(Document);

  function Document() {
    (0, _classCallCheck2["default"])(this, Document);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Document, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(Html, null, /*#__PURE__*/_react["default"].createElement(Head, null), /*#__PURE__*/_react["default"].createElement("body", null, /*#__PURE__*/_react["default"].createElement(Main, null), /*#__PURE__*/_react["default"].createElement(NextScript, null)));
    }
  }], [{
    key: "getInitialProps",

    /**
    * `getInitialProps` hook returns the context object with the addition of `renderPage`.
    * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
    */
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx) {
        var enhanceApp, _yield$ctx$renderPage, html, head, styles;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                enhanceApp = function enhanceApp(App) {
                  return function (props) {
                    return /*#__PURE__*/_react["default"].createElement(App, props);
                  };
                };

                _context.next = 3;
                return ctx.renderPage({
                  enhanceApp: enhanceApp
                });

              case 3:
                _yield$ctx$renderPage = _context.sent;
                html = _yield$ctx$renderPage.html;
                head = _yield$ctx$renderPage.head;
                styles = (0, _toConsumableArray2["default"])((0, _server["default"])());
                return _context.abrupt("return", {
                  html: html,
                  head: head,
                  styles: styles
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }, {
    key: "renderDocument",
    value: function renderDocument(DocumentComponent, props) {
      return /*#__PURE__*/_react["default"].createElement(_documentContext.DocumentContext.Provider, {
        value: props
      }, /*#__PURE__*/_react["default"].createElement(DocumentComponent, props));
    }
  }]);
  return Document;
}(_react.Component);

exports["default"] = Document;
Document.headTagsMiddleware =  false ? undefined : function () {
  return [];
};

function Html(props) {
  var _ref = (0, _react.useContext)(_documentContext.DocumentContext),
      inAmpMode = _ref.inAmpMode,
      docComponentsRendered = _ref.docComponentsRendered,
      locale = _ref.locale;

  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react["default"].createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

var Head = /*#__PURE__*/function (_react$Component2) {
  (0, _inherits2["default"])(Head, _react$Component2);

  var _super2 = _createSuper(Head);

  function Head() {
    var _this;

    (0, _classCallCheck2["default"])(this, Head);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super2.call.apply(_super2, [this].concat(args));
    _this.context = void 0;
    return _this;
  }

  (0, _createClass2["default"])(Head, [{
    key: "getCssLinks",
    value: function getCssLinks(files) {
      var _this2 = this;

      var _this$context = this.context,
          assetPrefix = _this$context.assetPrefix,
          devOnlyCacheBusterQueryString = _this$context.devOnlyCacheBusterQueryString,
          dynamicImports = _this$context.dynamicImports;
      var cssFiles = files.allFiles.filter(function (f) {
        return f.endsWith('.css');
      });
      var sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
      // webpack runtime (`mini-css-extract-plugin`).

      var unmangedFiles = new Set([]);
      var dynamicCssFiles = dedupe(dynamicImports.filter(function (f) {
        return f.file.endsWith('.css');
      })).map(function (f) {
        return f.file;
      });

      if (dynamicCssFiles.length) {
        var existing = new Set(cssFiles);
        dynamicCssFiles = dynamicCssFiles.filter(function (f) {
          return !(existing.has(f) || sharedFiles.has(f));
        });
        unmangedFiles = new Set(dynamicCssFiles);
        cssFiles.push.apply(cssFiles, (0, _toConsumableArray2["default"])(dynamicCssFiles));
      }

      var cssLinkElements = [];
      cssFiles.forEach(function (file) {
        var isSharedFile = sharedFiles.has(file);

        if (true) {
          cssLinkElements.push( /*#__PURE__*/_react["default"].createElement("link", {
            key: "".concat(file, "-preload"),
            nonce: _this2.props.nonce,
            rel: "preload",
            href: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
            as: "style",
            crossOrigin: _this2.props.crossOrigin || undefined
          }));
        }

        var isUnmanagedFile = unmangedFiles.has(file);
        cssLinkElements.push( /*#__PURE__*/_react["default"].createElement("link", {
          key: file,
          nonce: _this2.props.nonce,
          rel: "stylesheet",
          href: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
          crossOrigin: _this2.props.crossOrigin || undefined,
          "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
          "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
        }));
      });

      if (false) {}

      return cssLinkElements.length === 0 ? null : cssLinkElements;
    }
  }, {
    key: "getPreloadDynamicChunks",
    value: function getPreloadDynamicChunks() {
      var _this3 = this;

      var _this$context2 = this.context,
          dynamicImports = _this$context2.dynamicImports,
          assetPrefix = _this$context2.assetPrefix,
          devOnlyCacheBusterQueryString = _this$context2.devOnlyCacheBusterQueryString;
      return dedupe(dynamicImports).map(function (bundle) {
        if (!bundle.file.endsWith('.js')) {
          return null;
        }

        return /*#__PURE__*/_react["default"].createElement("link", {
          rel: "preload",
          key: bundle.file,
          href: "".concat(assetPrefix, "/_next/").concat(encodeURI(bundle.file)).concat(devOnlyCacheBusterQueryString),
          as: "script",
          nonce: _this3.props.nonce,
          crossOrigin: _this3.props.crossOrigin || undefined
        });
      }) // Filter out nulled scripts
      .filter(Boolean);
    }
  }, {
    key: "getPreloadMainLinks",
    value: function getPreloadMainLinks(files) {
      var _this4 = this;

      var _this$context3 = this.context,
          assetPrefix = _this$context3.assetPrefix,
          devOnlyCacheBusterQueryString = _this$context3.devOnlyCacheBusterQueryString,
          scriptLoader = _this$context3.scriptLoader;
      var preloadFiles = files.allFiles.filter(function (file) {
        return file.endsWith('.js');
      });
      return [].concat((0, _toConsumableArray2["default"])((scriptLoader.eager || []).map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("link", {
          key: file.src,
          nonce: _this4.props.nonce,
          rel: "preload",
          href: file.src,
          as: "script",
          crossOrigin: _this4.props.crossOrigin || undefined
        });
      })), (0, _toConsumableArray2["default"])(preloadFiles.map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("link", {
          key: file,
          nonce: _this4.props.nonce,
          rel: "preload",
          href: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
          as: "script",
          crossOrigin: _this4.props.crossOrigin || undefined
        });
      })), (0, _toConsumableArray2["default"])((scriptLoader.defer || []).map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("link", {
          key: file,
          nonce: _this4.props.nonce,
          rel: "preload",
          href: file,
          as: "script",
          crossOrigin: _this4.props.crossOrigin || undefined
        });
      })));
    }
  }, {
    key: "handleDocumentScriptLoaderItems",
    value: function handleDocumentScriptLoaderItems(children) {
      var scriptLoader = this.context.scriptLoader;
      var scriptLoaderItems = [];
      var filteredChildren = [];

      _react["default"].Children.forEach(children, function (child) {
        if (child.type === _experimentalScript["default"]) {
          if (child.props.strategy === 'eager') {
            scriptLoader.eager = (scriptLoader.eager || []).concat([_objectSpread({}, child.props)]);
            return;
          } else if (['lazy', 'defer'].includes(child.props.strategy)) {
            scriptLoaderItems.push(child.props);
            return;
          }
        }

        filteredChildren.push(child);
      });

      this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
      return filteredChildren;
    }
  }, {
    key: "makeStylesheetInert",
    value: function makeStylesheetInert(node) {
      var _this5 = this;

      return _react["default"].Children.map(node, function (c) {
        if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(function (url) {
          return c.props['href'].startsWith(url);
        })) {
          var newProps = _objectSpread({}, c.props || {});

          newProps['data-href'] = newProps['href'];
          newProps['href'] = undefined;
          return /*#__PURE__*/_react["default"].cloneElement(c, newProps);
        } else if (c.props && c.props['children']) {
          c.props['children'] = _this5.makeStylesheetInert(c.props['children']);
        }

        return c;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _react$default;

      var _this$props$nonce, _this$props$nonce2;

      var _this$context4 = this.context,
          styles = _this$context4.styles,
          ampPath = _this$context4.ampPath,
          inAmpMode = _this$context4.inAmpMode,
          hybridAmp = _this$context4.hybridAmp,
          canonicalBase = _this$context4.canonicalBase,
          __NEXT_DATA__ = _this$context4.__NEXT_DATA__,
          dangerousAsPath = _this$context4.dangerousAsPath,
          headTags = _this$context4.headTags,
          unstable_runtimeJS = _this$context4.unstable_runtimeJS,
          unstable_JsPreload = _this$context4.unstable_JsPreload;
      var disableRuntimeJS = unstable_runtimeJS === false;
      var disableJsPreload = unstable_JsPreload === false;
      this.context.docComponentsRendered.Head = true;
      var head = this.context.head;
      var cssPreloads = [];
      var otherHeadElements = [];

      if (head) {
        head.forEach(function (c) {
          if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
            cssPreloads.push(c);
          } else {
            c && otherHeadElements.push(c);
          }
        });
        head = cssPreloads.concat(otherHeadElements);
      }

      var children = this.props.children; // show a warning if Head contains <title> (only in development)

      if (true) {
        children = _react["default"].Children.map(children, function (child) {
          var _child$props;

          var isReactHelmet = child == null ? void 0 : (_child$props = child.props) == null ? void 0 : _child$props['data-react-helmet'];

          if (!isReactHelmet) {
            var _child$props2;

            if ((child == null ? void 0 : child.type) === 'title') {
              console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
            } else if ((child == null ? void 0 : child.type) === 'meta' && (child == null ? void 0 : (_child$props2 = child.props) == null ? void 0 : _child$props2.name) === 'viewport') {
              console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-viewport-meta");
            }
          }

          return child;
        });
        if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
      }

      if (false) {}

      if (false) {}

      var hasAmphtmlRel = false;
      var hasCanonicalRel = false; // show warning and remove conflicting amp head tags

      head = _react["default"].Children.map(head || [], function (child) {
        if (!child) return child;
        var type = child.type,
            props = child.props;

        if (inAmpMode) {
          var badProp = '';

          if (type === 'meta' && props.name === 'viewport') {
            badProp = 'name="viewport"';
          } else if (type === 'link' && props.rel === 'canonical') {
            hasCanonicalRel = true;
          } else if (type === 'script') {
            // only block if
            // 1. it has a src and isn't pointing to ampproject's CDN
            // 2. it is using dangerouslySetInnerHTML without a type or
            // a type of text/javascript
            if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
              badProp = '<script';
              Object.keys(props).forEach(function (prop) {
                badProp += " ".concat(prop, "=\"").concat(props[prop], "\"");
              });
              badProp += '/>';
            }
          }

          if (badProp) {
            console.warn("Found conflicting amp tag \"".concat(child.type, "\" with conflicting prop ").concat(badProp, " in ").concat(__NEXT_DATA__.page, ". https://err.sh/next.js/conflicting-amp-tag"));
            return null;
          }
        } else {
          // non-amp mode
          if (type === 'link' && props.rel === 'amphtml') {
            hasAmphtmlRel = true;
          }
        }

        return child;
      }); // try to parse styles from fragment for backwards compat

      var curStyles = Array.isArray(styles) ? styles : [];

      if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
      styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
      Array.isArray(styles.props.children)) {
        var hasStyles = function hasStyles(el) {
          var _el$props, _el$props$dangerously;

          return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
        }; // @ts-ignore Property 'props' does not exist on type ReactElement


        styles.props.children.forEach(function (child) {
          if (Array.isArray(child)) {
            child.forEach(function (el) {
              return hasStyles(el) && curStyles.push(el);
            });
          } else if (hasStyles(child)) {
            curStyles.push(child);
          }
        });
      }

      var files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
      return /*#__PURE__*/_react["default"].createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
        "data-next-hide-fouc": true,
        "data-ampdevmode": inAmpMode ? 'true' : undefined,
        dangerouslySetInnerHTML: {
          __html: "body{display:none}"
        }
      }), /*#__PURE__*/_react["default"].createElement("noscript", {
        "data-next-hide-fouc": true,
        "data-ampdevmode": inAmpMode ? 'true' : undefined
      }, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: "body{display:block}"
        }
      }))), children, head, /*#__PURE__*/_react["default"].createElement("meta", {
        name: "next-head-count",
        content: _react["default"].Children.count(head || []).toString()
      }), inAmpMode && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("meta", {
        name: "viewport",
        content: "width=device-width,minimum-scale=1,initial-scale=1"
      }), !hasCanonicalRel && /*#__PURE__*/_react["default"].createElement("link", {
        rel: "canonical",
        href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
      }), /*#__PURE__*/_react["default"].createElement("link", {
        rel: "preload",
        as: "script",
        href: "https://cdn.ampproject.org/v0.js"
      }), styles && /*#__PURE__*/_react["default"].createElement("style", {
        "amp-custom": "",
        dangerouslySetInnerHTML: {
          __html: curStyles.map(function (style) {
            return style.props.dangerouslySetInnerHTML.__html;
          }).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
        }
      }), /*#__PURE__*/_react["default"].createElement("style", {
        "amp-boilerplate": "",
        dangerouslySetInnerHTML: {
          __html: "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"
        }
      }), /*#__PURE__*/_react["default"].createElement("noscript", null, /*#__PURE__*/_react["default"].createElement("style", {
        "amp-boilerplate": "",
        dangerouslySetInnerHTML: {
          __html: "body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"
        }
      })), /*#__PURE__*/_react["default"].createElement("script", {
        async: true,
        src: "https://cdn.ampproject.org/v0.js"
      })), !inAmpMode && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react["default"].createElement("link", {
        rel: "amphtml",
        href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
      }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react["default"].createElement("noscript", {
        "data-n-css": (_this$props$nonce = this.props.nonce) != null ? _this$props$nonce : ''
      }), !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files),  false && false,  false && /*#__PURE__*/false, this.context.isDevelopment &&
      /*#__PURE__*/
      // this element is used to mount development styles so the
      // ordering matches production
      // (by default, style-loader injects at the bottom of <head />)
      _react["default"].createElement("noscript", {
        id: "__next_css__DO_NOT_USE__"
      }), styles || null), /*#__PURE__*/(_react$default = _react["default"]).createElement.apply(_react$default, [_react["default"].Fragment, {}].concat((0, _toConsumableArray2["default"])(headTags || []))));
    }
  }]);
  return Head;
}(_react.Component);

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes["default"].string,
  crossOrigin: _propTypes["default"].string
};

function Main() {
  var _ref2 = (0, _react.useContext)(_documentContext.DocumentContext),
      inAmpMode = _ref2.inAmpMode,
      html = _ref2.html,
      docComponentsRendered = _ref2.docComponentsRendered;

  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

var NextScript = /*#__PURE__*/function (_react$Component3) {
  (0, _inherits2["default"])(NextScript, _react$Component3);

  var _super3 = _createSuper(NextScript);

  function NextScript() {
    var _this6;

    (0, _classCallCheck2["default"])(this, NextScript);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this6 = _super3.call.apply(_super3, [this].concat(args));
    _this6.context = void 0;
    return _this6;
  }

  (0, _createClass2["default"])(NextScript, [{
    key: "getDynamicChunks",
    value: function getDynamicChunks(files) {
      var _this7 = this;

      var _this$context5 = this.context,
          dynamicImports = _this$context5.dynamicImports,
          assetPrefix = _this$context5.assetPrefix,
          isDevelopment = _this$context5.isDevelopment,
          devOnlyCacheBusterQueryString = _this$context5.devOnlyCacheBusterQueryString;
      return dedupe(dynamicImports).map(function (bundle) {
        if (!bundle.file.endsWith('.js') || files.allFiles.includes(bundle.file)) return null;
        return /*#__PURE__*/_react["default"].createElement("script", {
          async: !isDevelopment,
          key: bundle.file,
          src: "".concat(assetPrefix, "/_next/").concat(encodeURI(bundle.file)).concat(devOnlyCacheBusterQueryString),
          nonce: _this7.props.nonce,
          crossOrigin: _this7.props.crossOrigin || undefined
        });
      });
    }
  }, {
    key: "getPreNextScripts",
    value: function getPreNextScripts() {
      var _this8 = this;

      var scriptLoader = this.context.scriptLoader;
      return (scriptLoader.eager || []).map(function (file) {
        var strategy = file.strategy,
            props = (0, _objectWithoutProperties2["default"])(file, ["strategy"]);
        return /*#__PURE__*/_react["default"].createElement("script", Object.assign({}, props, {
          nonce: _this8.props.nonce,
          crossOrigin: _this8.props.crossOrigin || undefined
        }));
      });
    }
  }, {
    key: "getScripts",
    value: function getScripts(files) {
      var _this9 = this;

      var _buildManifest$lowPri;

      var _this$context6 = this.context,
          assetPrefix = _this$context6.assetPrefix,
          buildManifest = _this$context6.buildManifest,
          isDevelopment = _this$context6.isDevelopment,
          devOnlyCacheBusterQueryString = _this$context6.devOnlyCacheBusterQueryString;
      var normalScripts = files.allFiles.filter(function (file) {
        return file.endsWith('.js');
      });
      var lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(function (file) {
        return file.endsWith('.js');
      });
      return [].concat((0, _toConsumableArray2["default"])(normalScripts), (0, _toConsumableArray2["default"])(lowPriorityScripts)).map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("script", {
          key: file,
          src: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
          nonce: _this9.props.nonce,
          async: !isDevelopment,
          crossOrigin: _this9.props.crossOrigin || undefined
        });
      });
    }
  }, {
    key: "getPolyfillScripts",
    value: function getPolyfillScripts() {
      var _this10 = this; // polyfills.js has to be rendered as nomodule without async
      // It also has to be the first script to load


      var _this$context7 = this.context,
          assetPrefix = _this$context7.assetPrefix,
          buildManifest = _this$context7.buildManifest,
          devOnlyCacheBusterQueryString = _this$context7.devOnlyCacheBusterQueryString;
      return buildManifest.polyfillFiles.filter(function (polyfill) {
        return polyfill.endsWith('.js') && !polyfill.endsWith('.module.js');
      }).map(function (polyfill) {
        return /*#__PURE__*/_react["default"].createElement("script", {
          key: polyfill,
          nonce: _this10.props.nonce,
          crossOrigin: _this10.props.crossOrigin || undefined,
          noModule: true,
          src: "".concat(assetPrefix, "/_next/").concat(polyfill).concat(devOnlyCacheBusterQueryString)
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this11 = this;

      var _this$context8 = this.context,
          assetPrefix = _this$context8.assetPrefix,
          inAmpMode = _this$context8.inAmpMode,
          buildManifest = _this$context8.buildManifest,
          unstable_runtimeJS = _this$context8.unstable_runtimeJS,
          docComponentsRendered = _this$context8.docComponentsRendered,
          devOnlyCacheBusterQueryString = _this$context8.devOnlyCacheBusterQueryString;
      var disableRuntimeJS = unstable_runtimeJS === false;
      docComponentsRendered.NextScript = true;

      if (inAmpMode) {
        if (false) {}

        var ampDevFiles = [].concat((0, _toConsumableArray2["default"])(buildManifest.devFiles), (0, _toConsumableArray2["default"])(buildManifest.polyfillFiles), (0, _toConsumableArray2["default"])(buildManifest.ampDevFiles));
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react["default"].createElement("script", {
          id: "__NEXT_DATA__",
          type: "application/json",
          nonce: this.props.nonce,
          crossOrigin: this.props.crossOrigin || undefined,
          dangerouslySetInnerHTML: {
            __html: NextScript.getInlineScriptSource(this.context)
          },
          "data-ampdevmode": true
        }), ampDevFiles.map(function (file) {
          return /*#__PURE__*/_react["default"].createElement("script", {
            key: file,
            src: "".concat(assetPrefix, "/_next/").concat(file).concat(devOnlyCacheBusterQueryString),
            nonce: _this11.props.nonce,
            crossOrigin: _this11.props.crossOrigin || undefined,
            "data-ampdevmode": true
          });
        }));
      }

      if (true) {
        if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
      }

      var files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("script", {
          key: file,
          src: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
          nonce: _this11.props.nonce,
          crossOrigin: _this11.props.crossOrigin || undefined
        });
      }) : null, disableRuntimeJS ? null : /*#__PURE__*/_react["default"].createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        }
      }), !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && this.getPreNextScripts(), disableRuntimeJS ? null : this.getDynamicChunks(files), disableRuntimeJS ? null : this.getScripts(files));
    }
  }], [{
    key: "getInlineScriptSource",
    value: function getInlineScriptSource(documentProps) {
      var __NEXT_DATA__ = documentProps.__NEXT_DATA__;

      try {
        var data = JSON.stringify(__NEXT_DATA__);
        return (0, _htmlescape.htmlEscapeJsonString)(data);
      } catch (err) {
        if (err.message.indexOf('circular structure')) {
          throw new Error("Circular structure in \"getInitialProps\" result of page \"".concat(__NEXT_DATA__.page, "\". https://err.sh/vercel/next.js/circular-structure"));
        }

        throw err;
      }
    }
  }]);
  return NextScript;
}(_react.Component);

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes["default"].string,
  crossOrigin: _propTypes["default"].string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || "".concat(asPath).concat(asPath.includes('?') ? '&' : '?', "amp=1");
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.htmlEscapeJsonString = htmlEscapeJsonString; // This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE

var ESCAPE_LOOKUP = {
  '&': "\\u0026",
  '>': "\\u003e",
  '<': "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var ESCAPE_REGEX = /[&><\u2028\u2029]/g;

function htmlEscapeJsonString(str) {
  return str.replace(ESCAPE_REGEX, function (match) {
    return ESCAPE_LOOKUP[match];
  });
}

/***/ }),

/***/ 2:
/*!***************************************!*\
  !*** multi next/dist/pages/_document ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next/dist/pages/_document */"./node_modules/next/dist/pages/_document.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2V4cGVyaW1lbnRhbC1zY3JpcHQudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaGVhZC1tYW5hZ2VyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fZG9jdW1lbnQudHN4Iiwid2VicGFjazovLy8uLi8uLi9zZXJ2ZXIvaHRtbGVzY2FwZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWdlbmVyYXRvci1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJfYXJyYXlMaWtlVG9BcnJheSIsImFyciIsImxlbiIsImxlbmd0aCIsImkiLCJhcnIyIiwiQXJyYXkiLCJtb2R1bGUiLCJleHBvcnRzIiwiX2FycmF5V2l0aEhvbGVzIiwiaXNBcnJheSIsImFycmF5TGlrZVRvQXJyYXkiLCJyZXF1aXJlIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsInNlbGYiLCJSZWZlcmVuY2VFcnJvciIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlc29sdmUiLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImFyZyIsImluZm8iLCJ2YWx1ZSIsImVycm9yIiwiZG9uZSIsIlByb21pc2UiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJzb3VyY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfZ2V0UHJvdG90eXBlT2YiLCJvIiwic2V0UHJvdG90eXBlT2YiLCJnZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJoYXMiLCJnZXQiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkZXNjIiwic2V0IiwiX2l0ZXJhYmxlVG9BcnJheSIsIml0ZXIiLCJTeW1ib2wiLCJpdGVyYXRvciIsImZyb20iLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfYXJyIiwiX24iLCJfZCIsIl9lIiwiX2kiLCJfcyIsIm5leHQiLCJwdXNoIiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIm9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsImdldE93blByb3BlcnR5U3ltYm9scyIsInNvdXJjZVN5bWJvbEtleXMiLCJpbmRleE9mIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZUtleXMiLCJrZXlzIiwiYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfc2V0UHJvdG90eXBlT2YiLCJwIiwiYXJyYXlXaXRoSG9sZXMiLCJpdGVyYWJsZVRvQXJyYXlMaW1pdCIsInVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5Iiwibm9uSXRlcmFibGVSZXN0IiwiX3NsaWNlZFRvQXJyYXkiLCJhcnJheVdpdGhvdXRIb2xlcyIsIml0ZXJhYmxlVG9BcnJheSIsIm5vbkl0ZXJhYmxlU3ByZWFkIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwibWluTGVuIiwibiIsInRvU3RyaW5nIiwic2xpY2UiLCJuYW1lIiwidGVzdCIsIlNjcmlwdENhY2hlIiwiTG9hZENhY2hlIiwiaWdub3JlUHJvcHMiLCJsb2FkU2NyaXB0Iiwib25Mb2FkIiwiY2hpbGRyZW4iLCJjYWNoZUtleSIsImlkIiwiZWwiLCJkb2N1bWVudCIsImxvYWRQcm9taXNlIiwib25FcnJvciIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiYXR0ciIsIkRPTUF0dHJpYnV0ZU5hbWVzIiwiayIsInN0cmF0ZWd5Iiwid2luZG93Iiwic2NyaXB0TG9hZGVySXRlbXMiLCJzcmMiLCJwcmVsb2FkIiwiSGVhZE1hbmFnZXJDb250ZXh0IiwibG9hZExhenlTY3JpcHQiLCJzeW5jUHJvcHMiLCJfX2h0bWwiLCJ1cGRhdGVTY3JpcHRzIiwic2NyaXB0cyIsIlNjcmlwdCIsImFjY2VwdENoYXJzZXQiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwiaHR0cEVxdWl2Iiwibm9Nb2R1bGUiLCJ0eXBlIiwiaGVhZEVsIiwiaGVhZENvdW50RWwiLCJjb25zb2xlIiwiaGVhZENvdW50IiwiTnVtYmVyIiwib2xkVGFncyIsImoiLCJuZXdUYWdzIiwiY29tcG9uZW50cyIsIm5ld1RhZyIsIm9sZFRhZyIsInQiLCJ1cGRhdGVQcm9taXNlIiwibW91bnRlZEluc3RhbmNlcyIsInVwZGF0ZUhlYWQiLCJoZWFkIiwicHJvbWlzZSIsInRhZ3MiLCJoIiwidGl0bGVDb21wb25lbnQiLCJ0aXRsZSIsInVwZGF0ZUVsZW1lbnRzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsImZpbGVzIiwia2VwdCIsImJ1bmRsZSIsInNoYXJlZEZpbGVzIiwicGFnZUZpbGVzIiwiaW5BbXBNb2RlIiwiYWxsRmlsZXMiLCJlbmhhbmNlQXBwIiwiQXBwIiwiY3R4Iiwic3R5bGVzIiwiaHRtbCIsInJlbmRlciIsIkNvbXBvbmVudCIsIkRvY3VtZW50IiwicHJvY2VzcyIsIkRvY3VtZW50Q29tcG9uZW50Q29udGV4dCIsImRvY0NvbXBvbmVudHNSZW5kZXJlZCIsImdldENzc0xpbmtzIiwiY3NzRmlsZXMiLCJmIiwidW5tYW5nZWRGaWxlcyIsImR5bmFtaWNDc3NGaWxlcyIsImRlZHVwZSIsImR5bmFtaWNJbXBvcnRzIiwiZXhpc3RpbmciLCJjc3NMaW5rRWxlbWVudHMiLCJmaWxlIiwiaXNTaGFyZWRGaWxlIiwiZW5jb2RlVVJJIiwiaXNVbm1hbmFnZWRGaWxlIiwiZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MiLCJnZXRQcmVsb2FkTWFpbkxpbmtzIiwicHJlbG9hZEZpbGVzIiwic2NyaXB0TG9hZGVyIiwiaGFuZGxlRG9jdW1lbnRTY3JpcHRMb2FkZXJJdGVtcyIsImZpbHRlcmVkQ2hpbGRyZW4iLCJSZWFjdCIsImNoaWxkIiwibWFrZVN0eWxlc2hlZXRJbmVydCIsImMiLCJPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMiLCJ1cmwiLCJuZXdQcm9wcyIsImRpc2FibGVSdW50aW1lSlMiLCJ1bnN0YWJsZV9ydW50aW1lSlMiLCJkaXNhYmxlSnNQcmVsb2FkIiwidW5zdGFibGVfSnNQcmVsb2FkIiwiY3NzUHJlbG9hZHMiLCJvdGhlckhlYWRFbGVtZW50cyIsImlzUmVhY3RIZWxtZXQiLCJoYXNBbXBodG1sUmVsIiwiaGFzQ2Fub25pY2FsUmVsIiwiYmFkUHJvcCIsInByb3AiLCJfX05FWFRfREFUQV9fIiwiY3VyU3R5bGVzIiwiaGFzU3R5bGVzIiwiZ2V0RG9jdW1lbnRGaWxlcyIsImNhbm9uaWNhbEJhc2UiLCJzdHlsZSIsImdldEFtcFBhdGgiLCJoZWFkVGFncyIsIkhlYWQiLCJub25jZSIsIlByb3BUeXBlcyIsImNyb3NzT3JpZ2luIiwiQU1QX1JFTkRFUl9UQVJHRVQiLCJnZXREeW5hbWljQ2h1bmtzIiwiZ2V0UHJlTmV4dFNjcmlwdHMiLCJnZXRTY3JpcHRzIiwibm9ybWFsU2NyaXB0cyIsImxvd1ByaW9yaXR5U2NyaXB0cyIsImJ1aWxkTWFuaWZlc3QiLCJnZXRQb2x5ZmlsbFNjcmlwdHMiLCJwb2x5ZmlsbCIsImFtcERldkZpbGVzIiwiTmV4dFNjcmlwdCIsImRhdGEiLCJKU09OIiwiYW1wUGF0aCIsImFzUGF0aCIsIkVTQ0FQRV9MT09LVVAiLCJFU0NBUEVfUkVHRVgiLCJzdHIiLCJtYXRjaCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLG1FOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLDhFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLDJFOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLFNBQVNBLGlCQUFULENBQTJCQyxHQUEzQixFQUFnQ0MsR0FBaEMsRUFBcUM7QUFDbkMsTUFBSUEsR0FBRyxJQUFJLElBQVAsSUFBZUEsR0FBRyxHQUFHRCxHQUFHLENBQUNFLE1BQTdCLEVBQXFDRCxHQUFHLEdBQUdELEdBQUcsQ0FBQ0UsTUFBVjs7QUFFckMsT0FBSyxJQUFJQyxDQUFDLEdBQUcs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akQsWUFMRjtBQUFtRCxDQUFuRDtBQVFBLElBQU1DLFlBQVksR0FBbEI7O0FBRU8sbUNBQW1EO0FBQ3hELFNBQU9DLEdBQUcsQ0FBSEEsc0JBQTJCQyxlQUFEO0FBQUEsV0FBV0gsYUFBYSxDQUF6RCxLQUF5RCxDQUF4QjtBQUFBLEdBQTFCRSxDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmRCx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiKTsiLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSA9IHJlcXVpcmUoXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXM7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNjcmlwdEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZWFkTWFuYWdlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQnXG5pbXBvcnQgeyBET01BdHRyaWJ1dGVOYW1lcyB9IGZyb20gJy4vaGVhZC1tYW5hZ2VyJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG5jb25zdCBTY3JpcHRDYWNoZSA9IG5ldyBNYXAoKVxuY29uc3QgTG9hZENhY2hlID0gbmV3IFNldCgpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBTY3JpcHRIVE1MQXR0cmlidXRlczxIVE1MU2NyaXB0RWxlbWVudD4ge1xuICBzdHJhdGVneT86ICdkZWZlcicgfCAnbGF6eScgfCAnZGFuZ2Vyb3VzbHlCbG9ja1JlbmRlcmluZycgfCAnZWFnZXInXG4gIGlkPzogc3RyaW5nXG4gIG9uTG9hZD86ICgpID0+IHZvaWRcbiAgb25FcnJvcj86ICgpID0+IHZvaWRcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgcHJlbG9hZD86IGJvb2xlYW5cbn1cblxuY29uc3QgaWdub3JlUHJvcHMgPSBbXG4gICdvbkxvYWQnLFxuICAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnLFxuICAnY2hpbGRyZW4nLFxuICAnb25FcnJvcicsXG4gICdzdHJhdGVneScsXG4gICdwcmVsb2FkJyxcbl1cblxuY29uc3QgbG9hZFNjcmlwdCA9IChwcm9wczogUHJvcHMpOiB2b2lkID0+IHtcbiAgY29uc3Qge1xuICAgIHNyYyxcbiAgICBpZCxcbiAgICBvbkxvYWQgPSAoKSA9PiB7fSxcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTCxcbiAgICBjaGlsZHJlbiA9ICcnLFxuICAgIG9uRXJyb3IsXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGNhY2hlS2V5ID0gaWQgfHwgc3JjXG4gIGlmIChTY3JpcHRDYWNoZS5oYXMoc3JjKSkge1xuICAgIGlmICghTG9hZENhY2hlLmhhcyhjYWNoZUtleSkpIHtcbiAgICAgIExvYWRDYWNoZS5hZGQoY2FjaGVLZXkpXG4gICAgICAvLyBFeGVjdXRlIG9uTG9hZCBzaW5jZSB0aGUgc2NyaXB0IGxvYWRpbmcgaGFzIGJlZ3VuXG4gICAgICBTY3JpcHRDYWNoZS5nZXQoc3JjKS50aGVuKG9uTG9hZCwgb25FcnJvcilcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgY29uc3QgbG9hZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlc29sdmUoKVxuICAgICAgaWYgKG9uTG9hZCkge1xuICAgICAgICBvbkxvYWQuY2FsbCh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZWplY3QoKVxuICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgb25FcnJvcigpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBpZiAoc3JjKSB7XG4gICAgU2NyaXB0Q2FjaGUuc2V0KHNyYywgbG9hZFByb21pc2UpXG4gICAgTG9hZENhY2hlLmFkZChjYWNoZUtleSlcbiAgfVxuXG4gIGlmIChkYW5nZXJvdXNseVNldElubmVySFRNTCkge1xuICAgIGVsLmlubmVySFRNTCA9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCB8fCAnJ1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgZWwudGV4dENvbnRlbnQgPVxuICAgICAgdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJ1xuICAgICAgICA/IGNoaWxkcmVuXG4gICAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbilcbiAgICAgICAgPyBjaGlsZHJlbi5qb2luKCcnKVxuICAgICAgICA6ICcnXG4gIH0gZWxzZSBpZiAoc3JjKSB7XG4gICAgZWwuc3JjID0gc3JjXG4gIH1cblxuICBmb3IgKGNvbnN0IFtrLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgaWdub3JlUHJvcHMuaW5jbHVkZXMoaykpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgYXR0ciA9IERPTUF0dHJpYnV0ZU5hbWVzW2tdIHx8IGsudG9Mb3dlckNhc2UoKVxuICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWVudFNjcmlwdExvYWQocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgc3RyYXRlZ3kgPSAnZGVmZXInIH0gPSBwcm9wc1xuICBpZiAoc3RyYXRlZ3kgPT09ICdkZWZlcicpIHtcbiAgICBsb2FkU2NyaXB0KHByb3BzKVxuICB9IGVsc2UgaWYgKHN0cmF0ZWd5ID09PSAnbGF6eScpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gbG9hZFNjcmlwdChwcm9wcykpXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkTGF6eVNjcmlwdChwcm9wczogUHJvcHMpIHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IGxvYWRTY3JpcHQocHJvcHMpKVxuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBsb2FkU2NyaXB0KHByb3BzKSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U2NyaXB0TG9hZGVyKHNjcmlwdExvYWRlckl0ZW1zOiBQcm9wc1tdKSB7XG4gIHNjcmlwdExvYWRlckl0ZW1zLmZvckVhY2goaGFuZGxlQ2xpZW50U2NyaXB0TG9hZClcbn1cblxuZnVuY3Rpb24gU2NyaXB0KHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHtcbiAgICBzcmMgPSAnJyxcbiAgICBvbkxvYWQgPSAoKSA9PiB7fSxcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTCxcbiAgICBjaGlsZHJlbiA9ICcnLFxuICAgIHN0cmF0ZWd5ID0gJ2RlZmVyJyxcbiAgICBvbkVycm9yLFxuICAgIHByZWxvYWQgPSBmYWxzZSxcbiAgICAuLi5yZXN0UHJvcHNcbiAgfSA9IHByb3BzXG5cbiAgLy8gQ29udGV4dCBpcyBhdmFpbGFibGUgb25seSBkdXJpbmcgU1NSXG4gIGNvbnN0IHsgdXBkYXRlU2NyaXB0cywgc2NyaXB0cyB9ID0gdXNlQ29udGV4dChIZWFkTWFuYWdlckNvbnRleHQpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RyYXRlZ3kgPT09ICdkZWZlcicpIHtcbiAgICAgIGxvYWRTY3JpcHQocHJvcHMpXG4gICAgfSBlbHNlIGlmIChzdHJhdGVneSA9PT0gJ2xhenknKSB7XG4gICAgICBsb2FkTGF6eVNjcmlwdChwcm9wcylcbiAgICB9XG4gIH0sIFtwcm9wcywgc3RyYXRlZ3ldKVxuXG4gIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX1NDUklQVF9MT0FERVIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgaWYgKHN0cmF0ZWd5ID09PSAnZGFuZ2Vyb3VzbHlCbG9ja1JlbmRlcmluZycpIHtcbiAgICBjb25zdCBzeW5jUHJvcHM6IFByb3BzID0geyAuLi5yZXN0UHJvcHMgfVxuXG4gICAgZm9yIChjb25zdCBbaywgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHtcbiAgICAgIHNyYyxcbiAgICAgIG9uTG9hZCxcbiAgICAgIG9uRXJyb3IsXG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTCxcbiAgICAgIGNoaWxkcmVuLFxuICAgIH0pKSB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBpZiAoayA9PT0gJ2NoaWxkcmVuJykge1xuICAgICAgICBzeW5jUHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgPSB7XG4gICAgICAgICAgX19odG1sOlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IHZhbHVlXG4gICAgICAgICAgICAgIDogQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgICAgICAgICAgICAgPyB2YWx1ZS5qb2luKCcnKVxuICAgICAgICAgICAgICA6ICcnLFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICA7KHN5bmNQcm9wcyBhcyBhbnkpW2tdID0gdmFsdWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gPHNjcmlwdCB7Li4uc3luY1Byb3BzfSAvPlxuICB9IGVsc2UgaWYgKHN0cmF0ZWd5ID09PSAnZGVmZXInKSB7XG4gICAgaWYgKHVwZGF0ZVNjcmlwdHMgJiYgcHJlbG9hZCkge1xuICAgICAgc2NyaXB0cy5kZWZlciA9IChzY3JpcHRzLmRlZmVyIHx8IFtdKS5jb25jYXQoW3NyY10pXG4gICAgICB1cGRhdGVTY3JpcHRzKHNjcmlwdHMpXG4gICAgfVxuICB9IGVsc2UgaWYgKHN0cmF0ZWd5ID09PSAnZWFnZXInKSB7XG4gICAgaWYgKHVwZGF0ZVNjcmlwdHMpIHtcbiAgICAgIHNjcmlwdHMuZWFnZXIgPSAoc2NyaXB0cy5lYWdlciB8fCBbXSkuY29uY2F0KFtcbiAgICAgICAge1xuICAgICAgICAgIHNyYyxcbiAgICAgICAgICBvbkxvYWQsXG4gICAgICAgICAgb25FcnJvcixcbiAgICAgICAgICAuLi5yZXN0UHJvcHMsXG4gICAgICAgIH0sXG4gICAgICBdKVxuICAgICAgdXBkYXRlU2NyaXB0cyhzY3JpcHRzKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmlwdFxuIiwiZXhwb3J0IGNvbnN0IERPTUF0dHJpYnV0ZU5hbWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBhY2NlcHRDaGFyc2V0OiAnYWNjZXB0LWNoYXJzZXQnLFxuICBjbGFzc05hbWU6ICdjbGFzcycsXG4gIGh0bWxGb3I6ICdmb3InLFxuICBodHRwRXF1aXY6ICdodHRwLWVxdWl2JyxcbiAgbm9Nb2R1bGU6ICdub01vZHVsZScsXG59XG5cbmZ1bmN0aW9uIHJlYWN0RWxlbWVudFRvRE9NKHsgdHlwZSwgcHJvcHMgfTogSlNYLkVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IGVsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcbiAgZm9yIChjb25zdCBwIGluIHByb3BzKSB7XG4gICAgaWYgKCFwcm9wcy5oYXNPd25Qcm9wZXJ0eShwKSkgY29udGludWVcbiAgICBpZiAocCA9PT0gJ2NoaWxkcmVuJyB8fCBwID09PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSBjb250aW51ZVxuXG4gICAgLy8gd2UgZG9uJ3QgcmVuZGVyIHVuZGVmaW5lZCBwcm9wcyB0byB0aGUgRE9NXG4gICAgaWYgKHByb3BzW3BdID09PSB1bmRlZmluZWQpIGNvbnRpbnVlXG5cbiAgICBjb25zdCBhdHRyID0gRE9NQXR0cmlidXRlTmFtZXNbcF0gfHwgcC50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKFxuICAgICAgdHlwZSA9PT0gJ3NjcmlwdCcgJiZcbiAgICAgIChhdHRyID09PSAnYXN5bmMnIHx8IGF0dHIgPT09ICdkZWZlcicgfHwgYXR0ciA9PT0gJ25vTW9kdWxlJylcbiAgICApIHtcbiAgICAgIDsoZWwgYXMgSFRNTFNjcmlwdEVsZW1lbnQpW2F0dHJdID0gISFwcm9wc1twXVxuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgcHJvcHNbcF0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgeyBjaGlsZHJlbiwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgfSA9IHByb3BzXG4gIGlmIChkYW5nZXJvdXNseVNldElubmVySFRNTCkge1xuICAgIGVsLmlubmVySFRNTCA9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCB8fCAnJ1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgZWwudGV4dENvbnRlbnQgPVxuICAgICAgdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJ1xuICAgICAgICA/IGNoaWxkcmVuXG4gICAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbilcbiAgICAgICAgPyBjaGlsZHJlbi5qb2luKCcnKVxuICAgICAgICA6ICcnXG4gIH1cbiAgcmV0dXJuIGVsXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnRzKHR5cGU6IHN0cmluZywgY29tcG9uZW50czogSlNYLkVsZW1lbnRbXSk6IHZvaWQge1xuICBjb25zdCBoZWFkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdXG4gIGNvbnN0IGhlYWRDb3VudEVsOiBIVE1MTWV0YUVsZW1lbnQgPSBoZWFkRWwucXVlcnlTZWxlY3RvcihcbiAgICAnbWV0YVtuYW1lPW5leHQtaGVhZC1jb3VudF0nXG4gICkgYXMgSFRNTE1ldGFFbGVtZW50XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFoZWFkQ291bnRFbCkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ1dhcm5pbmc6IG5leHQtaGVhZC1jb3VudCBpcyBtaXNzaW5nLiBodHRwczovL2Vyci5zaC9uZXh0LmpzL25leHQtaGVhZC1jb3VudC1taXNzaW5nJ1xuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGVhZENvdW50ID0gTnVtYmVyKGhlYWRDb3VudEVsLmNvbnRlbnQpXG4gIGNvbnN0IG9sZFRhZ3M6IEVsZW1lbnRbXSA9IFtdXG5cbiAgZm9yIChcbiAgICBsZXQgaSA9IDAsIGogPSBoZWFkQ291bnRFbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGkgPCBoZWFkQ291bnQ7XG4gICAgaSsrLCBqID0gaiEucHJldmlvdXNFbGVtZW50U2libGluZ1xuICApIHtcbiAgICBpZiAoaiEudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSB0eXBlKSB7XG4gICAgICBvbGRUYWdzLnB1c2goaiEpXG4gICAgfVxuICB9XG4gIGNvbnN0IG5ld1RhZ3MgPSAoY29tcG9uZW50cy5tYXAocmVhY3RFbGVtZW50VG9ET00pIGFzIEhUTUxFbGVtZW50W10pLmZpbHRlcihcbiAgICAobmV3VGFnKSA9PiB7XG4gICAgICBmb3IgKGxldCBrID0gMCwgbGVuID0gb2xkVGFncy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICBjb25zdCBvbGRUYWcgPSBvbGRUYWdzW2tdXG4gICAgICAgIGlmIChvbGRUYWcuaXNFcXVhbE5vZGUobmV3VGFnKSkge1xuICAgICAgICAgIG9sZFRhZ3Muc3BsaWNlKGssIDEpXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICApXG5cbiAgb2xkVGFncy5mb3JFYWNoKCh0KSA9PiB0LnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKHQpKVxuICBuZXdUYWdzLmZvckVhY2goKHQpID0+IGhlYWRFbC5pbnNlcnRCZWZvcmUodCwgaGVhZENvdW50RWwpKVxuICBoZWFkQ291bnRFbC5jb250ZW50ID0gKGhlYWRDb3VudCAtIG9sZFRhZ3MubGVuZ3RoICsgbmV3VGFncy5sZW5ndGgpLnRvU3RyaW5nKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEhlYWRNYW5hZ2VyKCk6IHtcbiAgbW91bnRlZEluc3RhbmNlczogU2V0PHVua25vd24+XG4gIHVwZGF0ZUhlYWQ6IChoZWFkOiBKU1guRWxlbWVudFtdKSA9PiB2b2lkXG59IHtcbiAgbGV0IHVwZGF0ZVByb21pc2U6IFByb21pc2U8dm9pZD4gfCBudWxsID0gbnVsbFxuXG4gIHJldHVybiB7XG4gICAgbW91bnRlZEluc3RhbmNlczogbmV3IFNldCgpLFxuICAgIHVwZGF0ZUhlYWQ6IChoZWFkOiBKU1guRWxlbWVudFtdKSA9PiB7XG4gICAgICBjb25zdCBwcm9taXNlID0gKHVwZGF0ZVByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHByb21pc2UgIT09IHVwZGF0ZVByb21pc2UpIHJldHVyblxuXG4gICAgICAgIHVwZGF0ZVByb21pc2UgPSBudWxsXG4gICAgICAgIGNvbnN0IHRhZ3M6IFJlY29yZDxzdHJpbmcsIEpTWC5FbGVtZW50W10+ID0ge31cblxuICAgICAgICBoZWFkLmZvckVhY2goKGgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRzID0gdGFnc1toLnR5cGVdIHx8IFtdXG4gICAgICAgICAgY29tcG9uZW50cy5wdXNoKGgpXG4gICAgICAgICAgdGFnc1toLnR5cGVdID0gY29tcG9uZW50c1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHRpdGxlQ29tcG9uZW50ID0gdGFncy50aXRsZSA/IHRhZ3MudGl0bGVbMF0gOiBudWxsXG4gICAgICAgIGxldCB0aXRsZSA9ICcnXG4gICAgICAgIGlmICh0aXRsZUNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRpdGxlQ29tcG9uZW50LnByb3BzXG4gICAgICAgICAgdGl0bGUgPVxuICAgICAgICAgICAgdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IGNoaWxkcmVuXG4gICAgICAgICAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbilcbiAgICAgICAgICAgICAgPyBjaGlsZHJlbi5qb2luKCcnKVxuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpdGxlICE9PSBkb2N1bWVudC50aXRsZSkgZG9jdW1lbnQudGl0bGUgPSB0aXRsZVxuICAgICAgICA7WydtZXRhJywgJ2Jhc2UnLCAnbGluaycsICdzdHlsZScsICdzY3JpcHQnXS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgICAgdXBkYXRlRWxlbWVudHModHlwZSwgdGFnc1t0eXBlXSB8fCBbXSlcbiAgICAgICAgfSlcbiAgICAgIH0pKVxuICAgIH0sXG4gIH1cbn1cbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmx1c2ggZnJvbSAnc3R5bGVkLWpzeC9zZXJ2ZXInXG5pbXBvcnQge1xuICBBTVBfUkVOREVSX1RBUkdFVCxcbiAgT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzJ1xuaW1wb3J0IHsgRG9jdW1lbnRDb250ZXh0IGFzIERvY3VtZW50Q29tcG9uZW50Q29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0J1xuaW1wb3J0IHtcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wcyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHtcbiAgQnVpbGRNYW5pZmVzdCxcbiAgZ2V0UGFnZUZpbGVzLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBjbGVhbkFtcFBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMnXG5pbXBvcnQgeyBodG1sRXNjYXBlSnNvblN0cmluZyB9IGZyb20gJy4uL3NlcnZlci9odG1sZXNjYXBlJ1xuaW1wb3J0IFNjcmlwdCwge1xuICBQcm9wcyBhcyBTY3JpcHRMb2FkZXJQcm9wcyxcbn0gZnJvbSAnLi4vY2xpZW50L2V4cGVyaW1lbnRhbC1zY3JpcHQnXG5cbmV4cG9ydCB7IERvY3VtZW50Q29udGV4dCwgRG9jdW1lbnRJbml0aWFsUHJvcHMsIERvY3VtZW50UHJvcHMgfVxuXG5leHBvcnQgdHlwZSBPcmlnaW5Qcm9wcyA9IHtcbiAgbm9uY2U/OiBzdHJpbmdcbiAgY3Jvc3NPcmlnaW4/OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gZGVkdXBlPFQgZXh0ZW5kcyB7IGZpbGU6IHN0cmluZyB9PihidW5kbGVzOiBUW10pOiBUW10ge1xuICBjb25zdCBmaWxlcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGNvbnN0IGtlcHQ6IFRbXSA9IFtdXG5cbiAgZm9yIChjb25zdCBidW5kbGUgb2YgYnVuZGxlcykge1xuICAgIGlmIChmaWxlcy5oYXMoYnVuZGxlLmZpbGUpKSBjb250aW51ZVxuICAgIGZpbGVzLmFkZChidW5kbGUuZmlsZSlcbiAgICBrZXB0LnB1c2goYnVuZGxlKVxuICB9XG4gIHJldHVybiBrZXB0XG59XG5cbnR5cGUgRG9jdW1lbnRGaWxlcyA9IHtcbiAgc2hhcmVkRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdXG4gIHBhZ2VGaWxlczogcmVhZG9ubHkgc3RyaW5nW11cbiAgYWxsRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdXG59XG5cbmZ1bmN0aW9uIGdldERvY3VtZW50RmlsZXMoXG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3QsXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGluQW1wTW9kZTogYm9vbGVhblxuKTogRG9jdW1lbnRGaWxlcyB7XG4gIGNvbnN0IHNoYXJlZEZpbGVzOiByZWFkb25seSBzdHJpbmdbXSA9IGdldFBhZ2VGaWxlcyhidWlsZE1hbmlmZXN0LCAnL19hcHAnKVxuICBjb25zdCBwYWdlRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdID0gaW5BbXBNb2RlXG4gICAgPyBbXVxuICAgIDogZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsIHBhdGhuYW1lKVxuXG4gIHJldHVybiB7XG4gICAgc2hhcmVkRmlsZXMsXG4gICAgcGFnZUZpbGVzLFxuICAgIGFsbEZpbGVzOiBbLi4ubmV3IFNldChbLi4uc2hhcmVkRmlsZXMsIC4uLnBhZ2VGaWxlc10pXSxcbiAgfVxufVxuXG4vKipcbiAqIGBEb2N1bWVudGAgY29tcG9uZW50IGhhbmRsZXMgdGhlIGluaXRpYWwgYGRvY3VtZW50YCBtYXJrdXAgYW5kIHJlbmRlcnMgb25seSBvbiB0aGUgc2VydmVyIHNpZGUuXG4gKiBDb21tb25seSB1c2VkIGZvciBpbXBsZW1lbnRpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nIGZvciBgY3NzLWluLWpzYCBsaWJyYXJpZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50PFAgPSB7fT4gZXh0ZW5kcyBDb21wb25lbnQ8RG9jdW1lbnRQcm9wcyAmIFA+IHtcbiAgc3RhdGljIGhlYWRUYWdzTWlkZGxld2FyZSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TXG4gICAgPyBpbXBvcnQoXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgbG9hZGVyIHN5bnRheFxuICAgICAgICAnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9ZG9jdW1lbnQtaGVhZC10YWdzLXNlcnZlciEnXG4gICAgICApXG4gICAgOiAoKSA9PiBbXVxuXG4gIC8qKlxuICAgKiBgZ2V0SW5pdGlhbFByb3BzYCBob29rIHJldHVybnMgdGhlIGNvbnRleHQgb2JqZWN0IHdpdGggdGhlIGFkZGl0aW9uIG9mIGByZW5kZXJQYWdlYC5cbiAgICogYHJlbmRlclBhZ2VgIGNhbGxiYWNrIGV4ZWN1dGVzIGBSZWFjdGAgcmVuZGVyaW5nIGxvZ2ljIHN5bmNocm9ub3VzbHkgdG8gc3VwcG9ydCBzZXJ2ZXItcmVuZGVyaW5nIHdyYXBwZXJzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKFxuICAgIGN0eDogRG9jdW1lbnRDb250ZXh0XG4gICk6IFByb21pc2U8RG9jdW1lbnRJbml0aWFsUHJvcHM+IHtcbiAgICBjb25zdCBlbmhhbmNlQXBwID0gKEFwcDogYW55KSA9PiB7XG4gICAgICByZXR1cm4gKHByb3BzOiBhbnkpID0+IDxBcHAgey4uLnByb3BzfSAvPlxuICAgIH1cblxuICAgIGNvbnN0IHsgaHRtbCwgaGVhZCB9ID0gYXdhaXQgY3R4LnJlbmRlclBhZ2UoeyBlbmhhbmNlQXBwIH0pXG4gICAgY29uc3Qgc3R5bGVzID0gWy4uLmZsdXNoKCldXG4gICAgcmV0dXJuIHsgaHRtbCwgaGVhZCwgc3R5bGVzIH1cbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJEb2N1bWVudDxQPihcbiAgICBEb2N1bWVudENvbXBvbmVudDogbmV3ICgpID0+IERvY3VtZW50PFA+LFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzICYgUFxuICApOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jdW1lbnRDb21wb25lbnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm9wc30+XG4gICAgICAgIDxEb2N1bWVudENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICA8L0RvY3VtZW50Q29tcG9uZW50Q29udGV4dC5Qcm92aWRlcj5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sPlxuICAgICAgICA8SGVhZCAvPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEh0bWwoXG4gIHByb3BzOiBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxcbiAgICBSZWFjdC5IdG1sSFRNTEF0dHJpYnV0ZXM8SFRNTEh0bWxFbGVtZW50PixcbiAgICBIVE1MSHRtbEVsZW1lbnRcbiAgPlxuKSB7XG4gIGNvbnN0IHsgaW5BbXBNb2RlLCBkb2NDb21wb25lbnRzUmVuZGVyZWQsIGxvY2FsZSB9ID0gdXNlQ29udGV4dChcbiAgICBEb2N1bWVudENvbXBvbmVudENvbnRleHRcbiAgKVxuXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5IdG1sID0gdHJ1ZVxuXG4gIHJldHVybiAoXG4gICAgPGh0bWxcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGxhbmc9e3Byb3BzLmxhbmcgfHwgbG9jYWxlIHx8IHVuZGVmaW5lZH1cbiAgICAgIGFtcD17aW5BbXBNb2RlID8gJycgOiB1bmRlZmluZWR9XG4gICAgICBkYXRhLWFtcGRldm1vZGU9e1xuICAgICAgICBpbkFtcE1vZGUgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICcnIDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgY2xhc3MgSGVhZCBleHRlbmRzIENvbXBvbmVudDxcbiAgT3JpZ2luUHJvcHMgJlxuICAgIFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgICAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEhlYWRFbGVtZW50PixcbiAgICAgIEhUTUxIZWFkRWxlbWVudFxuICAgID5cbj4ge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBEb2N1bWVudENvbXBvbmVudENvbnRleHRcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5vbmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNyb3NzT3JpZ2luOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9XG5cbiAgY29udGV4dCE6IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBEb2N1bWVudENvbXBvbmVudENvbnRleHQ+XG5cbiAgZ2V0Q3NzTGlua3MoZmlsZXM6IERvY3VtZW50RmlsZXMpOiBKU1guRWxlbWVudFtdIHwgbnVsbCB7XG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICAgIGR5bmFtaWNJbXBvcnRzLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBjc3NGaWxlcyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZikgPT4gZi5lbmRzV2l0aCgnLmNzcycpKVxuICAgIGNvbnN0IHNoYXJlZEZpbGVzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoZmlsZXMuc2hhcmVkRmlsZXMpXG5cbiAgICAvLyBVbm1hbmFnZWQgZmlsZXMgYXJlIENTUyBmaWxlcyB0aGF0IHdpbGwgYmUgaGFuZGxlZCBkaXJlY3RseSBieSB0aGVcbiAgICAvLyB3ZWJwYWNrIHJ1bnRpbWUgKGBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbmApLlxuICAgIGxldCB1bm1hbmdlZEZpbGVzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoW10pXG4gICAgbGV0IGR5bmFtaWNDc3NGaWxlcyA9IGRlZHVwZShcbiAgICAgIGR5bmFtaWNJbXBvcnRzLmZpbHRlcigoZikgPT4gZi5maWxlLmVuZHNXaXRoKCcuY3NzJykpXG4gICAgKS5tYXAoKGYpID0+IGYuZmlsZSlcbiAgICBpZiAoZHluYW1pY0Nzc0ZpbGVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZXhpc3RpbmcgPSBuZXcgU2V0KGNzc0ZpbGVzKVxuICAgICAgZHluYW1pY0Nzc0ZpbGVzID0gZHluYW1pY0Nzc0ZpbGVzLmZpbHRlcihcbiAgICAgICAgKGYpID0+ICEoZXhpc3RpbmcuaGFzKGYpIHx8IHNoYXJlZEZpbGVzLmhhcyhmKSlcbiAgICAgIClcbiAgICAgIHVubWFuZ2VkRmlsZXMgPSBuZXcgU2V0KGR5bmFtaWNDc3NGaWxlcylcbiAgICAgIGNzc0ZpbGVzLnB1c2goLi4uZHluYW1pY0Nzc0ZpbGVzKVxuICAgIH1cblxuICAgIGxldCBjc3NMaW5rRWxlbWVudHM6IEpTWC5FbGVtZW50W10gPSBbXVxuICAgIGNzc0ZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGlzU2hhcmVkRmlsZSA9IHNoYXJlZEZpbGVzLmhhcyhmaWxlKVxuXG4gICAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MpIHtcbiAgICAgICAgY3NzTGlua0VsZW1lbnRzLnB1c2goXG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17YCR7ZmlsZX0tcHJlbG9hZGB9XG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgIGFzPVwic3R5bGVcIlxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzVW5tYW5hZ2VkRmlsZSA9IHVubWFuZ2VkRmlsZXMuaGFzKGZpbGUpXG4gICAgICBjc3NMaW5rRWxlbWVudHMucHVzaChcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhLW4tZz17aXNVbm1hbmFnZWRGaWxlID8gdW5kZWZpbmVkIDogaXNTaGFyZWRGaWxlID8gJycgOiB1bmRlZmluZWR9XG4gICAgICAgICAgZGF0YS1uLXA9e2lzVW5tYW5hZ2VkRmlsZSA/IHVuZGVmaW5lZCA6IGlzU2hhcmVkRmlsZSA/IHVuZGVmaW5lZCA6ICcnfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG5cbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTXG4gICAgKSB7XG4gICAgICBjc3NMaW5rRWxlbWVudHMgPSB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoXG4gICAgICAgIGNzc0xpbmtFbGVtZW50c1xuICAgICAgKSBhcyBSZWFjdEVsZW1lbnRbXVxuICAgIH1cblxuICAgIHJldHVybiBjc3NMaW5rRWxlbWVudHMubGVuZ3RoID09PSAwID8gbnVsbCA6IGNzc0xpbmtFbGVtZW50c1xuICB9XG5cbiAgZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZHluYW1pY0ltcG9ydHMsXG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiAoXG4gICAgICBkZWR1cGUoZHluYW1pY0ltcG9ydHMpXG4gICAgICAgIC5tYXAoKGJ1bmRsZSkgPT4ge1xuICAgICAgICAgIGlmICghYnVuZGxlLmZpbGUuZW5kc1dpdGgoJy5qcycpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgICAga2V5PXtidW5kbGUuZmlsZX1cbiAgICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgIGJ1bmRsZS5maWxlXG4gICAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICAvLyBGaWx0ZXIgb3V0IG51bGxlZCBzY3JpcHRzXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICApXG4gIH1cblxuICBnZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzOiBEb2N1bWVudEZpbGVzKTogSlNYLkVsZW1lbnRbXSB8IG51bGwge1xuICAgIGNvbnN0IHtcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgICBzY3JpcHRMb2FkZXIsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IHByZWxvYWRGaWxlcyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZmlsZTogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gZmlsZS5lbmRzV2l0aCgnLmpzJylcbiAgICB9KVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLihzY3JpcHRMb2FkZXIuZWFnZXIgfHwgW10pLm1hcCgoZmlsZSkgPT4gKFxuICAgICAgICA8bGlua1xuICAgICAgICAgIGtleT17ZmlsZS5zcmN9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgaHJlZj17ZmlsZS5zcmN9XG4gICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICkpLFxuICAgICAgLi4ucHJlbG9hZEZpbGVzLm1hcCgoZmlsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKSksXG4gICAgICAuLi4oc2NyaXB0TG9hZGVyLmRlZmVyIHx8IFtdKS5tYXAoKGZpbGU6IHN0cmluZykgPT4gKFxuICAgICAgICA8bGlua1xuICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICBocmVmPXtmaWxlfVxuICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICApKSxcbiAgICBdXG4gIH1cblxuICBoYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUpOiBSZWFjdE5vZGVbXSB7XG4gICAgY29uc3QgeyBzY3JpcHRMb2FkZXIgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IHNjcmlwdExvYWRlckl0ZW1zOiBTY3JpcHRMb2FkZXJQcm9wc1tdID0gW11cbiAgICBjb25zdCBmaWx0ZXJlZENoaWxkcmVuOiBSZWFjdE5vZGVbXSA9IFtdXG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCAoY2hpbGQ6IGFueSkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFNjcmlwdCkge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMuc3RyYXRlZ3kgPT09ICdlYWdlcicpIHtcbiAgICAgICAgICBzY3JpcHRMb2FkZXIuZWFnZXIgPSAoc2NyaXB0TG9hZGVyLmVhZ2VyIHx8IFtdKS5jb25jYXQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi5jaGlsZC5wcm9wcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSBlbHNlIGlmIChbJ2xhenknLCAnZGVmZXInXS5pbmNsdWRlcyhjaGlsZC5wcm9wcy5zdHJhdGVneSkpIHtcbiAgICAgICAgICBzY3JpcHRMb2FkZXJJdGVtcy5wdXNoKGNoaWxkLnByb3BzKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZpbHRlcmVkQ2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18uc2NyaXB0TG9hZGVyID0gc2NyaXB0TG9hZGVySXRlbXNcblxuICAgIHJldHVybiBmaWx0ZXJlZENoaWxkcmVuXG4gIH1cblxuICBtYWtlU3R5bGVzaGVldEluZXJ0KG5vZGU6IFJlYWN0Tm9kZSk6IFJlYWN0Tm9kZVtdIHtcbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKG5vZGUsIChjOiBhbnkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgYy50eXBlID09PSAnbGluaycgJiZcbiAgICAgICAgYy5wcm9wc1snaHJlZiddICYmXG4gICAgICAgIE9QVElNSVpFRF9GT05UX1BST1ZJREVSUy5zb21lKCh1cmwpID0+IGMucHJvcHNbJ2hyZWYnXS5zdGFydHNXaXRoKHVybCkpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7IC4uLihjLnByb3BzIHx8IHt9KSB9XG4gICAgICAgIG5ld1Byb3BzWydkYXRhLWhyZWYnXSA9IG5ld1Byb3BzWydocmVmJ11cbiAgICAgICAgbmV3UHJvcHNbJ2hyZWYnXSA9IHVuZGVmaW5lZFxuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGMsIG5ld1Byb3BzKVxuICAgICAgfSBlbHNlIGlmIChjLnByb3BzICYmIGMucHJvcHNbJ2NoaWxkcmVuJ10pIHtcbiAgICAgICAgYy5wcm9wc1snY2hpbGRyZW4nXSA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjLnByb3BzWydjaGlsZHJlbiddKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0eWxlcyxcbiAgICAgIGFtcFBhdGgsXG4gICAgICBpbkFtcE1vZGUsXG4gICAgICBoeWJyaWRBbXAsXG4gICAgICBjYW5vbmljYWxCYXNlLFxuICAgICAgX19ORVhUX0RBVEFfXyxcbiAgICAgIGRhbmdlcm91c0FzUGF0aCxcbiAgICAgIGhlYWRUYWdzLFxuICAgICAgdW5zdGFibGVfcnVudGltZUpTLFxuICAgICAgdW5zdGFibGVfSnNQcmVsb2FkLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZVxuICAgIGNvbnN0IGRpc2FibGVKc1ByZWxvYWQgPSB1bnN0YWJsZV9Kc1ByZWxvYWQgPT09IGZhbHNlXG5cbiAgICB0aGlzLmNvbnRleHQuZG9jQ29tcG9uZW50c1JlbmRlcmVkLkhlYWQgPSB0cnVlXG5cbiAgICBsZXQgeyBoZWFkIH0gPSB0aGlzLmNvbnRleHRcbiAgICBsZXQgY3NzUHJlbG9hZHM6IEFycmF5PEpTWC5FbGVtZW50PiA9IFtdXG4gICAgbGV0IG90aGVySGVhZEVsZW1lbnRzOiBBcnJheTxKU1guRWxlbWVudD4gPSBbXVxuICAgIGlmIChoZWFkKSB7XG4gICAgICBoZWFkLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGMgJiZcbiAgICAgICAgICBjLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICAgIGMucHJvcHNbJ3JlbCddID09PSAncHJlbG9hZCcgJiZcbiAgICAgICAgICBjLnByb3BzWydhcyddID09PSAnc3R5bGUnXG4gICAgICAgICkge1xuICAgICAgICAgIGNzc1ByZWxvYWRzLnB1c2goYylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjICYmIG90aGVySGVhZEVsZW1lbnRzLnB1c2goYylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGhlYWQgPSBjc3NQcmVsb2Fkcy5jb25jYXQob3RoZXJIZWFkRWxlbWVudHMpXG4gICAgfVxuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAvLyBzaG93IGEgd2FybmluZyBpZiBIZWFkIGNvbnRhaW5zIDx0aXRsZT4gKG9ubHkgaW4gZGV2ZWxvcG1lbnQpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQ6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBpc1JlYWN0SGVsbWV0ID0gY2hpbGQ/LnByb3BzPy5bJ2RhdGEtcmVhY3QtaGVsbWV0J11cbiAgICAgICAgaWYgKCFpc1JlYWN0SGVsbWV0KSB7XG4gICAgICAgICAgaWYgKGNoaWxkPy50eXBlID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIFwiV2FybmluZzogPHRpdGxlPiBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL2Vyci5zaC9uZXh0LmpzL25vLWRvY3VtZW50LXRpdGxlXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgY2hpbGQ/LnR5cGUgPT09ICdtZXRhJyAmJlxuICAgICAgICAgICAgY2hpbGQ/LnByb3BzPy5uYW1lID09PSAndmlld3BvcnQnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIFwiV2FybmluZzogdmlld3BvcnQgbWV0YSB0YWdzIHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvbm8tZG9jdW1lbnQtdmlld3BvcnQtbWV0YVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgfSlcbiAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKVxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1dhcm5pbmc6IGBIZWFkYCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcgJiZcbiAgICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyAmJlxuICAgICAgIWluQW1wTW9kZVxuICAgICkge1xuICAgICAgY2hpbGRyZW4gPSB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoY2hpbGRyZW4pXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JJUFRfTE9BREVSKSB7XG4gICAgICBjaGlsZHJlbiA9IHRoaXMuaGFuZGxlRG9jdW1lbnRTY3JpcHRMb2FkZXJJdGVtcyhjaGlsZHJlbilcbiAgICB9XG5cbiAgICBsZXQgaGFzQW1waHRtbFJlbCA9IGZhbHNlXG4gICAgbGV0IGhhc0Nhbm9uaWNhbFJlbCA9IGZhbHNlXG5cbiAgICAvLyBzaG93IHdhcm5pbmcgYW5kIHJlbW92ZSBjb25mbGljdGluZyBhbXAgaGVhZCB0YWdzXG4gICAgaGVhZCA9IFJlYWN0LkNoaWxkcmVuLm1hcChoZWFkIHx8IFtdLCAoY2hpbGQpID0+IHtcbiAgICAgIGlmICghY2hpbGQpIHJldHVybiBjaGlsZFxuICAgICAgY29uc3QgeyB0eXBlLCBwcm9wcyB9ID0gY2hpbGRcbiAgICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgICAgbGV0IGJhZFByb3A6IHN0cmluZyA9ICcnXG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdtZXRhJyAmJiBwcm9wcy5uYW1lID09PSAndmlld3BvcnQnKSB7XG4gICAgICAgICAgYmFkUHJvcCA9ICduYW1lPVwidmlld3BvcnRcIidcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnY2Fub25pY2FsJykge1xuICAgICAgICAgIGhhc0Nhbm9uaWNhbFJlbCA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnc2NyaXB0Jykge1xuICAgICAgICAgIC8vIG9ubHkgYmxvY2sgaWZcbiAgICAgICAgICAvLyAxLiBpdCBoYXMgYSBzcmMgYW5kIGlzbid0IHBvaW50aW5nIHRvIGFtcHByb2plY3QncyBDRE5cbiAgICAgICAgICAvLyAyLiBpdCBpcyB1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCB3aXRob3V0IGEgdHlwZSBvclxuICAgICAgICAgIC8vIGEgdHlwZSBvZiB0ZXh0L2phdmFzY3JpcHRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAocHJvcHMuc3JjICYmIHByb3BzLnNyYy5pbmRleE9mKCdhbXBwcm9qZWN0JykgPCAtMSkgfHxcbiAgICAgICAgICAgIChwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCAmJlxuICAgICAgICAgICAgICAoIXByb3BzLnR5cGUgfHwgcHJvcHMudHlwZSA9PT0gJ3RleHQvamF2YXNjcmlwdCcpKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYmFkUHJvcCA9ICc8c2NyaXB0J1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgICAgICAgICAgYmFkUHJvcCArPSBgICR7cHJvcH09XCIke3Byb3BzW3Byb3BdfVwiYFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJhZFByb3AgKz0gJy8+J1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiYWRQcm9wKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYEZvdW5kIGNvbmZsaWN0aW5nIGFtcCB0YWcgXCIke2NoaWxkLnR5cGV9XCIgd2l0aCBjb25mbGljdGluZyBwcm9wICR7YmFkUHJvcH0gaW4gJHtfX05FWFRfREFUQV9fLnBhZ2V9LiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2NvbmZsaWN0aW5nLWFtcC10YWdgXG4gICAgICAgICAgKVxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vbi1hbXAgbW9kZVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmsnICYmIHByb3BzLnJlbCA9PT0gJ2FtcGh0bWwnKSB7XG4gICAgICAgICAgaGFzQW1waHRtbFJlbCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfSlcblxuICAgIC8vIHRyeSB0byBwYXJzZSBzdHlsZXMgZnJvbSBmcmFnbWVudCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICAgIGNvbnN0IGN1clN0eWxlczogUmVhY3QuUmVhY3RFbGVtZW50W10gPSBBcnJheS5pc0FycmF5KHN0eWxlcylcbiAgICAgID8gKHN0eWxlcyBhcyBSZWFjdC5SZWFjdEVsZW1lbnRbXSlcbiAgICAgIDogW11cbiAgICBpZiAoXG4gICAgICBpbkFtcE1vZGUgJiZcbiAgICAgIHN0eWxlcyAmJlxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBzdHlsZXMucHJvcHMgJiZcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgQXJyYXkuaXNBcnJheShzdHlsZXMucHJvcHMuY2hpbGRyZW4pXG4gICAgKSB7XG4gICAgICBjb25zdCBoYXNTdHlsZXMgPSAoZWw6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT5cbiAgICAgICAgZWw/LnByb3BzPy5kYW5nZXJvdXNseVNldElubmVySFRNTD8uX19odG1sXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIHN0eWxlcy5wcm9wcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogUmVhY3QuUmVhY3RFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICAgIGNoaWxkLmZvckVhY2goKGVsKSA9PiBoYXNTdHlsZXMoZWwpICYmIGN1clN0eWxlcy5wdXNoKGVsKSlcbiAgICAgICAgfSBlbHNlIGlmIChoYXNTdHlsZXMoY2hpbGQpKSB7XG4gICAgICAgICAgY3VyU3R5bGVzLnB1c2goY2hpbGQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZmlsZXM6IERvY3VtZW50RmlsZXMgPSBnZXREb2N1bWVudEZpbGVzKFxuICAgICAgdGhpcy5jb250ZXh0LmJ1aWxkTWFuaWZlc3QsXG4gICAgICB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLFxuICAgICAgaW5BbXBNb2RlXG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAge3RoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGRhdGEtbmV4dC1oaWRlLWZvdWNcbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlPXtpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5Om5vbmV9YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bm9zY3JpcHRcbiAgICAgICAgICAgICAgZGF0YS1uZXh0LWhpZGUtZm91Y1xuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGU9e2luQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpibG9ja31gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtoZWFkfVxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJuZXh0LWhlYWQtY291bnRcIlxuICAgICAgICAgIGNvbnRlbnQ9e1JlYWN0LkNoaWxkcmVuLmNvdW50KGhlYWQgfHwgW10pLnRvU3RyaW5nKCl9XG4gICAgICAgIC8+XG4gICAgICAgIHtpbkFtcE1vZGUgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHshaGFzQ2Fub25pY2FsUmVsICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJjYW5vbmljYWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBjbGVhbkFtcFBhdGgoZGFuZ2Vyb3VzQXNQYXRoKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogaHR0cHM6Ly93d3cuYW1wcHJvamVjdC5vcmcvZG9jcy9mdW5kYW1lbnRhbHMvb3B0aW1pemVfYW1wI29wdGltaXplLXRoZS1hbXAtcnVudGltZS1sb2FkaW5nICovfVxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7LyogQWRkIGN1c3RvbSBzdHlsZXMgYmVmb3JlIEFNUCBzdHlsZXMgdG8gcHJldmVudCBhY2NpZGVudGFsIG92ZXJyaWRlcyAqL31cbiAgICAgICAgICAgIHtzdHlsZXMgJiYgKFxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtY3VzdG9tPVwiXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBjdXJTdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3R5bGUpID0+IHN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbClcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCojIHNvdXJjZU1hcHBpbmdVUkw9LipcXCpcXC8vZywgJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCpAIHNvdXJjZVVSTD0uKj9cXCpcXC8vZywgJycpLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGFtcC1ib2lsZXJwbGF0ZT1cIlwiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtYm9pbGVycGxhdGU9XCJcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIiAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7IWluQW1wTW9kZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHshaGFzQW1waHRtbFJlbCAmJiBoeWJyaWRBbXAgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cImFtcGh0bWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBnZXRBbXBQYXRoKGFtcFBhdGgsIGRhbmdlcm91c0FzUGF0aCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIHRoaXMuZ2V0Q3NzTGlua3MoZmlsZXMpfVxuICAgICAgICAgICAgeyFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIChcbiAgICAgICAgICAgICAgPG5vc2NyaXB0IGRhdGEtbi1jc3M9e3RoaXMucHJvcHMubm9uY2UgPz8gJyd9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlSnNQcmVsb2FkICYmXG4gICAgICAgICAgICAgIHRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZUpzUHJlbG9hZCAmJlxuICAgICAgICAgICAgICB0aGlzLmdldFByZWxvYWRNYWluTGlua3MoZmlsZXMpfVxuICAgICAgICAgICAge3Byb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MgJiYgdGhpcy5nZXRDc3NMaW5rcyhmaWxlcyl9XG4gICAgICAgICAgICB7cHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiAoXG4gICAgICAgICAgICAgIDxub3NjcmlwdCBkYXRhLW4tY3NzPXt0aGlzLnByb3BzLm5vbmNlID8/ICcnfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuaXNEZXZlbG9wbWVudCAmJiAoXG4gICAgICAgICAgICAgIC8vIHRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIG1vdW50IGRldmVsb3BtZW50IHN0eWxlcyBzbyB0aGVcbiAgICAgICAgICAgICAgLy8gb3JkZXJpbmcgbWF0Y2hlcyBwcm9kdWN0aW9uXG4gICAgICAgICAgICAgIC8vIChieSBkZWZhdWx0LCBzdHlsZS1sb2FkZXIgaW5qZWN0cyBhdCB0aGUgYm90dG9tIG9mIDxoZWFkIC8+KVxuICAgICAgICAgICAgICA8bm9zY3JpcHQgaWQ9XCJfX25leHRfY3NzX19ET19OT1RfVVNFX19cIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzdHlsZXMgfHwgbnVsbH1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHt9LCAuLi4oaGVhZFRhZ3MgfHwgW10pKX1cbiAgICAgIDwvaGVhZD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IHsgaW5BbXBNb2RlLCBodG1sLCBkb2NDb21wb25lbnRzUmVuZGVyZWQgfSA9IHVzZUNvbnRleHQoXG4gICAgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG4gIClcblxuICBkb2NDb21wb25lbnRzUmVuZGVyZWQuTWFpbiA9IHRydWVcblxuICBpZiAoaW5BbXBNb2RlKSByZXR1cm4gPD57QU1QX1JFTkRFUl9UQVJHRVR9PC8+XG4gIHJldHVybiA8ZGl2IGlkPVwiX19uZXh0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+XG59XG5cbmV4cG9ydCBjbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgQ29tcG9uZW50PE9yaWdpblByb3BzPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbm9uY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3Jvc3NPcmlnaW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICAvLyBTb3VyY2U6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3NhbXRob3IvNjRiMTE0ZTRhNGY1Mzk5MTVhOTViOTFmZmQzNDBhY2NcbiAgc3RhdGljIHNhZmFyaU5vbW9kdWxlRml4ID1cbiAgICAnIWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQsdD1lLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoIShcIm5vTW9kdWxlXCJpbiB0KSYmXCJvbmJlZm9yZWxvYWRcImluIHQpe3ZhciBuPSExO2UuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZWxvYWRcIixmdW5jdGlvbihlKXtpZihlLnRhcmdldD09PXQpbj0hMDtlbHNlIGlmKCFlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJub21vZHVsZVwiKXx8IW4pcmV0dXJuO2UucHJldmVudERlZmF1bHQoKX0sITApLHQudHlwZT1cIm1vZHVsZVwiLHQuc3JjPVwiLlwiLGUuaGVhZC5hcHBlbmRDaGlsZCh0KSx0LnJlbW92ZSgpfX0oKTsnXG5cbiAgZ2V0RHluYW1pY0NodW5rcyhmaWxlczogRG9jdW1lbnRGaWxlcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGR5bmFtaWNJbXBvcnRzLFxuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBpc0RldmVsb3BtZW50LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgcmV0dXJuIGRlZHVwZShkeW5hbWljSW1wb3J0cykubWFwKChidW5kbGUpID0+IHtcbiAgICAgIGlmICghYnVuZGxlLmZpbGUuZW5kc1dpdGgoJy5qcycpIHx8IGZpbGVzLmFsbEZpbGVzLmluY2x1ZGVzKGJ1bmRsZS5maWxlKSlcbiAgICAgICAgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGFzeW5jPXshaXNEZXZlbG9wbWVudH1cbiAgICAgICAgICBrZXk9e2J1bmRsZS5maWxlfVxuICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgYnVuZGxlLmZpbGVcbiAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGdldFByZU5leHRTY3JpcHRzKCkge1xuICAgIGNvbnN0IHsgc2NyaXB0TG9hZGVyIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiAoc2NyaXB0TG9hZGVyLmVhZ2VyIHx8IFtdKS5tYXAoKGZpbGU6IFNjcmlwdExvYWRlclByb3BzKSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmF0ZWd5LCAuLi5wcm9wcyB9ID0gZmlsZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGdldFNjcmlwdHMoZmlsZXM6IERvY3VtZW50RmlsZXMpIHtcbiAgICBjb25zdCB7XG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGJ1aWxkTWFuaWZlc3QsXG4gICAgICBpc0RldmVsb3BtZW50LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgY29uc3Qgbm9ybWFsU2NyaXB0cyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZmlsZSkgPT4gZmlsZS5lbmRzV2l0aCgnLmpzJykpXG4gICAgY29uc3QgbG93UHJpb3JpdHlTY3JpcHRzID0gYnVpbGRNYW5pZmVzdC5sb3dQcmlvcml0eUZpbGVzPy5maWx0ZXIoKGZpbGUpID0+XG4gICAgICBmaWxlLmVuZHNXaXRoKCcuanMnKVxuICAgIClcblxuICAgIHJldHVybiBbLi4ubm9ybWFsU2NyaXB0cywgLi4ubG93UHJpb3JpdHlTY3JpcHRzXS5tYXAoKGZpbGUpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBmaWxlXG4gICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgYXN5bmM9eyFpc0RldmVsb3BtZW50fVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgZ2V0UG9seWZpbGxTY3JpcHRzKCkge1xuICAgIC8vIHBvbHlmaWxscy5qcyBoYXMgdG8gYmUgcmVuZGVyZWQgYXMgbm9tb2R1bGUgd2l0aG91dCBhc3luY1xuICAgIC8vIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBmaXJzdCBzY3JpcHQgdG8gbG9hZFxuICAgIGNvbnN0IHtcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgYnVpbGRNYW5pZmVzdCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiBidWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXNcbiAgICAgIC5maWx0ZXIoXG4gICAgICAgIChwb2x5ZmlsbCkgPT5cbiAgICAgICAgICBwb2x5ZmlsbC5lbmRzV2l0aCgnLmpzJykgJiYgIXBvbHlmaWxsLmVuZHNXaXRoKCcubW9kdWxlLmpzJylcbiAgICAgIClcbiAgICAgIC5tYXAoKHBvbHlmaWxsKSA9PiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBrZXk9e3BvbHlmaWxsfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgICBub01vZHVsZT17dHJ1ZX1cbiAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke3BvbHlmaWxsfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgLz5cbiAgICAgICkpXG4gIH1cblxuICBzdGF0aWMgZ2V0SW5saW5lU2NyaXB0U291cmNlKGRvY3VtZW50UHJvcHM6IFJlYWRvbmx5PERvY3VtZW50UHJvcHM+KTogc3RyaW5nIHtcbiAgICBjb25zdCB7IF9fTkVYVF9EQVRBX18gfSA9IGRvY3VtZW50UHJvcHNcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KF9fTkVYVF9EQVRBX18pXG4gICAgICByZXR1cm4gaHRtbEVzY2FwZUpzb25TdHJpbmcoZGF0YSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIubWVzc2FnZS5pbmRleE9mKCdjaXJjdWxhciBzdHJ1Y3R1cmUnKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYENpcmN1bGFyIHN0cnVjdHVyZSBpbiBcImdldEluaXRpYWxQcm9wc1wiIHJlc3VsdCBvZiBwYWdlIFwiJHtfX05FWFRfREFUQV9fLnBhZ2V9XCIuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2NpcmN1bGFyLXN0cnVjdHVyZWBcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgaW5BbXBNb2RlLFxuICAgICAgYnVpbGRNYW5pZmVzdCxcbiAgICAgIHVuc3RhYmxlX3J1bnRpbWVKUyxcbiAgICAgIGRvY0NvbXBvbmVudHNSZW5kZXJlZCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZVxuXG4gICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLk5leHRTY3JpcHQgPSB0cnVlXG5cbiAgICBpZiAoaW5BbXBNb2RlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBhbXBEZXZGaWxlcyA9IFtcbiAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5kZXZGaWxlcyxcbiAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzLFxuICAgICAgICAuLi5idWlsZE1hbmlmZXN0LmFtcERldkZpbGVzLFxuICAgICAgXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIHtkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YW1wRGV2RmlsZXMubWFwKChmaWxlKSA9PiAoXG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtmaWxlfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbilcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdXYXJuaW5nOiBgTmV4dFNjcmlwdGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IGZpbGVzOiBEb2N1bWVudEZpbGVzID0gZ2V0RG9jdW1lbnRGaWxlcyhcbiAgICAgIHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LFxuICAgICAgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZSxcbiAgICAgIGluQW1wTW9kZVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgYnVpbGRNYW5pZmVzdC5kZXZGaWxlc1xuICAgICAgICAgID8gYnVpbGRNYW5pZmVzdC5kZXZGaWxlcy5tYXAoKGZpbGU6IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7ZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiAoXG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UG9seWZpbGxTY3JpcHRzKCl9XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFByZU5leHRTY3JpcHRzKCl9XG4gICAgICAgIHtkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IHRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyl9XG4gICAgICAgIHtkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IHRoaXMuZ2V0U2NyaXB0cyhmaWxlcyl9XG4gICAgICA8Lz5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW1wUGF0aChhbXBQYXRoOiBzdHJpbmcsIGFzUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGFtcFBhdGggfHwgYCR7YXNQYXRofSR7YXNQYXRoLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPyd9YW1wPTFgXG59XG4iLCIvLyBUaGlzIHV0aWxpdHkgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZVxuLy8gTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZS9ibG9iLzA1MjdjYTcxNTZhNTI0ZDI1NjEwMWJiMzEwYTlmOTcwZjYzMDc4YWQvTElDRU5TRVxuXG5jb25zdCBFU0NBUEVfTE9PS1VQOiB7IFttYXRjaDogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICcmJzogJ1xcXFx1MDAyNicsXG4gICc+JzogJ1xcXFx1MDAzZScsXG4gICc8JzogJ1xcXFx1MDAzYycsXG4gICdcXHUyMDI4JzogJ1xcXFx1MjAyOCcsXG4gICdcXHUyMDI5JzogJ1xcXFx1MjAyOScsXG59XG5cbmNvbnN0IEVTQ0FQRV9SRUdFWCA9IC9bJj48XFx1MjAyOFxcdTIwMjldL2dcblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxFc2NhcGVKc29uU3RyaW5nKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKEVTQ0FQRV9SRUdFWCwgKG1hdGNoKSA9PiBFU0NBUEVfTE9PS1VQW21hdGNoXSlcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9