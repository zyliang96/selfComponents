import React, { useState, useEffect } from "react";
import { observerType } from "./const/config";
import { isFunction, isObject, isArray } from "./utils/index";

// 默认的错误提示
const defaultErrorMessage = {
  isError: false, // 是否错误
  message: undefined, // 错误提示信息
};
/**
 * 成员装饰器
 * 表单对象的装饰器,主要是包装一层，将组建对外展示为非受控的模式，在内部实际上是受控的模式
 * @param {*} Component react 组建
 * @param {object} state 组建的路径，或者说是值在form表单中的位置
 */
export function itemDecorator(Component, state, observer) {
  if (!Component) return null;
  return function (props) {
    const [value, setValue] = useState(() => {
      if (state && typeof state.defaultValue !== "undefined") {
        return state.defaultValue;
      }
      return undefined;
    }); // 值
    const [errorMessage, setErrorMessage] = useState(defaultErrorMessage); // 是否错误
    const [componentsPropsState, setComponentsPropsState] = useState(() => {
      let result = {};
      if (
        state &&
        state["x-components-props"] &&
        isObject(state["x-components-props"])
      ) {
        const obj = state["x-components-props"];
        Object.keys(obj).map((key) => {
          if (key !== "value" && key !== "onChange") {
            if (isObject(obj[key])) {
              result[key] = Object.assign({}, obj[key]);
            } else if (isArray(obj[key])) {
              result[key] = [].concat(obj[key]);
            } else {
              result[key] = obj[key];
            }
          }
        });
      }
      return result;
    }); // 被装饰组件传入的props中

    /**
     * 注册组件上所有on开头的事件
     */
    const registDomOnFunc = () => {
      const props = Object.assign({}, Component.props);
      const reg = /^on\s*/;
      Object.keys(props).forEach((key) => {
        if (reg.test(key)) {
          observerType.subscribe(key, {
            path: state.path,
            callback: registDomCallback,
          });
          props[key] = (res) => {
            props[key]();
            observerType.publish(key, {
              path: state.path,
              value: res,
            });
          };
        }
      });
    };

    /**
     * on开头事件注册回调
     */
    const registDomCallback = (data) => {};

    /**
     * 修改componentsProps的方法
     * @param {*} data
     */
    const componentsPropsStateChange = (data) => {
      const result = Object.assign({}, componentsPropsState, data);
      setComponentsPropsState(result);
    };
    /**
     * 重置数值
     */
    const resetValue = (data) => {
      setValue(data);
    };

    /**
     * 校验错误
     */
    const validateDataError = (data) => {
      setErrorMessage(data);
    };

    // 数据修改
    const valueChange = (e) => {
      let value = undefined;
      if (e === undefined || e === null) {
        value = e;
      } else {
        value = e.target
          ? e.target.value !== undefined
            ? e.target.value
            : undefined
          : e;
      }      
      setValue(value);
      // 发布更改
      observer.publish(observerType.valueChange, {
        path: state.path,
        value,
        props: componentsPropsState,
        index: state.arrayIndex,
      });
      
    };

    useEffect(() => {
      // 注册重置点击时的订阅
      observer.subscribe(observerType.reset, {
        path: state.path,
        callback: resetValue,
      });
      // 校验失败时触发
      observer.subscribe(observerType.validateDataError, {
        path: state.path,
        callback: validateDataError,
      });
      // 注册修改参数的订阅
      observer.subscribe(observerType.componentPropsChange, {
        path: state.path,
        callback: componentsPropsStateChange,
      });
      // 注册组件上on事件的订阅
      registDomOnFunc();
    }, []);
    return (
      <div className="universal-form-item">
        <Component
          {...componentsPropsState}
          value={value}
          onChange={valueChange}
        />
        {errorMessage.isError && (
          <div className="universal-form-error">{errorMessage.message}</div>
        )}
      </div>
    );
  };
}

/**
 * 容器装饰器
 * 表单的装饰器
 * @param {*} Component
 */
export function containerDecorator(Component, type) {
  const ContainerComponents = (props, ref) => {
    const [formParams, setFormParams] = useState(() => {
      if (type && type.toLowerCase() === "array") {
        return [];
      }
      return {};
    }); // 表单对象
    const [rulesData, setRulesData] = useState({}); // 校验规则

    /**
     * formParams修改
     * data 应该包含了两个参数，一个是path，一个是
     */
    const formParamsChange = (data) => {
      if (type && type.toLowerCase() === "array") {
      }
    };

    useEffect(() => {
      // observer.regist(observerType.reset, {
      //   path: '',
      //   func: formParamsChange,
      // });
    }, []);

    return <Component />;
  };
  return React.forwardRef(ContainerComponents);
}
