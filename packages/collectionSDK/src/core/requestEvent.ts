/**
 * 接口请求处理逻辑
 */
import {
    getUrlQuery,
    getXHRInterfaceAttribute,
    setXHRInterfaceAttribute,
} from "../helpers/xhrInterfaceOperation";

import { parseHeaders } from "../helpers/parseHeaders";

export interface RequestBody {
    methods: string; // 请求类型
    url: string; // 请求url链接
    query?: object | null; // url中带入的请求信息,大部分为get场景
    data?: object | null; // post 请求中的data字段
    headers?: object | null; // 发起请求的header字段
}

export interface ResponseBody {
    status: number; // 接口返回状态
    statusText?: string; // 状态名称
    body?: any; // 接口返回数据
    headers?: object | null; // 返回的header字段
}

// XHR实例的私有属性，用于暂存数据
const xhrInterfacePrivateAttributes: string = "_collection_requestData";
// XHR实例是否需要注册Onreadystatechange 事件标识
const xhrInterfaceFlag: string = "_collection_is_need_onreadystatechange";
// XHR实例支持的监听事件的方法
const xhrSupportEventList: Array<string> = [
    "abort",
    "error",
    "load",
    "loadend",
    "loadstart",
    "progress",
    "timeout",
];

/**
 * 注册onreadystatechange 方法到XHR实例
 */
function registerOnreadystatechange(xhrInterface: XMLHttpRequest): boolean {
    const sourceXhrInterfaceOnreadystatechange =
        xhrInterface.onreadystatechange;
    try {
        // 在这里设置onreadystatechange 方法是因为axios在实现的时候，open之后会直接设置onreadystatechange 的方法，所以在send的时候，可以获取到原先的onreadystatechange方法，并且还不会被覆盖
        xhrInterface.onreadystatechange = function handleLoad() {
            if (!xhrInterface || xhrInterface.readyState !== 4) {
                return;
            }
            if (
                xhrInterface.status === 0 &&
                !(
                    xhrInterface.responseURL &&
                    xhrInterface.responseURL.indexOf("file:") === 0
                )
            ) {
                return;
            }

            // Prepare the response
            const responseHeaders =
                "getAllResponseHeaders" in xhrInterface
                    ? parseHeaders(xhrInterface.getAllResponseHeaders())
                    : null;
            const responseData =
                !xhrInterface.responseType ||
                xhrInterface.responseType === "text"
                    ? xhrInterface.responseText
                    : xhrInterface.response;
            let response: RequestBody | object =
                getXHRInterfaceAttribute<object | null>(
                    xhrInterface,
                    xhrInterfacePrivateAttributes
                ) || {};
            Object.assign(response, {
                body: responseData,
                status: xhrInterface.status,
                statusText: xhrInterface.statusText,
                headers: responseHeaders,
            });
            setXHRInterfaceAttribute(
                xhrInterface,
                `${xhrInterfacePrivateAttributes}.response`,
                response
            );
            sourceXhrInterfaceOnreadystatechange.call(this, ...arguments);
        };
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * 添加注册方法
 */
function addEventListenerFuc(xhrInterface: XMLHttpRequest, type, callback) {
    if (xhrInterface && xhrSupportEventList.indexOf(type) > -1) {
        xhrInterface.addEventListener(type, function eventListen() {
            const remove = () => {
                xhrInterface.removeEventListener(type, eventListen);
            };
            callback && callback(...arguments);
        });
    }
}

/**
 * 针对XMLHttpRequest的
 */
function ajaxListenEvent() {
    // 原来的方法
    const SourceXHR = window.XMLHttpRequest;
    const sourceXHROpen = window.XMLHttpRequest.prototype.open;
    const sourceXHRSend = window.XMLHttpRequest.prototype.send;
    const sourceXHRSetRequestHeader =
        window.XMLHttpRequest.prototype.setRequestHeader;
    // 覆写open方法
    SourceXHR.prototype.open = function (
        method: string,
        url: string,
        async: boolean = true,
        user?: string,
        password?: string
    ): void {
        const xhrInterface = this;
        console.log("open", xhrInterface);
        // 数据挂载到当前实例上
        let requestData: RequestBody | object =
            getXHRInterfaceAttribute<object | null>(
                xhrInterface,
                xhrInterfacePrivateAttributes
            ) || {};
        Object.assign(requestData, {
            methods: method && method.toLowerCase(),
            url,
            query: getUrlQuery(url),
            data: null,
            headers: null,
        });
        setXHRInterfaceAttribute(
            xhrInterface,
            xhrInterfacePrivateAttributes,
            requestData
        );
        sourceXHROpen.call(this, ...arguments);
    };
    // 覆写send方法
    SourceXHR.prototype.send = function (body: any): void {
        const xhrInterface = this;
        console.log("send", xhrInterface);
        let data: object;
        console.log(body);
        try {
            data = JSON.parse(body);
        } catch (e) {
            data = {};
        }
        setXHRInterfaceAttribute(
            xhrInterface,
            `${xhrInterfacePrivateAttributes}.data`,
            data
        );
        sourceXHRSend.call(this, ...arguments);
    };

    // 覆写设置请求头方法，因为在初始化设置request请求头的时候，只有这一条路径
    SourceXHR.prototype.setRequestHeader = function (
        name: string,
        value: string
    ): void {
        const xhrInterface = this;
        console.log("send", xhrInterface);
        if (name) {
            setXHRInterfaceAttribute(
                xhrInterface,
                `${xhrInterfacePrivateAttributes}.headers.${name}`,
                value
            );
        }
        // 判断是否需要使用onreadystatechange 来处理
        const isNeedOnreadystatechange = !getXHRInterfaceAttribute<
            boolean | null
        >(xhrInterface, xhrInterfaceFlag);
        if (isNeedOnreadystatechange) {
            registerOnreadystatechange(xhrInterface);
        }

        // 这里设置
        sourceXHRSetRequestHeader.call(this, ...arguments);
    };

    // 请求监听者
    let listeners = [];
    const newXHR = function () {
        let request = new SourceXHR();
        if (typeof request.onload !== "undefined") {
            setXHRInterfaceAttribute(request, `${xhrInterfaceFlag}`, false);
            request.addEventListener("load", function (target) {
                console.log(target);
            });
        } else {
            setXHRInterfaceAttribute(request, `${xhrInterfaceFlag}`, false);
        }
        return request;
    };
}

// TODO 这里存在着一个问题就是fetch无法使用拦截只对XMLHttpRequest进行了处理
export function requestEvent() {}
