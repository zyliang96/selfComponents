/**
 * 运行中间件内容
 * @param  {...any} middleWares
 */
export default function applyMiddleware(...middleWares) {
    /**
     * 中间件返回一个function包装原始的createStore,这里是进行了柯里化
     */
    return (createStore) => {
        return (reducer, preloadedState) => {
            // 执行原始的createStore方法，然后生产原始的redux内容
            const store = createStore(reducer);
            // dispatch方法
            let dispatch = store.dispatch;
            /**
             * 中间件的参数
             */
            const middlewareApi = {
                getState: store.getState, // 获取数据
                dispatch: (action, ...args) => dispatch(action, ...args), // 这里的dispatch会不断被覆盖
            };
            const chain = middleWares.map((middleware) =>
                middleware(middlewareApi)
            );
        };
    };
}
