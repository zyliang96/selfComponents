import { CollectionOptions } from "./type";
import { routerEventInit } from "./routerEvent";
import { requestEventInit } from "./requestEvent";
import { routerTypeList, RouterTypeEnum } from "./config";
import { TaskInterface, Task, TaskBaseInfo } from "./task";

/**
 * 埋点实例
 */
class Collection {
    public options: CollectionOptions; // 配置项
    public taskList: Array<TaskInterface>; // 任务列表
    public middleware: Array<Function>; // 中间件列表

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

    /**
     * 批量注册中间件
     * @param middleware
     */
    registerMiddlewares(middlewares: Array<Function>) {
        if (Array.isArray(middlewares)) {
            this.middleware.push(...middlewares);
        }
    }

    /**
     * 批量注册任务
     * @param tasks
     */
    registerTasks(tasks: Array<TaskBaseInfo>) {
        if (Array.isArray(tasks)) {
            let list = [];
            tasks.forEach((task) => {
                const taskInterface = new Task(task);
                list.push(taskInterface);
            });
            this.taskList.push(...list);
        }
    }

    /**
     * 注册任务
     * @param task
     */
    registerTask(task: TaskBaseInfo) {
        const taskInterface = new Task(task);
        this.taskList.push(taskInterface);
    }
    
}
