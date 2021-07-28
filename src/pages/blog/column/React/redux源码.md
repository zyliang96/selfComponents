# Redux 源码阅读笔记

## 什么是 Redux？

Redux 是一个 JavaScript 状态容器，提可预测化的状态管理。Redux 是面向 JavaScript 的，它可以和任何的前端框架一起使用。

Redux 是随着技术或者说 JavaScript 单页应用开发日趋复杂后的时代产物，随着单页应用的复杂度提升，页面和页面之间存在着许多状态共享，这些状态可能包括了服务器响应、缓存数据、本地生成的尚未持久化到服务器的数据、UI 的状态、路由信息等等，也可能是跨组件的处理（一个 model 的变化引起另一个 model 变化），当系统变的错综复杂的时候，为了让这些 state 的变化可以预测，所以就又了 Redux。

通俗易懂的讲就是，Redux 就是建立一个 Store（仓库），这个 Store 里放这我们需要的 state，所有需要操作 state 的，都通过这个 store 触发，即没有办法直接操作 state，而是通过 Store 的 dispatch 去进行更新，对于数据的变化，可以通过 subscribe（订阅）注册一个监听函数，每当 dispatch 调用后，都将触发监听函数。Redux 本身是一个纯粹的状态管理，为了让他更加的可扩展和健壮，提供了 applyMiddleware 来通过中间件的形式进行扩展。

## Redux 源码结构

```md
-   types // 类型声明文件
-   utils // 方法函数
-   applyMiddleware.ts // 加载中间件方法
-   bindActionCreators.ts // 绑定 Action 的创建者
-   combineReducers.ts // 合并 Reducers
-   compose.ts // 事件合成
-   createStore.ts // 创建 Store
-   index.ts // 程序入口文件
```

### index.ts

主要的声明文件，导出了类型声明和创建 Store 的方法等

```javascript
export {
    createStore,
    combineReducers,
    bindActionCreators,
    applyMiddleware,
    compose,
    __DO_NOT_USE__ActionTypes,
};
```

### createStore.ts

createStore 实际就是创建一个仓库 Store，然后挂载一些方法，会将这些方法存在对象中返回。实际上在 createStore 中有一点就是，对于订阅的函数，没有做去重，所以如果存在重复订阅，是没办法处理的。createStore 中实际上就包含了 redux 的所有核心功能，同步的完成这样的事件订阅、dispatch 触发、替换 reducer 等各种方法。是一个标准的闭包场景。

```typescript
export default function createStore<
    S,
    A extends Action,
    Ext = {},
    StateExt = never
>(
    reducer: Reducer<S, A>,
    preloadedState?: PreloadedState<S> | StoreEnhancer<Ext, StateExt>,
    enhancer?: StoreEnhancer<Ext, StateExt> // 增强者，应该是middleware包裹的函数
): Store<ExtendState<S, StateExt>, A, StateExt, Ext> & Ext {
    if (
        (typeof preloadedState === "function" &&
            typeof enhancer === "function") ||
        (typeof enhancer === "function" && typeof arguments[3] === "function")
    ) {
        throw new Error(
            "It looks like you are passing several store enhancers to " +
                "createStore(). This is not supported. Instead, compose them " +
                "together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example."
        );
    }

    if (
        typeof preloadedState === "function" &&
        typeof enhancer === "undefined"
    ) {
        enhancer = preloadedState as StoreEnhancer<Ext, StateExt>;
        preloadedState = undefined;
    }

    if (typeof enhancer !== "undefined") {
        if (typeof enhancer !== "function") {
            throw new Error(
                `Expected the enhancer to be a function. Instead, received: '${kindOf(
                    enhancer
                )}'`
            );
        }

        // 如果有包装器，则再包装一层，实际上这里是处理插件的，有插件的调用中，如果第二个参数传的是applyMiddleware([])返回的function，那么就会进行事件合成，然后通过enhancer生成新的对象并且其中dispatch是处理过的。
        return enhancer(createStore)(
            reducer,
            preloadedState as PreloadedState<S>
        ) as Store<ExtendState<S, StateExt>, A, StateExt, Ext> & Ext;
    }

    if (typeof reducer !== "function") {
        throw new Error(
            `Expected the root reducer to be a function. Instead, received: '${kindOf(
                reducer
            )}'`
        );
    }
    // 处理逻辑
    let currentReducer = reducer;
    // 当前state数据
    let currentState = preloadedState as S;
    // 当前的监听队列
    let currentListeners: (() => void)[] | null = [];
    // 接下来的监听队列
    let nextListeners = currentListeners;
    // 是否正在执行dispatch
    let isDispatching = false;

    /**
     * This makes a shallow copy of currentListeners so we can use
     * nextListeners as a temporary list while dispatching.
     *
     * This prevents any bugs around consumers calling
     * subscribe/unsubscribe in the middle of a dispatch.
     */
    // 将nextListeners 从currentListeners中克隆一份
    function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice();
        }
    }

    /**
     * Reads the state tree managed by the store.
     *
     * @returns The current state tree of your application.
     */
    // 获取当前State,但是不能在dispatch的时候获取
    function getState(): S {
        if (isDispatching) {
            throw new Error(
                "You may not call store.getState() while the reducer is executing. " +
                    "The reducer has already received the state as an argument. " +
                    "Pass it down from the top reducer instead of reading it from the store."
            );
        }

        return currentState as S;
    }

    /**
     * Adds a change listener. It will be called any time an action is dispatched,
     * and some part of the state tree may potentially have changed. You may then
     * call `getState()` to read the current state tree inside the callback.
     *
     * You may call `dispatch()` from a change listener, with the following
     * caveats:
     *
     * 1. The subscriptions are snapshotted just before every `dispatch()` call.
     * If you subscribe or unsubscribe while the listeners are being invoked, this
     * will not have any effect on the `dispatch()` that is currently in progress.
     * However, the next `dispatch()` call, whether nested or not, will use a more
     * recent snapshot of the subscription list.
     *
     * 2. The listener should not expect to see all state changes, as the state
     * might have been updated multiple times during a nested `dispatch()` before
     * the listener is called. It is, however, guaranteed that all subscribers
     * registered before the `dispatch()` started will be called with the latest
     * state by the time it exits.
     *
     * @param listener A callback to be invoked on every dispatch.
     * @returns A function to remove this change listener.
     */
    // 注册listener
    function subscribe(listener: () => void) {
        if (typeof listener !== "function") {
            throw new Error(
                `Expected the listener to be a function. Instead, received: '${kindOf(
                    listener
                )}'`
            );
        }

        if (isDispatching) {
            throw new Error(
                "You may not call store.subscribe() while the reducer is executing. " +
                    "If you would like to be notified after the store has been updated, subscribe from a " +
                    "component and invoke store.getState() in the callback to access the latest state. " +
                    "See https://redux.js.org/api/store#subscribelistener for more details."
            );
        }

        let isSubscribed = true;

        // 将currentListener克隆一份，然后再push
        ensureCanMutateNextListeners();
        nextListeners.push(listener);

        // 取消监听的方法
        return function unsubscribe() {
            if (!isSubscribed) {
                return;
            }

            if (isDispatching) {
                throw new Error(
                    "You may not unsubscribe from a store listener while the reducer is executing. " +
                        "See https://redux.js.org/api/store#subscribelistener for more details."
                );
            }

            isSubscribed = false;
            // 取消监听的时候，需要保证不对currentListeners造成影响，所以会先克隆一份进行操作
            ensureCanMutateNextListeners();
            const index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
            currentListeners = null;
        };
    }

    /**
     * Dispatches an action. It is the only way to trigger a state change.
     *
     * The `reducer` function, used to create the store, will be called with the
     * current state tree and the given `action`. Its return value will
     * be considered the **next** state of the tree, and the change listeners
     * will be notified.
     *
     * The base implementation only supports plain object actions. If you want to
     * dispatch a Promise, an Observable, a thunk, or something else, you need to
     * wrap your store creating function into the corresponding middleware. For
     * example, see the documentation for the `redux-thunk` package. Even the
     * middleware will eventually dispatch plain object actions using this method.
     *
     * @param action A plain object representing “what changed”. It is
     * a good idea to keep actions serializable so you can record and replay user
     * sessions, or use the time travelling `redux-devtools`. An action must have
     * a `type` property which may not be `undefined`. It is a good idea to use
     * string constants for action types.
     *
     * @returns For convenience, the same action object you dispatched.
     *
     * Note that, if you use a custom middleware, it may wrap `dispatch()` to
     * return something else (for example, a Promise you can await).
     */
    function dispatch(action: A) {
        if (!isPlainObject(action)) {
            throw new Error(
                `Actions must be plain objects. Instead, the actual type was: '${kindOf(
                    action
                )}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`
            );
        }

        if (typeof action.type === "undefined") {
            throw new Error(
                'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.'
            );
        }

        if (isDispatching) {
            throw new Error("Reducers may not dispatch actions.");
        }

        // 先将当前修改为dispatch执行中，然后计算新的state值
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        } finally {
            isDispatching = false;
        }

        // 将nextListeners 的值赋值给currentListeners，然后循环调用，分为两个数组是为了确保注册事件和回调执行不互相影响，所有触发的listener都是在dispatch之前订阅的
        const listeners = (currentListeners = nextListeners);
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }

        return action;
    }

    /**
     * Replaces the reducer currently used by the store to calculate the state.
     *
     * You might need this if your app implements code splitting and you want to
     * load some of the reducers dynamically. You might also need this if you
     * implement a hot reloading mechanism for Redux.
     *
     * @param nextReducer The reducer for the store to use instead.
     * @returns The same store instance with a new reducer in place.
     */
    // 替换Reducer 方法
    function replaceReducer<NewState, NewActions extends A>(
        nextReducer: Reducer<NewState, NewActions>
    ): Store<ExtendState<NewState, StateExt>, NewActions, StateExt, Ext> & Ext {
        if (typeof nextReducer !== "function") {
            throw new Error(
                `Expected the nextReducer to be a function. Instead, received: '${kindOf(
                    nextReducer
                )}`
            );
        }

        // TODO: do this more elegantly
        (currentReducer as unknown as Reducer<NewState, NewActions>) =
            nextReducer;

        // This action has a similar effect to ActionTypes.INIT.
        // Any reducers that existed in both the new and old rootReducer
        // will receive the previous state. This effectively populates
        // the new state tree with any relevant data from the old one.
        // 触发dispatch
        dispatch({ type: ActionTypes.REPLACE } as A);
        // change the type of the store by casting it to the new store

        // 返回的还是当前的Store实例
        return store as unknown as Store<
            ExtendState<NewState, StateExt>,
            NewActions,
            StateExt,
            Ext
        > &
            Ext;
    }

    /**
     * Interoperability point for observable/reactive libraries.
     * @returns A minimal observable of state changes.
     * For more information, see the observable proposal:
     * https://github.com/tc39/proposal-observable
     */
    function observable() {
        const outerSubscribe = subscribe;
        return {
            /**
             * The minimal observable subscription method.
             * @param observer Any object that can be used as an observer.
             * The observer object should have a `next` method.
             * @returns An object with an `unsubscribe` method that can
             * be used to unsubscribe the observable from the store, and prevent further
             * emission of values from the observable.
             */
            subscribe(observer: unknown) {
                if (typeof observer !== "object" || observer === null) {
                    throw new TypeError(
                        `Expected the observer to be an object. Instead, received: '${kindOf(
                            observer
                        )}'`
                    );
                }

                function observeState() {
                    const observerAsObserver = observer as Observer<S>;
                    if (observerAsObserver.next) {
                        observerAsObserver.next(getState());
                    }
                }

                observeState();
                const unsubscribe = outerSubscribe(observeState);
                return { unsubscribe };
            },

            [$$observable]() {
                return this;
            },
        };
    }

    // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.
    // 触发init 操作
    dispatch({ type: ActionTypes.INIT } as A);

    const store = {
        dispatch: dispatch as Dispatch<A>,
        subscribe,
        getState,
        replaceReducer,
        [$$observable]: observable,
    } as unknown as Store<ExtendState<S, StateExt>, A, StateExt, Ext> & Ext;
    return store;
}
```

### compose.ts

接下来了解一下事件合成，实际上所谓的事件合成，只是保证了多个任务嵌套执行的处理，那么为什么需要事件合成的机制呢？这是因为 Redux 本质上是一个纯的状态管理库，他只能够处理同步的任务，所以为了便于扩展，加入了中间件的形式，那么如何保证这些中间件正常运行就需要用到事件合成了。事件合成和我们所理解的洋葱模型类似，一层一层的执行，从而使得 Redux 能够处理更多的场景。

compose 的核心是数组的 [reduce](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) （累加器）方法,reduce 的入参有两个，第一个为处理方法，第二个为初始值。处理方法中第一个参数为上一次的值，第二个参数为当前值，如果这个对于 Array\<Function>来说，第一个值应该是上一次处理返回的值（这里必须是一个 function 才能够让累加器正常运行），第二个数字就是当前的 function。通过这种方式，就可以是方法进行嵌套使用。但是这里需要注意的是，源码中 function 数组的调用顺序问题，由于是先执行当前的方法，然后再执行之前的方法，所以数组中的最后一个 function 是最先执行的，可以考虑成洋葱模型，最后调用的先执行完成。

```javascript
export default function compose(...funcs: Function[]) {
    if (funcs.length === 0) {
        // infer the argument type so it is usable in inference down the line
        return <T>(arg: T) => arg;
    }

    if (funcs.length === 1) {
        return funcs[0];
    }

    return funcs.reduce(
        (a, b) =>
            (...args: any) =>
                a(b(...args))
    );
}
```


### applyMiddleware.ts

中间件的合成依赖于compose，applyMiddleware实际上返回的是一个function，这个function返回的内容和createStore返回的是一致的，只是需要对dispatch方法进行特殊处理。
