/**
 * create by zyliang on 2020-05-06
 * 第一次尝试
 */

import { dataTypeEnum } from "./const";
import { defaultItemScheam } from "./render";
import lodash from "lodash";
import observerCreator from "./observer";
import { observerType } from "./const/config";
import { resolvePath } from "./path";
import { isFunction } from "./utils";
function core() {
  let layoutData = []; // 布局
  let formationData = null; // 数据结构对象
  let linkageData = null; // 联动对象
  let storeState = {}; // store数据
  let rules = []; // 需要唯一性判断的
  let noNameFormItemIndex = 0; // 没有
  const observer = observerCreator();
  /**
   * 设置FormationData，并且返回新的path
   */
  const setFormationDataAndGetPath = (key, path, item, layout, arrayIndex) => {
    const newPath = path ? path + "." + key : key;
    item.children = [];
    item.path = newPath;
    linkageData[newPath] = Object.assign({}, defaultItemScheam, item, {
      arrayIndex,
    });
    // 这个只能写在这个地方，不能提到全局，因为这里利用了引用类型的特点，否则数据无法一同变化
    layout.push(linkageData[newPath]);
    return newPath;
  };
  /**
   * 解析对象数据
   */
  const analysisObjectData = (list = [], path = "", layout, arrayIndex) => {
    list.forEach((item) => {
      let newPath = undefined;
      switch (item.type) {
        case dataTypeEnum.object:
          // 如果既没有key又没有name，那么就跳过
          if (!item.name && !item.key) break;
          // 如果没有设置name，则默认将key作为name
          newPath = setFormationDataAndGetPath(
            item.name || item.key,
            path,
            item,
            layout
          );
          analysisObjectData(item.properties, newPath, item.children);
          break;
        case dataTypeEnum.array:
          if (!item.name && !item.key) break;
          newPath = setFormationDataAndGetPath(
            item.name || item.key,
            path,
            item,
            layout
          );
          analysisArrayData(item, item.properties, newPath, item.children);
          break;
        case dataTypeEnum.children:
          // children类型没有name，则直接跳过，
          if (!item.name) break;
          newPath = setFormationDataAndGetPath(
            item.name,
            path,
            item,
            layout,
            arrayIndex
          );
          analysisObjectData(item.properties, newPath, item.children);
          break;
        default:
          if (!item.name && !item.key) {
            setFormationDataAndGetPath(
              `NO_NAME_FORM_ITEM_$${noNameFormItemIndex}`,
              path,
              item,
              layout
            );
            noNameFormItemIndex++;
            break;
          }
          newPath = setFormationDataAndGetPath(
            item.name || item.key,
            path,
            item,
            layout,
            arrayIndex
          );
          // 设置校验
          const rule = linkageData[newPath]["x-rules"];
          linkageData[newPath].display &&
            rule.required &&
            rules.push(linkageData[newPath]);
          // 设置初始值
          if (typeof item.defaultValue !== "undefined") {
            storeState = lodash.set(storeState, newPath, item.defaultValue);
          }
          observer.subscribe(observerType.valueChange, {
            path: newPath,
            callback: ({ value }) => {
              linkageData[newPath].defaultValue = value;
              lodash.set(storeState, newPath, value);
            },
          });
      }
    });
  };

  /**
   * 解析数组对象
   */
  const analysisArrayData = (state, list = [], path = "", layout, index) => {
    let len = state.itemLength || 1;
    if (index) {
      while (index < state.itemLength) {
        layout[index] = [];
        const newPath = path + "[" + index + "]";
        analysisObjectData(list, newPath, layout[index], index);
        index++;
      }
      return;
    }
    for (let i = 0; i < len; i++) {
      layout[i] = [];
      const newPath = path + "[" + i + "]";
      analysisObjectData(list, newPath, layout[i], i);
    }
  };

  // 解析数组
  const analysisData = (data) => {
    formationData = data;
    switch (data.type) {
      case dataTypeEnum.object:
        linkageData = {};
        analysisObjectData(data.properties, "", layoutData);
        break;
      case dataTypeEnum.array:
        linkageData = [];
        analysisArrayData(data, data.properties, "", layoutData);
        break;
    }
    console.log("linkageData", linkageData);
    console.log("storeState", storeState);
    console.log("rules", rules);
    console.log("layoutData", layoutData);
  };

  function onFieldValueChange(path) {
    const list = resolvePath(path, linkageData, formationData);
    return {
      subscribe: (callback) => {
        list.forEach((item) => {
          observer.subscribe(observerType.valueChange, {
            path: item,
            callback: callback,
          });
        });
      },
    };
  }

  function setFieldState(path, callback) {
    const list = resolvePath(path, linkageData, formationData);
    list.forEach((item) => {
      isFunction(callback) && callback(linkageData[item]);
    });
    console.log([].concat(...layoutData));
    observer.publish(observerType.componentStateChange, {
      value: [].concat(...layoutData),
    });
  }

  const createAction = (callback) => {
    const funcObj = {
      onFieldValueChange,
      setFieldState,
    };
    isFunction(callback) && callback(funcObj);
  };

  // 获取布局数据
  const getLayoutData = () => {
    return layoutData;
  };
  // 获取表单数据对象结构
  const getFormationData = () => {
    return formationData;
  };

  const getLinkageData = () => {
    return linkageData;
  };
  // 获取store
  const getStoreState = () => {
    return storeState;
  };
  // 获取校验
  const getRules = () => {
    return rules;
  };
  // 获取观察者对象
  const getObserver = () => {
    return observer;
  };
  return {
    analysisData,
    createAction,
    getLayoutData,
    getFormationData,
    getLinkageData,
    getStoreState,
    getRules,
    getObserver,
    analysisArrayData,
  };
}

export default core;
