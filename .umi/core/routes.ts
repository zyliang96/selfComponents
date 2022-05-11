// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/self/develop/selfComponents/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('D:/self/develop/selfComponents/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('D:/self/develop/selfComponents/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/",
        "component": require('D:/self/develop/selfComponents/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1646735352000,
          "title": "studyLibrary -  学习仓库",
          "hero": {
            "title": "学习仓库，记录学习成果",
            "desc": "<div class=\"markdown\"><p>不积跬步,无以至千里.不积小流,无以成江海</p></div>",
            "actions": [
              {
                "text": "快速了解",
                "link": "/guide"
              }
            ]
          },
          "slugs": []
        },
        "title": "studyLibrary -  学习仓库 - StudyLibrary"
      },
      {
        "path": "/guide",
        "component": require('D:/self/develop/selfComponents/docs/guide/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/index.md",
          "updatedTime": 1646735352000,
          "title": "介绍",
          "order": 1,
          "toc": "menu",
          "nav": {
            "title": "指南",
            "order": 1,
            "path": "/guide"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "测试",
              "heading": "测试"
            }
          ]
        },
        "title": "介绍 - StudyLibrary"
      },
      {
        "path": "/pcComponent/reader/electronic-reader",
        "component": require('D:/self/develop/selfComponents/packages/element/components/electronicReader/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/element/components/electronicReader/index.md",
          "updatedTime": 1646735352000,
          "componentName": "electronicReader",
          "mobile": false,
          "title": "电子阅读器",
          "nav": {
            "title": "pc组件",
            "path": "/pcComponent"
          },
          "group": {
            "title": "阅读器",
            "path": "/pcComponent/reader"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "基础使用",
              "heading": "基础使用"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "电子阅读器 - StudyLibrary"
      },
      {
        "path": "/guide",
        "component": require('D:/self/develop/selfComponents/packages/element/components/guide/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/element/components/guide/README.md",
          "updatedTime": 1646735352000,
          "slugs": [
            {
              "depth": 1,
              "value": "新用户引导组件设计方案",
              "heading": "新用户引导组件设计方案"
            },
            {
              "depth": 2,
              "value": "一、引导场景分析",
              "heading": "一引导场景分析"
            }
          ],
          "title": "新用户引导组件设计方案",
          "nav": {
            "path": "/guide",
            "title": "指南"
          }
        },
        "title": "新用户引导组件设计方案 - StudyLibrary"
      },
      {
        "path": "/pcComponent/inputWithAt/input-with-at",
        "component": require('D:/self/develop/selfComponents/packages/element/components/inputWithAt/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/element/components/inputWithAt/index.md",
          "updatedTime": 1652237164025,
          "componentName": "inputWithAt",
          "mobile": false,
          "title": "input 的@ 功能",
          "nav": {
            "title": "pc组件",
            "path": "/pcComponent"
          },
          "group": {
            "title": "input 的@ 功能",
            "path": "/pcComponent/inputWithAt"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "基础使用",
              "heading": "基础使用"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "input 的@ 功能 - StudyLibrary"
      },
      {
        "path": "/pcComponent/lego-table/lego-table",
        "component": require('D:/self/develop/selfComponents/packages/element/components/lego-table/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/element/components/lego-table/index.md",
          "updatedTime": 1648032777000,
          "componentName": "lego-table",
          "mobile": false,
          "title": "可搭建表格",
          "nav": {
            "title": "pc组件",
            "path": "/pcComponent"
          },
          "group": {
            "title": "可搭建表格",
            "path": "/pcComponent/lego-table"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "基础使用",
              "heading": "基础使用"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "可搭建表格 - StudyLibrary"
      },
      {
        "path": "/pcComponent/reader",
        "meta": {},
        "exact": true,
        "redirect": "/pcComponent/reader/electronic-reader"
      },
      {
        "path": "/pcComponent",
        "meta": {},
        "exact": true,
        "redirect": "/pcComponent/inputWithAt"
      },
      {
        "path": "/pcComponent/inputWithAt",
        "meta": {},
        "exact": true,
        "redirect": "/pcComponent/inputWithAt/input-with-at"
      },
      {
        "path": "/pcComponent/lego-table",
        "meta": {},
        "exact": true,
        "redirect": "/pcComponent/lego-table/lego-table"
      }
    ],
    "title": "StudyLibrary",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
