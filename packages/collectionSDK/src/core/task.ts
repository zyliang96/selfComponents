/**
 * 任务处理
 */
import { getOs, makeUniqueKey } from "../utils/index";
import { RouterInterface } from "./routerEvent";
import { RequestBody, ResponseBody } from "./requestEvent";

/**
 * 任务类型
 */
export enum TaskType {
    Router = 0b00001, // 路由
    Ajax = 0b00010, // 请求
    Other = 0b00100, // 其他手动触发的请求类型
}

/**
 * 浏览器信息
 */
export interface RuntimeEnvironmentInfo {
    domain: string; // 主机名
    documentUrl: string; // 请求页面
    title: string; // title名称
    referrer: string; // 来源页面
    width: number; // 可视区域宽度
    height: number; // 可视区域高度
    lang: string; // 语言
    userAgent: string; // 浏览器标识
    time: number; // 本机时间
    os: string; // 操作系统
}

/**
 * 获取运行环境的数据
 */
export function getRuntimeEnvironmentInfo(): RuntimeEnvironmentInfo {
    return {
        domain: document && document.domain,
        documentUrl: window && window.location && window.location.href,
        title: document && document.title,
        referrer: document && document.referrer,
        width: (window && window.screen && window.screen.width) || 0,
        height: (window && window.screen && window.screen.height) || 0,
        lang: navigator && navigator.language,
        userAgent: navigator && navigator.userAgent,
        time: Date && Date.now(),
        os: getOs(),
    };
}

/**
 * 任务基础信息
 */
export interface TaskBaseInfo {
    task: string; // 任务英文名称
    taskName: string; // 任务中文名称
    type: TaskType; // 任务类型
    description?: null | string; // 任务描述
    taskId?: string | number; // 任务ID唯一
}

/**
 * 任务实例
 */
export interface TaskInterface extends TaskBaseInfo {}

/**
 * 任务实例
 * 这个实例只有在
 */
export class Task {
    task: string; // 任务英文名称
    taskName: string; // 任务中文名称
    type: TaskType; // 任务类型
    description?: null | string; // 任务描述
    taskId: string | number; // 任务ID唯一
    createTime: number; // 任务创建时间
    router: RouterInterface | null | object; // 路由信息
    request: RequestBody | null | object; // 请求发送内容
    response: ResponseBody | null | object; // 请求返回结果
    extraInfo: null | object; // 额外字段
    runtimeEnvironmentInfo: RuntimeEnvironmentInfo; // 运行环境信息
    constructor(options: TaskBaseInfo) {
        const { task, taskName, type, description, taskId } = options;
        // TODO 后续这里应该要加参数判断
        this.task = task;
        this.taskName = taskName;
        this.type = type || TaskType.Other;
        this.description = description || "";
        this.taskId = taskId || makeUniqueKey();
        this.runtimeEnvironmentInfo = getRuntimeEnvironmentInfo();
        this.createTime = Date.now();
    }

    /**
     * 设置路由信息
     */
    setRouter(options: RouterInterface): void {
        this.router = options;
    }

    /**
     * 设置请求发送内容
     */
    setRequest(options: RequestBody): void {
        this.request = options;
    }

    /**
     * 设置请求返回结果
     */
    setResponse(options: ResponseBody): void {
        this.response = options;
    }

    /**
     * 设置额外字段
     */
    setExtraInfo(options: object | null): void {
        this.extraInfo = options;
    }

    /**
     * 重新设置Task 实例的运行环境信息
     */
    resetRuntimeEnvironmentInfo(): RuntimeEnvironmentInfo {
        this.runtimeEnvironmentInfo = getRuntimeEnvironmentInfo();
        return this.runtimeEnvironmentInfo;
    }
}
