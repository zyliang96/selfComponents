import {
  BeforeUnloadEventType,
  HashChangeEventType,
  PopStateEventType,
  actionType,
} from "./config/index";
import { createLocation } from "./utils/LocationUtils";
import { createEventList } from "./utils/index";

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

function CreateHashHistory(options) {
  const { window = document.defaultView } = options;
  // 公共的history
  const globalHistory = window.history;

  // 当前操作
  let action = actionType.pop;
  // 当前location信息
  let location = createLocation(window.location.hash.substr(1));

  let listeners = createEventList();
  let blockers = createEventList();

  /**
   * history跳转方法
   */
  function go(index) {
    globalHistory.go(index);
  }

  /**
   * 注册订阅事件
   */
  function listen(listener) {
    return listeners.push(listener);
  }

  /**
   * beforeunload 事件处理
   */
  function promptBeforeUnload(event) {
    // Cancel the event as stated by the standard.
    event.preventDefault();
    // Chrome requires returnValue to be set.
    event.returnValue = "";
  }

  /**
   * 注册路由弹窗提示事件
   */
  function block(blocker) {
    const unlock = blockers.push(blocker);
    if (blockers.length === 1) {
      window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
    }

    return () => {
      unlock();
      if (!blockers.length) {
        window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
      }
    };
  }

  return {
    // 历史栈操作方法
    push,
    replace,
    go,
    back() {
      go(-1);
    },
    forward() {
      go(1);
    },
    // 监听器方法
    listen,
    // 路由切换的通知提示
    block,
    // 当前路由的基本信息
    get action() {
      return action;
    },
    get location() {
      return location;
    },
    // 创建链接
    createHref,
  };
}
