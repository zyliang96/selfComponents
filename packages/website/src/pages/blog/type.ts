// 菜单类型
export enum MenuTypeEnum {
    "article" = "article", // 文章
    "column" = "column", // 专栏
}
// 文章分类类型
export enum ArticleClassifyEnum {
    "javaScript" = "javaScript",
    "css" = "css",
    "html" = "html",
    "node" = "node",
    "webpack" = "webpack",
    "compilers" = "编译原理",
    "dataStructure" = "数据结构",
}

// 菜单类型
export interface MenuItemObject {
    title: string; // 文章title
    description?: string; // 描述
    time?: string; // 时间
    classify?: Array<ArticleClassifyEnum>; // 分类
    key?: string; // 详情页获取key
    type?: MenuTypeEnum | string; // 类型
    children?: Array<MenuItemObject>; // 专栏下的文章列表
    detail?: any; // 对应的文章
}

// 类型列表
export interface BlogTypeItem {
    type:MenuTypeEnum;
    name:string;
}

export interface ObjectData {
    [name: string]: any;
}