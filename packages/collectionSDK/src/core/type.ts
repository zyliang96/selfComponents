import { RouterTypeEnum } from "./config";
/**
 * Ajax监听事件配置项
 */
export interface ajaxListenEventOptions {
    onDownloadProgress?: Function;
    onUploadProgress?: Function;
    callback?: Function;
}

/**
 * 请求对象结构体
 */
export interface RequestBody {
    methods: string; // 请求类型
    url: string; // 请求url链接
    data?: object | null; // post 请求中的data字段
    headers?: object | null; // 发起请求的header字段
}

/**
 * 响应对象结构体
 */
export interface ResponseBody {
    status: number; // 接口返回状态
    statusText?: string; // 状态名称
    body?: any; // 接口返回数据
    headers?: object | null; // 返回的header字段
}

/**
 * 路由信息实例
 */
export interface RouterInterface<T> {
    pathname?: string; // 路径
    href?: string; // 完整地址
    search?: string; // search内容
    hash?: string; // hash值
    query?: object; // 请求参数,实际上就是search或者hash中的数据处理后的拼装
    protocol?: T; // 协议
}

/**
 * 路由改变触发的任务实例
 */
export interface RouterTaskAction<T> {
    from?: RouterInterface<T>; // 从哪里来
    to?: RouterInterface<T>; // 到哪里去
}

/**
 * 埋点实例初始化参数
 */
export interface CollectionOptions {
    env: string; // 运行环境
    eventApp: string; // 项目名称
    appVersion: string; // 项目版本
    isSPA: boolean; // 是否SPA应用
    routerType?: RouterTypeEnum; // 路由类型
    baseName?: string; // 用于过滤信息的
}
