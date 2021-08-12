/**
 * 路由处理逻辑
 */
import { RouterInterface, RouterTaskAction } from "./type";
import qs from "qs";
import { getConfig } from "./init";
import {RouterTypeEnum} from './config'

/**
 * 协议类型
 */
export enum ProtocolEnum {
    HTTP = "http",
    HTTPS = "https",
}

export enum HistoryStateEnum {
    PushState = "pushState", // 入栈
    ReplaceState = "replaceState", // 替换
    Back = "back", // 回退
    Forward = "forward", // 前进
    Go = "go", // 跳转
}

const defaultRouterInterface = {
    pathname: "", // 路径
    href: "", // 完整地址
    search: "", // search内容
    hash: "", // hash值
    query: {}, // 请求参数,实际上就是search或者hash中的数据处理后的拼装
    protocol: ProtocolEnum.HTTP, // 请求协议
};

/**
 * 根据url生成路由信息实例
 * @param url
 */
function getRouterInterfaceByUrl(
    url: string,
    routerType: RouterTypeEnum
): RouterInterface<ProtocolEnum> {
    let result: RouterInterface<ProtocolEnum> = Object.assign(
        {},
        defaultRouterInterface
    );
    // TODO 这里获取配置信息，后续需要写到了再考虑怎么玩
    const basename = getConfig("basename");
    try {
        const urlBaseInfo = new URL(url);
        const searchParams = qs.parse(
            urlBaseInfo.search.substring(1, urlBaseInfo.search.length)
        );
        const hashParamsString = urlBaseInfo.hash.substring(
            urlBaseInfo.hash.indexOf("?") + 1
        );
        let hashParams: object = {};
        if (hashParamsString !== urlBaseInfo.hash) {
            hashParams = qs.parse(hashParamsString);
        }
        // 这里存在一个覆盖的情况，这个得使用者来保证了，暂时不做处理
        result.query = Object.assign({}, searchParams, hashParams);
        result.protocol =
            urlBaseInfo.protocol
                .slice(0, urlBaseInfo.protocol.length - 1)
                .toLocaleLowerCase() === ProtocolEnum.HTTP
                ? ProtocolEnum.HTTP
                : ProtocolEnum.HTTPS;
        result.href = url;
        result.search = urlBaseInfo.search;
        result.hash = urlBaseInfo.hash;
        if (routerType === RouterTypeEnum.hash) {
            result.pathname = urlBaseInfo.hash.substr(
                1,
                urlBaseInfo.hash.indexOf("?") - 1
            );
        } else {
            const reg = new RegExp(`^\\/${basename}`);
            result.pathname = urlBaseInfo.pathname.replace(reg, "");
        }
    } catch (e) {
        console.error(e);
    }
    return result;
}

/**
 * 获取当前路由实例
 * @returns
 */
function getRouterInterfaceByLocal(): RouterInterface<ProtocolEnum> {
    return getRouterInterfaceByUrl(
        window.location.href,
        RouterTypeEnum.history
    );
}

/**
 * Hash 路由处理逻辑
 * @param callback
 */
function HashRouterEvent() {
    window.addEventListener(
        "hashchange",
        (hashChangeEvent: HashChangeEvent) => {
            const oldUrl: string = hashChangeEvent.oldURL;
            const newUrl: string = hashChangeEvent.newURL;
            const preUrlInfo: RouterInterface<ProtocolEnum> =
                getRouterInterfaceByUrl(oldUrl, RouterTypeEnum.hash);
            const nowUrlInfo: RouterInterface<ProtocolEnum> =
                getRouterInterfaceByUrl(newUrl, RouterTypeEnum.hash);
            // TODO 这里的回调应该是触发任务的执行，而不是直接触发对应的方法
            // 新老的pathname不相等说明路由发生了改变，所以需要触发回调
            if (preUrlInfo.pathname !== nowUrlInfo.pathname) {
                // const taskAction: RouterTaskAction<ProtocolEnum> = {
                //     from: oldUrl,
                //     to: newUrl,
                // };
                // callback(taskAction);
            }
        }
    );
}

/**
 * history 路由回调方法
 * @param callback
 */
function HistoryRouterEvent() {
    // 这里实际上要考虑一个问题
    let preUrlInfo: RouterInterface<ProtocolEnum> = getRouterInterfaceByLocal();
    const handler = () => {
        const nowUrlInfo: RouterInterface<ProtocolEnum> =
            getRouterInterfaceByLocal();
        if (preUrlInfo.pathname !== nowUrlInfo.pathname) {
            // TODO
            // callback(nowUrlInfo, preUrlInfo);
            preUrlInfo = nowUrlInfo;
        }
    };
    for (let key in HistoryStateEnum) {
        const sourceFunc: Function = window.history[HistoryStateEnum[key]];
        window.history[HistoryStateEnum[key]] = function (...arg) {
            sourceFunc.call(this, ...arg);
            handler();
        };
    }
    window.addEventListener("popstate", handler);
}

/**
 * 路由初始化
 * @param config
 */
export function routerEventInit(config: any = {}) {
    const { routerType } = config;
    if (routerType === RouterTypeEnum.history) {
        HistoryRouterEvent();
    }
    if (routerType === RouterTypeEnum.hash) {
        HashRouterEvent();
    }
}
