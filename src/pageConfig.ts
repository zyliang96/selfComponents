  
export const pageType = {
	page: "page", // 直接页面
	components: "component", // 组件，左右布局
	otherUrl: "otherUrl", // 额外的url地址
};

export default [
	{
		name: "首页",
		key: "home",
		path: "/home",
		type: pageType.page,
		componentPath: "/home",
	},
	{
		name: "组件",
		key: "component",
		path: "component",
		type: pageType.components,
		componentPath: "/component/index",
	},
];