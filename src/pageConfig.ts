export const pageType = {
    page: "page", // 直接页面
    components: "component", // 组件，左右布局
    blog: "blog", // 博客
    otherUrl: "otherUrl", // 额外的url地址
};

export const routerConfig = [
    {
        name: "首页",
        key: "home",
        path: "/home",
        componentPath: "/home",
    },
    {
        name: "组件",
        key: "component",
        path: "component",
        componentPath: "/component/index",
    },
    {
        name: "博客",
        key: "blog",
        path: "blog",
        componentPath: "/blog/index",
    },
    {
        name: "博客文章详情页",
        key: "blog",
        path: "/blog/detail",
        componentPath: "/blog/blogDetail/index",
    },
    {
        name: "博客专栏页",
        key: "blog",
        path: "/blog/column",
        componentPath: "/blog/blogColumn/index",
    },
];

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
    {
        name: "博客",
        key: "blog",
        path: "blog",
        type: pageType.blog,
        componentPath: "/blog/index",
    },
];
