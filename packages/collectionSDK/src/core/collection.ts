import { CollectionOptions } from "./type";
import { routerEventInit } from "./routerEvent";
import { requestEventInit } from "./requestEvent";
import { routerTypeList, RouterTypeEnum } from "./config";

/**
 * 埋点实例
 */
class Collection {
    public options: CollectionOptions;
    constructor(options: CollectionOptions) {
        this.options = options;
        // 注册路由监听事件
        if (options.isSPA) {
            if (
                !options.routerType ||
                routerTypeList.indexOf(options.routerType) < 0
            ) {
                // 错误要分情况，参数不存在的情况下，直接保存，不需要调用栈信息，需要调用栈信息的用new Error
                throw `routerType 不能为${options.routerType}`;
            }
            routerEventInit(options);
        }
        // 注册请求监听事件
        requestEventInit(options);
    }
}
