import { MenuItemObject, ArticleClassifyEnum, MenuTypeEnum } from "./type";
const menuList: Array<MenuItemObject> = [
    {
        title: "测试文章",
        description: "这是文章的描述", // 描述
        time: "2021-03-24", // 时间
        classify: [ArticleClassifyEnum.javaScript, ArticleClassifyEnum.css], // 分类
        key: "1", // 详情页获取key
        type: MenuTypeEnum.article, // 类型
        detail: require("./article/test.md"), // 对应的文章
    },
    {
        title: "测试专栏",
        description: "这是专栏的描述", // 描述
        time: "2021-03-24", // 时间
        classify: [ArticleClassifyEnum.javaScript, ArticleClassifyEnum.css], // 分类
        key: "1", // 详情页获取key
        type: MenuTypeEnum.column, // 类型
        children: [
            {
                title: "测试文章",
                description: "这是文章的描述", // 描述
                time: "2021-03-24", // 时间
                classify: [
                    ArticleClassifyEnum.javaScript,
                    ArticleClassifyEnum.css,
                ], // 分类
                key: "1", // 详情页获取key
                type: MenuTypeEnum.article, // 类型
                detail: require("./column/test/test.md"), // 对应的文章
            },
        ],
    },
];
//处理菜单
let articleList: Array<MenuItemObject> = []; // 文章列表
let columnList: Array<MenuItemObject> = []; // 专栏列表
let classifyList: Array<ArticleClassifyEnum> = []; // 分类列表
function getDetailList(list: Array<MenuItemObject>) {
    if (Array.isArray(list)) {
        list.forEach((item) => {
            switch (item.type) {
                case MenuTypeEnum.article:
                    articleList.push(item);
                    break;
                case MenuTypeEnum.column:
                    columnList.push(item);
                    break;
                default:
                    break;
            }
            if (Array.isArray(item.classify)) {
                item.classify.forEach((item) => {
                    if (classifyList.indexOf(item) < 0) {
                        classifyList.push(item);
                    }
                });
            }
            if (Array.isArray(item.children)) {
                getDetailList(item.children);
            }
        });
    }
}
getDetailList(menuList);

// 根据时间排序
function sortByTime(list: Array<MenuItemObject>) {
    return list.sort((a, b) => {
        const aTime = new Date(a.time).getTime();
        const bTime = new Date(b.time).getTime();
        return aTime - bTime;
    });
}

export default {
    articleList: sortByTime(articleList), // 文章列表
    columnList: sortByTime(columnList), // 专栏列表
    classifyList, //
};
