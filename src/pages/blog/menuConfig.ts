import {
    MenuItemObject,
    ArticleClassifyEnum,
    MenuTypeEnum,
    BlogTypeItem,
} from "./type";
const list: Array<MenuItemObject> = [
    {
        title: "测试文章",
        description: "这是文章的描述", // 描述
        time: "2021-03-24", // 时间
        classify: [ArticleClassifyEnum.javaScript, ArticleClassifyEnum.css], // 分类
        key: "test_article", // 详情页获取key
        type: MenuTypeEnum.article, // 类型
        detail: require("./article/test.md"), // 对应的文章
    },
    {
        title: "测试专栏",
        description: "这是专栏的描述", // 描述
        time: "2021-03-24", // 时间
        classify: [ArticleClassifyEnum.javaScript, ArticleClassifyEnum.css], // 分类
        key: "test_column", // 详情页获取key
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
                key: "test_column_one", // 详情页获取key
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
let classifyTotalList: Array<number> = []; // 分类计数
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
                    const index = classifyList.indexOf(item);
                    if (index < 0) {
                        classifyList.push(item);
                        classifyTotalList.push(0);
                    } else {
                        classifyTotalList[index]++;
                    }
                });
            }
            if (Array.isArray(item.children)) {
                getDetailList(item.children);
            }
        });
    }
}
getDetailList(list);

// 根据时间排序
function sortByTime(list: Array<MenuItemObject>) {
    return list.sort((a, b) => {
        const aTime = new Date(a.time).getTime();
        const bTime = new Date(b.time).getTime();
        return aTime - bTime;
    });
}

const menuList: Array<BlogTypeItem> = [
    {
        type: MenuTypeEnum.article,
        name: "文章",
    },
    {
        type: MenuTypeEnum.column,
        name: "专栏",
    },
];

export default {
    articleList: sortByTime(articleList), // 文章列表
    columnList: sortByTime(columnList), // 专栏列表
    classifyList, // 分类列表
    classifyTotalList, // 分类列表计数
    menuList,
};
