import { actionType } from "./config/index";
import { getConfirmation } from "./utils/DOMUtils";
import {
  addLeadingSlash,
  stripLeadingSlash,
  stripTrailingSlash,
  stripBasename,
  createPath,
} from "./utils/PathUtils";
import createTransitionManager from "./createTransitionManager";
import { createLocation, locationsAreEqual } from "./utils/LocationUtils";

const HashChangeEvent = "hashchange";
const BeforeUnloadEventType = "beforeunload";

const HashPathCoders = {
  hashbang: {
    encodePath: (path) =>
      path.charAt(0) === "!" ? path : "!/" + stripLeadingSlash(path),
    decodePath: (path) => (path.charAt(0) === "!" ? path.substr(1) : path),
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash,
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash,
  },
};

/**
 * hashHistory  hash 路由
 */

/**
 * 添加hash
 * @param {String} hash
 */
function pushHashPath(hash) {
  window.location.hash = hash;
}

/**
 * 获取出hash值之外的url地址
 */
function stripHash(href) {
  const hashIndex = href.indexOf("#");
  return hashIndex === -1 ? href : href.slice(0, hashIndex);
}

/**
 * 替换页面路由
 * @param {String} hash
 */
function replaceHashPath(hash) {
  window.location.replace(stripHash(window.location.href) + "#" + hash);
}

/**
 * 获取hash值
 */
function getHashPath() {
  const href = window.location.href;
  const hashIndex = href.indexOf("#");
  return hashIndex === -1 ? "" : href.substring(hashIndex + 1);
}

/**
 * 创建hashHistory
 */
function CreateHashHistory(props = {}) {
  // 浏览器全局的history
  const globalHistory = window.history;
  const { getUserConfirmation = getConfirmation, hashType = "slash" } = props;
  // basename
  const basename = props.basename
    ? stripTrailingSlash(addLeadingSlash(props.basename))
    : "";
  const { encodePath, decodePath } = HashPathCoders[hashType];

  // 声明发布订阅体系
  const transitionManager = createTransitionManager();

  /**
   * 创建Location
   */
  function getDOMLocation() {
    let path = decodePath(getHashPath());

    // 如果有basename,则需要去除basename
    if (basename) {
      path = stripBasename(path, basename);
    }

    return createLocation({ path });
  }
  const initialLocation = getDOMLocation(); // 初始的location
  let allPaths = [createPath(initialLocation)]; // history栈
  let forceNextPop = false; //
  let ignorePath = null; // 可以忽略的path

  // Public interface

  function createHref(location) {
    const baseTag = document.querySelector("base");
    let href = "";
    if (baseTag && baseTag.getAttribute("href")) {
      href = stripHash(window.location.href);
    }
    return href + "#" + encodePath(basename + createPath(location));
  }

  /**
   * 设置history的值
   */
  function setState(nextState) {
    Object.assign(history, nextState);
    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  // 跳转到指定
  function go(index) {
    globalHistory.go(index);
  }

  // 回退
  function goBack() {
    go(-1);
  }

  // 前进
  function goForward() {
    go(1);
  }

  /**
   * 入栈新的页面
   * @param {*} path
   */
  function push(path, state) {
    const action = actionType.push;
    const location = createLocation({ path, state });
    transitionManager.confirmTransitionTo(
      location,
      action,
      getUserConfirmation,
      (ok) => {
        // 点击确定
        if (!ok) {
          return;
        }
        const path = createPath(location);
        const encodedPath = encodePath(basename + path);
        const hashChanged = getHashPath() !== encodedPath;
        console.log(hashChanged);
        if (hashChanged) {
          ignorePath = path;
          pushHashPath(encodedPath);
          const prevIndex = allPaths.lastIndexOf(createPath(history.location));
          const nextPaths = allPaths.slice(0, prevIndex + 1);
          nextPaths.push(path);
          allPaths = nextPaths;
          setState({ action, location });
        } else {
          // TODO 为啥不改变的时候还需要通知监听处理
          setState();
        }
      }
    );
  }

  /**
   * 替换当前栈
   * @param {*} path
   */
  function replace(path, state) {
    const action = actionType.replace;
    const location = createLocation({ path, state });
    transitionManager.confirmTransitionTo(
      location,
      action,
      getUserConfirmation,
      (ok) => {
        // 点击确定
        if (!ok) {
          return;
        }
        const path = createPath(location);
        const encodedPath = encodePath(basename + path);
        const hashChanged = getHashPath() !== encodedPath;

        if (hashChanged) {
          ignorePath = path;
          replaceHashPath(encodedPath);
        }
        const prevIndex = allPaths.lastIndexOf(createPath(history.location));
        if (prevIndex > -1) {
          allPaths[prevIndex] = path;
        }
        setState({ action, location });
      }
    );
  }

  /**
   * hash变化
   */
  function handleHashChange(hashchangeEvent) {
    const path = getHashPath();
    const encodedPath = encodePath(path);
    if (path !== encodedPath) {
      // 保证hash的基本格式正确，replaceHashPath不会触发任何通知，一般初始化的时候才会触发
      replaceHashPath(encodedPath);
    } else {
      const location = getDOMLocation();
      const prevLocation = history.location;
      if (forceNextPop && locationsAreEqual(location, prevLocation)) return;
      if (ignorePath === createPath(location)) return;
      ignorePath = null;
      handlePop(location);
    }
  }

  /**
   * 提示
   */
  function handlePop(location) {
    const action = actionType.pop;
    transitionManager.confirmTransitionTo(
      location,
      action,
      getUserConfirmation,
      (ok) => {
        if (ok) {
          // 提示点击确定的时候，将操作值同步到history
          setState({ action, location });
        } else {
          // 取消则将location的hash会到上一个值
          revertPop(location);
        }
      }
    );
  }

  /**
   * 返回pop
   */
  function revertPop(fromLocation) {
    // 要恢复到的location
    const toLocation = history.location;
    let toIndex = allPaths.lastIndexOf(createPath(toLocation));
    console.log("toIndex", toIndex, allPaths);
    if (toIndex < 0) {
      toIndex = 0;
    }
    let fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    console.log("fromIndex", fromIndex);
    if (fromIndex < 0) {
      fromIndex = 0;
    }
    const delta = toIndex - fromIndex;
    console.log(toIndex, fromIndex, delta);
    // TODO 这个感觉永远执行不到
    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  let listenerCount = 0;

  /**
   * 检查DOM是否监听，listenerCount 为 1 的时候，全局注册hash的监听事件， listenerCount 为 0 的时候，移除全局的监听事件
   * @param {Number} delta
   */
  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  let isBlocked = false;

  /**
   * 提示
   * 设置block的时候，需要默认注册监听事件
   * @param {*} prompt
   */
  function block(prompt = false) {
    // 设置提示内容，prompt可以是function（传location，action），也可以是string
    const unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return () => {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    // 注册订阅者
    const unListen = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return () => {
      // 取消订阅
      unListen();
      checkDOMListeners(-1);
    };
  }

  // history 对象
  let history = {
    // 全局的history的length
    length: globalHistory.length, // 浏览器历史栈中的长度
    // 当前的操作
    action: actionType.pop,
    // location 对象
    location: initialLocation, // locationObj 对象结构为 {pathname:"",search:"",hash:""}
    // 创建href链接
    createHref,
    // history操作
    push, // 添加插入
    replace, // 替换
    go, // 跳转到
    goBack, // 回退
    goForward, // 前进
    // 提示
    block,
    // 监听方法
    listen,
  };
  return history;
}

export default CreateHashHistory;
