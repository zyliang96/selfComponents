export const pageType = {
    page:'page', // 直接页面
    components:'components', // 组件，左右布局
    otherUrl:'otherUrl', // 额外的url地址
}


export default [
  {
    name: "首页",
    key: "home",
    type:pageType.page,
    component: require('./pages/home')
  },
  {
    name: "组件",
    key: "components",
    type:pageType.components,
    children: [
      {
        name: "通用",
        key: "component",
        children: [
            {
                name: "button",
                key: "button",
                // component: require("./doc/button"),
              },
        ],
      },
    ],
  },
];
