# Vue 源码解析（二）

Vue 批量异步更新策略 和 VNode 实际上是存在相关性的。

### Vue 批量异步更新策略

![批量异步更新策略](/images/Vue2-异步批量更新.png)

Vue 的批量异步更新，是在响应式属性的 Dep 触发 notify 的时候，会触发当前 Dep 关联的所有 Watcher 的 update()方法，从而触发数据的响应式变化。从上一次数据响应式和 Vue 初始化逻辑的分析可以看出，在 Vue 中，实际真正能够触发到视图变化的应该只有 data 中的数据变化和 props 中的数据变化，computed 本身是惰性的，实际上只有在获取的时候才会更新，只会被动变化，watch 的用途是监听数据变化，所以在 Vue 中，引起视图变化的原理和 react 中是一样的，都是通过 data 或者 props 的变化来导致视图更新，所以需要关注的代码就是响应式数据的 set 方法。

在上一章中有提到 initMixin（src\core\instance\init.js）中注册的\_init 方法中调用 initState(src\core\instance\state.js)进行了数据的响应式处理以及一些响应式变化的处理逻辑，在 initData 和 initProps 中，都调用了 defineReactive 方法（src\core\observer\index.js），这个方法是实际进行响应式处理的方法，这里设置了 set 和 get 方法，所以实际触发是在 set 的时候 dep.notify()通知修改。具体的绑定关系在上一章已经说明过了，所以这里就直接进入主题，说一说这个通知修改的流程了。

dep.notify() 方法在 src\core\observer\dep.js 文件下，notify 实际上会遍历所有相关联的 Watcher，然后调用这些 Watcher 的 update 方法。在上一章中我们在分析 Watcher 结构的时候由说到过，update 中的逻辑，第一个 lazy 的场景是 computed 中声明的属性内容，也就是所谓的惰性更新（实际上就是只有在调用的时候才运行一次指定的方法，在依赖的响应式数据没有发生变化时，直接返回对应的值），第二个 sync 的场景，对应 watch 中声明的监听内容，如果有些数据响应式处理的时机需要立即执行，那么就加上 sync 字段，并设置为 true，这个时候，只要响应了，就立刻执行对应的回调方法（具体的使用看业务场景，这个就和 React 中 useEffect 和 useLayoutEffect 有点类似），最后一种场景是放到 Watcher 执行队列，这个才是 Vue 真正的批量异步更新策略的实际触发。

-   queueWatcher

主要逻辑在 scheduler.js （src\core\observer\scheduler.js） 文件中的 queueWatcher 方法，queueWatcher 方法会将没有添加过的 Watcher 进行处理，如果这个 Watcher 没有添加过，并且当前不是在渲染的情况下，将这个 Watcher 入队，如果已经在渲染了，则要判断当前的 Watcher 是否可以放到队列中执行，这里是通过 Watcher 的 id 进行判断（根据 id 判断是因为在创建 Watcher 的时候，实际上是有顺序的，创建的越早的，更新越早，这个在上一章中说 Watcher 的时候有提到过），这里的判断逻辑是从后往前找，这个场景单独看代码实际上还是比较难考虑明白的。

TODO 下面这个例子可能存在点问题，具体的逻辑还没有搞明白

举个例子：在我们页面渲染的时候，主页面可能是由多个子组件组装成的，这个时候在一开始的时候，是先运行父组件的 updateComponent(首先运行是因为这个 Watcher 创建的最早，最开始的时候先运行了 new Vue 这个实例初始化的时候会，如果有 el,则会自动执行挂载，所以父组件在\_init 执行到最后会触发 mountComponent,这个时候会注册父组件的 Watcher，然后会执行 updateComponent，就会紧接着就会触发，这里需要注意的是.vue 实际上会被编译为一个对象，这个对象中的 render 实际上就是 template 被处理成的创建虚拟 DOM 的函数，在函数运行的时候，就会去获取对应的值，所以在父组件渲染的时候，才会触发到子组件的渲染，这个时候子组件对应的 Watcher 才会创建，所以父组件的 Watcher 要创建的比较早)，这个时候因为父组件在渲染了，所以后续的更新都会被塞到队列中，至于是从后往前还是从前往后找都可以，只是策略问题，从某种角度而言，可能在大部分从后往前遍历的次数会更小（因为 id 小的一般都优先执行了），如果可以插入到队列中间的某个位置，就插在具体的那个位置，否则就放到最后，但是可以确定的是，一定是在这次渲染中执行的，这个要和$nextTick区分一下，$nextTick 和 这里的队列在同一个微任务中（这里只是可能是微任务，如果不是用的 Promise 的化有可能是其他的类型，这个后续会提到），在执行当前任务的时候，会有一个 callbacks 的队列，$nextTick 是往这个队列中插入一条数据，而响应式变化是直接在当前运行的那个 callback 中的队列中插入。

```javascript
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
export function queueWatcher(watcher: Watcher) {
    const id = watcher.id;
    if (has[id] == null) {
        has[id] = true;
        if (!flushing) {
            queue.push(watcher);
        } else {
            // if already flushing, splice the watcher based on its id
            // if already past its id, it will be run next immediately.
            /**
             * 如果实在队列更新的时候触发了，则根据watcher的id判断是否可以将其放在当前队列执行，如果可以的话，就在本次更新过程处理，否则就在下一个更新过程中处理，这里需要注意的一点是，watcher在Dep.notify() 的时候，是排过顺序的，是按照id进行排序的，其次在刷新的时候，也会对队列中的Watcher进行排序处理，
             */
            let i = queue.length - 1;
            while (i > index && queue[i].id > watcher.id) {
                i--;
            }
            queue.splice(i + 1, 0, watcher);
        }
        // queue the flush
        if (!waiting) {
            waiting = true;

            if (process.env.NODE_ENV !== "production" && !config.async) {
                flushSchedulerQueue();
                return;
            }
            nextTick(flushSchedulerQueue);
        }
    }
}
```

-   flushSchedulerQueue

flushSchedulerQueue 就是渲染当前调度队列，实际上就是按照 Watcher 的 id 从小到大执行当前队列中所有 Watcher 的 run 方法，执行过后，就将其 has 中的值设置为 null，好让对应的 Watcher 再次进入队列，然后就是在重置调度状态之前，拷贝 keepAlive 的组件队列和当前 Watcher 队列，然后触发对应声明周期的执行，activatedQueue 是 KeepAlive 的 Activated 声明周期，updateQueue 是 updated 声明周期。

```javascript
/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue() {
    currentFlushTimestamp = getNow();
    flushing = true;
    let watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort((a, b) => a.id - b.id);

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
        watcher = queue[index];
        if (watcher.before) {
            watcher.before();
        }
        id = watcher.id;
        has[id] = null;
        watcher.run();
        // in dev build, check and stop circular updates.
        if (process.env.NODE_ENV !== "production" && has[id] != null) {
            circular[id] = (circular[id] || 0) + 1;
            if (circular[id] > MAX_UPDATE_COUNT) {
                warn(
                    "You may have an infinite update loop " +
                        (watcher.user
                            ? `in watcher with expression "${watcher.expression}"`
                            : `in a component render function.`),
                    watcher.vm
                );
                break;
            }
        }
    }

    // keep copies of post queues before resetting state
    const activatedQueue = activatedChildren.slice();
    const updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
        devtools.emit("flush");
    }
}
```

-   nextTick

nextTick （src\core\util\next-tick.js） 方法是放到更新队列中的方法，将如的回调方法都放到 callbacks 这个数组中，如果没有 callback 方法，就执行返回的 Promise 的 resolve 方法，

```javascript
export function nextTick(cb?: Function, ctx?: Object) {
    let _resolve;
    callbacks.push(() => {
        if (cb) {
            try {
                cb.call(ctx);
            } catch (e) {
                handleError(e, ctx, "nextTick");
            }
        } else if (_resolve) {
            _resolve(ctx);
        }
    });
    if (!pending) {
        pending = true;
        timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== "undefined") {
        return new Promise((resolve) => {
            _resolve = resolve;
        });
    }
}
```

-   timerFunc

timerFunc 是实际通过什么运行的方法，其到底通过那种方式进行异步更新取决于运行环境，整体的判断规则为 Promise.then > MutationObserver > setImmediate > setTimeout ,这里 Promise.then 和 [MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver) 都是放在微任务队列中，在 script 的宏任务执行完成后，再执行当前宏任务下的微任务队列，微任务队列执行完成后，再执行下一个宏任务。[setImmediate](https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate) 和 setTimeout 都是放到了宏任务队列中。

```javascript
let timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== "undefined" && isNative(Promise)) {
    const p = Promise.resolve();
    timerFunc = () => {
        p.then(flushCallbacks);
        // In problematic UIWebViews, Promise.then doesn't completely break, but
        // it can get stuck in a weird state where callbacks are pushed into the
        // microtask queue but the queue isn't being flushed, until the browser
        // needs to do some other work, e.g. handle a timer. Therefore we can
        // "force" the microtask queue to be flushed by adding an empty timer.
        if (isIOS) setTimeout(noop);
    };
    isUsingMicroTask = true;
} else if (
    !isIE &&
    typeof MutationObserver !== "undefined" &&
    (isNative(MutationObserver) ||
        // PhantomJS and iOS 7.x
        MutationObserver.toString() === "[object MutationObserverConstructor]")
) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    let counter = 1;
    const observer = new MutationObserver(flushCallbacks);
    const textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
        characterData: true,
    });
    timerFunc = () => {
        counter = (counter + 1) % 2;
        textNode.data = String(counter);
    };
    isUsingMicroTask = true;
} else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Technically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = () => {
        setImmediate(flushCallbacks);
    };
} else {
    // Fallback to setTimeout.
    timerFunc = () => {
        setTimeout(flushCallbacks, 0);
    };
}
```

### Vue 虚拟 DOM (VNode)

虚拟 DOM（Virtual DOM）是对 DOM 的 JS 抽象表示，它们是 JS 对象，能够描述 DOM 结构和关系。应用的各种状态变化会作用于虚拟 DOM，最终映射到 DOM 上。

优点：

1.  虚拟 DOM 轻量、快速：当它们发生变化时通过新旧虚拟 DOM 比对可以得到最小 DOM 操作量，配合异步更新策略减少刷新频率，从而提升性能
2.  跨平台：将虚拟 dom 更新转换为不同运行时特殊操作实现跨平台
3.  兼容性：还可以加入兼容性代码增强操作的兼容性

为什么要引入虚拟 DOM，实际上再 Vue1.0 中是直接对 DOM 进行操作的，了解过前端性能优化的应改知道，在性能优化中有一项就是减少 DOM 操作，因为频繁的对 DOM 进行操作会引起频繁的重绘和回流，所以也就导致了性能损耗，对于一些小型项目可能还不太明显，但是对于大型项目而言就捉襟见肘了，虚拟 DOM 则是尽可能的减少 DOM 的操作。虚拟 DOM 的结构和 DOM 本身也不太一样，这是因为在实际的计较中，我们并不需要那么多的属性去操作，只需要一部分和核心代码相关的属性即可。

Vue2.0 中 VNode 的核心在于其 diff 算法，接下来就稍微说一下其中的具体流程。

VNode 实际上是在组件生成 Watcher 的时候创建的，之前在$mount 方法调用 mountComponent（src\core\instance\lifecycle.js）方法中，调用了\_render()从而生成了 VNode，\_render 这个方法是在初始化执行 renderMixin（src\core\instance\render.js）的时候注册到实例上的。在通过\_render 生成 VNode 后，在通过\_update 进行更新，\_update 方法是在初始化执行 lifecycleMixin（src\core\instance\lifecycle.js） 的时候注册到实例上的。具体的 diff 在 \_\_patch\_\_ 方法中，\_\_patch\_\_是在初始化 runtime（src\platforms\web\runtime\index.js）中的时候注册到实例上的。

```javascript
// 真正的挂载
export function mountComponent(
    vm: Component,
    el: ?Element,
    hydrating?: boolean
): Component {
    vm.$el = el;
    if (!vm.$options.render) {
        vm.$options.render = createEmptyVNode;
        if (process.env.NODE_ENV !== "production") {
            /* istanbul ignore if */
            if (
                (vm.$options.template &&
                    vm.$options.template.charAt(0) !== "#") ||
                vm.$options.el ||
                el
            ) {
                warn(
                    "You are using the runtime-only build of Vue where the template " +
                        "compiler is not available. Either pre-compile the templates into " +
                        "render functions, or use the compiler-included build.",
                    vm
                );
            } else {
                warn(
                    "Failed to mount component: template or render function not defined.",
                    vm
                );
            }
        }
    }
    callHook(vm, "beforeMount");

    // 组件更新函数声明
    let updateComponent;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== "production" && config.performance && mark) {
        updateComponent = () => {
            const name = vm._name;
            const id = vm._uid;
            const startTag = `vue-perf-start:${id}`;
            const endTag = `vue-perf-end:${id}`;

            mark(startTag);
            const vnode = vm._render();
            mark(endTag);
            measure(`vue ${name} render`, startTag, endTag);

            mark(startTag);
            vm._update(vnode, hydrating);
            mark(endTag);
            measure(`vue ${name} patch`, startTag, endTag);
        };
    } else {
        updateComponent = () => {
            // 首先执行render =》 vdom
            vm._update(vm._render(), hydrating);
        };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(
        vm,
        updateComponent,
        noop,
        {
            // 这个是一个template 对应的Watcher，这个Watcher触发说明data属性发生变化，所以需要注册生命周期方法
            before() {
                if (vm._isMounted && !vm._isDestroyed) {
                    callHook(vm, "beforeUpdate");
                }
            },
        },
        true /* isRenderWatcher */
    );
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
        vm._isMounted = true;
        callHook(vm, "mounted");
    }
    return vm;
}
```

-   \_render

这就是一个生成 VNode 的过程，实际上在对 template 编译的时候就已经生成了可以生成 VNode 的 render 方法了。

```javascript
Vue.prototype._render = function (): VNode {
    const vm: Component = this;
    const { render, _parentVnode } = vm.$options;

    if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(
            _parentVnode.data.scopedSlots,
            vm.$slots,
            vm.$scopedSlots
        );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    let vnode;
    try {
        // There's no need to maintain a stack because all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
        handleError(e, vm, `render`);
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        if (process.env.NODE_ENV !== "production" && vm.$options.renderError) {
            try {
                vnode = vm.$options.renderError.call(
                    vm._renderProxy,
                    vm.$createElement,
                    e
                );
            } catch (e) {
                handleError(e, vm, `renderError`);
                vnode = vm._vnode;
            }
        } else {
            vnode = vm._vnode;
        }
    } finally {
        currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
        if (process.env.NODE_ENV !== "production" && Array.isArray(vnode)) {
            warn(
                "Multiple root nodes returned from render function. Render function " +
                    "should return a single root node.",
                vm
            );
        }
        vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode;
};
```

-   \_update

更新的时候，如果没有上一次的 VNode，说明是初始化，所以就直接传对应的 el，直接插入 DOM，具体的核心 diff 逻辑在\_\_patch\_\_方法里。

```javascript
Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {
    const vm: Component = this;
    const prevEl = vm.$el;
    // 上次计算的虚拟dom
    const prevVnode = vm._vnode;
    const restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    // 初始化时没有prevVnode
    if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
        // updates
        // diff
        vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
        prevEl.__vue__ = null;
    }
    if (vm.$el) {
        vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
};
```

生成\_\_patch\_\_的方法在 src\platforms\web\runtime\patch.js 文件中，这里引用了 createPatchFunction（src\core\vdom\patch.js）方法，调用 createPatchFunction 的时候，传入了两个参数，分别是节点操作的一些方法（node-ops.js），和元素上样式属性等节点的操作方法（src\platforms\web\runtime\modules 文件下的操作方法和 src\core\vdom\modules 文件下操作方法的集合）。

```javascript
import * as nodeOps from "web/runtime/node-ops";
import { createPatchFunction } from "core/vdom/patch";
import baseModules from "core/vdom/modules/index";
import platformModules from "web/runtime/modules/index";

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules);

export const patch: Function = createPatchFunction({ nodeOps, modules });
```

createPatchFunction 实际上是通过闭包生成了一个处理 VNode -> node 的过程的操作，这里就主要看 createPatchFunction 返回的 patch 方法.

首先，如果没有当前的 VNode，但是存在就的虚拟 DOM，就说明是

```javascript
return function patch(oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
        if (isDef(oldVnode)) invokeDestroyHook(oldVnode);
        return;
    }

    let isInitialPatch = false;
    const insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
    } else {
        const isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
            // patch existing root node
            patchVnode(
                oldVnode,
                vnode,
                insertedVnodeQueue,
                null,
                null,
                removeOnly
            );
        } else {
            if (isRealElement) {
                // mounting to a real element
                // check if this is server-rendered content and if we can perform
                // a successful hydration.
                if (
                    oldVnode.nodeType === 1 &&
                    oldVnode.hasAttribute(SSR_ATTR)
                ) {
                    oldVnode.removeAttribute(SSR_ATTR);
                    hydrating = true;
                }
                if (isTrue(hydrating)) {
                    if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                        invokeInsertHook(vnode, insertedVnodeQueue, true);
                        return oldVnode;
                    } else if (process.env.NODE_ENV !== "production") {
                        warn(
                            "The client-side rendered virtual DOM tree is not matching " +
                                "server-rendered content. This is likely caused by incorrect " +
                                "HTML markup, for example nesting block-level elements inside " +
                                "<p>, or missing <tbody>. Bailing hydration and performing " +
                                "full client-side render."
                        );
                    }
                }
                // either not server-rendered, or hydration failed.
                // create an empty node and replace it
                oldVnode = emptyNodeAt(oldVnode);
            }

            // replacing existing element
            const oldElm = oldVnode.elm;
            const parentElm = nodeOps.parentNode(oldElm);

            // create new node
            createElm(
                vnode,
                insertedVnodeQueue,
                // extremely rare edge case: do not insert if old element is in a
                // leaving transition. Only happens when combining transition +
                // keep-alive + HOCs. (#4590)
                oldElm._leaveCb ? null : parentElm,
                nodeOps.nextSibling(oldElm)
            );

            // update parent placeholder node element, recursively
            if (isDef(vnode.parent)) {
                let ancestor = vnode.parent;
                const patchable = isPatchable(vnode);
                while (ancestor) {
                    for (let i = 0; i < cbs.destroy.length; ++i) {
                        cbs.destroy[i](ancestor);
                    }
                    ancestor.elm = vnode.elm;
                    if (patchable) {
                        for (let i = 0; i < cbs.create.length; ++i) {
                            cbs.create[i](emptyNode, ancestor);
                        }
                        // #6513
                        // invoke insert hooks that may have been merged by create hooks.
                        // e.g. for directives that uses the "inserted" hook.
                        const insert = ancestor.data.hook.insert;
                        if (insert.merged) {
                            // start at index 1 to avoid re-invoking component mounted hook
                            for (let i = 1; i < insert.fns.length; i++) {
                                insert.fns[i]();
                            }
                        }
                    } else {
                        registerRef(ancestor);
                    }
                    ancestor = ancestor.parent;
                }
            }

            // destroy old node
            if (isDef(parentElm)) {
                removeVnodes([oldVnode], 0, 0);
            } else if (isDef(oldVnode.tag)) {
                invokeDestroyHook(oldVnode);
            }
        }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
};
```
