(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["zyliangHistory"] = factory();
	else
		root["zyliangHistory"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeforeUnloadEventType": () => /* binding */ BeforeUnloadEventType,
/* harmony export */   "HashChangeEventType": () => /* binding */ HashChangeEventType,
/* harmony export */   "PopStateEventType": () => /* binding */ PopStateEventType,
/* harmony export */   "actionType": () => /* binding */ actionType
/* harmony export */ });
const BeforeUnloadEventType = "beforeunload";
const HashChangeEventType = "hashchange";
const PopStateEventType = "popstate";

/**
 * 历史栈上一次操作的类型
 */
const actionType = {
	push: "PUSH", // 推入栈
	replace: "REPLACE", // 替换栈
	pop: "POP", // 初始值
};


/***/ }),

/***/ "./src/createBrowserHistory.js":
/*!*************************************!*\
  !*** ./src/createBrowserHistory.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ createBrowserHistory
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/index */ "./config/index.js");
/* harmony import */ var _utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/LocationUtils */ "./utils/LocationUtils.js");



/**
 * 创建history路由
 * @param {*} options
 */
function createBrowserHistory(options = {}) {
  const { window = document.defaultView, isShowBeforeUnload = false } = options;

  const basename = options.basename
    ? Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(options.basename))
    : "";

  // 全局history
  const globalHistory = window.history;

  // 订阅者队列
  const listeners = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  // 提示事件队列
  const blockers = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({ isNeedResult: true });

  let action = _config_index__WEBPACK_IMPORTED_MODULE_1__.actionType.pop;
  let location = (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createLocation)({
    path: window.location.href,
    basename,
    state: globalHistory.state,
  });

  /**
   * 设置监听,只有再go,back,forward三种情况下会触发
   */
  window.addEventListener(_config_index__WEBPACK_IMPORTED_MODULE_1__.PopStateEventType, (event) => {
    let nextLocation = (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createLocation)({
      path: window.location.href,
      basename,
      state: globalHistory.state,
    });

    // Ignore extraneous hashchange events.
    // 这里感觉可以使用event中的数据，但是这样写可以避免不同环境hash中数据异常的问题
    if ((0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createPath)(nextLocation) !== (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createPath)(location)) {
      handlePop(nextLocation);
    }
  });

  let blockedPopTx = null;
  /**
   * hash改变出发事件
   */
  function handlePop(nextLocation) {
    if (blockedPopTx) {
      blockedPopTx = false;
    } else {
      const nextAction = _config_index__WEBPACK_IMPORTED_MODULE_1__.actionType.pop;
      const sendData = {
        action: nextAction,
        location: nextLocation,
      };
      if (blockers.length) {
        let isOk = blockers.call(sendData);
        if (!isOk) {
          const lastIndex = location.state.index - nextLocation.state.index;
          blockedPopTx = true;
          go(lastIndex);
        }
      } else {
        applyTo(sendData);
      }
    }
  }

  /**
   * 生成链接
   */
  function createHref(path) {
    if (typeof path === "string") {
      return (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createPath)(
        (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createLocation)({
          path,
          basename,
        })
      );
    }
  }

  /**
   * 是否允许跳转
   */
  function allowTo(props) {
    const { action, location } = props;
    return !blockers.length || blockers.call({ action, location });
  }

  /**
   * 允许跳转
   */
  function applyTo(props) {
    action = props.action;
    location = props.location;
    listeners.call({ action, location });
  }

  /**
   * 添加路由
   */
  function push(path, state) {
    const newAction = _config_index__WEBPACK_IMPORTED_MODULE_1__.actionType.push;
    const newState = Object.assign({}, state, {
      index: location.state && location.state.index + 1,
    });
    const newLocation = (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createLocation)({
      path,
      state: newState,
      basename,
    });
    const sendData = {
      action: newAction,
      location: newLocation,
    };
    if (allowTo(sendData)) {
      try {
        const url = (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.getBaseHref)() + basename + (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createPath)(newLocation);
        globalHistory.pushState(newState, "", url);
      } catch (e) {
        console.error(e);
      }
      applyTo(sendData);
    }
  }

  /**
   * 替换
   */
  function replace(path, state) {
    const newAction = _config_index__WEBPACK_IMPORTED_MODULE_1__.actionType.push;
    const newState = Object.assign({}, state, {
      index: location.state && location.state.index + 1,
    });
    const newLocation = (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createLocation)({ path, state: newState, basename });
    const sendData = {
      action: newAction,
      location: newLocation,
    };
    if (allowTo(sendData)) {
      try {
        const url = (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.getBaseHref)() + basename + (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createPath)(newLocation);
        globalHistory.pushState(newState, "", url);
      } catch (e) {
        console.error(e);
      }
      applyTo(sendData);
    }
  }

  /**
   * 跳转
   * @param {Number} index
   */
  function go(index) {
    globalHistory.go(index);
  }

  /**
   * 回退
   */
  function back() {
    go(-1);
  }

  /**
   * 前进
   */
  function forward() {
    go(1);
  }

  /**
   * 注册订阅者
   * @param {Function} fn
   */
  function listen(listener) {
    return listeners.push(listener);
  }

  /**
   * 页面刷新前的处理操作
   * 只有history.back() 和 history.forward()会触发F
   */
  function promptBeforeUnload(event) {
    if (!isShowBeforeUnload) {
      return;
    }
    // Cancel the event as stated by the standard.
    event.preventDefault();
    // Chrome requires returnValue to be set.
    event.returnValue = "";
  }

  /**
   * 提示
   */
  function block(blocker) {
    let unblock = blockers.push(blocker);
    if (blockers.length === 1) {
      window.addEventListener(_config_index__WEBPACK_IMPORTED_MODULE_1__.BeforeUnloadEventType, promptBeforeUnload);
    }

    return () => {
      unblock();
      if (!blockers.length) {
        window.removeEventListener(_config_index__WEBPACK_IMPORTED_MODULE_1__.BeforeUnloadEventType, promptBeforeUnload);
      }
    };
  }

  let history = {
    get action() {
      return action;
    },
    get location() {
      return location;
    },
    createHref,
    push,
    replace,
    go,
    back,
    forward,
    listen,
    block,
  };

  return history;
}


/***/ }),

/***/ "./src/createHashHistory.js":
/*!**********************************!*\
  !*** ./src/createHashHistory.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ createHashHistory
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/index */ "./config/index.js");
/* harmony import */ var _utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/LocationUtils */ "./utils/LocationUtils.js");



/**
 * 创建history路由
 * @param {*} options
 */
function createHashHistory(options = {}) {
  const { window = document.defaultView, isShowBeforeUnload = false } = options;

  const basename = options.basename
    ? Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(options.basename))
    : "";

  // 全局history
  const globalHistory = window.history;

  // 订阅者队列
  const listeners = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  // 提示事件队列
  const blockers = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({ isNeedResult: true });

  let action = _config_index__WEBPACK_IMPORTED_MODULE_1__.actionType.pop;
  let location = (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createLocation)({
    path: window.location.hash.substr(1),
    basename,
    state: globalHistory.state,
  });

  /**
   * 设置监听,只有再go,back,forward三种情况下会触发
   */
  window.addEventListener(_config_index__WEBPACK_IMPORTED_MODULE_1__.HashChangeEventType, (event) => {
    let nextLocation = (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createLocation)({
      path: window.location.hash.substr(1),
      basename,
      state: globalHistory.state,
    });

    // Ignore extraneous hashchange events.
    // 这里感觉可以使用event中的数据，但是这样写可以避免不同环境hash中数据异常的问题
    if ((0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createPath)(nextLocation) !== (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createPath)(location)) {
      handlePop(nextLocation);
    }
  });

  let blockedPopTx = null;
  /**
   * hash改变出发事件
   */
  function handlePop(nextLocation) {
    if (blockedPopTx) {
    } else {
      const nextAction = _config_index__WEBPACK_IMPORTED_MODULE_1__.actionType.pop;
      const sendData = {
        action: nextAction,
        location: nextLocation,
      };
      if (blockers.length) {
        let isOk = blockers.call(sendData);
        if (!isOk) {
          const lastIndex = location.state.index - nextLocation.state.index;
          go(lastIndex)
        }
      } else {
        applyTo(sendData);
      }
    }
  }

  /**
   * 生成链接
   */
  function createHref(path) {
    if (typeof path === "string") {
      return (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createPath)(
        (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createLocation)({
          path,
          basename,
        })
      );
    }
  }

  /**
   * 是否允许跳转
   */
  function allowTo(props) {
	const { action, location } = props;
    return !blockers.length || blockers.call({ action, location });
  }

  /**
   * 允许跳转
   */
  function applyTo(props) {
    action = props.action;
    location = props.location;
    listeners.call({ action, location });
  }

  /**
   * 添加路由
   */
  function push(path, state) {
    const newAction = _config_index__WEBPACK_IMPORTED_MODULE_1__.actionType.push;
    const newState = Object.assign({}, state, {
      index: location.state && location.state.index + 1,
    });
    const newLocation = (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createLocation)({
      path,
      state: newState,
      basename,
    });
    const sendData = {
      action: newAction,
      location: newLocation,
    };
    if (allowTo(sendData)) {
      try {
        const url = (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.getBaseHref)() + "#" + basename + (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createPath)(newLocation);
        globalHistory.pushState(newState, "", url);
      } catch (e) {
        console.error(e);
      }
      applyTo(sendData);
    }
  }

  /**
   * 替换
   */
  function replace(path, state) {
    const newAction = _config_index__WEBPACK_IMPORTED_MODULE_1__.actionType.push;
    const newState = Object.assign({}, state, {
      index: location.state && location.state.index + 1,
    });
    const newLocation = (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createLocation)({ path, state: newState, basename });
    const sendData = {
      action: newAction,
      location: newLocation,
    };
    if (allowTo(sendData)) {
      try {
        const url = (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.getBaseHref)() + "#" + basename + (0,_utils_LocationUtils__WEBPACK_IMPORTED_MODULE_2__.createPath)(newLocation);
        globalHistory.pushState(newState, "", url);
      } catch (e) {
        console.error(e);
      }
      applyTo(sendData);
    }
  }

  /**
   * 跳转
   * @param {Number} index
   */
  function go(index) {
    globalHistory.go(index);
  }

  /**
   * 回退
   */
  function back() {
    go(-1);
  }

  /**
   * 前进
   */
  function forward() {
    go(1);
  }

  /**
   * 注册订阅者
   * @param {Function} fn
   */
  function listen(listener) {
    return listeners.push(listener);
  }

  /**
   * 页面刷新前的处理操作
   * 只有history.back() 和 history.forward()会触发F
   */
  function promptBeforeUnload(event) {
    if (!isShowBeforeUnload) {
      return;
    }
    // Cancel the event as stated by the standard.
    event.preventDefault();
    // Chrome requires returnValue to be set.
    event.returnValue = "";
  }

  /**
   * 提示
   */
  function block(blocker) {
    let unblock = blockers.push(blocker);
    if (blockers.length === 1) {
      window.addEventListener(_config_index__WEBPACK_IMPORTED_MODULE_1__.BeforeUnloadEventType, promptBeforeUnload);
    }

    return () => {
      unblock();
      if (!blockers.length) {
        window.removeEventListener(_config_index__WEBPACK_IMPORTED_MODULE_1__.BeforeUnloadEventType, promptBeforeUnload);
      }
    };
  }

  let history = {
    get action() {
      return action;
    },
    get location() {
      return location;
    },
    createHref,
    push,
    replace,
    go,
    back,
    forward,
    listen,
    block,
  };

  return history;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHashHistory": () => /* reexport safe */ _createHashHistory__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "createBrowserHistory": () => /* reexport safe */ _createBrowserHistory__WEBPACK_IMPORTED_MODULE_1__.default
/* harmony export */ });
/* harmony import */ var _createHashHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHashHistory */ "./src/createHashHistory.js");
/* harmony import */ var _createBrowserHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createBrowserHistory */ "./src/createBrowserHistory.js");



/***/ }),

/***/ "./utils/LocationUtils.js":
/*!********************************!*\
  !*** ./utils/LocationUtils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLocation": () => /* binding */ createLocation,
/* harmony export */   "parsePath": () => /* binding */ parsePath,
/* harmony export */   "createPath": () => /* binding */ createPath,
/* harmony export */   "hasBasename": () => /* binding */ hasBasename,
/* harmony export */   "stripBasename": () => /* binding */ stripBasename,
/* harmony export */   "getBaseHref": () => /* binding */ getBaseHref
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function createLocation(params = {}) {
  const {
    path, // 地址
    basename, //
    key = Object(function webpackMissingModule() { var e = new Error("Cannot find module './index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), // 唯一值
    state = {
      index: 0,
    }, // 状态参数
  } = params;
  const basePathInfo = parsePath(path, basename);
  return {
    ...basePathInfo,
    key,
    state,
  };
}

/**
 * 解析路径
 * @param {*}} path
 */
function parsePath(path, basename) {
  let pathname = path || "/";
  let search = "";
  let hash = "";

  // 先过滤hash值，然后再过滤search的内容

  const hashIndex = pathname.indexOf("#");
  // 存在hash值
  if (hashIndex > -1) {
    // hash值
    hash = pathname.substr(hashIndex);
    // pathname 值
    pathname = pathname.substr(0, hashIndex);
  }

  const searchIndex = pathname.indexOf("?");
  if (searchIndex > -1) {
    // search 值
    search = pathname.substr(searchIndex);
    // pathname 值
    pathname = pathname.substr(0, searchIndex);
  }

  pathname = stripBasename(pathname, basename);

  return {
    pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash,
  };
}

// 创建path
function createPath(location = {}) {
  const { pathname, search, hash } = location;

  let path = pathname || "/";

  if (search && search !== "?")
    path += search.charAt(0) === "?" ? search : `?${search}`;

  if (hash && hash !== "#") path += hash.charAt(0) === "#" ? hash : `#${hash}`;

  return path;
}

// 是否包含basename
function hasBasename(path = "", prefix = "") {
  return (
    path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 &&
    "/?#".indexOf(path.charAt(prefix.length)) !== -1
  );
}

// 去除basename
function stripBasename(path = "", prefix = "") {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}

/**
 * 获取basename
 */
function getBaseHref() {
  let base = document.querySelector("base");
  let href = "";

  if (base && base.getAttribute("href")) {
    let url = window.location.href;
    let hashIndex = url.indexOf("#");
    href = hashIndex === -1 ? url : url.slice(0, hashIndex);
  }

  return href;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96eWxpYW5nSGlzdG9yeS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8venlsaWFuZ0hpc3RvcnkvLi9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8venlsaWFuZ0hpc3RvcnkvLi9zcmMvY3JlYXRlQnJvd3Nlckhpc3RvcnkuanMiLCJ3ZWJwYWNrOi8venlsaWFuZ0hpc3RvcnkvLi9zcmMvY3JlYXRlSGFzaEhpc3RvcnkuanMiLCJ3ZWJwYWNrOi8venlsaWFuZ0hpc3RvcnkvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8venlsaWFuZ0hpc3RvcnkvLi91dGlscy9Mb2NhdGlvblV0aWxzLmpzIiwid2VicGFjazovL3p5bGlhbmdIaXN0b3J5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3p5bGlhbmdIaXN0b3J5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly96eWxpYW5nSGlzdG9yeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3p5bGlhbmdIaXN0b3J5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8venlsaWFuZ0hpc3Rvcnkvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZPO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQd0I7QUFNQztBQUtPO0FBQ2hDO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNlLDBDQUEwQztBQUN6RCxTQUFTLDREQUE0RDs7QUFFckU7QUFDQSxNQUFNLDZJQUFrQixD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OztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7VUNqR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Imhpc3RvcnkubWFpbi40N2FiNDMxZmVlNTMzNzgzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wienlsaWFuZ0hpc3RvcnlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wienlsaWFuZ0hpc3RvcnlcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJleHBvcnQgY29uc3QgQmVmb3JlVW5sb2FkRXZlbnRUeXBlID0gXCJiZWZvcmV1bmxvYWRcIjtcclxuZXhwb3J0IGNvbnN0IEhhc2hDaGFuZ2VFdmVudFR5cGUgPSBcImhhc2hjaGFuZ2VcIjtcclxuZXhwb3J0IGNvbnN0IFBvcFN0YXRlRXZlbnRUeXBlID0gXCJwb3BzdGF0ZVwiO1xyXG5cclxuLyoqXHJcbiAqIOWOhuWPsuagiOS4iuS4gOasoeaTjeS9nOeahOexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGUgPSB7XHJcblx0cHVzaDogXCJQVVNIXCIsIC8vIOaOqOWFpeagiFxyXG5cdHJlcGxhY2U6IFwiUkVQTEFDRVwiLCAvLyDmm7/mjaLmoIhcclxuXHRwb3A6IFwiUE9QXCIsIC8vIOWIneWni+WAvFxyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gIGNyZWF0ZUV2ZW50TGlzdCxcclxuICBzdHJpcFRyYWlsaW5nU2xhc2gsXHJcbiAgYWRkTGVhZGluZ1NsYXNoLFxyXG59IGZyb20gXCIuLi91dGlscy9pbmRleFwiO1xyXG5pbXBvcnQge1xyXG4gIEJlZm9yZVVubG9hZEV2ZW50VHlwZSxcclxuICBIYXNoQ2hhbmdlRXZlbnRUeXBlLFxyXG4gIFBvcFN0YXRlRXZlbnRUeXBlLFxyXG4gIGFjdGlvblR5cGUsXHJcbn0gZnJvbSBcIi4uL2NvbmZpZy9pbmRleFwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZVBhdGgsXHJcbiAgY3JlYXRlTG9jYXRpb24sXHJcbiAgZ2V0QmFzZUhyZWYsXHJcbn0gZnJvbSBcIi4uL3V0aWxzL0xvY2F0aW9uVXRpbHNcIjtcclxuLyoqXHJcbiAqIOWIm+W7umhpc3Rvcnnot6/nlLFcclxuICogQHBhcmFtIHsqfSBvcHRpb25zXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCcm93c2VySGlzdG9yeShvcHRpb25zID0ge30pIHtcclxuICBjb25zdCB7IHdpbmRvdyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LCBpc1Nob3dCZWZvcmVVbmxvYWQgPSBmYWxzZSB9ID0gb3B0aW9ucztcclxuXHJcbiAgY29uc3QgYmFzZW5hbWUgPSBvcHRpb25zLmJhc2VuYW1lXHJcbiAgICA/IHN0cmlwVHJhaWxpbmdTbGFzaChhZGRMZWFkaW5nU2xhc2gob3B0aW9ucy5iYXNlbmFtZSkpXHJcbiAgICA6IFwiXCI7XHJcblxyXG4gIC8vIOWFqOWxgGhpc3RvcnlcclxuICBjb25zdCBnbG9iYWxIaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XHJcblxyXG4gIC8vIOiuoumYheiAhemYn+WIl1xyXG4gIGNvbnN0IGxpc3RlbmVycyA9IGNyZWF0ZUV2ZW50TGlzdCgpO1xyXG4gIC8vIOaPkOekuuS6i+S7tumYn+WIl1xyXG4gIGNvbnN0IGJsb2NrZXJzID0gY3JlYXRlRXZlbnRMaXN0KHsgaXNOZWVkUmVzdWx0OiB0cnVlIH0pO1xyXG5cclxuICBsZXQgYWN0aW9uID0gYWN0aW9uVHlwZS5wb3A7XHJcbiAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oe1xyXG4gICAgcGF0aDogd2luZG93LmxvY2F0aW9uLmhyZWYsXHJcbiAgICBiYXNlbmFtZSxcclxuICAgIHN0YXRlOiBnbG9iYWxIaXN0b3J5LnN0YXRlLFxyXG4gIH0pO1xyXG5cclxuICAvKipcclxuICAgKiDorr7nva7nm5HlkKws5Y+q5pyJ5YaNZ28sYmFjayxmb3J3YXJk5LiJ56eN5oOF5Ya15LiL5Lya6Kem5Y+RXHJcbiAgICovXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoUG9wU3RhdGVFdmVudFR5cGUsIChldmVudCkgPT4ge1xyXG4gICAgbGV0IG5leHRMb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHtcclxuICAgICAgcGF0aDogd2luZG93LmxvY2F0aW9uLmhyZWYsXHJcbiAgICAgIGJhc2VuYW1lLFxyXG4gICAgICBzdGF0ZTogZ2xvYmFsSGlzdG9yeS5zdGF0ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIElnbm9yZSBleHRyYW5lb3VzIGhhc2hjaGFuZ2UgZXZlbnRzLlxyXG4gICAgLy8g6L+Z6YeM5oSf6KeJ5Y+v5Lul5L2/55SoZXZlbnTkuK3nmoTmlbDmja7vvIzkvYbmmK/ov5nmoLflhpnlj6/ku6Xpgb/lhY3kuI3lkIznjq/looNoYXNo5Lit5pWw5o2u5byC5bi455qE6Zeu6aKYXHJcbiAgICBpZiAoY3JlYXRlUGF0aChuZXh0TG9jYXRpb24pICE9PSBjcmVhdGVQYXRoKGxvY2F0aW9uKSkge1xyXG4gICAgICBoYW5kbGVQb3AobmV4dExvY2F0aW9uKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbGV0IGJsb2NrZWRQb3BUeCA9IG51bGw7XHJcbiAgLyoqXHJcbiAgICogaGFzaOaUueWPmOWHuuWPkeS6i+S7tlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhhbmRsZVBvcChuZXh0TG9jYXRpb24pIHtcclxuICAgIGlmIChibG9ja2VkUG9wVHgpIHtcclxuICAgICAgYmxvY2tlZFBvcFR4ID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBuZXh0QWN0aW9uID0gYWN0aW9uVHlwZS5wb3A7XHJcbiAgICAgIGNvbnN0IHNlbmREYXRhID0ge1xyXG4gICAgICAgIGFjdGlvbjogbmV4dEFjdGlvbixcclxuICAgICAgICBsb2NhdGlvbjogbmV4dExvY2F0aW9uLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoYmxvY2tlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IGlzT2sgPSBibG9ja2Vycy5jYWxsKHNlbmREYXRhKTtcclxuICAgICAgICBpZiAoIWlzT2spIHtcclxuICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGxvY2F0aW9uLnN0YXRlLmluZGV4IC0gbmV4dExvY2F0aW9uLnN0YXRlLmluZGV4O1xyXG4gICAgICAgICAgYmxvY2tlZFBvcFR4ID0gdHJ1ZTtcclxuICAgICAgICAgIGdvKGxhc3RJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFwcGx5VG8oc2VuZERhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnlJ/miJDpk77mjqVcclxuICAgKi9cclxuICBmdW5jdGlvbiBjcmVhdGVIcmVmKHBhdGgpIHtcclxuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICByZXR1cm4gY3JlYXRlUGF0aChcclxuICAgICAgICBjcmVhdGVMb2NhdGlvbih7XHJcbiAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgYmFzZW5hbWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaYr+WQpuWFgeiuuOi3s+i9rFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGFsbG93VG8ocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgYWN0aW9uLCBsb2NhdGlvbiB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gIWJsb2NrZXJzLmxlbmd0aCB8fCBibG9ja2Vycy5jYWxsKHsgYWN0aW9uLCBsb2NhdGlvbiB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWFgeiuuOi3s+i9rFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGFwcGx5VG8ocHJvcHMpIHtcclxuICAgIGFjdGlvbiA9IHByb3BzLmFjdGlvbjtcclxuICAgIGxvY2F0aW9uID0gcHJvcHMubG9jYXRpb247XHJcbiAgICBsaXN0ZW5lcnMuY2FsbCh7IGFjdGlvbiwgbG9jYXRpb24gfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmt7vliqDot6/nlLFcclxuICAgKi9cclxuICBmdW5jdGlvbiBwdXNoKHBhdGgsIHN0YXRlKSB7XHJcbiAgICBjb25zdCBuZXdBY3Rpb24gPSBhY3Rpb25UeXBlLnB1c2g7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgIGluZGV4OiBsb2NhdGlvbi5zdGF0ZSAmJiBsb2NhdGlvbi5zdGF0ZS5pbmRleCArIDEsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG5ld0xvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oe1xyXG4gICAgICBwYXRoLFxyXG4gICAgICBzdGF0ZTogbmV3U3RhdGUsXHJcbiAgICAgIGJhc2VuYW1lLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzZW5kRGF0YSA9IHtcclxuICAgICAgYWN0aW9uOiBuZXdBY3Rpb24sXHJcbiAgICAgIGxvY2F0aW9uOiBuZXdMb2NhdGlvbixcclxuICAgIH07XHJcbiAgICBpZiAoYWxsb3dUbyhzZW5kRGF0YSkpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBnZXRCYXNlSHJlZigpICsgYmFzZW5hbWUgKyBjcmVhdGVQYXRoKG5ld0xvY2F0aW9uKTtcclxuICAgICAgICBnbG9iYWxIaXN0b3J5LnB1c2hTdGF0ZShuZXdTdGF0ZSwgXCJcIiwgdXJsKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgIH1cclxuICAgICAgYXBwbHlUbyhzZW5kRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmm7/mjaJcclxuICAgKi9cclxuICBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XHJcbiAgICBjb25zdCBuZXdBY3Rpb24gPSBhY3Rpb25UeXBlLnB1c2g7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgIGluZGV4OiBsb2NhdGlvbi5zdGF0ZSAmJiBsb2NhdGlvbi5zdGF0ZS5pbmRleCArIDEsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG5ld0xvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oeyBwYXRoLCBzdGF0ZTogbmV3U3RhdGUsIGJhc2VuYW1lIH0pO1xyXG4gICAgY29uc3Qgc2VuZERhdGEgPSB7XHJcbiAgICAgIGFjdGlvbjogbmV3QWN0aW9uLFxyXG4gICAgICBsb2NhdGlvbjogbmV3TG9jYXRpb24sXHJcbiAgICB9O1xyXG4gICAgaWYgKGFsbG93VG8oc2VuZERhdGEpKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gZ2V0QmFzZUhyZWYoKSArIGJhc2VuYW1lICsgY3JlYXRlUGF0aChuZXdMb2NhdGlvbik7XHJcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5wdXNoU3RhdGUobmV3U3RhdGUsIFwiXCIsIHVybCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGFwcGx5VG8oc2VuZERhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6Lez6L2sXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZ28oaW5kZXgpIHtcclxuICAgIGdsb2JhbEhpc3RvcnkuZ28oaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Zue6YCAXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gYmFjaygpIHtcclxuICAgIGdvKC0xKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWJjei/m1xyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGZvcndhcmQoKSB7XHJcbiAgICBnbygxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOazqOWGjOiuoumYheiAhVxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XHJcbiAgICByZXR1cm4gbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5Yi35paw5YmN55qE5aSE55CG5pON5L2cXHJcbiAgICog5Y+q5pyJaGlzdG9yeS5iYWNrKCkg5ZKMIGhpc3RvcnkuZm9yd2FyZCgp5Lya6Kem5Y+RRlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHByb21wdEJlZm9yZVVubG9hZChldmVudCkge1xyXG4gICAgaWYgKCFpc1Nob3dCZWZvcmVVbmxvYWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gQ2FuY2VsIHRoZSBldmVudCBhcyBzdGF0ZWQgYnkgdGhlIHN0YW5kYXJkLlxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIENocm9tZSByZXF1aXJlcyByZXR1cm5WYWx1ZSB0byBiZSBzZXQuXHJcbiAgICBldmVudC5yZXR1cm5WYWx1ZSA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmj5DnpLpcclxuICAgKi9cclxuICBmdW5jdGlvbiBibG9jayhibG9ja2VyKSB7XHJcbiAgICBsZXQgdW5ibG9jayA9IGJsb2NrZXJzLnB1c2goYmxvY2tlcik7XHJcbiAgICBpZiAoYmxvY2tlcnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEJlZm9yZVVubG9hZEV2ZW50VHlwZSwgcHJvbXB0QmVmb3JlVW5sb2FkKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB1bmJsb2NrKCk7XHJcbiAgICAgIGlmICghYmxvY2tlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoQmVmb3JlVW5sb2FkRXZlbnRUeXBlLCBwcm9tcHRCZWZvcmVVbmxvYWQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbGV0IGhpc3RvcnkgPSB7XHJcbiAgICBnZXQgYWN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gYWN0aW9uO1xyXG4gICAgfSxcclxuICAgIGdldCBsb2NhdGlvbigpIHtcclxuICAgICAgcmV0dXJuIGxvY2F0aW9uO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZUhyZWYsXHJcbiAgICBwdXNoLFxyXG4gICAgcmVwbGFjZSxcclxuICAgIGdvLFxyXG4gICAgYmFjayxcclxuICAgIGZvcndhcmQsXHJcbiAgICBsaXN0ZW4sXHJcbiAgICBibG9jayxcclxuICB9O1xyXG5cclxuICByZXR1cm4gaGlzdG9yeTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGNyZWF0ZUV2ZW50TGlzdCxcclxuICBzdHJpcFRyYWlsaW5nU2xhc2gsXHJcbiAgYWRkTGVhZGluZ1NsYXNoLFxyXG59IGZyb20gXCIuLi91dGlscy9pbmRleFwiO1xyXG5pbXBvcnQge1xyXG4gIEJlZm9yZVVubG9hZEV2ZW50VHlwZSxcclxuICBIYXNoQ2hhbmdlRXZlbnRUeXBlLFxyXG4gIFBvcFN0YXRlRXZlbnRUeXBlLFxyXG4gIGFjdGlvblR5cGUsXHJcbn0gZnJvbSBcIi4uL2NvbmZpZy9pbmRleFwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZVBhdGgsXHJcbiAgY3JlYXRlTG9jYXRpb24sXHJcbiAgZ2V0QmFzZUhyZWYsXHJcbn0gZnJvbSBcIi4uL3V0aWxzL0xvY2F0aW9uVXRpbHNcIjtcclxuLyoqXHJcbiAqIOWIm+W7umhpc3Rvcnnot6/nlLFcclxuICogQHBhcmFtIHsqfSBvcHRpb25zXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIYXNoSGlzdG9yeShvcHRpb25zID0ge30pIHtcclxuICBjb25zdCB7IHdpbmRvdyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LCBpc1Nob3dCZWZvcmVVbmxvYWQgPSBmYWxzZSB9ID0gb3B0aW9ucztcclxuXHJcbiAgY29uc3QgYmFzZW5hbWUgPSBvcHRpb25zLmJhc2VuYW1lXHJcbiAgICA/IHN0cmlwVHJhaWxpbmdTbGFzaChhZGRMZWFkaW5nU2xhc2gob3B0aW9ucy5iYXNlbmFtZSkpXHJcbiAgICA6IFwiXCI7XHJcblxyXG4gIC8vIOWFqOWxgGhpc3RvcnlcclxuICBjb25zdCBnbG9iYWxIaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XHJcblxyXG4gIC8vIOiuoumYheiAhemYn+WIl1xyXG4gIGNvbnN0IGxpc3RlbmVycyA9IGNyZWF0ZUV2ZW50TGlzdCgpO1xyXG4gIC8vIOaPkOekuuS6i+S7tumYn+WIl1xyXG4gIGNvbnN0IGJsb2NrZXJzID0gY3JlYXRlRXZlbnRMaXN0KHsgaXNOZWVkUmVzdWx0OiB0cnVlIH0pO1xyXG5cclxuICBsZXQgYWN0aW9uID0gYWN0aW9uVHlwZS5wb3A7XHJcbiAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oe1xyXG4gICAgcGF0aDogd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpLFxyXG4gICAgYmFzZW5hbWUsXHJcbiAgICBzdGF0ZTogZ2xvYmFsSGlzdG9yeS5zdGF0ZSxcclxuICB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572u55uR5ZCsLOWPquacieWGjWdvLGJhY2ssZm9yd2FyZOS4ieenjeaDheWGteS4i+S8muinpuWPkVxyXG4gICAqL1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEhhc2hDaGFuZ2VFdmVudFR5cGUsIChldmVudCkgPT4ge1xyXG4gICAgbGV0IG5leHRMb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHtcclxuICAgICAgcGF0aDogd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpLFxyXG4gICAgICBiYXNlbmFtZSxcclxuICAgICAgc3RhdGU6IGdsb2JhbEhpc3Rvcnkuc3RhdGUsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBJZ25vcmUgZXh0cmFuZW91cyBoYXNoY2hhbmdlIGV2ZW50cy5cclxuICAgIC8vIOi/memHjOaEn+inieWPr+S7peS9v+eUqGV2ZW505Lit55qE5pWw5o2u77yM5L2G5piv6L+Z5qC35YaZ5Y+v5Lul6YG/5YWN5LiN5ZCM546v5aKDaGFzaOS4reaVsOaNruW8guW4uOeahOmXrumimFxyXG4gICAgaWYgKGNyZWF0ZVBhdGgobmV4dExvY2F0aW9uKSAhPT0gY3JlYXRlUGF0aChsb2NhdGlvbikpIHtcclxuICAgICAgaGFuZGxlUG9wKG5leHRMb2NhdGlvbik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGxldCBibG9ja2VkUG9wVHggPSBudWxsO1xyXG4gIC8qKlxyXG4gICAqIGhhc2jmlLnlj5jlh7rlj5Hkuovku7ZcclxuICAgKi9cclxuICBmdW5jdGlvbiBoYW5kbGVQb3AobmV4dExvY2F0aW9uKSB7XHJcbiAgICBpZiAoYmxvY2tlZFBvcFR4KSB7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBuZXh0QWN0aW9uID0gYWN0aW9uVHlwZS5wb3A7XHJcbiAgICAgIGNvbnN0IHNlbmREYXRhID0ge1xyXG4gICAgICAgIGFjdGlvbjogbmV4dEFjdGlvbixcclxuICAgICAgICBsb2NhdGlvbjogbmV4dExvY2F0aW9uLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoYmxvY2tlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IGlzT2sgPSBibG9ja2Vycy5jYWxsKHNlbmREYXRhKTtcclxuICAgICAgICBpZiAoIWlzT2spIHtcclxuICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGxvY2F0aW9uLnN0YXRlLmluZGV4IC0gbmV4dExvY2F0aW9uLnN0YXRlLmluZGV4O1xyXG4gICAgICAgICAgZ28obGFzdEluZGV4KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhcHBseVRvKHNlbmREYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5oiQ6ZO+5o6lXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gY3JlYXRlSHJlZihwYXRoKSB7XHJcbiAgICBpZiAodHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgcmV0dXJuIGNyZWF0ZVBhdGgoXHJcbiAgICAgICAgY3JlYXRlTG9jYXRpb24oe1xyXG4gICAgICAgICAgcGF0aCxcclxuICAgICAgICAgIGJhc2VuYW1lLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmmK/lkKblhYHorrjot7PovaxcclxuICAgKi9cclxuICBmdW5jdGlvbiBhbGxvd1RvKHByb3BzKSB7XHJcblx0Y29uc3QgeyBhY3Rpb24sIGxvY2F0aW9uIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAhYmxvY2tlcnMubGVuZ3RoIHx8IGJsb2NrZXJzLmNhbGwoeyBhY3Rpb24sIGxvY2F0aW9uIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5YWB6K646Lez6L2sXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gYXBwbHlUbyhwcm9wcykge1xyXG4gICAgYWN0aW9uID0gcHJvcHMuYWN0aW9uO1xyXG4gICAgbG9jYXRpb24gPSBwcm9wcy5sb2NhdGlvbjtcclxuICAgIGxpc3RlbmVycy5jYWxsKHsgYWN0aW9uLCBsb2NhdGlvbiB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOa3u+WKoOi3r+eUsVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcclxuICAgIGNvbnN0IG5ld0FjdGlvbiA9IGFjdGlvblR5cGUucHVzaDtcclxuICAgIGNvbnN0IG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgaW5kZXg6IGxvY2F0aW9uLnN0YXRlICYmIGxvY2F0aW9uLnN0YXRlLmluZGV4ICsgMSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgbmV3TG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbih7XHJcbiAgICAgIHBhdGgsXHJcbiAgICAgIHN0YXRlOiBuZXdTdGF0ZSxcclxuICAgICAgYmFzZW5hbWUsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHNlbmREYXRhID0ge1xyXG4gICAgICBhY3Rpb246IG5ld0FjdGlvbixcclxuICAgICAgbG9jYXRpb246IG5ld0xvY2F0aW9uLFxyXG4gICAgfTtcclxuICAgIGlmIChhbGxvd1RvKHNlbmREYXRhKSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGdldEJhc2VIcmVmKCkgKyBcIiNcIiArIGJhc2VuYW1lICsgY3JlYXRlUGF0aChuZXdMb2NhdGlvbik7XHJcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5wdXNoU3RhdGUobmV3U3RhdGUsIFwiXCIsIHVybCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGFwcGx5VG8oc2VuZERhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5pu/5o2iXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gcmVwbGFjZShwYXRoLCBzdGF0ZSkge1xyXG4gICAgY29uc3QgbmV3QWN0aW9uID0gYWN0aW9uVHlwZS5wdXNoO1xyXG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICBpbmRleDogbG9jYXRpb24uc3RhdGUgJiYgbG9jYXRpb24uc3RhdGUuaW5kZXggKyAxLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBuZXdMb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHsgcGF0aCwgc3RhdGU6IG5ld1N0YXRlLCBiYXNlbmFtZSB9KTtcclxuICAgIGNvbnN0IHNlbmREYXRhID0ge1xyXG4gICAgICBhY3Rpb246IG5ld0FjdGlvbixcclxuICAgICAgbG9jYXRpb246IG5ld0xvY2F0aW9uLFxyXG4gICAgfTtcclxuICAgIGlmIChhbGxvd1RvKHNlbmREYXRhKSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGdldEJhc2VIcmVmKCkgKyBcIiNcIiArIGJhc2VuYW1lICsgY3JlYXRlUGF0aChuZXdMb2NhdGlvbik7XHJcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5wdXNoU3RhdGUobmV3U3RhdGUsIFwiXCIsIHVybCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGFwcGx5VG8oc2VuZERhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6Lez6L2sXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZ28oaW5kZXgpIHtcclxuICAgIGdsb2JhbEhpc3RvcnkuZ28oaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Zue6YCAXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gYmFjaygpIHtcclxuICAgIGdvKC0xKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWJjei/m1xyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGZvcndhcmQoKSB7XHJcbiAgICBnbygxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOazqOWGjOiuoumYheiAhVxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XHJcbiAgICByZXR1cm4gbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5Yi35paw5YmN55qE5aSE55CG5pON5L2cXHJcbiAgICog5Y+q5pyJaGlzdG9yeS5iYWNrKCkg5ZKMIGhpc3RvcnkuZm9yd2FyZCgp5Lya6Kem5Y+RRlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHByb21wdEJlZm9yZVVubG9hZChldmVudCkge1xyXG4gICAgaWYgKCFpc1Nob3dCZWZvcmVVbmxvYWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gQ2FuY2VsIHRoZSBldmVudCBhcyBzdGF0ZWQgYnkgdGhlIHN0YW5kYXJkLlxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIENocm9tZSByZXF1aXJlcyByZXR1cm5WYWx1ZSB0byBiZSBzZXQuXHJcbiAgICBldmVudC5yZXR1cm5WYWx1ZSA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmj5DnpLpcclxuICAgKi9cclxuICBmdW5jdGlvbiBibG9jayhibG9ja2VyKSB7XHJcbiAgICBsZXQgdW5ibG9jayA9IGJsb2NrZXJzLnB1c2goYmxvY2tlcik7XHJcbiAgICBpZiAoYmxvY2tlcnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEJlZm9yZVVubG9hZEV2ZW50VHlwZSwgcHJvbXB0QmVmb3JlVW5sb2FkKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB1bmJsb2NrKCk7XHJcbiAgICAgIGlmICghYmxvY2tlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoQmVmb3JlVW5sb2FkRXZlbnRUeXBlLCBwcm9tcHRCZWZvcmVVbmxvYWQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbGV0IGhpc3RvcnkgPSB7XHJcbiAgICBnZXQgYWN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gYWN0aW9uO1xyXG4gICAgfSxcclxuICAgIGdldCBsb2NhdGlvbigpIHtcclxuICAgICAgcmV0dXJuIGxvY2F0aW9uO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZUhyZWYsXHJcbiAgICBwdXNoLFxyXG4gICAgcmVwbGFjZSxcclxuICAgIGdvLFxyXG4gICAgYmFjayxcclxuICAgIGZvcndhcmQsXHJcbiAgICBsaXN0ZW4sXHJcbiAgICBibG9jayxcclxuICB9O1xyXG5cclxuICByZXR1cm4gaGlzdG9yeTtcclxufVxyXG4iLCJleHBvcnQge2RlZmF1bHQgYXMgY3JlYXRlSGFzaEhpc3Rvcnl9IGZyb20gJy4vY3JlYXRlSGFzaEhpc3RvcnknXHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjcmVhdGVCcm93c2VySGlzdG9yeX0gZnJvbSAnLi9jcmVhdGVCcm93c2VySGlzdG9yeSciLCJpbXBvcnQgeyBnZXRVbmlxdWVLZXkgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKHBhcmFtcyA9IHt9KSB7XHJcbiAgY29uc3Qge1xyXG4gICAgcGF0aCwgLy8g5Zyw5Z2AXHJcbiAgICBiYXNlbmFtZSwgLy9cclxuICAgIGtleSA9IGdldFVuaXF1ZUtleSgpLCAvLyDllK/kuIDlgLxcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICBpbmRleDogMCxcclxuICAgIH0sIC8vIOeKtuaAgeWPguaVsFxyXG4gIH0gPSBwYXJhbXM7XHJcbiAgY29uc3QgYmFzZVBhdGhJbmZvID0gcGFyc2VQYXRoKHBhdGgsIGJhc2VuYW1lKTtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYmFzZVBhdGhJbmZvLFxyXG4gICAga2V5LFxyXG4gICAgc3RhdGUsXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOino+aekOi3r+W+hFxyXG4gKiBAcGFyYW0geyp9fSBwYXRoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXRoKHBhdGgsIGJhc2VuYW1lKSB7XHJcbiAgbGV0IHBhdGhuYW1lID0gcGF0aCB8fCBcIi9cIjtcclxuICBsZXQgc2VhcmNoID0gXCJcIjtcclxuICBsZXQgaGFzaCA9IFwiXCI7XHJcblxyXG4gIC8vIOWFiOi/h+a7pGhhc2jlgLzvvIznhLblkI7lho3ov4fmu6RzZWFyY2jnmoTlhoXlrrlcclxuXHJcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZihcIiNcIik7XHJcbiAgLy8g5a2Y5ZyoaGFzaOWAvFxyXG4gIGlmIChoYXNoSW5kZXggPiAtMSkge1xyXG4gICAgLy8gaGFzaOWAvFxyXG4gICAgaGFzaCA9IHBhdGhuYW1lLnN1YnN0cihoYXNoSW5kZXgpO1xyXG4gICAgLy8gcGF0aG5hbWUg5YC8XHJcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cigwLCBoYXNoSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VhcmNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKFwiP1wiKTtcclxuICBpZiAoc2VhcmNoSW5kZXggPiAtMSkge1xyXG4gICAgLy8gc2VhcmNoIOWAvFxyXG4gICAgc2VhcmNoID0gcGF0aG5hbWUuc3Vic3RyKHNlYXJjaEluZGV4KTtcclxuICAgIC8vIHBhdGhuYW1lIOWAvFxyXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHIoMCwgc2VhcmNoSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcGF0aG5hbWUgPSBzdHJpcEJhc2VuYW1lKHBhdGhuYW1lLCBiYXNlbmFtZSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRobmFtZSxcclxuICAgIHNlYXJjaDogc2VhcmNoID09PSBcIj9cIiA/IFwiXCIgOiBzZWFyY2gsXHJcbiAgICBoYXNoOiBoYXNoID09PSBcIiNcIiA/IFwiXCIgOiBoYXNoLFxyXG4gIH07XHJcbn1cclxuXHJcbi8vIOWIm+W7unBhdGhcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhdGgobG9jYXRpb24gPSB7fSkge1xyXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaCwgaGFzaCB9ID0gbG9jYXRpb247XHJcblxyXG4gIGxldCBwYXRoID0gcGF0aG5hbWUgfHwgXCIvXCI7XHJcblxyXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoICE9PSBcIj9cIilcclxuICAgIHBhdGggKz0gc2VhcmNoLmNoYXJBdCgwKSA9PT0gXCI/XCIgPyBzZWFyY2ggOiBgPyR7c2VhcmNofWA7XHJcblxyXG4gIGlmIChoYXNoICYmIGhhc2ggIT09IFwiI1wiKSBwYXRoICs9IGhhc2guY2hhckF0KDApID09PSBcIiNcIiA/IGhhc2ggOiBgIyR7aGFzaH1gO1xyXG5cclxuICByZXR1cm4gcGF0aDtcclxufVxyXG5cclxuLy8g5piv5ZCm5YyF5ZCrYmFzZW5hbWVcclxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VuYW1lKHBhdGggPSBcIlwiLCBwcmVmaXggPSBcIlwiKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIHBhdGgudG9Mb3dlckNhc2UoKS5pbmRleE9mKHByZWZpeC50b0xvd2VyQ2FzZSgpKSA9PT0gMCAmJlxyXG4gICAgXCIvPyNcIi5pbmRleE9mKHBhdGguY2hhckF0KHByZWZpeC5sZW5ndGgpKSAhPT0gLTFcclxuICApO1xyXG59XHJcblxyXG4vLyDljrvpmaRiYXNlbmFtZVxyXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBCYXNlbmFtZShwYXRoID0gXCJcIiwgcHJlZml4ID0gXCJcIikge1xyXG4gIHJldHVybiBoYXNCYXNlbmFtZShwYXRoLCBwcmVmaXgpID8gcGF0aC5zdWJzdHIocHJlZml4Lmxlbmd0aCkgOiBwYXRoO1xyXG59XHJcblxyXG4vKipcclxuICog6I635Y+WYmFzZW5hbWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXNlSHJlZigpIHtcclxuICBsZXQgYmFzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJiYXNlXCIpO1xyXG4gIGxldCBocmVmID0gXCJcIjtcclxuXHJcbiAgaWYgKGJhc2UgJiYgYmFzZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKSB7XHJcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICBsZXQgaGFzaEluZGV4ID0gdXJsLmluZGV4T2YoXCIjXCIpO1xyXG4gICAgaHJlZiA9IGhhc2hJbmRleCA9PT0gLTEgPyB1cmwgOiB1cmwuc2xpY2UoMCwgaGFzaEluZGV4KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBocmVmO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==