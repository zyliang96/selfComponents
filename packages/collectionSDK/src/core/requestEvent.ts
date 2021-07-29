/**
 * 接口请求处理逻辑
 */

export interface RequestBody {
    methods: string; // 请求类型
    url: string; // 请求url链接
    query: object | null;
    data: object | null;
}

export interface ResponseBody {
    status;
}

/**
 * 针对XMLHttpRequest的
 */
function ajaxListenEvent(){

}


export function requestEvent() {
    // 这里通过获取方法的形式处理，可以方便后续的扩展和替换请求方法的处理逻辑，这里需要注意的是，如果是使用fetch的话，需要做一层额外的包装
    const requestObj = getRequestMethods();
    // 原来的方法
    const sourceXHROpen = requestObj.open;
    const sourceXHRSend = requestObj.send;
}
