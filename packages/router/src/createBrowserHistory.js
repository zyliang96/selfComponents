import { actionType } from "./config/index";
import { getConfirmation } from "./utils/DOMUtils";
import { createLocation } from "./utils/LocationUtils";
import {
  addLeadingSlash,
  stripLeadingSlash,
  stripTrailingSlash,
  stripBasename,
  createPath,
} from "./utils/PathUtils";

const PopStateEvent = "popstate";

/**
 * 获取history 的 state值
 */
function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    console.error(e);
    return {};
  }
}

function createBrowserHistory(props) {
  const {} = props;
  const globalHistory = window.history;
  const {
    forceRefresh = false, // 是否强制刷新
    getUserConfirmation = getConfirmation,
  } = props;

  const basename = props.basename
    ? stripTrailingSlash(addLeadingSlash(props.basename))
    : "";

  // 声明发布订阅体系
  const transitionManager = createTransitionManager();
  const initialLocation = getDOMLocation(getHistoryState());
  let allPaths = [initialLocation.key]; // history栈
  /**
   * 创建链接
   * @param {*} location
   */
  function createHref(location) {
    return basename + createPath(location);
  }

  /**
   * 获取location信息
   */
  function getDOMLocation(historyState = {}) {
    const { key, state } = historyState;
    const { pathname, search, hash } = window.location;
    let path = pathname + search + hash;

    if (basename) {
      path = stripBasename(path, basename);
    }

    return createLocation({
      path,
      state,
      key,
    });
  }

  function setState(nextState) {
    Object.assign(history, nextState);
    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  //
  function push(path, state) {
    const action = actionType.push;
    const location = createLocation({
      path,
      state,
      currentLocation: history.location,
    });

    transitionManager.confirmTransitionTo(
      location,
      action,
      getUserConfirmation,
      (ok) => {
        if (!ok) return;

        const href = createHref(location);
        const { key, state } = location;
        globalHistory.pushState({ key, state }, null, href);
        if (forceRefresh) {
          window.location.href = href;
        } else {
          const prevIndex = allPaths.indexOf(history.location.key);
          const nextKeys = allKeys.slice(0, prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action, location });
        }
      }
    );
  }

  function replace(path, state) {
    const action = "REPLACE";
    const location = createLocation(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(
      location,
      action,
      getUserConfirmation,
      (ok) => {
        if (!ok) return;

        const href = createHref(location);
        const { key, state } = location;

        globalHistory.replaceState({ key, state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          const prevIndex = allPaths.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action, location });
        }
      }
    );
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  /**
   * history修改
   * @param {*} event
   */
  function handlePopState(event) {
    handlePop(getDOMLocation(event.state));
  }

  function handlePop(location){
    
  }

  let listenerCount = 0;
  function checkDOMListeners(delta) {
    listenerCount = +delta;
    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
    }
  }

  /**
   * 监听方法
   * @param {*} listener
   */
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
    // block,
    // 监听方法
    listen,
  };

  return history;
}
