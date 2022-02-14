import React, { useState, useEffect } from "react";
import { dataTypeEnum, nolabelTypeList } from "./const";
import { observerType } from "./const/config";
import core from "./core";
import componentsConfig from "./components/config";
import { isFunction } from "./utils";
import classnames from "classnames";
import { Col, Row } from "dpl-react";
import { itemDecorator } from "./decorator";

import "./index.scss";
let lastConfig = null;
let list = [];
let observer = null;
let linkageData = null;
let coreObj = null;
let components = {}; // 组件
function renderFunc(item, observer) {
  const element = components[item["x-components"]];
  const props = item["x-components-props"];
  if (element && nolabelTypeList.indexOf(item.type) < 0) {
    const Element = itemDecorator(element, item, observer);
    return (
      <Element {...props}>{render(item.children, null, observer)}</Element>
    );
  } else {
    let arrayList = [];
    if (item.type === dataTypeEnum.array) {
      if (item.children.length < item.itemLength) {
        coreObj.analysisArrayData(
          item,
          item.properties,
          item.path,
          item.children,
          item.children.length
        );
        arrayList = item.children;
      } else if (item.children.length > item.itemLength) {
        for (let i = 0; i < item.itemLength; i++) {
          arrayList.push(item.children[i]);
        }
      } else {
        arrayList = item.children;
      }
    } else {
      arrayList = item.children;
    }

    return render(arrayList, item, observer);
  }
}

function renderLabel(item, parent, index) {
  if (!Array.isArray(item) && item.type !== dataTypeEnum.array) {
    return (
      item.label && (
        <div
          className={myFormLayoutItemClass(item["x-rules"]["required"])}
          style={{ width: item.labelWidth + "px" }}
        >
          {/* 如果是function，则调用方法，否则直接而展示 */}
          {!isFunction(item.label) && <span>{item.label}&nbsp;:&nbsp;</span>}
          {isFunction(item.label) && <span>{item.label()}&nbsp;:&nbsp;</span>}
        </div>
      )
    );
  }
  return (
    Array.isArray(item) &&
    isFunction(parent && parent.label) && (
      <div
        className={myFormLayoutItemClass()}
        style={{ width: parent.labelWidth + "px" }}
      >
        {parent.label(item, index)}
        <span>&nbsp;:&nbsp;</span>
      </div>
    )
  );
}

const myFormLayoutItemClass = (required) => {
  return classnames({
    "myform-layout-item-label": true,
    "myform-layout-item-required": required,
  });
};

export function render(config, parent, observer) {
  return (
    <Row className="myform-layout-box">
      {config.length > 0 &&
        config.map((item, index) => {
          if (!item.display && !Array.isArray(item)) {
            return;
          }
          if (item.description && isFunction(item.description)) {
            return <Col {...item.wrapperCol}>{item.description()}</Col>;
          }
          return (
            <Col
              {...item.wrapperCol}
              key={item.path}
              className="myform-layout-item"
            >
              {isFunction(item.beforelabel) && item.beforelabel()}
              {renderLabel(item, parent, index)}
              <div className="myform-layout-item-context">
                {Array.isArray(item) && render(item, null, observer)}
                {!Array.isArray(item) && renderFunc(item, observer)}
              </div>
            </Col>
          );
        })}
    </Row>
  );
}

export default function MyForm(props) {
  const { config, effect, otherComponents = {} } = props;
  components = Object.assign({}, otherComponents, componentsConfig);
  if (lastConfig !== config) {
    lastConfig = config;
    coreObj = core();
    coreObj.analysisData(config);
    list = coreObj.getLayoutData();
    observer = coreObj.getObserver();
    coreObj.createAction(effect);
  }
  const [renderList, setRenderList] = useState(list);

  useEffect(() => {
    coreObj = core();
    coreObj.analysisData(config);
    list = coreObj.getLayoutData();
    setRenderList(list);
    observer.subscribe(observerType.componentStateChange, {
      callback: ({ value }) => {
        setRenderList(value);
      },
    });
  }, [config]);

  useEffect(() => {}, []);

  return <div className="myform-box">{render(renderList, null, observer)}</div>;
}
