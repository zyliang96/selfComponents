/**
 * 接口请求处理逻辑
 */
import {
    getUrlQuery,
    getXHRInterfaceAttribute,
    setXHRInterfaceAttribute,
} from "../helpers/xhrInterfaceOperation";

import { parseHeaders } from "../helpers/parseHeaders";
import { ajaxListenEventOptions, RequestBody, ResponseBody } from "./type";
import {
    xhrInterfacePrivateAttributes,
    baseEventList,
    progressEventName,
    onReadyStateChangeFinishName,
    xhrSupportEventList,
} from "./config";
/**
 * XHR代理状态
 */
export enum ReadyStateEnum {
    UNSENT = 0, // 代理被创建，但尚未调用 open() 方法。
    OPENED = 1, // open() 方法已经被调用。
    HEADERS_RECEIVED = 2, // send() 方法已经被调用，并且头部和状态已经可获得。
    LOADING = 3, // 	下载中； responseText 属性已经包含部分数据。
    DONE = 4, // 下载操作已完成
}
/**
 * onReadyStateChange 状态为 DONE 时的处理逻辑
 * @param xhrInterface
 */
function onReadyStateChangeFinishFunc(xhrInterface: XMLHttpRequest): void {
    // 获取响应的请求头
    const responseHeaders =
        "getAllResponseHeaders" in xhrInterface
            ? parseHeaders(xhrInterface.getAllResponseHeaders())
            : null;
    // 获取响应内容
    const responseData =
        !xhrInterface.responseType || xhrInterface.responseType === "text"
            ? xhrInterface.responseText
            : xhrInterface.response;
    // 获取实例上的响应对象
    let response: RequestBody | object =
        getXHRInterfaceAttribute<object | null>(
            xhrInterface,
            xhrInterfacePrivateAttributes
        ) || {};
    // 合并实例上的响应对象
    Object.assign(response, {
        body: responseData,
        status: xhrInterface.status,
        statusText: xhrInterface.statusText,
        headers: responseHeaders,
    });
    // 设置实例上的响应对象
    setXHRInterfaceAttribute(
        xhrInterface,
        `${xhrInterfacePrivateAttributes}.response`,
        response
    );
}

/**
 * 注册onreadystatechange 方法到XHR实例
 */
function registerOnreadystatechange(
    xhrInterface: XMLHttpRequest,
    callback: Function
): boolean {
    const sourceXhrInterfaceOnreadystatechange =
        xhrInterface.onreadystatechange;
    try {
        // 在这里设置onreadystatechange 方法是因为axios在实现的时候，open之后会直接设置onreadystatechange 的方法，所以在send的时候，可以获取到原先的onreadystatechange方法，并且还不会被覆盖
        xhrInterface.onreadystatechange = function handleLoad() {
            // 请求未完成的时候，直接跳过
            if (
                !xhrInterface ||
                xhrInterface.readyState !== ReadyStateEnum.DONE
            ) {
                return;
            }
            // 请求刚开是并且，响应URL存在，并且不为file的时候，直接跳过
            if (
                xhrInterface.status === ReadyStateEnum.UNSENT &&
                !(
                    xhrInterface.responseURL &&
                    xhrInterface.responseURL.indexOf("file:") === 0
                )
            ) {
                return;
            }
            onReadyStateChangeFinishFunc(xhrInterface);
            callback && callback(onReadyStateChangeFinishName, xhrInterface);
            // 执行原有操作
            sourceXhrInterfaceOnreadystatechange.call(this, ...arguments);
        };
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * 创建监听
 * @param xhrInterface
 * @param xhrSupportEventList
 */
function createEventListener(
    xhrInterface: XMLHttpRequest,
    eventList: Array<string> = [],
    callback: Function
) {
    if (Array.isArray(eventList)) {
        eventList.forEach((eventName) => {
            addEventListenerFuc(xhrInterface, eventName, (remove, ...arg) => {
                console.log(eventName, arg);
                callback && callback(eventName, xhrInterface);
                remove && remove();
            });
        });
    }
}

/**
 * 添加注册方法
 */
function addEventListenerFuc(
    xhrInterface: XMLHttpRequest | XMLHttpRequestUpload,
    type,
    callback
) {
    if (xhrInterface && xhrSupportEventList.indexOf(type) > -1) {
        xhrInterface.addEventListener(type, function eventListen() {
            const remove = () => {
                xhrInterface.removeEventListener(type, eventListen);
            };
            callback && callback(remove, ...arguments);
        });
    }
}

/**
 * 针对XMLHttpRequest的
 */
function ajaxListenEvent(options: ajaxListenEventOptions = {}) {
    // 原来的方法
    const SourceXHR = window.XMLHttpRequest;
    const sourceXHROpen = window.XMLHttpRequest.prototype.open;
    const sourceXHRSend = window.XMLHttpRequest.prototype.send;
    const sourceXHRSetRequestHeader =
        window.XMLHttpRequest.prototype.setRequestHeader;
    // 覆写open方法,处理url链接中的带入参数，并将参数挂载到当前实例上
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
            data: getUrlQuery(url),
            headers: null,
        });
        setXHRInterfaceAttribute(
            xhrInterface,
            xhrInterfacePrivateAttributes,
            requestData
        );
        sourceXHROpen.call(this, ...arguments);
    };
    // 覆写send方法，将传递的data字段存储到当前实例的属性上
    SourceXHR.prototype.send = function (body: any): void {
        const xhrInterface = this;
        console.log("send", xhrInterface);
        let data: object = getXHRInterfaceAttribute<object | null>(
            xhrInterface,
            xhrInterfacePrivateAttributes
        );
        // 这里就不处理FormData格式的数据了，一般这种格式的数据埋点处理没有意义
        try {
            Object.assign(data, JSON.parse(body));
        } catch (e) {
            console.warn("send时格式处理出错！", e);
        }
        setXHRInterfaceAttribute(
            xhrInterface,
            `${xhrInterfacePrivateAttributes}.data`,
            data
        );
        // 注册onreadystatechange 事件
        registerOnreadystatechange(xhrInterface, options.callback);
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

        // 这里设置
        sourceXHRSetRequestHeader.call(this, ...arguments);
    };

    // 请求监听者
    let listeners = [];
    // 覆写新的XHR
    const newXHR = function () {
        let request = new SourceXHR();
        // TODO 这里注册的是通用的方法，主要是针对性能监控的一种基本事件的注册，比如说获取到对应的请求耗时啥的情况，暂时还未加通用处理逻辑
        createEventListener(request, baseEventList, options.callback);

        // progress 需要单独处理，因为实际上在非文件的上传下载过程中并不需要执行详情的处理
        if (typeof options.onDownloadProgress === "function") {
            addEventListenerFuc(request, progressEventName, (...arg) => {
                console.log("Download Progress", arg);
                options.onDownloadProgress(...arg);
            });
        }
        // 上传progress 监听
        if (typeof options.onUploadProgress === "function") {
            addEventListenerFuc(request.upload, progressEventName, (...arg) => {
                console.log("upload Progress", arg);
                options.onDownloadProgress(...arg);
            });
        }

        return request;
    };
    // @ts-ignore
    window.XMLHttpRequest = newXHR;
}

// TODO 这里存在着一个问题就是fetch无法使用拦截只对XMLHttpRequest进行了处理
export function requestEventInit(options: ajaxListenEventOptions) {
    ajaxListenEvent(options);
}
