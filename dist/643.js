(self.webpackChunkselfcomponents=self.webpackChunkselfcomponents||[]).push([[643,583,851,192,723,809],{20643:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>m});var r=t(29036),s=t.n(r),a=t(43745),i=(t(5851),t(74701)),l=t.n(i),o=t(51956),c=t(68723),u=t(87809),d=c.default.columnList.length;const m=function(e){var n=(0,a.useState)((function(){return l().parse(window.location.href.split("?")[1]).id})),t=s()(n,2),r=t[0],i=(t[1],(0,a.useState)(null)),m=s()(i,2),f=m[0],p=m[1],h=(0,a.useRef)(null),y=(0,a.useRef)(!1);return(0,a.useEffect)((function(){if(r){if(y.current=!1,h.current=null,Array.isArray(c.default.columnList)){for(var e=null,n=0;n<d;n++){var t=c.default.columnList[n];t.key===r&&(e=t)}p(e)}}else{if(h.current)return;y.current=!0,h.current=setTimeout((function(){y.current&&o.Z.back()}),800)}}),[r]),f&&a.default.createElement("div",{className:"blog-column-box"},a.default.createElement("div",{className:"column-detail-info"},a.default.createElement("div",{className:"title"},a.default.createElement("span",null,f.title)),a.default.createElement("div",{className:"classify"},Array.isArray(f.classify)&&f.classify.map((function(e){return a.default.createElement("span",{className:"classify-item",key:e},e)}))),a.default.createElement("div",{className:"description"},a.default.createElement("span",null,f.description))),a.default.createElement("div",{className:"column-article-box"},Array.isArray(f.children)&&f.children.map((function(e,n){return a.default.createElement("div",{className:"article-item",key:"".concat(e.key).concat(n),onClick:function(n){var t;(t=e).key&&(t.type===u.MenuTypeEnum.article&&o.Z.push("/blog/detail?id=".concat(t.key)),t.type===u.MenuTypeEnum.column&&o.Z.push("/blog/column?id=".concat(t.key)))}},a.default.createElement("div",{className:"title"},a.default.createElement("span",null,e.title)),a.default.createElement("div",{className:"time"},a.default.createElement("span",null,e.time)),a.default.createElement("div",{className:"classify"},Array.isArray(e.classify)&&e.classify.map((function(e){return a.default.createElement("span",{className:"classify-item"},e)}))),a.default.createElement("div",{className:"description"},a.default.createElement("span",null,e.description)))}))))}},68723:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>d});var r=t(87809),s=[{title:"测试文章",description:"这是文章的描述",time:"2021-03-24",classify:[r.ArticleClassifyEnum.javaScript,r.ArticleClassifyEnum.css],key:"test_article",type:r.MenuTypeEnum.article,detail:t(27583)},{title:"测试专栏",description:"这是专栏的描述",time:"2021-03-24",classify:[r.ArticleClassifyEnum.javaScript,r.ArticleClassifyEnum.css],key:"test_column",type:r.MenuTypeEnum.column,children:[{title:"测试文章",description:"这是文章的描述",time:"2021-03-24",classify:[r.ArticleClassifyEnum.javaScript,r.ArticleClassifyEnum.css],key:"test_column_one",type:r.MenuTypeEnum.article,detail:t(51192)}]}],a=[],i=[],l=[],o=[];function c(e){return e.sort((function(e,n){return new Date(e.time).getTime()-new Date(n.time).getTime()}))}!function e(n){Array.isArray(n)&&n.forEach((function(n){switch(n.type){case r.MenuTypeEnum.article:a.push(n);break;case r.MenuTypeEnum.column:i.push(n)}Array.isArray(n.classify)&&n.classify.forEach((function(e){var n=l.indexOf(e);n<0?(l.push(e),o.push(0)):o[n]++})),Array.isArray(n.children)&&e(n.children)}))}(s);var u=[{type:r.MenuTypeEnum.article,name:"文章"},{type:r.MenuTypeEnum.column,name:"专栏"}];const d={articleList:c(a),columnList:c(i),classifyList:l,classifyTotalList:o,menuList:u}},87809:(e,n,t)=>{"use strict";var r,s;t.r(n),t.d(n,{MenuTypeEnum:()=>r,ArticleClassifyEnum:()=>s}),function(e){e.article="article",e.column="column"}(r||(r={})),function(e){e.javaScript="javaScript",e.css="css",e.html="html",e.node="node",e.webpack="webpack",e.compilers="编译原理",e.dataStructure="数据结构"}(s||(s={}))},67494:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var r=t(86043),s=t.n(r)()((function(e){return e[1]}));s.push([e.id,"",""]);const a=s},27583:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});const r="## Button 按钮\r\n\r\nDisplays important alert messages.\r\n\r\n### Basic usage\r\n\r\n\r\n![测试](/images/noExpert.png)\r\n\r\nAlert components are non-overlay elements in the page that does not disappear automatically.\r\n\r\n:::demo Alert provides 4 types of themes defined by `type`, whose default value is `info`.\r\n\r\n```js\r\nfunction ChooseSeatDemo(props) {\r\n    console.log(11111)\r\n}\r\n```\r\n\r\n:::\r\n\r\n### Theme\r\n\r\nAlert provide two different themes, `light` and `dark`.\r\n\r\n:::demo Set `effect` to change theme, default is `light`.\r\n\r\n```js\r\nfunction ChooseSeatDemo(props) {\r\n    const [visible, setVisible] = React.useState(false);\r\n\r\n    const handlePassRoomSeat = (arr) => {\r\n        console.log(arr);\r\n        setVisible(false);\r\n    };\r\n    const handleHideModal = () => {\r\n        setVisible(false);\r\n    };\r\n\r\n    return (\r\n        <div>\r\n            <div>测试问题</div>\r\n        </div>\r\n    );\r\n}\r\n```\r\n\r\n:::\r\n\r\n### Customizable close button\r\n\r\nCustomize the close button as texts or other symbols.\r\n\r\n:::demo Alert allows you to configure if it's closable. The close button text and closing callbacks are also customizable. `closable` attribute decides if the component can be closed or not. It accepts `boolean`, and the default is `true`. You can set `close-text` attribute to replace the default cross symbol as the close button. Be careful that `close-text` must be a string. `close` event fires when the component is closed.\r\n\r\n```js\r\nfunction ChooseSeatDemo(props) {\r\n    const [visible, setVisible] = React.useState(false);\r\n\r\n    const handlePassRoomSeat = (arr) => {\r\n        console.log(arr);\r\n        setVisible(false);\r\n    };\r\n    const handleHideModal = () => {\r\n        setVisible(false);\r\n    };\r\n\r\n    return (\r\n        <div>\r\n            <div>测试问题</div>\r\n        </div>\r\n    );\r\n}\r\n```\r\n\r\n:::\r\n\r\n### With icon\r\n\r\nDisplaying an icon improves readability.\r\n\r\n:::demo Setting the `show-icon` attribute displays an icon that corresponds with the current Alert type.\r\n\r\n```js\r\nfunction ChooseSeatDemo(props) {\r\n    const [visible, setVisible] = React.useState(false);\r\n\r\n    const handlePassRoomSeat = (arr) => {\r\n        console.log(arr);\r\n        setVisible(false);\r\n    };\r\n    const handleHideModal = () => {\r\n        setVisible(false);\r\n    };\r\n\r\n    return (\r\n        <div>\r\n            <div>测试问题</div>\r\n        </div>\r\n    );\r\n}\r\n```\r\n\r\n:::\r\n\r\n## Centered text\r\n\r\nUse the `center` attribute to center the text.\r\n\r\n:::demo\r\n\r\n```js\r\nfunction ChooseSeatDemo(props) {\r\n    const [visible, setVisible] = React.useState(false);\r\n\r\n    const handlePassRoomSeat = (arr) => {\r\n        console.log(arr);\r\n        setVisible(false);\r\n    };\r\n    const handleHideModal = () => {\r\n        setVisible(false);\r\n    };\r\n\r\n    return (\r\n        <div>\r\n            <div>测试问题</div>\r\n        </div>\r\n    );\r\n}\r\n```\r\n\r\n:::\r\n\r\n### With description\r\n\r\nDescription includes a message with more detailed information.\r\n\r\n:::demo Besides the required `title` attribute, you can add a `description` attribute to help you describe the alert with more details. Description can only store text string, and it will word wrap automatically.\r\n\r\n```js\r\nfunction ChooseSeatDemo(props) {\r\n    const [visible, setVisible] = React.useState(false);\r\n\r\n    const handlePassRoomSeat = (arr) => {\r\n        console.log(arr);\r\n        setVisible(false);\r\n    };\r\n    const handleHideModal = () => {\r\n        setVisible(false);\r\n    };\r\n\r\n    return (\r\n        <div>\r\n            <div>测试问题</div>\r\n        </div>\r\n    );\r\n}\r\n```\r\n\r\n:::\r\n\r\n### With icon and description\r\n\r\n:::demo At last, this is an example with both icon and description.\r\n\r\n```js\r\nfunction ChooseSeatDemo(props) {\r\n    const [visible, setVisible] = React.useState(false);\r\n\r\n    const handlePassRoomSeat = (arr) => {\r\n        console.log(arr);\r\n        setVisible(false);\r\n    };\r\n    const handleHideModal = () => {\r\n        setVisible(false);\r\n    };\r\n\r\n    return (\r\n        <div>\r\n            <div>测试问题</div>\r\n        </div>\r\n    );\r\n}\r\n```\r\n\r\n:::\r\n\r\n### Attributes\r\n\r\n| Attribute   | Description                                                | Type    | Accepted Values            | Default |\r\n| ----------- | ---------------------------------------------------------- | ------- | -------------------------- | ------- |\r\n| title       | title                                                      | string  | —                          | —       |\r\n| type        | Component type                                             | string  | success/warning/info/error | info    |\r\n| description | Descriptive text. Can also be passed with the default slot | string  | —                          | —       |\r\n| closable    | If closable or not                                         | boolean | —                          | true    |\r\n| center      | Whether to center the text                                 | boolean | —                          | false   |\r\n| close-text  | Customized close button text                               | string  | —                          | —       |\r\n| show-icon   | If a type icon is displayed                                | boolean | —                          | false   |\r\n| effect      | Choose theme                                               | string  | light/dark                 | light   |\r\n\r\n### Slot\r\n\r\n| Name  | Description                |\r\n| ----- | -------------------------- |\r\n| —     | description                |\r\n| title | content of the Alert title |\r\n\r\n### Events\r\n\r\n| Event Name | Description                | Parameters |\r\n| ---------- | -------------------------- | ---------- |\r\n| close      | fires when alert is closed | —          |\r\n"},51192:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});const r=""},5851:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i});var r=t(93379),s=t.n(r),a=t(67494);s()(a.Z,{insert:"head",singleton:!1});const i=a.Z.locals||{}}}]);