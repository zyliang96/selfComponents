import { isFunction } from "./utils/index";

/**
 * 发布订阅者模式
 */
function createTransitionManager() {
  // 提示
  let prompt = null;

  /**
   * 设置提示
   * @param {*} nextPrompt
   */
  function setPrompt(nextPrompt) {
    prompt = nextPrompt;
    // 回调注销
    return () => {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  let isConfirm = true;
  /**
   * 导航提示执行函数
   * @param {*} location
   * @param {*} action
   * @param {*} getUserConfirmation
   * @param {*} callback
   */
  function confirmTransitionTo(
    location,
    action,
    getUserConfirmation,
    callback
  ) {
    if (prompt != null && isConfirm) {
      try {
        // 上锁
        isConfirm = false;
        const result = isFunction(prompt) ? prompt(location, action) : prompt;
        if (isFunction(getUserConfirmation)) {
          getUserConfirmation(result, callback);
        } else {
          callback(true, result);
        }
      } catch (e) {
        console.error(e);
      } finally {
        isConfirm = true;
      }
    } else {
      callback(true);
    }
  }

  // 监听者
  let listeners = [];

  /**
   * 增加监听者
   * TODO 巧妙设计，通过闭包的形式，完成事件的注册和注销
   * @param {Function} fn
   */
  function appendListener(fn) {
    // 状态管理，用于注销方法
    let isActive = true;
    function listener(...arg) {
      // 如果方法被注销了，就不能调用监听
      if (isActive) {
        fn(...arg);
      }
    }
    listeners.push(listener);

    // 返回一个function，调用则注销掉监听方法，
    return () => {
      // 双层控制，避免失效
      isActive = false;
      listeners = listeners.filter((item) => item !== listener);
    };
  }

  /**
   * 通知监听者
   * @param  {...any} arg
   */
  function notifyListeners(...arg) {
    listeners.forEach((listener) => {
      listener(...arg);
    });
  }

  return {
    setPrompt,
    confirmTransitionTo,
    appendListener,
    notifyListeners,
  };
}

export default createTransitionManager;
