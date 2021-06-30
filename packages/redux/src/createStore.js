import ActionTypes from "./utils/actionTypes";
import $$observable from "./utils/symbol-observable";
import isPlainObject from "./utils/isPlainObject";

/**
 * 创建仓库
 * @param {*} reducer
 * @param {*} preloadedState
 * @param {*} enhancer
 */
function createStore(reducer, preloadedState, enhancer) {
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
    // 如果preloadedState 是一个function，说明这个时候第二个参数传的是applyMiddleware
    if (
        typeof preloadedState === "function" &&
        typeof enhancer === "undefined"
    ) {
        enhancer = preloadedState;
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

        // 如果有包装器，则再包装一层，实际上这里是处理插件的
        return enhancer(createStore)(reducer, preloadedState);
    }

    // 当前的state
    let currentState = preloadedState;
    // 当前的处理方法
    let currentReducer = reducer;
    // 当前的监听队列
    let currentListeners = [];
    // 下一次的监听队列
    let nextListeners = [];
    // 是否正在执行dispatch方法
    let isDispatching = false;

    // 将nextListeners 从currentListeners中克隆一份，确保不对原数据造成影响
    function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice();
        }
    }

    /**
     * 获取当前state
     * 这里存在点小问题，就是如果currentState如果是一个Object，那么实际上用户通过getState获取到的数据是可以再次修改的，
     * 但是好像没有办法处理，因为没办法判断传入的初始化数据是个什么东西，因为有可能是Set、Map、Array、Object等任何类型
     * TODO 这里可能需要后续考虑一下
     */
    function getState() {
        if (isDispatching) {
            throw new Error(
                "You may not call store.getState() while the reducer is executing. " +
                    "The reducer has already received the state as an argument. " +
                    "Pass it down from the top reducer instead of reading it from the store."
            );
        }
        return currentState;
    }

    /**
     * 注册listener
     * 这里push的时候，是否需要考虑去重的问题，如果不去重的话，这个注销的逻辑就需要使用者自己去处理，但是如果去重的话，又无法知道在重复的时候，是否注册成功了，
     * 并且重复注册的时候，实际上有可能存在注销的错误的情况
     */
    function subscribe(listener) {
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
        // 是否注册
        let isSubscribed = true;
        // 克隆一份监听器出来
        ensureCanMutateNextListeners();

        // 这里是和源码有区别的地方
        let index = null;
        for (let i = 0, len = nextListeners.length; i < len; i++) {
            const nextListenerItem = nextListeners[i];
            if (nextListenerItem === listener) {
                index = i;
                break;
            }
        }
        if (index === null) {
            nextListeners.push(listener);
            index = nextListeners.length - 1;
        }

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
            // 取消监听的时候，需要保证不对currentListeners造成影响，所以会先克隆一份进行操作，因为有可能存在还没有触发dispatch但是已经注销的情况
            ensureCanMutateNextListeners();
            nextListeners.splice(index, 1);
            currentListeners = null;
        };
    }

    /**
     * 修改状态
     */
    function dispatch(action) {
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

        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        } catch (e) {
            console.error(e);
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
     * 换Reducer 方法
     */
    function replaceReducer(reducer) {
        if (typeof nextReducer !== "function") {
            throw new Error(
                `Expected the nextReducer to be a function. Instead, received: '${kindOf(
                    nextReducer
                )}`
            );
        }
        currentReducer = reducer;
        // 触发dispatch
        dispatch({ type: ActionTypes.REPLACE });
        return store;
    }

    /**
     * 一个不对外直接暴露的监听器
     * TODO observable 这个概念还是需要再理解一下
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
            subscribe(observer) {
                if (typeof observer !== "object" || observer === null) {
                    throw new TypeError(
                        `Expected the observer to be an object. Instead, received: '${kindOf(
                            observer
                        )}'`
                    );
                }

                function observeState() {
                    const observerAsObserver = observer;
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

    dispatch({ type: ActionTypes.INIT });

    const store = {
        dispatch: dispatch,
        subscribe,
        getState,
        replaceReducer,
        [$$observable]: observable,
    };
    return store;
}

export default createStore;
