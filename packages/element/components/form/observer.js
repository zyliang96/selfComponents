/**
 * 观察者模式
 */
import { observerType } from "./const/config";

/**
 * 容器
 * 容器中的格式应该是type确定类型，然后对应path，然后path对应的数组
 * 示例：
 * {
 *      type:{
 *        path:[]
 *      }
 * }
 */

export default function () {
  let message = {};
  Object.keys(observerType).forEach((key) => {
    if (observerType[key] === observerType.componentStateChange) {
      message[observerType[key]] = [];
    } else {
      message[observerType[key]] = {};
    }
  });
  /**
   * 订阅
   * @param {*} type
   * @param {*} config
   * config 格式示例
   * {
   *    path:'',
   *    callback:()=>{}
   * }
   */

  const subscribe = (type, config) => {
    const messageObj = message[type];
    if (type === observerType.componentStateChange) {
      messageObj.push(config.callback);
      return;
    }
    if (typeof messageObj[config.path] === "undefined") {
      messageObj[config.path] = [].concat(config.callback);
    } else {
      messageObj[config.path].push(config.callback);
    }
  };
  /**
   * 销毁
   * @param {*} type
   * @param {*} config
   */
  const destroy = (type, config) => {
    const messageObj = message[type];
    if (messageObj[config.path] instanceof Array) {
      const len = messageObj[config.path].length;
      for (let i = 0; i < len; i++) {
        if (messageObj[config.path][i] === config.callback) {
          messageObj[config.path].splic(i, 1);
          break;
        }
      }
    }
  };
  /**
   * 发布
   * @param {*} type
   * @param {*} arg
   * arg 结构示例
   * {
   *    path:'',
   *    value:any
   * }
   */

  const publish = (type, arg) => {
    const messageObj = message[type];
    if (type === observerType.componentStateChange) {
      const event = {
        type,
        ...arg,
      };
      const len = messageObj.length;
      for (let i = 0; i < len; i++) {
        messageObj[i].call(this, event);
      }
      return;
    }
    if (!messageObj[arg.path]) {
      return;
    }
    const event = {
      type,
      ...arg,
    };
    const len = messageObj[arg.path].length;
    for (let i = 0; i < len; i++) {
      messageObj[arg.path][i].call(this, event);
    }
  };

  const getMessage = () => {
    return message;
  };
  return {
    subscribe,
    publish,
    destroy,
    getMessage,
  };
}
