/**
 * 这里存放枚举配置等可能公用的数据
 */

// XHR实例的私有属性，用于暂存数据
export const xhrInterfacePrivateAttributes: string = "_collection_requestData";

// XHR实例支持的监听事件的方法
export const baseEventList: Array<string> = [
    "abort",
    "error",
    "load",
    "loadend",
    "loadstart",
    "timeout",
];
// 流程监听事件名称
export const progressEventName = "progress";
// 完成类型，主要用于 onReadyStateChange
export const onReadyStateChangeFinishName = "onReadyStateChangeFinish";
export const xhrSupportEventList: Array<string> = [
    ...baseEventList,
    progressEventName,
];


/**
 * 路由类型
 */
 export enum RouterTypeEnum {
    history = "history", // historyRouter
    hash = "hash", // hashRouter
}


let RouterTypeEnumList = []

for(let key in RouterTypeEnum){
    RouterTypeEnumList.push(RouterTypeEnum[key])
}
export const routerTypeList = RouterTypeEnumList