import {
  createEventList,
  stripTrailingSlash,
  addLeadingSlash,
} from "./utils/index";
import {
  BeforeUnloadEventType,
  HashChangeEventType,
  PopStateEventType,
  actionType,
} from "../config/index";
import {
  createPath,
  createLocation,
  getBaseHref,
} from "./utils/LocationUtils";
/**
 * 创建history路由
 * @param {*} options
 */
export default function createBrowserHistory(options = {}) {
  const { window = document.defaultView, isShowBeforeUnload = false } = options;

  const basename = options.basename
    ? stripTrailingSlash(addLeadingSlash(options.basename))
    : "";

  // 全局history
  const globalHistory = window.history;

  // 订阅者队列
  const listeners = createEventList({
    removeCallback: removePopStateEventListenFunc,
  });
  // 提示事件队列
  const blockers = createEventList({
    isNeedResult: true,
    removeCallback: removePopStateEventListenFunc,
  });

  let action = actionType.pop;
  let location = createLocation({
    path: window.location,
    basename,
    state: globalHistory.state,
  });

  /**
   * PopStateEvent 监听方法
   */
  function popStateEventListenFunc(event) {
    let nextLocation = createLocation({
      path: window.location,
      basename,
      state: globalHistory.state,
    });
    // Ignore extraneous hashchange events.
    // 这里感觉可以使用event中的数据，但是这样写可以避免不同环境hash中数据异常的问题
    if (createPath(nextLocation) !== createPath(location)) {
      handlePop(nextLocation);
    }
  }

  function removePopStateEventListenFunc() {
    window.removeEventListener(PopStateEventType, popStateEventListenFunc);
  }

  /**
   * 设置监听,只有再go,back,forward三种情况下会触发
   */
  window.addEventListener(PopStateEventType, popStateEventListenFunc);

  let blockedPopTx = null;
  /**
   * hash改变出发事件
   */
  function handlePop(nextLocation) {
    if (blockedPopTx) {
      blockedPopTx = false;
      console.log("blockedPopTx", blockedPopTx);
    } else {
      const nextAction = actionType.pop;
      const sendData = {
        action: nextAction,
        location: nextLocation,
      };
      if (blockers.length) {
        let isOk = blockers.call(sendData);
        if (!isOk) {
          const lastIndex = location.state.index - nextLocation.state.index;
          // blockedPopTx = true;
          console.log("isNotOk", blockedPopTx, location, nextLocation);
          go(lastIndex);
        } else {
          console.log(location, nextLocation);
          location = nextLocation;
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
      return createPath(
        createLocation({
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
    const result = !blockers.length || blockers.call({ action, location });
    return result;
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
    const newAction = actionType.push;
    const newState = Object.assign({}, state, {
      index: location.state && location.state.index + 1,
    });
    const newLocation = createLocation({
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
        const url = getBaseHref() + basename + createPath(newLocation);
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
    const newAction = actionType.push;
    const newState = Object.assign({}, state, {
      index: location.state && location.state.index,
    });
    const newLocation = createLocation({ path, state: newState, basename });
    const sendData = {
      action: newAction,
      location: newLocation,
    };
    if (allowTo(sendData)) {
      try {
        const url = getBaseHref() + basename + createPath(newLocation);
        globalHistory.replaceState(newState, "", url);
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
      window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
    }

    return () => {
      unblock();
      if (!blockers.length) {
        window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
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
