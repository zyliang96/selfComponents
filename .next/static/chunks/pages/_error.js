_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/_error"],{

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

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = Object.assign.bind(Object);
module.exports = assign;
module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! next/dist/pages/_error */ "./node_modules/next/dist/pages/_error.js");
      }
    ]);
  

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

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = /*#__PURE__*/_react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _defineProperty2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

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

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

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

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
} // TODO: Remove in the next major release


_c = Head;

Head.rewind = function () {};

var _default = Head;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

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

exports.__esModule = true;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  (0, _inherits2["default"])(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, _default);
    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState((0, _toConsumableArray2["default"])(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add((0, _assertThisInitialized2["default"])(_this));

      _this.emitChange();
    }

    return _this;
  }

  (0, _createClass2["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return _default;
}(_react.Component);

exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

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

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js"));

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps(_ref) {
  var res = _ref.res,
      err = _ref.err;
  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


var Error = /*#__PURE__*/function (_react$default$Compon) {
  (0, _inherits2["default"])(Error, _react$default$Compon);

  var _super = _createSuper(Error);

  function Error() {
    (0, _classCallCheck2["default"])(this, Error);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.error
      }, /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("title", null, statusCode, ": ", title)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: 'body { margin: 0 }'
        }
      }), statusCode ? /*#__PURE__*/_react["default"].createElement("h1", {
        style: styles.h1
      }, statusCode) : null, /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.desc
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        style: styles.h2
      }, title, "."))));
    }
  }]);
  return Error;
}(_react["default"].Component);

exports["default"] = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
var styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/** @license React v17.0.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




if (true) {
  (function () {
    'use strict';

    var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js"); // TODO: this is special because it gets imported during build.


    var ReactVersion = '17.0.1'; // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    exports.Fragment = 0xeacb;
    exports.StrictMode = 0xeacc;
    exports.Profiler = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    exports.Suspense = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_BLOCK_TYPE = 0xead9;
    var REACT_SERVER_BLOCK_TYPE = 0xeada;
    var REACT_FUNDAMENTAL_TYPE = 0xead5;
    var REACT_SCOPE_TYPE = 0xead7;
    var REACT_OPAQUE_ID_TYPE = 0xeae0;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_OFFSCREEN_TYPE = 0xeae2;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

    if (typeof Symbol === 'function' && Symbol["for"]) {
      var symbolFor = Symbol["for"];
      REACT_ELEMENT_TYPE = symbolFor('react.element');
      REACT_PORTAL_TYPE = symbolFor('react.portal');
      exports.Fragment = symbolFor('react.fragment');
      exports.StrictMode = symbolFor('react.strict_mode');
      exports.Profiler = symbolFor('react.profiler');
      REACT_PROVIDER_TYPE = symbolFor('react.provider');
      REACT_CONTEXT_TYPE = symbolFor('react.context');
      REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
      exports.Suspense = symbolFor('react.suspense');
      REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
      REACT_MEMO_TYPE = symbolFor('react.memo');
      REACT_LAZY_TYPE = symbolFor('react.lazy');
      REACT_BLOCK_TYPE = symbolFor('react.block');
      REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
      REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
      REACT_SCOPE_TYPE = symbolFor('react.scope');
      REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
      REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
      REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
      REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }

    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';

    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(maybeIterable) !== 'object') {
        return null;
      }

      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

      if (typeof maybeIterator === 'function') {
        return maybeIterator;
      }

      return null;
    }
    /**
     * Keeps track of the current dispatcher.
     */


    var ReactCurrentDispatcher = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };
    /**
     * Keeps track of the current batch's configuration such as how long an update
     * should suspend for if it needs to.
     */

    var ReactCurrentBatchConfig = {
      transition: 0
    };
    /**
     * Keeps track of the current owner.
     *
     * The current owner is the component who should own any components that are
     * currently being constructed.
     */

    var ReactCurrentOwner = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };
    var ReactDebugCurrentFrame = {};
    var currentExtraStackFrame = null;

    function setExtraStackFrame(stack) {
      {
        currentExtraStackFrame = stack;
      }
    }

    {
      ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
        {
          currentExtraStackFrame = stack;
        }
      }; // Stack implementation injected by the current renderer.


      ReactDebugCurrentFrame.getCurrentStack = null;

      ReactDebugCurrentFrame.getStackAddendum = function () {
        var stack = ''; // Add an extra top frame while an element is being validated

        if (currentExtraStackFrame) {
          stack += currentExtraStackFrame;
        } // Delegate to the injected renderer-specific implementation


        var impl = ReactDebugCurrentFrame.getCurrentStack;

        if (impl) {
          stack += impl() || '';
        }

        return stack;
      };
    }
    /**
     * Used by act() to track whether you're inside an act() scope.
     */

    var IsSomeRendererActing = {
      current: false
    };
    var ReactSharedInternals = {
      ReactCurrentDispatcher: ReactCurrentDispatcher,
      ReactCurrentBatchConfig: ReactCurrentBatchConfig,
      ReactCurrentOwner: ReactCurrentOwner,
      IsSomeRendererActing: IsSomeRendererActing,
      // Used by renderers to avoid bundling object-assign twice in UMD bundles:
      assign: _assign
    };
    {
      ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
    } // by calls to these methods by a Babel plugin.
    //
    // In PROD (or in packages without access to React internals),
    // they are left as they are instead.

    function warn(format) {
      {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        printWarning('warn', format, args);
      }
    }

    function error(format) {
      {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        printWarning('error', format, args);
      }
    }

    function printWarning(level, format, args) {
      // When changing this logic, you might want to also
      // update consoleWithStackDev.www.js as well.
      {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();

        if (stack !== '') {
          format += '%s';
          args = args.concat([stack]);
        }

        var argsWithFormat = args.map(function (item) {
          return '' + item;
        }); // Careful: RN currently depends on this prefix

        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging

        Function.prototype.apply.call(console[level], console, argsWithFormat);
      }
    }

    var didWarnStateUpdateForUnmountedComponent = {};

    function warnNoop(publicInstance, callerName) {
      {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
        var warningKey = componentName + "." + callerName;

        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
          return;
        }

        error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
      }
    }
    /**
     * This is the abstract API for an update queue.
     */


    var ReactNoopUpdateQueue = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function isMounted(publicInstance) {
        return false;
      },

      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
        warnNoop(publicInstance, 'forceUpdate');
      },

      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
        warnNoop(publicInstance, 'replaceState');
      },

      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
        warnNoop(publicInstance, 'setState');
      }
    };
    var emptyObject = {};
    {
      Object.freeze(emptyObject);
    }
    /**
     * Base class helpers for the updating state of a component.
     */

    function Component(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
      // renderer.

      this.updater = updater || ReactNoopUpdateQueue;
    }

    Component.prototype.isReactComponent = {};
    /**
     * Sets a subset of the state. Always use this to mutate
     * state. You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * There is no guarantee that calls to `setState` will run synchronously,
     * as they may eventually be batched together.  You can provide an optional
     * callback that will be executed when the call to setState is actually
     * completed.
     *
     * When a function is provided to setState, it will be called at some point in
     * the future (not synchronously). It will be called with the up to date
     * component arguments (state, props, context). These values can be different
     * from this.* because your function may be called after receiveProps but before
     * shouldComponentUpdate, and this new state, props, and context will not yet be
     * assigned to this.
     *
     * @param {object|function} partialState Next partial state or function to
     *        produce next partial state to be merged with current state.
     * @param {?function} callback Called after state is updated.
     * @final
     * @protected
     */

    Component.prototype.setState = function (partialState, callback) {
      if (!(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(partialState) === 'object' || typeof partialState === 'function' || partialState == null)) {
        {
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        }
      }

      this.updater.enqueueSetState(this, partialState, callback, 'setState');
    };
    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {?function} callback Called after update is complete.
     * @final
     * @protected
     */


    Component.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
    };
    /**
     * Deprecated APIs. These APIs used to exist on classic React classes but since
     * we would like to deprecate them, we're not going to move them over to this
     * modern base class. Instead, we define a getter that warns if it's accessed.
     */


    {
      var deprecatedAPIs = {
        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
      };

      var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function get() {
            warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
            return undefined;
          }
        });
      };

      for (var fnName in deprecatedAPIs) {
        if (deprecatedAPIs.hasOwnProperty(fnName)) {
          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        }
      }
    }

    function ComponentDummy() {}

    ComponentDummy.prototype = Component.prototype;
    /**
     * Convenience component with default shallow equality check for sCU.
     */

    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }

    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

    _assign(pureComponentPrototype, Component.prototype);

    pureComponentPrototype.isPureReactComponent = true; // an immutable object with a single mutable value

    function createRef() {
      var refObject = {
        current: null
      };
      {
        Object.seal(refObject);
      }
      return refObject;
    }

    function getWrappedName(outerType, innerType, wrapperName) {
      var functionName = innerType.displayName || innerType.name || '';
      return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
    }

    function getContextName(type) {
      return type.displayName || 'Context';
    }

    function getComponentName(type) {
      if (type == null) {
        // Host root, text node or just invalid type.
        return null;
      }

      {
        if (typeof type.tag === 'number') {
          error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
        }
      }

      if (typeof type === 'function') {
        return type.displayName || type.name || null;
      }

      if (typeof type === 'string') {
        return type;
      }

      switch (type) {
        case exports.Fragment:
          return 'Fragment';

        case REACT_PORTAL_TYPE:
          return 'Portal';

        case exports.Profiler:
          return 'Profiler';

        case exports.StrictMode:
          return 'StrictMode';

        case exports.Suspense:
          return 'Suspense';

        case REACT_SUSPENSE_LIST_TYPE:
          return 'SuspenseList';
      }

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(type) === 'object') {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            var context = type;
            return getContextName(context) + '.Consumer';

          case REACT_PROVIDER_TYPE:
            var provider = type;
            return getContextName(provider._context) + '.Provider';

          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, 'ForwardRef');

          case REACT_MEMO_TYPE:
            return getComponentName(type.type);

          case REACT_BLOCK_TYPE:
            return getComponentName(type._render);

          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;

              try {
                return getComponentName(init(payload));
              } catch (x) {
                return null;
              }
            }
        }
      }

      return null;
    }

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
    {
      didWarnAboutStringRefs = {};
    }

    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.ref !== undefined;
    }

    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.key !== undefined;
    }

    function defineKeyPropWarningGetter(props, displayName) {
      var warnAboutAccessingKey = function warnAboutAccessingKey() {
        {
          if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;
            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        }
      };

      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, 'key', {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }

    function defineRefPropWarningGetter(props, displayName) {
      var warnAboutAccessingRef = function warnAboutAccessingRef() {
        {
          if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;
            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        }
      };

      warnAboutAccessingRef.isReactWarning = true;
      Object.defineProperty(props, 'ref', {
        get: warnAboutAccessingRef,
        configurable: true
      });
    }

    function warnIfStringRefCannotBeAutoConverted(config) {
      {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
          var componentName = getComponentName(ReactCurrentOwner.current.type);

          if (!didWarnAboutStringRefs[componentName]) {
            error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
            didWarnAboutStringRefs[componentName] = true;
          }
        }
      }
    }
    /**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, instanceof check
     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} props
     * @param {*} key
     * @param {string|object} ref
     * @param {*} owner
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @internal
     */


    var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,
        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,
        // Record the component responsible for creating this element.
        _owner: owner
      };
      {
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.

        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        }); // self and source are DEV only properties.

        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.

        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });

        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }
      return element;
    };
    /**
     * Create and return a new ReactElement of the given type.
     * See https://reactjs.org/docs/react-api.html#createelement
     */


    function createElement(type, config, children) {
      var propName; // Reserved names are extracted

      var props = {};
      var key = null;
      var ref = null;
      var self = null;
      var source = null;

      if (config != null) {
        if (hasValidRef(config)) {
          ref = config.ref;
          {
            warnIfStringRefCannotBeAutoConverted(config);
          }
        }

        if (hasValidKey(config)) {
          key = '' + config.key;
        }

        self = config.__self === undefined ? null : config.__self;
        source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.


      var childrenLength = arguments.length - 2;

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }

        {
          if (Object.freeze) {
            Object.freeze(childArray);
          }
        }
        props.children = childArray;
      } // Resolve default props


      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;

        for (propName in defaultProps) {
          if (props[propName] === undefined) {
            props[propName] = defaultProps[propName];
          }
        }
      }

      {
        if (key || ref) {
          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }

          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }
      }
      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }

    function cloneAndReplaceKey(oldElement, newKey) {
      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
      return newElement;
    }
    /**
     * Clone and return a new ReactElement using element as the starting point.
     * See https://reactjs.org/docs/react-api.html#cloneelement
     */


    function cloneElement(element, config, children) {
      if (!!(element === null || element === undefined)) {
        {
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
        }
      }

      var propName; // Original props are copied

      var props = _assign({}, element.props); // Reserved names are extracted


      var key = element.key;
      var ref = element.ref; // Self is preserved since the owner is preserved.

      var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
      // transpiler, and the original source is probably a better indicator of the
      // true owner.

      var source = element._source; // Owner will be preserved, unless ref is overridden

      var owner = element._owner;

      if (config != null) {
        if (hasValidRef(config)) {
          // Silently steal the ref from the parent.
          ref = config.ref;
          owner = ReactCurrentOwner.current;
        }

        if (hasValidKey(config)) {
          key = '' + config.key;
        } // Remaining properties override existing props


        var defaultProps;

        if (element.type && element.type.defaultProps) {
          defaultProps = element.type.defaultProps;
        }

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            if (config[propName] === undefined && defaultProps !== undefined) {
              // Resolve default props
              props[propName] = defaultProps[propName];
            } else {
              props[propName] = config[propName];
            }
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.


      var childrenLength = arguments.length - 2;

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }

        props.children = childArray;
      }

      return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    /**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a ReactElement.
     * @final
     */


    function isValidElement(object) {
      return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';
    /**
     * Escape and wrap key so it is safe to use as a reactid
     *
     * @param {string} key to be escaped.
     * @return {string} the escaped key.
     */

    function escape(key) {
      var escapeRegex = /[=:]/g;
      var escaperLookup = {
        '=': '=0',
        ':': '=2'
      };
      var escapedString = key.replace(escapeRegex, function (match) {
        return escaperLookup[match];
      });
      return '$' + escapedString;
    }
    /**
     * TODO: Test that a single child and an array with one item have the same key
     * pattern.
     */


    var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = /\/+/g;

    function escapeUserProvidedKey(text) {
      return text.replace(userProvidedKeyEscapeRegex, '$&/');
    }
    /**
     * Generate a key string that identifies a element within a set.
     *
     * @param {*} element A element that could contain a manual key.
     * @param {number} index Index that is used if a manual key is not provided.
     * @return {string}
     */


    function getElementKey(element, index) {
      // Do some typechecking here since we call this blindly. We want to ensure
      // that we don't block potential future ES APIs.
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(element) === 'object' && element !== null && element.key != null) {
        // Explicit key
        return escape('' + element.key);
      } // Implicit key determined by the index in the set


      return index.toString(36);
    }

    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(children);

      if (type === 'undefined' || type === 'boolean') {
        // All of the above are perceived as null.
        children = null;
      }

      var invokeCallback = false;

      if (children === null) {
        invokeCallback = true;
      } else {
        switch (type) {
          case 'string':
          case 'number':
            invokeCallback = true;
            break;

          case 'object':
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
            }

        }
      }

      if (invokeCallback) {
        var _child = children;
        var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
        // so that it's consistent if the number of children grows:

        var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

        if (Array.isArray(mappedChild)) {
          var escapedChildKey = '';

          if (childKey != null) {
            escapedChildKey = escapeUserProvidedKey(childKey) + '/';
          }

          mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
            return c;
          });
        } else if (mappedChild != null) {
          if (isValidElement(mappedChild)) {
            mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
            escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
          }

          array.push(mappedChild);
        }

        return 1;
      }

      var child;
      var nextName;
      var subtreeCount = 0; // Count of children found in the current subtree.

      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          nextName = nextNamePrefix + getElementKey(child, i);
          subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
        }
      } else {
        var iteratorFn = getIteratorFn(children);

        if (typeof iteratorFn === 'function') {
          var iterableChildren = children;
          {
            // Warn about using Maps as children
            if (iteratorFn === iterableChildren.entries) {
              if (!didWarnAboutMaps) {
                warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
              }

              didWarnAboutMaps = true;
            }
          }
          var iterator = iteratorFn.call(iterableChildren);
          var step;
          var ii = 0;

          while (!(step = iterator.next()).done) {
            child = step.value;
            nextName = nextNamePrefix + getElementKey(child, ii++);
            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
          }
        } else if (type === 'object') {
          var childrenString = '' + children;
          {
            {
              throw Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
        }
      }

      return subtreeCount;
    }
    /**
     * Maps children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenmap
     *
     * The provided mapFunction(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func The map function.
     * @param {*} context Context for mapFunction.
     * @return {object} Object containing the ordered map of results.
     */


    function mapChildren(children, func, context) {
      if (children == null) {
        return children;
      }

      var result = [];
      var count = 0;
      mapIntoArray(children, result, '', '', function (child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    /**
     * Count the number of children that are typically specified as
     * `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrencount
     *
     * @param {?*} children Children tree container.
     * @return {number} The number of children.
     */


    function countChildren(children) {
      var n = 0;
      mapChildren(children, function () {
        n++; // Don't return anything
      });
      return n;
    }
    /**
     * Iterates through children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
     *
     * The provided forEachFunc(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} forEachFunc
     * @param {*} forEachContext Context for forEachContext.
     */


    function forEachChildren(children, forEachFunc, forEachContext) {
      mapChildren(children, function () {
        forEachFunc.apply(this, arguments); // Don't return anything.
      }, forEachContext);
    }
    /**
     * Flatten a children object (typically specified as `props.children`) and
     * return an array with appropriately re-keyed children.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
     */


    function toArray(children) {
      return mapChildren(children, function (child) {
        return child;
      }) || [];
    }
    /**
     * Returns the first child in a collection of children and verifies that there
     * is only one child in the collection.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenonly
     *
     * The current implementation of this function assumes that a single child gets
     * passed without a wrapper, but the purpose of this helper function is to
     * abstract away the particular structure of children.
     *
     * @param {?object} children Child collection structure.
     * @return {ReactElement} The first and only `ReactElement` contained in the
     * structure.
     */


    function onlyChild(children) {
      if (!isValidElement(children)) {
        {
          throw Error("React.Children.only expected to receive a single React element child.");
        }
      }

      return children;
    }

    function createContext(defaultValue, calculateChangedBits) {
      if (calculateChangedBits === undefined) {
        calculateChangedBits = null;
      } else {
        {
          if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
            error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
          }
        }
      }

      var context = {
        $$typeof: REACT_CONTEXT_TYPE,
        _calculateChangedBits: calculateChangedBits,
        // As a workaround to support multiple concurrent renderers, we categorize
        // some renderers as primary and others as secondary. We only expect
        // there to be two concurrent renderers at most: React Native (primary) and
        // Fabric (secondary); React DOM (primary) and React ART (secondary).
        // Secondary renderers store their context values on separate fields.
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        // Used to track how many concurrent renderers this context currently
        // supports within in a single renderer. Such as parallel server rendering.
        _threadCount: 0,
        // These are circular
        Provider: null,
        Consumer: null
      };
      context.Provider = {
        $$typeof: REACT_PROVIDER_TYPE,
        _context: context
      };
      var hasWarnedAboutUsingNestedContextConsumers = false;
      var hasWarnedAboutUsingConsumerProvider = false;
      var hasWarnedAboutDisplayNameOnConsumer = false;
      {
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
          $$typeof: REACT_CONTEXT_TYPE,
          _context: context,
          _calculateChangedBits: context._calculateChangedBits
        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

        Object.defineProperties(Consumer, {
          Provider: {
            get: function get() {
              if (!hasWarnedAboutUsingConsumerProvider) {
                hasWarnedAboutUsingConsumerProvider = true;
                error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
              }

              return context.Provider;
            },
            set: function set(_Provider) {
              context.Provider = _Provider;
            }
          },
          _currentValue: {
            get: function get() {
              return context._currentValue;
            },
            set: function set(_currentValue) {
              context._currentValue = _currentValue;
            }
          },
          _currentValue2: {
            get: function get() {
              return context._currentValue2;
            },
            set: function set(_currentValue2) {
              context._currentValue2 = _currentValue2;
            }
          },
          _threadCount: {
            get: function get() {
              return context._threadCount;
            },
            set: function set(_threadCount) {
              context._threadCount = _threadCount;
            }
          },
          Consumer: {
            get: function get() {
              if (!hasWarnedAboutUsingNestedContextConsumers) {
                hasWarnedAboutUsingNestedContextConsumers = true;
                error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
              }

              return context.Consumer;
            }
          },
          displayName: {
            get: function get() {
              return context.displayName;
            },
            set: function set(displayName) {
              if (!hasWarnedAboutDisplayNameOnConsumer) {
                warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
                hasWarnedAboutDisplayNameOnConsumer = true;
              }
            }
          }
        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

        context.Consumer = Consumer;
      }
      {
        context._currentRenderer = null;
        context._currentRenderer2 = null;
      }
      return context;
    }

    var Uninitialized = -1;
    var Pending = 0;
    var Resolved = 1;
    var Rejected = 2;

    function lazyInitializer(payload) {
      if (payload._status === Uninitialized) {
        var ctor = payload._result;
        var thenable = ctor(); // Transition to the next state.

        var pending = payload;
        pending._status = Pending;
        pending._result = thenable;
        thenable.then(function (moduleObject) {
          if (payload._status === Pending) {
            var defaultExport = moduleObject["default"];
            {
              if (defaultExport === undefined) {
                error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
                'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
              }
            } // Transition to the next state.

            var resolved = payload;
            resolved._status = Resolved;
            resolved._result = defaultExport;
          }
        }, function (error) {
          if (payload._status === Pending) {
            // Transition to the next state.
            var rejected = payload;
            rejected._status = Rejected;
            rejected._result = error;
          }
        });
      }

      if (payload._status === Resolved) {
        return payload._result;
      } else {
        throw payload._result;
      }
    }

    function lazy(ctor) {
      var payload = {
        // We use these fields to store the result.
        _status: -1,
        _result: ctor
      };
      var lazyType = {
        $$typeof: REACT_LAZY_TYPE,
        _payload: payload,
        _init: lazyInitializer
      };
      {
        // In production, this would just set it on the object.
        var defaultProps;
        var propTypes; // $FlowFixMe

        Object.defineProperties(lazyType, {
          defaultProps: {
            configurable: true,
            get: function get() {
              return defaultProps;
            },
            set: function set(newDefaultProps) {
              error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
              defaultProps = newDefaultProps; // Match production behavior more closely:
              // $FlowFixMe

              Object.defineProperty(lazyType, 'defaultProps', {
                enumerable: true
              });
            }
          },
          propTypes: {
            configurable: true,
            get: function get() {
              return propTypes;
            },
            set: function set(newPropTypes) {
              error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
              propTypes = newPropTypes; // Match production behavior more closely:
              // $FlowFixMe

              Object.defineProperty(lazyType, 'propTypes', {
                enumerable: true
              });
            }
          }
        });
      }
      return lazyType;
    }

    function forwardRef(render) {
      {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
          error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
        } else if (typeof render !== 'function') {
          error('forwardRef requires a render function but was given %s.', render === null ? 'null' : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(render));
        } else {
          if (render.length !== 0 && render.length !== 2) {
            error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
          }
        }

        if (render != null) {
          if (render.defaultProps != null || render.propTypes != null) {
            error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
          }
        }
      }
      var elementType = {
        $$typeof: REACT_FORWARD_REF_TYPE,
        render: render
      };
      {
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
          enumerable: false,
          configurable: true,
          get: function get() {
            return ownName;
          },
          set: function set(name) {
            ownName = name;

            if (render.displayName == null) {
              render.displayName = name;
            }
          }
        });
      }
      return elementType;
    } // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.


    var enableScopeAPI = false; // Experimental Create Event Handle API.

    function isValidElementType(type) {
      if (typeof type === 'string' || typeof type === 'function') {
        return true;
      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


      if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
        return true;
      }

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(type) === 'object' && type !== null) {
        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
          return true;
        }
      }

      return false;
    }

    function memo(type, compare) {
      {
        if (!isValidElementType(type)) {
          error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(type));
        }
      }
      var elementType = {
        $$typeof: REACT_MEMO_TYPE,
        type: type,
        compare: compare === undefined ? null : compare
      };
      {
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
          enumerable: false,
          configurable: true,
          get: function get() {
            return ownName;
          },
          set: function set(name) {
            ownName = name;

            if (type.displayName == null) {
              type.displayName = name;
            }
          }
        });
      }
      return elementType;
    }

    function resolveDispatcher() {
      var dispatcher = ReactCurrentDispatcher.current;

      if (!(dispatcher !== null)) {
        {
          throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
        }
      }

      return dispatcher;
    }

    function useContext(Context, unstable_observedBits) {
      var dispatcher = resolveDispatcher();
      {
        if (unstable_observedBits !== undefined) {
          error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
        } // TODO: add a more generic warning for invalid values.


        if (Context._context !== undefined) {
          var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
          // and nobody should be using this in existing code.

          if (realContext.Consumer === Context) {
            error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
          } else if (realContext.Provider === Context) {
            error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
          }
        }
      }
      return dispatcher.useContext(Context, unstable_observedBits);
    }

    function useState(initialState) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useState(initialState);
    }

    function useReducer(reducer, initialArg, init) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useReducer(reducer, initialArg, init);
    }

    function useRef(initialValue) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useRef(initialValue);
    }

    function useEffect(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useEffect(create, deps);
    }

    function useLayoutEffect(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useLayoutEffect(create, deps);
    }

    function useCallback(callback, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useCallback(callback, deps);
    }

    function useMemo(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useMemo(create, deps);
    }

    function useImperativeHandle(ref, create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useImperativeHandle(ref, create, deps);
    }

    function useDebugValue(value, formatterFn) {
      {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
      }
    } // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.


    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;

    function disabledLog() {}

    disabledLog.__reactDisabledLog = true;

    function disableLogs() {
      {
        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props
          });
          /* eslint-enable react-internal/no-production-logging */
        }

        disabledDepth++;
      }
    }

    function reenableLogs() {
      {
        disabledDepth--;

        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          var props = {
            configurable: true,
            enumerable: true,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            log: _assign({}, props, {
              value: prevLog
            }),
            info: _assign({}, props, {
              value: prevInfo
            }),
            warn: _assign({}, props, {
              value: prevWarn
            }),
            error: _assign({}, props, {
              value: prevError
            }),
            group: _assign({}, props, {
              value: prevGroup
            }),
            groupCollapsed: _assign({}, props, {
              value: prevGroupCollapsed
            }),
            groupEnd: _assign({}, props, {
              value: prevGroupEnd
            })
          });
          /* eslint-enable react-internal/no-production-logging */
        }

        if (disabledDepth < 0) {
          error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
        }
      }
    }

    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;

    function describeBuiltInComponentFrame(name, source, ownerFn) {
      {
        if (prefix === undefined) {
          // Extract the VM specific prefix used by each line.
          try {
            throw Error();
          } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
          }
        } // We use the prefix to ensure our stacks line up with native stack frames.


        return '\n' + prefix + name;
      }
    }

    var reentry = false;
    var componentFrameCache;
    {
      var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
      componentFrameCache = new PossiblyWeakMap();
    }

    function describeNativeComponentFrame(fn, construct) {
      // If something asked for a stack inside a fake render, it should get ignored.
      if (!fn || reentry) {
        return '';
      }

      {
        var frame = componentFrameCache.get(fn);

        if (frame !== undefined) {
          return frame;
        }
      }
      var control;
      reentry = true;
      var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

      Error.prepareStackTrace = undefined;
      var previousDispatcher;
      {
        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.

        ReactCurrentDispatcher$1.current = null;
        disableLogs();
      }

      try {
        // This should throw.
        if (construct) {
          // Something should be setting the props in the constructor.
          var Fake = function Fake() {
            throw Error();
          }; // $FlowFixMe


          Object.defineProperty(Fake.prototype, 'props', {
            set: function set() {
              // We use a throwing setter instead of frozen or non-writable props
              // because that won't throw in a non-strict mode function.
              throw Error();
            }
          });

          if ((typeof Reflect === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(Reflect)) === 'object' && Reflect.construct) {
            // We construct a different control for this case to include any extra
            // frames added by the construct call.
            try {
              Reflect.construct(Fake, []);
            } catch (x) {
              control = x;
            }

            Reflect.construct(fn, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (x) {
              control = x;
            }

            fn.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            control = x;
          }

          fn();
        }
      } catch (sample) {
        // This is inlined manually because closure doesn't do it for us.
        if (sample && control && typeof sample.stack === 'string') {
          // This extracts the first frame from the sample that isn't also in the control.
          // Skipping one frame that we assume is the frame that calls the two.
          var sampleLines = sample.stack.split('\n');
          var controlLines = control.stack.split('\n');
          var s = sampleLines.length - 1;
          var c = controlLines.length - 1;

          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
            // We expect at least one stack frame to be shared.
            // Typically this will be the root most one. However, stack frames may be
            // cut off due to maximum stack limits. In this case, one maybe cut off
            // earlier than the other. We assume that the sample is longer or the same
            // and there for cut off earlier. So we should find the root most frame in
            // the sample somewhere in the control.
            c--;
          }

          for (; s >= 1 && c >= 0; s--, c--) {
            // Next we find the first one that isn't the same which should be the
            // frame that called our sample function and the control.
            if (sampleLines[s] !== controlLines[c]) {
              // In V8, the first line is describing the message but other VMs don't.
              // If we're about to return the first line, and the control is also on the same
              // line, that's a pretty good indicator that our sample threw at same line as
              // the control. I.e. before we entered the sample frame. So we ignore this result.
              // This can happen if you passed a class to function component, or non-function.
              if (s !== 1 || c !== 1) {
                do {
                  s--;
                  c--; // We may still have similar intermediate frames from the construct call.
                  // The next one that isn't the same should be our match though.

                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
                    // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                    var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                    {
                      if (typeof fn === 'function') {
                        componentFrameCache.set(fn, _frame);
                      }
                    } // Return the line we found.

                    return _frame;
                  }
                } while (s >= 1 && c >= 0);
              }

              break;
            }
          }
        }
      } finally {
        reentry = false;
        {
          ReactCurrentDispatcher$1.current = previousDispatcher;
          reenableLogs();
        }
        Error.prepareStackTrace = previousPrepareStackTrace;
      } // Fallback to just using the name if we couldn't make it throw.


      var name = fn ? fn.displayName || fn.name : '';
      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
      {
        if (typeof fn === 'function') {
          componentFrameCache.set(fn, syntheticFrame);
        }
      }
      return syntheticFrame;
    }

    function describeFunctionComponentFrame(fn, source, ownerFn) {
      {
        return describeNativeComponentFrame(fn, false);
      }
    }

    function shouldConstruct(Component) {
      var prototype = Component.prototype;
      return !!(prototype && prototype.isReactComponent);
    }

    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
      if (type == null) {
        return '';
      }

      if (typeof type === 'function') {
        {
          return describeNativeComponentFrame(type, shouldConstruct(type));
        }
      }

      if (typeof type === 'string') {
        return describeBuiltInComponentFrame(type);
      }

      switch (type) {
        case exports.Suspense:
          return describeBuiltInComponentFrame('Suspense');

        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame('SuspenseList');
      }

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(type) === 'object') {
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return describeFunctionComponentFrame(type.render);

          case REACT_MEMO_TYPE:
            // Memo may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

          case REACT_BLOCK_TYPE:
            return describeFunctionComponentFrame(type._render);

          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;

              try {
                // Lazy may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {}
            }
        }
      }

      return '';
    }

    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

    function setCurrentlyValidatingElement(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else {
          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
        }
      }
    }

    function checkPropTypes(typeSpecs, values, location, componentName, element) {
      {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(Object.prototype.hasOwnProperty);

        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.

            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(typeSpecs[typeSpecName]) + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                err.name = 'Invariant Violation';
                throw err;
              }

              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
              error$1 = ex;
            }

            if (error$1 && !(error$1 instanceof Error)) {
              setCurrentlyValidatingElement(element);
              error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(error$1));
              setCurrentlyValidatingElement(null);
            }

            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error$1.message] = true;
              setCurrentlyValidatingElement(element);
              error('Failed %s type: %s', location, error$1.message);
              setCurrentlyValidatingElement(null);
            }
          }
        }
      }
    }

    function setCurrentlyValidatingElement$1(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          setExtraStackFrame(stack);
        } else {
          setExtraStackFrame(null);
        }
      }
    }

    var propTypesMisspellWarningShown;
    {
      propTypesMisspellWarningShown = false;
    }

    function getDeclarationErrorAddendum() {
      if (ReactCurrentOwner.current) {
        var name = getComponentName(ReactCurrentOwner.current.type);

        if (name) {
          return '\n\nCheck the render method of `' + name + '`.';
        }
      }

      return '';
    }

    function getSourceInfoErrorAddendum(source) {
      if (source !== undefined) {
        var fileName = source.fileName.replace(/^.*[\\\/]/, '');
        var lineNumber = source.lineNumber;
        return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
      }

      return '';
    }

    function getSourceInfoErrorAddendumForProps(elementProps) {
      if (elementProps !== null && elementProps !== undefined) {
        return getSourceInfoErrorAddendum(elementProps.__source);
      }

      return '';
    }
    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */


    var ownerHasKeyUseWarning = {};

    function getCurrentComponentErrorInfo(parentType) {
      var info = getDeclarationErrorAddendum();

      if (!info) {
        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

        if (parentName) {
          info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
      }

      return info;
    }
    /**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */


    function validateExplicitKey(element, parentType) {
      if (!element._store || element._store.validated || element.key != null) {
        return;
      }

      element._store.validated = true;
      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
        return;
      }

      ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
      // property, it may be the creator of the child that's responsible for
      // assigning it a key.

      var childOwner = '';

      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
        // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
      }

      {
        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
      }
    }
    /**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */


    function validateChildKeys(node, parentType) {
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(node) !== 'object') {
        return;
      }

      if (Array.isArray(node)) {
        for (var i = 0; i < node.length; i++) {
          var child = node[i];

          if (isValidElement(child)) {
            validateExplicitKey(child, parentType);
          }
        }
      } else if (isValidElement(node)) {
        // This element was passed in a valid location.
        if (node._store) {
          node._store.validated = true;
        }
      } else if (node) {
        var iteratorFn = getIteratorFn(node);

        if (typeof iteratorFn === 'function') {
          // Entry iterators used to provide implicit keys,
          // but now we print a separate warning for them later.
          if (iteratorFn !== node.entries) {
            var iterator = iteratorFn.call(node);
            var step;

            while (!(step = iterator.next()).done) {
              if (isValidElement(step.value)) {
                validateExplicitKey(step.value, parentType);
              }
            }
          }
        }
      }
    }
    /**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */


    function validatePropTypes(element) {
      {
        var type = element.type;

        if (type === null || type === undefined || typeof type === 'string') {
          return;
        }

        var propTypes;

        if (typeof type === 'function') {
          propTypes = type.propTypes;
        } else if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(type) === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) {
          propTypes = type.propTypes;
        } else {
          return;
        }

        if (propTypes) {
          // Intentionally inside to avoid triggering lazy initializers:
          var name = getComponentName(type);
          checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
          propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

          var _name = getComponentName(type);

          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }

        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
        }
      }
    }
    /**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */


    function validateFragmentProps(fragment) {
      {
        var keys = Object.keys(fragment.props);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];

          if (key !== 'children' && key !== 'key') {
            setCurrentlyValidatingElement$1(fragment);
            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
            setCurrentlyValidatingElement$1(null);
            break;
          }
        }

        if (fragment.ref !== null) {
          setCurrentlyValidatingElement$1(fragment);
          error('Invalid attribute `ref` supplied to `React.Fragment`.');
          setCurrentlyValidatingElement$1(null);
        }
      }
    }

    function createElementWithValidation(type, props, children) {
      var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
      // succeed and there will likely be errors in render.

      if (!validType) {
        var info = '';

        if (type === undefined || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(type) === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
        }

        var sourceInfo = getSourceInfoErrorAddendumForProps(props);

        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        var typeString;

        if (type === null) {
          typeString = 'null';
        } else if (Array.isArray(type)) {
          typeString = 'array';
        } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
          typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
          info = ' Did you accidentally export a JSX literal instead of a component?';
        } else {
          typeString = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(type);
        }

        {
          error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
        }
      }

      var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
      // TODO: Drop this when these are no longer allowed as the type argument.

      if (element == null) {
        return element;
      } // Skip key warning if the type isn't valid since our key validation logic
      // doesn't expect a non-string/function type and can throw confusing errors.
      // We don't want exception behavior to differ between dev and prod.
      // (Rendering will throw with a helpful message and as soon as the type is
      // fixed, the key warnings will appear.)


      if (validType) {
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], type);
        }
      }

      if (type === exports.Fragment) {
        validateFragmentProps(element);
      } else {
        validatePropTypes(element);
      }

      return element;
    }

    var didWarnAboutDeprecatedCreateFactory = false;

    function createFactoryWithValidation(type) {
      var validatedFactory = createElementWithValidation.bind(null, type);
      validatedFactory.type = type;
      {
        if (!didWarnAboutDeprecatedCreateFactory) {
          didWarnAboutDeprecatedCreateFactory = true;
          warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
        } // Legacy hook: remove it


        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function get() {
            warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
      return validatedFactory;
    }

    function cloneElementWithValidation(element, props, children) {
      var newElement = cloneElement.apply(this, arguments);

      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], newElement.type);
      }

      validatePropTypes(newElement);
      return newElement;
    }

    {
      try {
        var frozenObject = Object.freeze({});
        /* eslint-disable no-new */

        new Map([[frozenObject, null]]);
        new Set([frozenObject]);
        /* eslint-enable no-new */
      } catch (e) {}
    }
    var createElement$1 = createElementWithValidation;
    var cloneElement$1 = cloneElementWithValidation;
    var createFactory = createFactoryWithValidation;
    var Children = {
      map: mapChildren,
      forEach: forEachChildren,
      count: countChildren,
      toArray: toArray,
      only: onlyChild
    };
    exports.Children = Children;
    exports.Component = Component;
    exports.PureComponent = PureComponent;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
    exports.cloneElement = cloneElement$1;
    exports.createContext = createContext;
    exports.createElement = createElement$1;
    exports.createFactory = createFactory;
    exports.createRef = createRef;
    exports.forwardRef = forwardRef;
    exports.isValidElement = isValidElement;
    exports.lazy = lazy;
    exports.memo = memo;
    exports.useCallback = useCallback;
    exports.useContext = useContext;
    exports.useDebugValue = useDebugValue;
    exports.useEffect = useEffect;
    exports.useImperativeHandle = useImperativeHandle;
    exports.useLayoutEffect = useLayoutEffect;
    exports.useMemo = useMemo;
    exports.useReducer = useReducer;
    exports.useRef = useRef;
    exports.useState = useState;
    exports.version = ReactVersion;
  })();
}

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL2J1aWxkL3BvbHlmaWxscy9vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/ZDdmYiIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS93ZWJwYWNrL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9hbXAtY29udGV4dC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9hbXAudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvc2lkZS1lZmZlY3QudHN4Iiwid2VicGFjazovL19OX0UvLi4vLi4vcGFnZXMvX2Vycm9yLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIl9hcnJheUxpa2VUb0FycmF5IiwiYXJyIiwibGVuIiwibGVuZ3RoIiwiaSIsImFycjIiLCJBcnJheSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheUxpa2VUb0FycmF5IiwicmVxdWlyZSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsImlzQXJyYXkiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwic2VsZiIsIlJlZmVyZW5jZUVycm9yIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJ2YWx1ZSIsIl9nZXRQcm90b3R5cGVPZiIsIm8iLCJzZXRQcm90b3R5cGVPZiIsImdldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX19lc01vZHVsZSIsIl9pdGVyYWJsZVRvQXJyYXkiLCJpdGVyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJmcm9tIiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiX3R5cGVvZiIsImFzc2VydFRoaXNJbml0aWFsaXplZCIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiY2FsbCIsIl9zZXRQcm90b3R5cGVPZiIsInAiLCJhcnJheVdpdGhvdXRIb2xlcyIsIml0ZXJhYmxlVG9BcnJheSIsInVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5Iiwibm9uSXRlcmFibGVTcHJlYWQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJtaW5MZW4iLCJuIiwidG9TdHJpbmciLCJzbGljZSIsIm5hbWUiLCJ0ZXN0IiwiYXNzaWduIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiY2hpbGRyZW4iLCJnZXQiLCJsIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX19uY2N3cGNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwidGhyZXciLCJhYiIsIl9fZGlybmFtZSIsIkFtcFN0YXRlQ29udGV4dCIsIlJlYWN0IiwiYW1wRmlyc3QiLCJoeWJyaWQiLCJoYXNRdWVyeSIsImlzSW5BbXBNb2RlIiwiSGVhZE1hbmFnZXJDb250ZXh0IiwiaW5BbXBNb2RlIiwiaGVhZCIsImNoaWxkIiwibGlzdCIsImZyYWdtZW50TGlzdCIsIk1FVEFUWVBFUyIsImtleXMiLCJ0YWdzIiwibWV0YVR5cGVzIiwibWV0YUNhdGVnb3JpZXMiLCJoIiwiaXNVbmlxdWUiLCJoYXNLZXkiLCJtZXRhdHlwZSIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsImhlYWRFbGVtZW50cyIsImhlYWRFbGVtZW50Q2hpbGRyZW4iLCJoZWFkRWxlbWVudCIsImRlZmF1bHRIZWFkIiwidW5pcXVlIiwiYyIsInByb2Nlc3MiLCJhbXBTdGF0ZSIsImhlYWRNYW5hZ2VyIiwiSGVhZCIsImlzU2VydmVyIiwiX2hhc0hlYWRNYW5hZ2VyIiwiZW1pdENoYW5nZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50RGlkVXBkYXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJzdGF0dXNDb2RlcyIsInN0YXR1c0NvZGUiLCJyZXMiLCJlcnIiLCJ0aXRsZSIsInN0eWxlcyIsIl9faHRtbCIsIkVycm9yIiwiZXJyb3IiLCJjb2xvciIsImJhY2tncm91bmQiLCJmb250RmFtaWx5IiwiaGVpZ2h0IiwidGV4dEFsaWduIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJkZXNjIiwibGluZUhlaWdodCIsInZlcnRpY2FsQWxpZ24iLCJoMSIsImJvcmRlclJpZ2h0IiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiaDIiLCJfYXNzaWduIiwiUmVhY3RWZXJzaW9uIiwiUkVBQ1RfRUxFTUVOVF9UWVBFIiwiUkVBQ1RfUE9SVEFMX1RZUEUiLCJGcmFnbWVudCIsIlN0cmljdE1vZGUiLCJQcm9maWxlciIsIlJFQUNUX1BST1ZJREVSX1RZUEUiLCJSRUFDVF9DT05URVhUX1RZUEUiLCJSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIiwiU3VzcGVuc2UiLCJSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUiLCJSRUFDVF9NRU1PX1RZUEUiLCJSRUFDVF9MQVpZX1RZUEUiLCJSRUFDVF9CTE9DS19UWVBFIiwiUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUiLCJSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIiwiUkVBQ1RfU0NPUEVfVFlQRSIsIlJFQUNUX09QQVFVRV9JRF9UWVBFIiwiUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUiLCJSRUFDVF9PRkZTQ1JFRU5fVFlQRSIsIlJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSIsInN5bWJvbEZvciIsIk1BWUJFX0lURVJBVE9SX1NZTUJPTCIsIkZBVVhfSVRFUkFUT1JfU1lNQk9MIiwiZ2V0SXRlcmF0b3JGbiIsIm1heWJlSXRlcmFibGUiLCJtYXliZUl0ZXJhdG9yIiwiUmVhY3RDdXJyZW50RGlzcGF0Y2hlciIsImN1cnJlbnQiLCJSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyIsInRyYW5zaXRpb24iLCJSZWFjdEN1cnJlbnRPd25lciIsIlJlYWN0RGVidWdDdXJyZW50RnJhbWUiLCJjdXJyZW50RXh0cmFTdGFja0ZyYW1lIiwic2V0RXh0cmFTdGFja0ZyYW1lIiwic3RhY2siLCJnZXRDdXJyZW50U3RhY2siLCJnZXRTdGFja0FkZGVuZHVtIiwiaW1wbCIsIklzU29tZVJlbmRlcmVyQWN0aW5nIiwiUmVhY3RTaGFyZWRJbnRlcm5hbHMiLCJ3YXJuIiwiZm9ybWF0IiwiX2xlbiIsImFyZ3VtZW50cyIsImFyZ3MiLCJfa2V5IiwicHJpbnRXYXJuaW5nIiwiX2xlbjIiLCJfa2V5MiIsImxldmVsIiwiY29uY2F0IiwiYXJnc1dpdGhGb3JtYXQiLCJtYXAiLCJpdGVtIiwidW5zaGlmdCIsIkZ1bmN0aW9uIiwiYXBwbHkiLCJjb25zb2xlIiwiZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50Iiwid2Fybk5vb3AiLCJwdWJsaWNJbnN0YW5jZSIsImNhbGxlck5hbWUiLCJfY29uc3RydWN0b3IiLCJjb21wb25lbnROYW1lIiwiZGlzcGxheU5hbWUiLCJ3YXJuaW5nS2V5IiwiUmVhY3ROb29wVXBkYXRlUXVldWUiLCJpc01vdW50ZWQiLCJlbnF1ZXVlRm9yY2VVcGRhdGUiLCJjYWxsYmFjayIsImVucXVldWVSZXBsYWNlU3RhdGUiLCJjb21wbGV0ZVN0YXRlIiwiZW5xdWV1ZVNldFN0YXRlIiwicGFydGlhbFN0YXRlIiwiZW1wdHlPYmplY3QiLCJmcmVlemUiLCJjb250ZXh0IiwidXBkYXRlciIsInJlZnMiLCJpc1JlYWN0Q29tcG9uZW50Iiwic2V0U3RhdGUiLCJmb3JjZVVwZGF0ZSIsImRlcHJlY2F0ZWRBUElzIiwicmVwbGFjZVN0YXRlIiwiZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nIiwibWV0aG9kTmFtZSIsImluZm8iLCJ1bmRlZmluZWQiLCJmbk5hbWUiLCJoYXNPd25Qcm9wZXJ0eSIsIkNvbXBvbmVudER1bW15IiwiUHVyZUNvbXBvbmVudCIsInB1cmVDb21wb25lbnRQcm90b3R5cGUiLCJpc1B1cmVSZWFjdENvbXBvbmVudCIsImNyZWF0ZVJlZiIsInJlZk9iamVjdCIsInNlYWwiLCJnZXRXcmFwcGVkTmFtZSIsIm91dGVyVHlwZSIsImlubmVyVHlwZSIsIndyYXBwZXJOYW1lIiwiZnVuY3Rpb25OYW1lIiwiZ2V0Q29udGV4dE5hbWUiLCJ0eXBlIiwiZ2V0Q29tcG9uZW50TmFtZSIsInRhZyIsIiQkdHlwZW9mIiwicHJvdmlkZXIiLCJfY29udGV4dCIsIl9yZW5kZXIiLCJsYXp5Q29tcG9uZW50IiwicGF5bG9hZCIsIl9wYXlsb2FkIiwiaW5pdCIsIl9pbml0IiwieCIsIlJFU0VSVkVEX1BST1BTIiwicmVmIiwiX19zZWxmIiwiX19zb3VyY2UiLCJzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biIsInNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duIiwiZGlkV2FybkFib3V0U3RyaW5nUmVmcyIsImhhc1ZhbGlkUmVmIiwiY29uZmlnIiwiZ2V0dGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaXNSZWFjdFdhcm5pbmciLCJoYXNWYWxpZEtleSIsImRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyIiwid2FybkFib3V0QWNjZXNzaW5nS2V5IiwiZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIiLCJ3YXJuQWJvdXRBY2Nlc3NpbmdSZWYiLCJ3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQiLCJzdGF0ZU5vZGUiLCJSZWFjdEVsZW1lbnQiLCJzb3VyY2UiLCJvd25lciIsImVsZW1lbnQiLCJfb3duZXIiLCJfc3RvcmUiLCJjcmVhdGVFbGVtZW50IiwicHJvcE5hbWUiLCJjaGlsZHJlbkxlbmd0aCIsImNoaWxkQXJyYXkiLCJkZWZhdWx0UHJvcHMiLCJjbG9uZUFuZFJlcGxhY2VLZXkiLCJvbGRFbGVtZW50IiwibmV3S2V5IiwibmV3RWxlbWVudCIsIl9zZWxmIiwiX3NvdXJjZSIsImNsb25lRWxlbWVudCIsImlzVmFsaWRFbGVtZW50Iiwib2JqZWN0IiwiU0VQQVJBVE9SIiwiU1VCU0VQQVJBVE9SIiwiZXNjYXBlIiwiZXNjYXBlUmVnZXgiLCJlc2NhcGVyTG9va3VwIiwiZXNjYXBlZFN0cmluZyIsInJlcGxhY2UiLCJtYXRjaCIsImRpZFdhcm5BYm91dE1hcHMiLCJ1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCIsImVzY2FwZVVzZXJQcm92aWRlZEtleSIsInRleHQiLCJnZXRFbGVtZW50S2V5IiwiaW5kZXgiLCJtYXBJbnRvQXJyYXkiLCJhcnJheSIsImVzY2FwZWRQcmVmaXgiLCJuYW1lU29GYXIiLCJpbnZva2VDYWxsYmFjayIsIl9jaGlsZCIsIm1hcHBlZENoaWxkIiwiY2hpbGRLZXkiLCJlc2NhcGVkQ2hpbGRLZXkiLCJwdXNoIiwibmV4dE5hbWUiLCJzdWJ0cmVlQ291bnQiLCJuZXh0TmFtZVByZWZpeCIsIml0ZXJhdG9yRm4iLCJpdGVyYWJsZUNoaWxkcmVuIiwiZW50cmllcyIsInN0ZXAiLCJpaSIsIm5leHQiLCJkb25lIiwiY2hpbGRyZW5TdHJpbmciLCJqb2luIiwibWFwQ2hpbGRyZW4iLCJmdW5jIiwicmVzdWx0IiwiY291bnQiLCJjb3VudENoaWxkcmVuIiwiZm9yRWFjaENoaWxkcmVuIiwiZm9yRWFjaEZ1bmMiLCJmb3JFYWNoQ29udGV4dCIsInRvQXJyYXkiLCJvbmx5Q2hpbGQiLCJjcmVhdGVDb250ZXh0IiwiZGVmYXVsdFZhbHVlIiwiY2FsY3VsYXRlQ2hhbmdlZEJpdHMiLCJfY2FsY3VsYXRlQ2hhbmdlZEJpdHMiLCJfY3VycmVudFZhbHVlIiwiX2N1cnJlbnRWYWx1ZTIiLCJfdGhyZWFkQ291bnQiLCJQcm92aWRlciIsIkNvbnN1bWVyIiwiaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMiLCJoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciIsImhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyIiwiZGVmaW5lUHJvcGVydGllcyIsInNldCIsIl9Qcm92aWRlciIsIl9jdXJyZW50UmVuZGVyZXIiLCJfY3VycmVudFJlbmRlcmVyMiIsIlVuaW5pdGlhbGl6ZWQiLCJQZW5kaW5nIiwiUmVzb2x2ZWQiLCJSZWplY3RlZCIsImxhenlJbml0aWFsaXplciIsIl9zdGF0dXMiLCJjdG9yIiwiX3Jlc3VsdCIsInRoZW5hYmxlIiwicGVuZGluZyIsInRoZW4iLCJtb2R1bGVPYmplY3QiLCJkZWZhdWx0RXhwb3J0IiwicmVzb2x2ZWQiLCJyZWplY3RlZCIsImxhenkiLCJsYXp5VHlwZSIsInByb3BUeXBlcyIsIm5ld0RlZmF1bHRQcm9wcyIsIm5ld1Byb3BUeXBlcyIsImZvcndhcmRSZWYiLCJlbGVtZW50VHlwZSIsIm93bk5hbWUiLCJlbmFibGVTY29wZUFQSSIsImlzVmFsaWRFbGVtZW50VHlwZSIsIm1lbW8iLCJjb21wYXJlIiwicmVzb2x2ZURpc3BhdGNoZXIiLCJkaXNwYXRjaGVyIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJ1bnN0YWJsZV9vYnNlcnZlZEJpdHMiLCJyZWFsQ29udGV4dCIsInVzZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJpbml0aWFsQXJnIiwidXNlUmVmIiwiaW5pdGlhbFZhbHVlIiwidXNlRWZmZWN0IiwiZGVwcyIsInVzZUxheW91dEVmZmVjdCIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJ1c2VEZWJ1Z1ZhbHVlIiwiZm9ybWF0dGVyRm4iLCJkaXNhYmxlZERlcHRoIiwicHJldkxvZyIsInByZXZJbmZvIiwicHJldldhcm4iLCJwcmV2RXJyb3IiLCJwcmV2R3JvdXAiLCJwcmV2R3JvdXBDb2xsYXBzZWQiLCJwcmV2R3JvdXBFbmQiLCJkaXNhYmxlZExvZyIsIl9fcmVhY3REaXNhYmxlZExvZyIsImRpc2FibGVMb2dzIiwibG9nIiwiZ3JvdXAiLCJncm91cENvbGxhcHNlZCIsImdyb3VwRW5kIiwicmVlbmFibGVMb2dzIiwiUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxIiwicHJlZml4IiwiZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUiLCJvd25lckZuIiwidHJpbSIsInJlZW50cnkiLCJjb21wb25lbnRGcmFtZUNhY2hlIiwiUG9zc2libHlXZWFrTWFwIiwiV2Vha01hcCIsIk1hcCIsImRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUiLCJmbiIsImNvbnN0cnVjdCIsImZyYW1lIiwiY29udHJvbCIsInByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UiLCJwcmVwYXJlU3RhY2tUcmFjZSIsInByZXZpb3VzRGlzcGF0Y2hlciIsIkZha2UiLCJSZWZsZWN0Iiwic2FtcGxlIiwic2FtcGxlTGluZXMiLCJzcGxpdCIsImNvbnRyb2xMaW5lcyIsInMiLCJfZnJhbWUiLCJzeW50aGV0aWNGcmFtZSIsImRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSIsInNob3VsZENvbnN0cnVjdCIsImRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFViIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsIlJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSIsInNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50IiwiY2hlY2tQcm9wVHlwZXMiLCJ0eXBlU3BlY3MiLCJ2YWx1ZXMiLCJsb2NhdGlvbiIsImhhcyIsImJpbmQiLCJ0eXBlU3BlY05hbWUiLCJlcnJvciQxIiwiZXgiLCJtZXNzYWdlIiwic2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMSIsInByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duIiwiZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtIiwiZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0iLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzIiwiZWxlbWVudFByb3BzIiwib3duZXJIYXNLZXlVc2VXYXJuaW5nIiwiZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyIsInBhcmVudFR5cGUiLCJwYXJlbnROYW1lIiwidmFsaWRhdGVFeHBsaWNpdEtleSIsInZhbGlkYXRlZCIsImN1cnJlbnRDb21wb25lbnRFcnJvckluZm8iLCJjaGlsZE93bmVyIiwidmFsaWRhdGVDaGlsZEtleXMiLCJub2RlIiwidmFsaWRhdGVQcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJfbmFtZSIsImdldERlZmF1bHRQcm9wcyIsImlzUmVhY3RDbGFzc0FwcHJvdmVkIiwidmFsaWRhdGVGcmFnbWVudFByb3BzIiwiZnJhZ21lbnQiLCJjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24iLCJ2YWxpZFR5cGUiLCJzb3VyY2VJbmZvIiwidHlwZVN0cmluZyIsImRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5IiwiY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIiwidmFsaWRhdGVkRmFjdG9yeSIsImNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIiwiZnJvemVuT2JqZWN0IiwiU2V0IiwiZSIsImNyZWF0ZUVsZW1lbnQkMSIsImNsb25lRWxlbWVudCQxIiwiY3JlYXRlRmFjdG9yeSIsIkNoaWxkcmVuIiwiZm9yRWFjaCIsIm9ubHkiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsInZlcnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxpQkFBVCxDQUEyQkMsR0FBM0IsRUFBZ0NDLEdBQWhDLEVBQXFDO0FBQ25DLE1BQUlBLEdBQUcsSUFBSSxJQUFQLElBQWVBLEdBQUcsR0FBR0QsR0FBRyxDQUFDRSxNQUE3QixFQUFxQ0QsR0FBRyxHQUFHRCxHQUFHLENBQUNFLE1BQVY7O0FBRXJDLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQVIsRUFBV0MsSUFBSSxHQUFHLElBQUlDLEtBQUosQ0FBVUosR0FBVixDQUF2QixFQUF1Q0UsQ0FBQyxHQUFHRixHQUEzQyxFQUFnREUsQ0FBQyxFQUFqRCxFQUFxRDtBQUNuREMsUUFBSSxDQUFDRCxDQUFELENBQUosR0FBVUgsR0FBRyxDQUFDRyxDQUFELENBQWI7QUFDRDs7QUFFRCxTQUFPQyxJQUFQO0FBQ0Q7O0FBRURFLE1BQU0sQ0FBQ0MsT0FBUCxH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QXBaLFdBQU8sQ0FBQ3VaLE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0F2WixXQUFPLENBQUNrWixRQUFSLEdBQW1CQSxRQUFuQjtBQUNBbFosV0FBTyxDQUFDdWdCLE9BQVIsR0FBa0JqWCxZQUFsQjtBQUNHLEdBL3dFRDtBQWd4RUQsQzs7Ozs7Ozs7Ozs7O0FDNXhFWTs7QUFFYixJQUFJMUMsS0FBSixFQUEyQyxFQUEzQyxNQUVPO0FBQ0w3RyxRQUFNLENBQUNDLE9BQVAsR0FBaUJFLG1CQUFPLENBQUMsaUZBQUQsQ0FBeEI7QUFDRCxDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvX2Vycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsInZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduLmJpbmQoT2JqZWN0KVxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25cbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBtb2R1bGUuZXhwb3J0c1xuIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fZXJyb3JcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJuZXh0L2Rpc3QvcGFnZXMvX2Vycm9yXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24oKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyA4ODA6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdHZhciB0aHJldyA9IHRydWU7XG4vKioqKioqLyBcdFx0dHJ5IHtcbi8qKioqKiovIFx0XHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fbmNjd3Bja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbi8qKioqKiovIFx0XHR9IGZpbmFsbHkge1xuLyoqKioqKi8gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvY29tcGF0ICovXG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRfX25jY3dwY2tfcmVxdWlyZV9fLmFiID0gX19kaXJuYW1lICsgXCIvXCI7LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oODgwKTtcbi8qKioqKiovIH0pKClcbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBBbXBTdGF0ZUNvbnRleHQ6IFJlYWN0LkNvbnRleHQ8YW55PiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEFtcFN0YXRlQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdBbXBTdGF0ZUNvbnRleHQnXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBbXBTdGF0ZUNvbnRleHQgfSBmcm9tICcuL2FtcC1jb250ZXh0J1xuXG5leHBvcnQgZnVuY3Rpb24gaXNJbkFtcE1vZGUoe1xuICBhbXBGaXJzdCA9IGZhbHNlLFxuICBoeWJyaWQgPSBmYWxzZSxcbiAgaGFzUXVlcnkgPSBmYWxzZSxcbn0gPSB7fSk6IGJvb2xlYW4ge1xuICByZXR1cm4gYW1wRmlyc3QgfHwgKGh5YnJpZCAmJiBoYXNRdWVyeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFtcCgpOiBib29sZWFuIHtcbiAgLy8gRG9uJ3QgYXNzaWduIHRoZSBjb250ZXh0IHZhbHVlIHRvIGEgdmFyaWFibGUgdG8gc2F2ZSBieXRlc1xuICByZXR1cm4gaXNJbkFtcE1vZGUoUmVhY3QudXNlQ29udGV4dChBbXBTdGF0ZUNvbnRleHQpKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgSGVhZE1hbmFnZXJDb250ZXh0OiBSZWFjdC5Db250ZXh0PHtcbiAgdXBkYXRlSGVhZD86IChzdGF0ZTogYW55KSA9PiB2b2lkXG4gIG1vdW50ZWRJbnN0YW5jZXM/OiBhbnlcbiAgdXBkYXRlU2NyaXB0cz86IChzdGF0ZTogYW55KSA9PiB2b2lkXG4gIHNjcmlwdHM/OiBhbnlcbn0+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgSGVhZE1hbmFnZXJDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0hlYWRNYW5hZ2VyQ29udGV4dCdcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRWZmZWN0IGZyb20gJy4vc2lkZS1lZmZlY3QnXG5pbXBvcnQgeyBBbXBTdGF0ZUNvbnRleHQgfSBmcm9tICcuL2FtcC1jb250ZXh0J1xuaW1wb3J0IHsgSGVhZE1hbmFnZXJDb250ZXh0IH0gZnJvbSAnLi9oZWFkLW1hbmFnZXItY29udGV4dCdcbmltcG9ydCB7IGlzSW5BbXBNb2RlIH0gZnJvbSAnLi9hbXAnXG5cbnR5cGUgV2l0aEluQW1wTW9kZSA9IHtcbiAgaW5BbXBNb2RlPzogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEhlYWQoaW5BbXBNb2RlID0gZmFsc2UpOiBKU1guRWxlbWVudFtdIHtcbiAgY29uc3QgaGVhZCA9IFs8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPl1cbiAgaWYgKCFpbkFtcE1vZGUpIHtcbiAgICBoZWFkLnB1c2goPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aFwiIC8+KVxuICB9XG4gIHJldHVybiBoZWFkXG59XG5cbmZ1bmN0aW9uIG9ubHlSZWFjdEVsZW1lbnQoXG4gIGxpc3Q6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgY2hpbGQ6IFJlYWN0LlJlYWN0Q2hpbGRcbik6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PiB7XG4gIC8vIFJlYWN0IGNoaWxkcmVuIGNhbiBiZSBcInN0cmluZ1wiIG9yIFwibnVtYmVyXCIgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSB0aGVtIGZvciBiYWNrd2FyZHMgY29tcGF0XG4gIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gbGlzdFxuICB9XG4gIC8vIEFkZHMgc3VwcG9ydCBmb3IgUmVhY3QuRnJhZ21lbnRcbiAgaWYgKGNoaWxkLnR5cGUgPT09IFJlYWN0LkZyYWdtZW50KSB7XG4gICAgcmV0dXJuIGxpc3QuY29uY2F0KFxuICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZC5wcm9wcy5jaGlsZHJlbikucmVkdWNlKFxuICAgICAgICAoXG4gICAgICAgICAgZnJhZ21lbnRMaXN0OiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gICAgICAgICAgZnJhZ21lbnRDaGlsZDogUmVhY3QuUmVhY3RDaGlsZFxuICAgICAgICApOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4gPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBmcmFnbWVudENoaWxkID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgdHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09ICdudW1iZXInXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmcmFnbWVudExpc3QuY29uY2F0KGZyYWdtZW50Q2hpbGQpXG4gICAgICAgIH0sXG4gICAgICAgIFtdXG4gICAgICApXG4gICAgKVxuICB9XG4gIHJldHVybiBsaXN0LmNvbmNhdChjaGlsZClcbn1cblxuY29uc3QgTUVUQVRZUEVTID0gWyduYW1lJywgJ2h0dHBFcXVpdicsICdjaGFyU2V0JywgJ2l0ZW1Qcm9wJ11cblxuLypcbiByZXR1cm5zIGEgZnVuY3Rpb24gZm9yIGZpbHRlcmluZyBoZWFkIGNoaWxkIGVsZW1lbnRzXG4gd2hpY2ggc2hvdWxkbid0IGJlIGR1cGxpY2F0ZWQsIGxpa2UgPHRpdGxlLz5cbiBBbHNvIGFkZHMgc3VwcG9ydCBmb3IgZGVkdXBsaWNhdGVkIGBrZXlgIHByb3BlcnRpZXNcbiovXG5mdW5jdGlvbiB1bmlxdWUoKSB7XG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0KClcbiAgY29uc3QgdGFncyA9IG5ldyBTZXQoKVxuICBjb25zdCBtZXRhVHlwZXMgPSBuZXcgU2V0KClcbiAgY29uc3QgbWV0YUNhdGVnb3JpZXM6IHsgW21ldGF0eXBlOiBzdHJpbmddOiBTZXQ8c3RyaW5nPiB9ID0ge31cblxuICByZXR1cm4gKGg6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+KSA9PiB7XG4gICAgbGV0IGlzVW5pcXVlID0gdHJ1ZVxuICAgIGxldCBoYXNLZXkgPSBmYWxzZVxuXG4gICAgaWYgKGgua2V5ICYmIHR5cGVvZiBoLmtleSAhPT0gJ251bWJlcicgJiYgaC5rZXkuaW5kZXhPZignJCcpID4gMCkge1xuICAgICAgaGFzS2V5ID0gdHJ1ZVxuICAgICAgY29uc3Qga2V5ID0gaC5rZXkuc2xpY2UoaC5rZXkuaW5kZXhPZignJCcpICsgMSlcbiAgICAgIGlmIChrZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleXMuYWRkKGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1jYXNlXG4gICAgc3dpdGNoIChoLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3RpdGxlJzpcbiAgICAgIGNhc2UgJ2Jhc2UnOlxuICAgICAgICBpZiAodGFncy5oYXMoaC50eXBlKSkge1xuICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YWdzLmFkZChoLnR5cGUpXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21ldGEnOlxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gTUVUQVRZUEVTLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgbWV0YXR5cGUgPSBNRVRBVFlQRVNbaV1cbiAgICAgICAgICBpZiAoIWgucHJvcHMuaGFzT3duUHJvcGVydHkobWV0YXR5cGUpKSBjb250aW51ZVxuXG4gICAgICAgICAgaWYgKG1ldGF0eXBlID09PSAnY2hhclNldCcpIHtcbiAgICAgICAgICAgIGlmIChtZXRhVHlwZXMuaGFzKG1ldGF0eXBlKSkge1xuICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZXRhVHlwZXMuYWRkKG1ldGF0eXBlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGgucHJvcHNbbWV0YXR5cGVdXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gbWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdIHx8IG5ldyBTZXQoKVxuICAgICAgICAgICAgaWYgKChtZXRhdHlwZSAhPT0gJ25hbWUnIHx8ICFoYXNLZXkpICYmIGNhdGVnb3JpZXMuaGFzKGNhdGVnb3J5KSkge1xuICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjYXRlZ29yaWVzLmFkZChjYXRlZ29yeSlcbiAgICAgICAgICAgICAgbWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdID0gY2F0ZWdvcmllc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHJldHVybiBpc1VuaXF1ZVxuICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBoZWFkRWxlbWVudHMgTGlzdCBvZiBtdWx0aXBsZSA8SGVhZD4gaW5zdGFuY2VzXG4gKi9cbmZ1bmN0aW9uIHJlZHVjZUNvbXBvbmVudHMoXG4gIGhlYWRFbGVtZW50czogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICBwcm9wczogV2l0aEluQW1wTW9kZVxuKSB7XG4gIHJldHVybiBoZWFkRWxlbWVudHNcbiAgICAucmVkdWNlKFxuICAgICAgKGxpc3Q6IFJlYWN0LlJlYWN0Q2hpbGRbXSwgaGVhZEVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+KSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRFbGVtZW50Q2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KFxuICAgICAgICAgIGhlYWRFbGVtZW50LnByb3BzLmNoaWxkcmVuXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIGxpc3QuY29uY2F0KGhlYWRFbGVtZW50Q2hpbGRyZW4pXG4gICAgICB9LFxuICAgICAgW11cbiAgICApXG4gICAgLnJlZHVjZShvbmx5UmVhY3RFbGVtZW50LCBbXSlcbiAgICAucmV2ZXJzZSgpXG4gICAgLmNvbmNhdChkZWZhdWx0SGVhZChwcm9wcy5pbkFtcE1vZGUpKVxuICAgIC5maWx0ZXIodW5pcXVlKCkpXG4gICAgLnJldmVyc2UoKVxuICAgIC5tYXAoKGM6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+LCBpOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGMua2V5IHx8IGlcbiAgICAgIGlmIChcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcgJiZcbiAgICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmXG4gICAgICAgICFwcm9wcy5pbkFtcE1vZGVcbiAgICAgICkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYy50eXBlID09PSAnbGluaycgJiZcbiAgICAgICAgICBjLnByb3BzWydocmVmJ10gJiZcbiAgICAgICAgICAvLyBUT0RPKHByYXRlZWtiaEApOiBSZXBsYWNlIHRoaXMgd2l0aCBjb25zdCBmcm9tIGBjb25zdGFudHNgIHdoZW4gdGhlIHRyZWUgc2hha2luZyB3b3Jrcy5cbiAgICAgICAgICBbJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzJ10uc29tZSgodXJsKSA9PlxuICAgICAgICAgICAgYy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7IC4uLihjLnByb3BzIHx8IHt9KSB9XG4gICAgICAgICAgbmV3UHJvcHNbJ2RhdGEtaHJlZiddID0gbmV3UHJvcHNbJ2hyZWYnXVxuICAgICAgICAgIG5ld1Byb3BzWydocmVmJ10gPSB1bmRlZmluZWRcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGMsIG5ld1Byb3BzKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGMsIHsga2V5IH0pXG4gICAgfSlcbn1cblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpbmplY3RzIGVsZW1lbnRzIHRvIGA8aGVhZD5gIG9mIHlvdXIgcGFnZS5cbiAqIFRvIGF2b2lkIGR1cGxpY2F0ZWQgYHRhZ3NgIGluIGA8aGVhZD5gIHlvdSBjYW4gdXNlIHRoZSBga2V5YCBwcm9wZXJ0eSwgd2hpY2ggd2lsbCBtYWtlIHN1cmUgZXZlcnkgdGFnIGlzIG9ubHkgcmVuZGVyZWQgb25jZS5cbiAqL1xuZnVuY3Rpb24gSGVhZCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IGFtcFN0YXRlID0gdXNlQ29udGV4dChBbXBTdGF0ZUNvbnRleHQpXG4gIGNvbnN0IGhlYWRNYW5hZ2VyID0gdXNlQ29udGV4dChIZWFkTWFuYWdlckNvbnRleHQpXG4gIHJldHVybiAoXG4gICAgPEVmZmVjdFxuICAgICAgcmVkdWNlQ29tcG9uZW50c1RvU3RhdGU9e3JlZHVjZUNvbXBvbmVudHN9XG4gICAgICBoZWFkTWFuYWdlcj17aGVhZE1hbmFnZXJ9XG4gICAgICBpbkFtcE1vZGU9e2lzSW5BbXBNb2RlKGFtcFN0YXRlKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9FZmZlY3Q+XG4gIClcbn1cblxuLy8gVE9ETzogUmVtb3ZlIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2VcbkhlYWQucmV3aW5kID0gKCkgPT4ge31cblxuZXhwb3J0IGRlZmF1bHQgSGVhZFxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG5cbnR5cGUgU3RhdGUgPSBKU1guRWxlbWVudFtdIHwgdW5kZWZpbmVkXG5cbnR5cGUgU2lkZUVmZmVjdFByb3BzID0ge1xuICByZWR1Y2VDb21wb25lbnRzVG9TdGF0ZTogPFQ+KFxuICAgIGNvbXBvbmVudHM6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgICBwcm9wczogVFxuICApID0+IFN0YXRlXG4gIGhhbmRsZVN0YXRlQ2hhbmdlPzogKHN0YXRlOiBTdGF0ZSkgPT4gdm9pZFxuICBoZWFkTWFuYWdlcjogYW55XG4gIGluQW1wTW9kZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQ8U2lkZUVmZmVjdFByb3BzPiB7XG4gIHByaXZhdGUgX2hhc0hlYWRNYW5hZ2VyOiBib29sZWFuXG5cbiAgZW1pdENoYW5nZSA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIudXBkYXRlSGVhZChcbiAgICAgICAgdGhpcy5wcm9wcy5yZWR1Y2VDb21wb25lbnRzVG9TdGF0ZShcbiAgICAgICAgICBbLi4udGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzXSxcbiAgICAgICAgICB0aGlzLnByb3BzXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5faGFzSGVhZE1hbmFnZXIgPVxuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlciAmJiB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXNcblxuICAgIGlmIChpc1NlcnZlciAmJiB0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKVxuICAgICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuZGVsZXRlKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5cbmNvbnN0IHN0YXR1c0NvZGVzOiB7IFtjb2RlOiBudW1iZXJdOiBzdHJpbmcgfSA9IHtcbiAgNDAwOiAnQmFkIFJlcXVlc3QnLFxuICA0MDQ6ICdUaGlzIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kJyxcbiAgNDA1OiAnTWV0aG9kIE5vdCBBbGxvd2VkJyxcbiAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcbn1cblxuZXhwb3J0IHR5cGUgRXJyb3JQcm9wcyA9IHtcbiAgc3RhdHVzQ29kZTogbnVtYmVyXG4gIHRpdGxlPzogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoe1xuICByZXMsXG4gIGVycixcbn06IE5leHRQYWdlQ29udGV4dCk6IFByb21pc2U8RXJyb3JQcm9wcz4gfCBFcnJvclByb3BzIHtcbiAgY29uc3Qgc3RhdHVzQ29kZSA9XG4gICAgcmVzICYmIHJlcy5zdGF0dXNDb2RlID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSEgOiA0MDRcbiAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9XG59XG5cbi8qKlxuICogYEVycm9yYCBjb21wb25lbnQgdXNlZCBmb3IgaGFuZGxpbmcgZXJyb3JzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvcjxQID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFAgJiBFcnJvclByb3BzPiB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdFcnJvclBhZ2UnXG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRpdGxlID1cbiAgICAgIHRoaXMucHJvcHMudGl0bGUgfHxcbiAgICAgIHN0YXR1c0NvZGVzW3N0YXR1c0NvZGVdIHx8XG4gICAgICAnQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQnXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmVycm9yfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAge3N0YXR1c0NvZGV9OiB7dGl0bGV9XG4gICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6ICdib2R5IHsgbWFyZ2luOiAwIH0nIH19IC8+XG4gICAgICAgICAge3N0YXR1c0NvZGUgPyA8aDEgc3R5bGU9e3N0eWxlcy5oMX0+e3N0YXR1c0NvZGV9PC9oMT4gOiBudWxsfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5kZXNjfT5cbiAgICAgICAgICAgIDxoMiBzdHlsZT17c3R5bGVzLmgyfT57dGl0bGV9LjwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHN0eWxlczogeyBbazogc3RyaW5nXTogUmVhY3QuQ1NTUHJvcGVydGllcyB9ID0ge1xuICBlcnJvcjoge1xuICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGZvbnRGYW1pbHk6XG4gICAgICAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgXCJGaXJhIFNhbnNcIiwgQXZlbmlyLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmJyxcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuXG4gIGRlc2M6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBsaW5lSGVpZ2h0OiAnNDlweCcsXG4gICAgaGVpZ2h0OiAnNDlweCcsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIH0sXG5cbiAgaDE6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBib3JkZXJSaWdodDogJzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsLjMpJyxcbiAgICBtYXJnaW46IDAsXG4gICAgbWFyZ2luUmlnaHQ6ICcyMHB4JyxcbiAgICBwYWRkaW5nOiAnMTBweCAyM3B4IDEwcHggMCcsXG4gICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gIH0sXG5cbiAgaDI6IHtcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMCxcbiAgfSxcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4xXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTcuMC4xJztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG5leHBvcnRzLlN0cmljdE1vZGUgPSAweGVhY2M7XG5leHBvcnRzLlByb2ZpbGVyID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG5leHBvcnRzLlN1c3BlbnNlID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgZXhwb3J0cy5TdHJpY3RNb2RlID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBleHBvcnRzLlByb2ZpbGVyID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgZXhwb3J0cy5TdXNwZW5zZSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgdHJhbnNpdGlvbjogMFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xuZnVuY3Rpb24gc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKSB7XG4gIHtcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gIH1cbn1cblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIHtcbiAgICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgICB9XG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuXG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYWN0KCkgdG8gdHJhY2sgd2hldGhlciB5b3UncmUgaW5zaWRlIGFuIGFjdCgpIHNjb3BlLlxuICovXG52YXIgSXNTb21lUmVuZGVyZXJBY3RpbmcgPSB7XG4gIGN1cnJlbnQ6IGZhbHNlXG59O1xuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOiBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxuICBJc1NvbWVSZW5kZXJlckFjdGluZzogSXNTb21lUmVuZGVyZXJBY3RpbmcsXG4gIC8vIFVzZWQgYnkgcmVuZGVyZXJzIHRvIGF2b2lkIGJ1bmRsaW5nIG9iamVjdC1hc3NpZ24gdHdpY2UgaW4gVU1EIGJ1bmRsZXM6XG4gIGFzc2lnbjogX2Fzc2lnblxufTtcblxue1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAoISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcInNldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cblxuXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcblxuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cblxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cblxuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDsgLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5cbl9hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5cbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIGV4cG9ydHMuUHJvZmlsZXI6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdHJpY3RNb2RlOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdXNwZW5zZTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgY29tcG9uZW50TmFtZSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICBpZiAoISEoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIgKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvcE5hbWU7IC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcblxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG5cbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7IC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmOyAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cblxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlOyAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZSgnJyArIGVsZW1lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzOlxuXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xuXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xuICAgICAgfVxuXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGVzY2FwZWRQcmVmaXggKyAoIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICBtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgZXhpc3RpbmcgZWxlbWVudCdzIGtleSBjYW4gYmUgYSBudW1iZXJcbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgIH1cblxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBpdGVyYWJsZUNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gJyArICdVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoIFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLiBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5IGluc3RlYWQuXCIgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgY291bnQgPSAwO1xuICBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIHJlc3VsdCwgJycsICcnLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBjb3VudCsrKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5cblxuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgbiA9IDA7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgbisrOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmdcbiAgfSk7XG4gIHJldHVybiBuO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nLlxuICB9LCBmb3JFYWNoQ29udGV4dCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pIHx8IFtdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSBudWxsICYmIHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlcnJvcignY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dCxcbiAgICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY29udGV4dC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHNcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheU5hbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGlzcGxheU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lcikge1xuICAgICAgICAgICAgd2FybignU2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIENvbnRleHQuQ29uc3VtZXIgaGFzIG5vIGVmZmVjdC4gJyArIFwiWW91IHNob3VsZCBzZXQgaXQgZGlyZWN0bHkgb24gdGhlIGNvbnRleHQgd2l0aCBDb250ZXh0LmRpc3BsYXlOYW1lID0gJyVzJy5cIiwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuXG5mdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgdmFyIGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgdmFyIHRoZW5hYmxlID0gY3RvcigpOyAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG4gICAgdmFyIHBlbmRpbmcgPSBwYXlsb2FkO1xuICAgIHBlbmRpbmcuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgcGVuZGluZy5fcmVzdWx0ID0gdGhlbmFibGU7XG4gICAgdGhlbmFibGUudGhlbihmdW5jdGlvbiAobW9kdWxlT2JqZWN0KSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIHZhciBkZWZhdWx0RXhwb3J0ID0gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XG5cbiAgICAgICAge1xuICAgICAgICAgIGlmIChkZWZhdWx0RXhwb3J0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXBvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVwiLCBtb2R1bGVPYmplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gZGVmYXVsdEV4cG9ydDtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICByZWplY3RlZC5fcmVzdWx0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBSZXNvbHZlZCkge1xuICAgIHJldHVybiBwYXlsb2FkLl9yZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgcGF5bG9hZCA9IHtcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogLTEsXG4gICAgX3Jlc3VsdDogY3RvclxuICB9O1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfcGF5bG9hZDogcGF5bG9hZCxcbiAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7IC8vICRGbG93Rml4TWVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTtcblxuICAgICAgICBpZiAocmVuZGVyLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICByZW5kZXIuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IGV4cG9ydHMuUHJvZmlsZXIgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gZXhwb3J0cy5TdHJpY3RNb2RlIHx8IHR5cGUgPT09IGV4cG9ydHMuU3VzcGVuc2UgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHR5cGUuZGlzcGxheU5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICBpZiAoIShkaXNwYXRjaGVyICE9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIkludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3J1bGVzLW9mLWhvb2tzJyA6ICcnKTtcbiAgICB9IC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cblxuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cyk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgfVxuXG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAge1xuICAgICAgZXJyb3IoJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gZmFsc2U7XG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5KSB7XG4gICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IHRydWU7XG5cbiAgICAgIHdhcm4oJ1JlYWN0LmNyZWF0ZUZhY3RvcnkoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciB1c2luZyBKU1ggJyArICdvciB1c2UgUmVhY3QuY3JlYXRlRWxlbWVudCgpIGRpcmVjdGx5IGluc3RlYWQuJyk7XG4gICAgfSAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxue1xuXG4gIHRyeSB7XG4gICAgdmFyIGZyb3plbk9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuXG4gICAgbmV3IE1hcChbW2Zyb3plbk9iamVjdCwgbnVsbF1dKTtcbiAgICBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW5ldyAqL1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG5leHBvcnRzLnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gdXNlRGVidWdWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0O1xuZXhwb3J0cy51c2VNZW1vID0gdXNlTWVtbztcbmV4cG9ydHMudXNlUmVkdWNlciA9IHVzZVJlZHVjZXI7XG5leHBvcnRzLnVzZVJlZiA9IHVzZVJlZjtcbmV4cG9ydHMudXNlU3RhdGUgPSB1c2VTdGF0ZTtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==