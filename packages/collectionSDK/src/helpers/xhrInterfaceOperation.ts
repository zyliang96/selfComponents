import qs from "qs";
import { get as lodashGet, set as lodashSet } from "lodash";

/**
 * 获取url中查询字段
 */
export function getUrlQuery(url: string): object {
    const queryStrIdx: number = url.indexOf("?");
    let queryStr = "";
    if (queryStrIdx || queryStrIdx === 0) {
        queryStr = url.slice(queryStrIdx);
    }
    const result: object = qs.params(queryStr);
    return result;
}

/**
 * 获取XHR实例上的属性
 */
export function getXHRInterfaceAttribute<T>(
    xhrInterface: XMLHttpRequest,
    name: string
): T {
    return lodashGet(xhrInterface, name);
}
/**
 * 消息结构体
 */
export interface messageBase<T> {
    success: boolean;
    message: T;
}

/**
 * 设置XHR实例上的属性
 */
export function setXHRInterfaceAttribute<T>(
    xhrInterface: XMLHttpRequest,
    name: string,
    data: T
): object {
    let result: messageBase<string> = {
        success: true,
        message: "",
    };
    try {
        lodashSet(xhrInterface, name, data);
    } catch (e) {
        result.success = false;
        result.message = e;
    }
    return result;
}
