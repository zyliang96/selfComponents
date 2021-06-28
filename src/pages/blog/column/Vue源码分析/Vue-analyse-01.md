# Vue 源码解析（一）

虽然 Vue 现在已经更新到 Vue3 了，但是为了更好的理解 2 和 3 之间的变动，以及优化点，所以还是从 Vue2 开始分析

## 2.x

分析的版本是 2.6.11 版本

拉下来代码之后，可以先看一下 package.json 文件，在里面可以看到打包相关的脚本命令，也可以看到相关的入口文件等相关信息，最主要的是打包文件，因为知道了打包文件之后，就可以看到入口文件是哪一个，然后才能够梳理清楚阅读源码的逻辑，避免无头苍蝇乱撞的结果。

在 2.6 版本中，打包文件在 script 文件夹下，实际上 2.6 版本的打包命令是比较简单的，只是获取配置信息，生成 rollup 相关的配置参数，然后根据命令行脚本中的参数，判断执行那种类型的打包脚本，实际上的所有的打包入口文件都是在/src/platforms 目录下的，所以根据需要看具体的入口文件的，就可以找到阅读源码的逻辑（阅读源码的时候，可以先将所有的内容都进行折叠，看主要的执行逻辑，避免一下子接收太多的信息，从而导致混乱）。

先上张图：
![核心代码目录图](/images/核心源码结构.png)

在 scripts\config.js 文件中有个 builds 的对象，这个对象是一个各种打包类型下的入口文件和打包格式等参数的配置信息，里面有个 resolve 方法，具体代码如下：

![builds](/images/打包入口配置.png)

这里需要注意里面的 resolve 方法，这个方法是获取到 builds 里 entry 和 dest 中配置的第一个/前面的内容，然后根据 vue\scripts\alias.js 的配置下对应的具体路径，将这个路径拼接起来，就是具体的路径了。

我们以 web-full-dev 这个配置为例看一下整体流程

### 一、 Vue 实例的初始化

![Vue2初始化流程](/images/Vue2源码初始化流程.png)

web-full-dev 的入口文件是 vue\src\platforms\web\entry-runtime-with-compiler.js ,这个文件主要引入了 Vue , 扩展了 Vue 原型上的$mount 方法，这里实际主要做的就是如果 Vue 实例没有 render 方法，就找 template ,template 再没有，就找 el DOM (对于 el DOM，Vue 中是将其克隆了一份)，最终还是执行的原型上的 mount 方法。具体的渲染方法，后续再说，这里主要看一下 Vue 实例的创建流程。这个文件引入的 Vue 是从 vue\src\platforms\web\runtime\index.js 这个文件，这个文件实现了 mount 方法，这些暂时都先不看了，看多了影响思路（所以看源码的时候一定要注意主线，先弄清楚主线，再看旁支，当然这只针对代码接口清晰的项目），Vue 的核心代码在 vue\src\core\index.js 这个文件下.

vue\src\core\index.js 主要做的事情是初始化全局静态 API，Vue 原型和实例上挂载响应式字段，全局方法这里也暂时不看了，直接到 Vue 构造函数的文件（vue\src\core\instance\index.js），这个文件里声明的了 Vue 的构造函数，并且初始话了一下实例方法和属性,具体代码如下：

```javascript
import { initMixin } from "./init";
import { stateMixin } from "./state";
import { renderMixin } from "./render";
import { eventsMixin } from "./events";
import { lifecycleMixin } from "./lifecycle";
import { warn } from "../util/index";

// 构造函数声明
function Vue(options) {
    if (process.env.NODE_ENV !== "production" && !(this instanceof Vue)) {
        warn(
            "Vue is a constructor and should be called with the `new` keyword"
        );
    }
    // 初始化
    this._init(options);
}

// 初始化实例方法和属性
initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

export default Vue;
```

#### initMixin(Vue);

文件路径:vue\src\core\instance\init.js

initMixin 方法在 Vue 的原型上设置了\_init 方法，这个方法在 new Vue 的时候会被触发（就是构造函数里的 this.\_init 的调用），所以，initMixin 中的一些初始化方法，都是在实例化的时候才调用了，而后续的往 Vue 原型上挂载方法的函数，都是在引入的时候就执行的。\_init 方法主要做如下操作：

1. 选项合并
   选项和并分为了两种场景，一种是为内部组件进行服务的，一种是用户初始化实例的,初始化的时候都会走 else 流程

```javascript
if (options && options._isComponent) {
    // optimize internal component instantiation
    // since dynamic options merging is pretty slow, and none of the
    // internal component options needs special treatment.
    initInternalComponent(vm, options);
} else {
    vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
    );
}
```

2. 初始化

vue\src\core\instance\init.js 文件下的 initMixin 方法

```javascript
initLifecycle(vm); // 生命周期相关的属性初始化$parent等
// <comp @my-click="onclick"></comp>
initEvents(vm); // 自定义组件事件监听
initRender(vm); // 插槽处理，$createElm === render(h)
// 调用生命周期的钩子函数
callHook(vm, "beforeCreate");
// provide/inject
// 组件数据和状态初始化
// 这里的inject和provide类似于react中context，都是将数据向下传递的一种方法
initInjections(vm); // resolve injections before data/props
initState(vm); // data/props/methods/computed/watch
initProvide(vm); // resolve provide after data/props
callHook(vm, "created");
```

(1) initLifecycle （vue\src\core\instance\lifecycle.js）
initLifecycle 是初始化声明周期相关属性，这里面需要注意一下，实例挂载的$parent是第一个非抽象父组件，那么这里就需要了解一下什么是抽象组件了，在Vue中抽象组件主要是keep-alive、transition、transition-group等，它更像是对原有组件的一种包装，如果写过React，你会发现，这里的抽象组件很像React的HOC（高阶组件），但Vue自己实现的抽象组件并没有多余的DOM内容，更多的是对子组件的一种扩展。（但是抽象组件的template内容也是可以显示的，所以抽象组件实际上和原本组件唯一的区别，感觉在于是否会被设置为子组件的$parent，暂时看起来只有这一个作用，还有如何代理子组件的方法，这个还需要再从后续的源码中看一下），言归正传，初始化生命周期相关属性，主要还是为了后续的对比等一系列操作做铺垫。

```javascript
export function initLifecycle(vm: Component) {
    const options = vm.$options;

    // locate first non-abstract parent
    let parent = options.parent;
    if (parent && !options.abstract) {
        while (parent.$options.abstract && parent.$parent) {
            parent = parent.$parent;
        }
        parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
}
```

(2) initEvents （vue\src\core\instance\events.js）
initEvents 做的事情，实际上就是将事件挂在到组件上，这里面包含了透传的事件（v-on="$listeners"），Vue 中传递的时候，需要通过 v-on 命令才可以将所有的事件透传给子组件。

```javascript
export function initEvents(vm: Component) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    const listeners = vm.$options._parentListeners;
    if (listeners) {
        updateComponentListeners(vm, listeners);
    }
}
```

(3) initRender （vue\src\core\instance\render.js）

initRender 主要是进行插槽处理，然后在实例上挂载创建元素的方法，这里面设置了两个方法，分别对于用户自己编写的 render 方法（$createElement）和template转化成的render方法(_c)两种，然后将父组件的$attrs 和$listeners 在当前实例上进行响应式处理

```javascript
export function initRender(vm: Component) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    const options = vm.$options;
    const parentVnode = (vm.$vnode = options._parentVnode); // the placeholder node in parent tree
    const renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false);
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true);

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    const parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
        defineReactive(
            vm,
            "$attrs",
            (parentData && parentData.attrs) || emptyObject,
            () => {
                !isUpdatingChildComponent && warn(`$attrs is readonly.`, vm);
            },
            true
        );
        defineReactive(
            vm,
            "$listeners",
            options._parentListeners || emptyObject,
            () => {
                !isUpdatingChildComponent &&
                    warn(`$listeners is readonly.`, vm);
            },
            true
        );
    } else {
        defineReactive(
            vm,
            "$attrs",
            (parentData && parentData.attrs) || emptyObject,
            null,
            true
        );
        defineReactive(
            vm,
            "$listeners",
            options._parentListeners || emptyObject,
            null,
            true
        );
    }
}
```

(4) callHook(vm, 'beforeCreate') （vue\src\core\instance\lifecycle.js）
调用 beforeCreate 这个生命周期函数

```javascript
export function callHook(vm: Component, hook: string) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    const handlers = vm.$options[hook];
    const info = `${hook} hook`;
    if (handlers) {
        for (let i = 0, j = handlers.length; i < j; i++) {
            invokeWithErrorHandling(handlers[i], vm, null, vm, info);
        }
    }
    if (vm._hasHookEvent) {
        vm.$emit("hook:" + hook);
    }
    popTarget();
}
```

(5) initInjections (vue\src\core\instance\inject.js)
初始化注入参数，实际上这里的主要做的操作是，找到具体的参数数据（通过不断的便利其父元素上的\_provided，这也是为什么在初始化的代码中，要先执行 initInjections 方法，然后执行 initProvide 方法的原因，即避免出现同名属性的影响），这里找到的参数数据，Vue 会进行响应式处理。

```javascript
export function initInjections(vm: Component) {
    const result = resolveInject(vm.$options.inject, vm);
    if (result) {
        toggleObserving(false);
        Object.keys(result).forEach((key) => {
            /* istanbul ignore else */
            if (process.env.NODE_ENV !== "production") {
                defineReactive(vm, key, result[key], () => {
                    warn(
                        `Avoid mutating an injected value directly since the changes will be ` +
                            `overwritten whenever the provided component re-renders. ` +
                            `injection being mutated: "${key}"`,
                        vm
                    );
                });
            } else {
                defineReactive(vm, key, result[key]);
            }
        });
        toggleObserving(true);
    }
}

export function resolveInject(inject: any, vm: Component): ?Object {
    if (inject) {
        // inject is :any because flow is not smart enough to figure out cached
        const result = Object.create(null);
        const keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            // #6574 in case the inject object is observed...
            if (key === "__ob__") continue;
            const provideKey = inject[key].from;
            let source = vm;
            while (source) {
                if (source._provided && hasOwn(source._provided, provideKey)) {
                    result[key] = source._provided[provideKey];
                    break;
                }
                source = source.$parent;
            }
            if (!source) {
                if ("default" in inject[key]) {
                    const provideDefault = inject[key].default;
                    result[key] =
                        typeof provideDefault === "function"
                            ? provideDefault.call(vm)
                            : provideDefault;
                } else if (process.env.NODE_ENV !== "production") {
                    warn(`Injection "${key}" not found`, vm);
                }
            }
        }
        return result;
    }
}
```

(6) initState (vue\src\core\instance\state.js)
initState 初始化 state 内容的时候，完全是按照 props > methods > data > computed > watch

```javascript
export function initState(vm: Component) {
    vm._watchers = [];
    const opts = vm.$options;
    // initState 初始化state内容的时候，完全是按照props > methods > data
    if (opts.props) initProps(vm, opts.props);
    if (opts.methods) initMethods(vm, opts.methods);
    if (opts.data) {
        initData(vm);
    } else {
        observe((vm._data = {}), true /* asRootData */);
    }
    if (opts.computed) initComputed(vm, opts.computed);
    if (opts.watch && opts.watch !== nativeWatch) {
        initWatch(vm, opts.watch);
    }
}
```

-   initProps 将 props 中的数据在当前实例做响应式处理，

```javascript
function initProps(vm: Component, propsOptions: Object) {
    const propsData = vm.$options.propsData || {};
    const props = (vm._props = {});
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    const keys = (vm.$options._propKeys = []);
    const isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
        toggleObserving(false);
    }
    for (const key in propsOptions) {
        keys.push(key);
        const value = validateProp(key, propsOptions, propsData, vm);
        /* istanbul ignore else */
        if (process.env.NODE_ENV !== "production") {
            const hyphenatedKey = hyphenate(key);
            if (
                isReservedAttribute(hyphenatedKey) ||
                config.isReservedAttr(hyphenatedKey)
            ) {
                warn(
                    `"${hyphenatedKey}" is a reserved attribute and cannot be used as component prop.`,
                    vm
                );
            }
            defineReactive(props, key, value, () => {
                if (!isRoot && !isUpdatingChildComponent) {
                    warn(
                        `Avoid mutating a prop directly since the value will be ` +
                            `overwritten whenever the parent component re-renders. ` +
                            `Instead, use a data or computed property based on the prop's ` +
                            `value. Prop being mutated: "${key}"`,
                        vm
                    );
                }
            });
        } else {
            defineReactive(props, key, value);
        }
        // static props are already proxied on the component's prototype
        // during Vue.extend(). We only need to proxy props defined at
        // instantiation here.
        if (!(key in vm)) {
            proxy(vm, `_props`, key);
        }
    }
    toggleObserving(true);
}
```

-   initMethods 将 methods 里的方法挂载在当前实例上，并且绑定当前实例的对象为当前实例(在非生产环境下会判断是否会和 props 里的字段重名)

```javascript
function initMethods(vm: Component, methods: Object) {
    const props = vm.$options.props;
    for (const key in methods) {
        if (process.env.NODE_ENV !== "production") {
            if (typeof methods[key] !== "function") {
                warn(
                    `Method "${key}" has type "${typeof methods[
                        key
                    ]}" in the component definition. ` +
                        `Did you reference the function correctly?`,
                    vm
                );
            }
            if (props && hasOwn(props, key)) {
                warn(`Method "${key}" has already been defined as a prop.`, vm);
            }
            if (key in vm && isReserved(key)) {
                warn(
                    `Method "${key}" conflicts with an existing Vue instance method. ` +
                        `Avoid defining component methods that start with _ or $.`
                );
            }
        }
        vm[key] =
            typeof methods[key] !== "function" ? noop : bind(methods[key], vm);
    }
}
```

-   initData 将 data 中的所有数据的 key 取出，然后做一次遍历，如果和 methods 中方法重名的，给出提示，然后遍历 data 进行响应式处理（这里会调用 observe 方法，observe 方法在 vue\src\core\observer\index.js 文件中，具体的内容后续再看，先看整体流程）

```javascript
function initData(vm: Component) {
    let data = vm.$options.data;
    data = vm._data =
        typeof data === "function" ? getData(data, vm) : data || {};
    if (!isPlainObject(data)) {
        data = {};
        process.env.NODE_ENV !== "production" &&
            warn(
                "data functions should return an object:\n" +
                    "https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function",
                vm
            );
    }
    // proxy data on instance
    // 将data中的所有数据的key取出
    const keys = Object.keys(data);
    const props = vm.$options.props;
    const methods = vm.$options.methods;
    let i = keys.length;
    while (i--) {
        // 这里是对参数做一个判断，是否在methods和props中存在
        const key = keys[i];
        if (process.env.NODE_ENV !== "production") {
            if (methods && hasOwn(methods, key)) {
                warn(
                    `Method "${key}" has already been defined as a data property.`,
                    vm
                );
            }
        }
        if (props && hasOwn(props, key)) {
            process.env.NODE_ENV !== "production" &&
                warn(
                    `The data property "${key}" is already declared as a prop. ` +
                        `Use prop default value instead.`,
                    vm
                );
        } else if (!isReserved(key)) {
            // 这里是对参数进行一个判断，只有非$和_开头的字段才会被做响应式处理，但这里是挂在在_data下面的
            proxy(vm, `_data`, key);
        }
    }
    // observe data
    // 遍历响应式处理
    observe(data, true /* asRootData */);
}
```

-   initComputed 将计算属性挂载到当前实例，如果不是在 SSR 场景下，就给改计算属性建立对应的 Watcher 实例，并把该 watcher 挂载到当前实例（也是由于计算属性和 watch 方法的原因，导致了 watcher 和组件之间存在多对多的情况），如果当前实例上不存在该计算属性，就做计算属性的响应式处理

```javascript
function initComputed(vm: Component, computed: Object) {
    // $flow-disable-line
    const watchers = (vm._computedWatchers = Object.create(null));
    // computed properties are just getters during SSR
    const isSSR = isServerRendering();

    for (const key in computed) {
        const userDef = computed[key];
        const getter = typeof userDef === "function" ? userDef : userDef.get;
        if (process.env.NODE_ENV !== "production" && getter == null) {
            warn(`Getter is missing for computed property "${key}".`, vm);
        }

        if (!isSSR) {
            // create internal watcher for the computed property.
            watchers[key] = new Watcher(
                vm,
                getter || noop,
                noop,
                computedWatcherOptions
            );
        }

        // component-defined computed properties are already defined on the
        // component prototype. We only need to define computed properties defined
        // at instantiation here.
        if (!(key in vm)) {
            defineComputed(vm, key, userDef);
        } else if (process.env.NODE_ENV !== "production") {
            if (key in vm.$data) {
                warn(
                    `The computed property "${key}" is already defined in data.`,
                    vm
                );
            } else if (vm.$options.props && key in vm.$options.props) {
                warn(
                    `The computed property "${key}" is already defined as a prop.`,
                    vm
                );
            }
        }
    }
}
```

-   initWatch 初始化监听，如果存在则创建一个 watcher，具体的原理和实现后续细看

```javascript
function initWatch(vm: Component, watch: Object) {
    for (const key in watch) {
        const handler = watch[key];
        if (Array.isArray(handler)) {
            for (let i = 0; i < handler.length; i++) {
                createWatcher(vm, key, handler[i]);
            }
        } else {
            createWatcher(vm, key, handler);
        }
    }
}

function createWatcher(
    vm: Component,
    expOrFn: string | Function,
    handler: any,
    options?: Object
) {
    if (isPlainObject(handler)) {
        options = handler;
        handler = handler.handler;
    }
    if (typeof handler === "string") {
        handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options);
}
```

(7) initProvide （vue\src\core\instance\inject.js）

initProvide 只是将 provide 的内容，挂载到当前实例上（\_provided 属性）

```javascript
export function initProvide(vm: Component) {
    const provide = vm.$options.provide;
    if (provide) {
        vm._provided =
            typeof provide === "function" ? provide.call(vm) : provide;
    }
}
```

(8) callHook(vm, 'created') （vue\src\core\instance\lifecycle.js）
调用 created 这个生命周期函数

(9) 如果设置了 el 选项，则自动挂载

#### stateMixin(Vue)

文件路径：vue\src\core\instance\state.js

主要往 Vue 实例上初始化$data和$props，并做响应式处理，同时往原型上挂载$set、$delete、$watch方法，其中$set 和$delete 方法都源于 vue\src\core\observer\index.js 文件，$watch 还是生成一个 Watcher 实例，冰河实例进行绑定，如果设置项中有 immediate 选项，则立即执行一次

```javascript
export function stateMixin(Vue: Class<Component>) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    const dataDef = {};
    dataDef.get = function () {
        return this._data;
    };
    const propsDef = {};
    propsDef.get = function () {
        return this._props;
    };
    if (process.env.NODE_ENV !== "production") {
        dataDef.set = function () {
            warn(
                "Avoid replacing instance root $data. " +
                    "Use nested data properties instead.",
                this
            );
        };
        propsDef.set = function () {
            warn(`$props is readonly.`, this);
        };
    }
    Object.defineProperty(Vue.prototype, "$data", dataDef);
    Object.defineProperty(Vue.prototype, "$props", propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (
        expOrFn: string | Function,
        cb: any,
        options?: Object
    ): Function {
        const vm: Component = this;
        if (isPlainObject(cb)) {
            return createWatcher(vm, expOrFn, cb, options);
        }
        options = options || {};
        options.user = true;
        const watcher = new Watcher(vm, expOrFn, cb, options);
        if (options.immediate) {
            try {
                cb.call(vm, watcher.value);
            } catch (error) {
                handleError(
                    error,
                    vm,
                    `callback for immediate watcher "${watcher.expression}"`
                );
            }
        }
        return function unwatchFn() {
            watcher.teardown();
        };
    };
}
```

#### eventsMixin(Vue)

文件路径：vue\src\core\instance\events.js

eventsMixin 在 vue\src\core\instance\events.js 文件下，Vue 原型上挂载一些实例方法，做事件处理，分别是$on、$once、$off、$emit，这些方法的使用场景可以看一下[Vue 官方的 API](https://cn.vuejs.org/v2/api/?#vm-on)。

```javascript
export function eventsMixin (Vue: Class<Component>) {
  const hookRE = /^hook:/
  Vue.prototype.$on = function (event: string | Array<string>, fn: Function): Component {
    ...
  }

  Vue.prototype.$once = function (event: string, fn: Function): Component {
    ...
  }

  Vue.prototype.$off = function (event?: string | Array<string>, fn?: Function): Component {
    ...
  }

  Vue.prototype.$emit = function (event: string): Component {
    ...
  }
}
```

具体的函数方法如下：

-   $on

监听当前实例上的自定义事件。事件可以由 vm.$emit 触发。回调函数会接收所有传入事件触发函数的额外参数。$on 函数，只是将对应监听的事件存放在实例的\_events 上面，供后续$emit 使用

```javascript
Vue.prototype.$on = function (
    event: string | Array<string>,
    fn: Function
): Component {
    const vm: Component = this;
    if (Array.isArray(event)) {
        for (let i = 0, l = event.length; i < l; i++) {
            vm.$on(event[i], fn);
        }
    } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
            vm._hasHookEvent = true;
        }
    }
    return vm;
};
```

-   $off

移除自定义事件监听器。如果没有提供参数，则移除所有的事件监听器；如果只提供了事件，则移除该事件所有的监听器；如果同时提供了事件与回调，则只移除这个回调的监听器。这里就是一个简短的逻辑处理。

```javascript
Vue.prototype.$off = function (
    event?: string | Array<string>,
    fn?: Function
): Component {
    const vm: Component = this;
    // all
    if (!arguments.length) {
        vm._events = Object.create(null);
        return vm;
    }
    // array of events
    if (Array.isArray(event)) {
        for (let i = 0, l = event.length; i < l; i++) {
            vm.$off(event[i], fn);
        }
        return vm;
    }
    // specific event
    const cbs = vm._events[event];
    if (!cbs) {
        return vm;
    }
    if (!fn) {
        vm._events[event] = null;
        return vm;
    }
    // specific handler
    let cb;
    let i = cbs.length;
    while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
            cbs.splice(i, 1);
            break;
        }
    }
    return vm;
};
```

-   $once

监听一个自定义事件，但是只触发一次。一旦触发之后，监听器就会被移除。实际上是自己重新实现了一个回调方法，在$on触发执行回调后，再调用$off 方法注销掉对应的回调

```javascript
Vue.prototype.$once = function (event: string, fn: Function): Component {
    const vm: Component = this;
    function on() {
        vm.$off(event, on);
        fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm;
};
```

-   $emit

触发当前实例上的事件。附加参数都会传给监听器回调。会在实例的\_events 对象上找，是否存在当前事件，如果存在则会循环调用当前事件注册的所有回调方法，并将参数传入

```javascript
Vue.prototype.$emit = function (event: string): Component {
    const vm: Component = this;
    if (process.env.NODE_ENV !== "production") {
        const lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
            tip(
                `Event "${lowerCaseEvent}" is emitted in component ` +
                    `${formatComponentName(
                        vm
                    )} but the handler is registered for "${event}". ` +
                    `Note that HTML attributes are case-insensitive and you cannot use ` +
                    `v-on to listen to camelCase events when using in-DOM templates. ` +
                    `You should probably use "${hyphenate(
                        event
                    )}" instead of "${event}".`
            );
        }
    }
    let cbs = vm._events[event];
    if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        const args = toArray(arguments, 1);
        const info = `event handler for "${event}"`;
        for (let i = 0, l = cbs.length; i < l; i++) {
            invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
    }
    return vm;
};
```

#### lifecycleMixin(Vue)

文件路径：vue\src\core\instance\lifecycle.js

实例上挂载一些生命周期相关的方法，有\_update、$forceUpdate、$destroy，其中\_update 是不对外暴露的，是 Vue 内部调用的，\_update 是做 diff 算法执行的方法，这里主要调用了\_\_patch\_\_方法，这个方法在入口文件中执行的挂载。

-   \_update

虚拟 dom 进行 diff 算法和匹配，具体的 diff 算法，后续具体查看

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

-   $forceUpdate

迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。这里实际上是触发组件更新的 Watcher，这个 Watcher 是在 mountComponent 的时候注册的。所以这里理论上来说是不会触发计算属性、watch 的函数调用的（注意：这里所说的不会触发调用的前提是在执行$forceUpdate 前没有更改过和计算属性或者 watch 相关的 data 数据）。

```javascript
Vue.prototype.$forceUpdate = function () {
    const vm: Component = this;
    if (vm._watcher) {
        vm._watcher.update();
    }
};
```

-   $destroy

完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。触发 beforeDestroy 和 destroyed 的钩子。包括清理和当前实例相关的 Watcher 和绑定的所有事件，这里也会调用 diff，需要注意的是\_events 的注销是在 destroyed 这个生命周期之后进行的，清楚 Watcher 的方法是在 destroyed 生命周期之前 beforeDestroy 生命周期之后进行的。

```javascript
Vue.prototype.$destroy = function () {
    const vm: Component = this;
    if (vm._isBeingDestroyed) {
        return;
    }
    callHook(vm, "beforeDestroy");
    vm._isBeingDestroyed = true;
    // remove self from parent
    const parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
        vm._watcher.teardown();
    }
    let i = vm._watchers.length;
    while (i--) {
        vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, "destroyed");
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
        vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
        vm.$vnode.parent = null;
    }
};
```

#### renderMixin(Vue)

文件路径：vue\src\core\instance\render.js

主要做了两件事情

1.  在 Vue 实例上挂载一些渲染相关的方法，这里涉及到了渲染列表等具体内容（这里主要是针对运行时的渲染方法），具体方法的文件为 vue\src\core\instance\render-helpers\index.js，后续单独分析和渲染相关的内容

```javascript
// install runtime convenience helpers
installRenderHelpers(Vue.prototype);
```

2. 注册\_render、$nextTick 方法

-   $nextTick

将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。这里是将方法直接丢到了一个回调函数中，这是一个全局的回调方法的列表，如果没有传入对应的 cb 方法，那么将返回一个 Promise（具体的内容在看和渲染相关的时候再细看）

```javascript
Vue.prototype.$nextTick = function (fn: Function) {
    return nextTick(fn, this);
};
```

-   \_render

\_render 方法的本质应该是生成虚拟 dom，

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

### 二、数据响应式

数据响应式整体实际上应该分为三个部分，或者说是三种场景更加贴切（这里的场景不是按照使用场景来区分的，而是通过具体生成操作来区分的），在 Vue 中会触发数据响应式处理的操作有初始化 Data、$set、$delete、初始化 computed、初始化 watch、$watch，这里面初始化data、$set、$delete都是对Data的操作，所以归为一类（都是对数据进行Object.defineProperty，并且都有Render Watcher），初始化computed归为一类(单独的Watcher，也进行Object.defineProperty)，初始化watch、$watch 归为一类（回调方法的 Watcher，$watch稍微有点区别，因为$watch 返回一个方法，可以注销当前的这个 Watcher）。这三种 Watcher 在实际的操作上稍有差别，

#### Data 相关的数据响应式

![数据响应式](/images/Vue2-数据响应式.png)

Vue2 中 Data 相关的响应式处理主要是在 initMixin（vue\src\core\instance\index.js） 方法的 initState（\vue\src\core\instance\state.js） 中的 initData（\vue\src\core\instance\state.js）方法里。如果 data 不存在的时候，Vue 会将一个空对象做响应式处理，这里处理的是 data 中的数据内容，它和 computed 和 watch 中的响应式不同，computed 和 watch 是单独建立了一个 watcher 的方式进行的，对于这两种情况而言，更多的是 get。

initData 中有一个点需要注意，在遍历循环的时候，会对 data 中的数据做一个判断，只有非$和\_开头的字段才会被做响应式处理，数据实际上是保存在当前实例的\_data 属性下的，所以在遍历响应式处理之间，已经对 data 中的数据做了响应式处理，具体代码如下

```javascript
// proxy data on instance
// 将data中的所有数据的key取出
const keys = Object.keys(data);
const props = vm.$options.props;
const methods = vm.$options.methods;
let i = keys.length;
while (i--) {
    // 这里是对参数做一个判断，是否在methods和props中存在
    const key = keys[i];
    if (process.env.NODE_ENV !== "production") {
        if (methods && hasOwn(methods, key)) {
            warn(
                `Method "${key}" has already been defined as a data property.`,
                vm
            );
        }
    }
    if (props && hasOwn(props, key)) {
        process.env.NODE_ENV !== "production" &&
            warn(
                `The data property "${key}" is already declared as a prop. ` +
                    `Use prop default value instead.`,
                vm
            );
    } else if (!isReserved(key)) {
        // 这里是对参数进行一个判断，只有非$和_开头的字段才会被做响应式处理，但这里是挂在在_data下面的
        proxy(vm, `_data`, key);
    }
}
```

Observe 的主要内容在 vue\src\core\observer\index.js 中，这里对数据类型做了要求，只有对象并且不是虚拟 dom 类型的数据才会做响应式处理。这里需要注意的点是，在实例化 Vue 的时候，前面已经对 data 做过了类型要就，即 data 必须返回的是一个对象，所以此时 observer 肯定会执行一次。同时源码中对于已经做过响应式处理的数据，直接使用其响应式实例，避免重复创建.

```javascript
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
export function observe(value: any, asRootData: ?boolean): Observer | void {
    if (!isObject(value) || value instanceof VNode) {
        return;
    }
    // Observer作用？
    // 1.将传入value做响应式处理
    let ob: Observer | void;
    // 如果已经做过响应式处理，则直接返回ob
    if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
        ob = value.__ob__;
    } else if (
        shouldObserve &&
        !isServerRendering() &&
        (Array.isArray(value) || isPlainObject(value)) &&
        Object.isExtensible(value) &&
        !value._isVue
    ) {
        // 初始化传入需要响应式的对象
        ob = new Observer(value);
    }
    // vmCount判断是否是根$data实例
    if (asRootData && ob) {
        ob.vmCount++;
    }
    return ob;
}
```

创建 Observer 实例的时候，实例本身也会创建依赖实例，并挂载到 Observer 实例上，这样子是为了后续数据发生变动的时候，可以触发依赖调用，无论是对象还是数组，这个实例上都要注册一个\_\_ob\_\_的属性，并且指向当前的 Observer，这样后续在添加属性的时候，可以直接使用当前实例，在当前实例上进行响应式处理，而避免再次重新创建整个实例，减小性能消耗。对于非数组的数据，直接触发 walk，即直接进行响应式处理。对于数组来说，则需要通过遍历的形式处理数组中的每一个数据，这样是为了保证如果数组中存在对象的时候，也能进行响应式处理。

```javascript
export class Observer {
    value: any;
    dep: Dep;
    vmCount: number; // number of vms that have this object as root $data

    constructor(value: any) {
        // 2.此处dep目的？
        // 如果使用Vue.set/delete添加或删除属性，负责通知更新
        this.value = value;
        // 对象本身也会先创建一个dependence，这是为了监控往对象里设置属性时，出发依赖调用
        this.dep = new Dep();
        this.vmCount = 0;
        // defineProperty注册__ob__这个属性
        def(value, "__ob__", this);
        // 1.分辨传入对象类型,因为前面判断了一开始的时候必须是对象，所以非数组就执行了walk方法
        if (Array.isArray(value)) {
            // 现代浏览器，覆盖原型，实际上就是如果不支持Object.defineProperty就直接覆盖其方法
            if (hasProto) {
                protoAugment(value, arrayMethods);
            } else {
                copyAugment(value, arrayMethods, arrayKeys);
            }
            // 递归遍历数组的所有值
            this.observeArray(value);
        } else {
            // 非数值直接处理
            this.walk(value);
        }
    }

    /**
     * Walk through all properties and convert them into
     * getter/setters. This method should only be called when
     * value type is Object.
     */
    walk(obj: Object) {
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i]);
        }
    }

    /**
     * Observe a list of Array items.
     */
    observeArray(items: Array<any>) {
        for (let i = 0, l = items.length; i < l; i++) {
            observe(items[i]);
        }
    }
}
```

其次这里做数据响应式的时候，需要考虑的一个问题是，针对数组的处理，因为在日常的使用中，我们会通过 push、pop、unshift 等方法给数组增加或删除其中的一个或多个数据，但是 Object.defineProperty 并不会对数组的这些操作进行监听，所以需要对数组的方法进行复写，但是需要注意，在 ie 浏览器中，由于不支持 Object.defineProperty，所以就直接进行覆盖。但实际上我感觉这里有点问题，因为 arrayMethods 这个对象本身在实现的时候，就是通过 Object.defineProperty 挂载的，所以感觉这里判断不判断好像影响不是很大。

```javascript
if (Array.isArray(value)) {
    // 现代浏览器，覆盖原型，实际上就是如果不支持Object.defineProperty就直接覆盖其方法
    if (hasProto) {
        protoAugment(value, arrayMethods);
    } else {
        copyAugment(value, arrayMethods, arrayKeys);
    }
    // 递归遍历数组的所有值
    this.observeArray(value);
}
```

```javascript
// protoAugment
function protoAugment(target, src: Object) {
    /* eslint-disable no-proto */
    // 覆盖当前数组实例的原型
    // 他只会影响当前数组实例本身
    target.__proto__ = src;
    /* eslint-enable no-proto */
}
```

```javascript
function copyAugment(target: Object, src: Object, keys: Array<string>) {
    for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        def(target, key, src[key]);
    }
}
```

这里处理 array 的方法的文件是 vue\src\core\observer\array.js，首先将 Array 原型克隆一份，实际上数组涉及到的处理方法主要有：push、pop、shift、unshift、splice、sort、reverse 这 7 个方法，复写这些方法的时候，都是通过 Object.defineProperty 响应式处理的，首先要执行原有行为，然后获取\_\_ob\_\_实例，涉及到对原有数组增加数据的场景，只有三个方法，分别是 push、unshift、和 splice，其他的操作，只会删除原有的字段，所以不需要重新执行响应式，这三中方法中，push 和 unshift 方法的入参都是具体的数据，所以处理方式一样，但是对于 splice 方法，第三个入参才是具体需要执行响应式处理的数据，所以需要 slice(2)做一次截取操作，对新增的数据处理完成后，再通知内部的依赖更新。

```javascript
import { def } from "../util/index";
// 1.获取数组原型
const arrayProto = Array.prototype;
// 2.克隆一份
export const arrayMethods = Object.create(arrayProto);

const methodsToPatch = [
    "push",
    "pop",
    "shift",
    "unshift",
    "splice",
    "sort",
    "reverse",
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
    // cache original method
    // 原始方法
    const original = arrayProto[method];
    def(arrayMethods, method, function mutator(...args) {
        // 执行原始行为
        const result = original.apply(this, args);

        // 变更通知
        // 1.获取ob实例
        const ob = this.__ob__;
        // 如果是新增元素的操作：比如push，unshift或者增加元素的splice操作
        let inserted;
        switch (method) {
            case "push":
            case "unshift":
                inserted = args;
                break;
            case "splice":
                inserted = args.slice(2);
                break;
        }
        // 新加入的对象仍然需要响应式处理
        if (inserted) ob.observeArray(inserted);
        // notify change
        // 让内部的dep通知更新
        ob.dep.notify();
        return result;
    });
});
```

实际执行响应式操作的是 defineReactive 函数，这个函数会为每一个做响应式处理的数据都生成一个 Dep 实例，首先在做响应式处理的时候，会调用 Object.getOwnPropertyDescriptor 方法来判断这个数据是否是可以修改的，由于可能存在数据的值本身是一个对象或者是一个数组的情况，所以会递归调用 observe，由 observe 判断是否需要处理，这里有一个点比较难理解的是，get 中有一个 Dep.target 的逻辑，如果 Dep.target 存在，那么说明此次调用的是一个 Watcher 实例，这个时候，需要将这个实例绑定到这个响应式数据上，因为只有这样，后续这个数据发生变化的时候，才能够触发对应的依赖，dep.depend()这个方法，实际上是将 Dep.target 指向的实例，放在了当前的 dep 队列中，如果存在数据本身又是一个对象的情况，则需要将这个依赖关系和子属性也进行绑定，这里实际上需要注意的一点是，子属性在做绑定的时候，是存在多次绑定的情况的，所以 Watcher 在 addDep 的时候，是有一个去重判断的逻辑的。set 方法在获取的时候，会执行递归响应式处理，具体的判断还是由 observe 方法控制，set 的时候，会触发响应式通知（有一点可能上面说的比较模糊，就是 dep.depend 方法调用的时候，实际上触发的 watcher 的 addDep 方法，在 watcher 的 addDep 方法中，实际上会进行一个双向绑定，即 watcher 和当前的 dep 之间进行双向绑定，互为依赖）。

这里还有一个点，为什么 Dep 实例会被和数据绑定起来，是因为闭包，将 Dep 暂存在了内存中，所以 Dep 实例一直存在，并和对象的响应式相关联。

```javascript
export function defineReactive(
    obj: Object,
    key: string,
    val: any,
    customSetter?: ?Function,
    shallow?: boolean
) {
    // 创建key一一对应的dep
    const dep = new Dep();

    const property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
        return;
    }

    // cater for pre-defined getter/setters
    const getter = property && property.get;
    const setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
        val = obj[key];
    }

    // 递归遍历
    // 这里有个比较巧妙的点，observe递归的实际上只有数组和对象，然后在第一执行observe的时候，前置操作里已经将data进行了处理，让其一定是对象
    let childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            const value = getter ? getter.call(obj) : val;
            // 如果存在，说明此次调用触发者是一个Watcher实例
            // dep n：n watcher
            if (Dep.target) {
                // 建立dep和Dep.target之间依赖关系
                // TODO 这里需要注意的是，设置的Dep.target到底是个什么东西，理论上这个里设置的应该是一个Watcher，因为只有给Watcher添加对应的依赖，才有意义
                dep.depend();

                if (childOb) {
                    // 建立ob内部dep和Dep.target之间依赖关系
                    // 这里只考虑子属性即可，因为在上方执行observe递归的时候，子属性也会执行相同的判断进行递归
                    childOb.dep.depend();
                    // 如果是数组，数组内部所有项都要做相同处理
                    if (Array.isArray(value)) {
                        dependArray(value);
                    }
                }
            }
            return value;
        },
        set: function reactiveSetter(newVal) {
            const value = getter ? getter.call(obj) : val;
            /* eslint-disable no-self-compare */
            if (newVal === value || (newVal !== newVal && value !== value)) {
                return;
            }
            /* eslint-enable no-self-compare */
            if (process.env.NODE_ENV !== "production" && customSetter) {
                customSetter();
            }
            // #7981: for accessor properties without setter
            if (getter && !setter) return;
            if (setter) {
                setter.call(obj, newVal);
            } else {
                val = newVal;
            }
            // 如果新的数据是一个对象或者数组，那么要重新执行数据响应式处理
            childOb = !shallow && observe(newVal);
            // 通知watcher进行修改
            dep.notify();
        },
    });
}
```

这里实际上有一个隐藏的逻辑，data 中每有一个对象或者 Array，会执行 new Observer 就会生成一个 Dep（这个生成的大管家是用来处理对象或数组中的增删的更新通知） ，对象中每有一个 key，则生成一个 Dep（这个生成的小管家是用来触发值变更的更新通知），具体示意图如下：

![Vue2-Observer-Dep-关系图](/images/Vue2-Observer-Dep-关系图.png)

实际上在 vue\src\core\observer\index.js 文件中，还有提供了两个全局方法，分别是 set 和 del，他们会在实例化执行\_init 方法的时候由 stateMixin 方法挂载到 Vue 实例上，对应$set和$delete 方法，set 方法实际上就是对传入的这个目标对象做响应式处理，当然这里也不一定是响应式对象，所以在 set 方法中，如果目标对象不是一个响应式数据的话，只做赋值，不进行响应式处理，否则做响应式处理，并触发该响应式对象的所有 Watcher。

```javascript
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
export function set(target: Array<any> | Object, key: any, val: any): any {
    if (
        process.env.NODE_ENV !== "production" &&
        (isUndef(target) || isPrimitive(target))
    ) {
        warn(
            `Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`
        );
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.length = Math.max(target.length, key);
        target.splice(key, 1, val);
        return val;
    }
    if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        return val;
    }
    const ob = (target: any).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
        process.env.NODE_ENV !== "production" &&
            warn(
                "Avoid adding reactive properties to a Vue instance or its root $data " +
                    "at runtime - declare it upfront in the data option."
            );
        return val;
    }
    if (!ob) {
        target[key] = val;
        return val;
    }
    defineReactive(ob.value, key, val);
    ob.dep.notify();
    return val;
}
```

del 方法实际上就是删除对应属性，只不过对于响应式数据，会触发其所有的 Watcher。

```javascript
/**
 * Delete a property and trigger change if necessary.
 */
export function del(target: Array<any> | Object, key: any) {
    if (
        process.env.NODE_ENV !== "production" &&
        (isUndef(target) || isPrimitive(target))
    ) {
        warn(
            `Cannot delete reactive property on undefined, null, or primitive value: ${(target: any)}`
        );
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1);
        return;
    }
    const ob = (target: any).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
        process.env.NODE_ENV !== "production" &&
            warn(
                "Avoid deleting properties on a Vue instance or its root $data " +
                    "- just set it to null."
            );
        return;
    }
    if (!hasOwn(target, key)) {
        return;
    }
    delete target[key];
    if (!ob) {
        return;
    }
    ob.dep.notify();
}
```

(1) Dep （vue\src\core\observer\dep.js）

Dep 实例的源码在 vue\src\core\observer\dep.js 路径下，Dep 实例实际上主要是对依赖的一个保存，然后包含了 addSub(添加方法)、removeSub(移除方法)、depend(依赖绑定)、notify(响应)。notify 在处理响应的 watcher 的时候，是先拷贝了一份数据出来，然后在执行每个 Watcher 的 update 方法。depend 方法处理的时候，实际上是一个双向绑定的过程，Watcher 绑定 Dep 的同时，Watcher 中也会调用当前 Dep 的 addSub 方法，进行双向绑定。

从源码里可以看出来，有一个全局的 targetStack(目标栈)，这个应该是避免了 Watcher 嵌套的问题，每次设置的都是栈顶元素，这样在嵌套的 Watcher 触发的时候，就可以准确的判定当前的 Watcher 是哪个了。

```javascript
export default class Dep {
    static target: ?Watcher;
    id: number;
    subs: Array<Watcher>;

    constructor() {
        this.id = uid++;
        this.subs = [];
    }

    addSub(sub: Watcher) {
        this.subs.push(sub);
    }

    removeSub(sub: Watcher) {
        remove(this.subs, sub);
    }

    depend() {
        if (Dep.target) {
            Dep.target.addDep(this);
        }
    }

    notify() {
        // stabilize the subscriber list first
        // 严格保证执行顺序是按照生成顺序执行的
        const subs = this.subs.slice();
        if (process.env.NODE_ENV !== "production" && !config.async) {
            // subs aren't sorted in scheduler if not running async
            // we need to sort them now to make sure they fire in correct
            // order
            subs.sort((a, b) => a.id - b.id);
        }
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
        }
    }
}

Dep.target = null;
const targetStack = [];

export function pushTarget(target: ?Watcher) {
    targetStack.push(target);
    Dep.target = target;
}

export function popTarget() {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
}
```

(2) Watcher （vue\src\core\observer\watcher.js）

Watcher 类的方法在 vue\src\core\observer\watcher.js 文件中，在实例化的时候，Watcher 主要是根据 options 初始化一些 Watcher 实例的参数信息，然后获取 getter 方法，这里主要是为了处理响应式问题，有个点需要注意，那就是 expOrFn 的区分，当 expOrFn 不是 function 的时候，实际上应该是 watch 监听的属性内容，这个时候需要进行路径解析，即将 a.b.c 这种格式的属性做一次解析，所以 parsePath(expOrFn)最后返回的是一个方法，但是提前处理了 expOrFn 这个值。

有一个比较难以理解的点是，computed 计算属性在初次处理的时候，没有调用 get 方法，而是在第一次渲染的时候，才调用了 Watcher 的 get 方法，然后进行了 Watcher 和 Dep 的绑定。

```javascript
export default class Watcher {
    vm: Component;
    expression: string;
    cb: Function;
    id: number;
    deep: boolean;
    user: boolean;
    lazy: boolean;
    sync: boolean;
    dirty: boolean;
    active: boolean;
    deps: Array<Dep>;
    newDeps: Array<Dep>;
    depIds: SimpleSet;
    newDepIds: SimpleSet;
    before: ?Function;
    getter: Function;
    value: any;

    constructor(
        vm: Component,
        expOrFn: string | Function,
        cb: Function,
        options?: ?Object,
        isRenderWatcher?: boolean
    ) {
        this.vm = vm;
        // 如果是renderWatcher，即用于当前实例的渲染的，需要将当前Watcher实例挂载到Vue实例上（_watcher）
        if (isRenderWatcher) {
            vm._watcher = this;
        }
        // _watchers 是当前Vue实例上所有相关的Watcher实例，包括了renderWatcher、computedWatcher、watchWatcher，
        vm._watchers.push(this);
        // options
        // 这里设置一些组件或者是watch对象的一些参数信息
        if (options) {
            this.deep = !!options.deep; // 深度监听，https://cn.vuejs.org/v2/api/#watch
            this.user = !!options.user; // // 是否是User Watcher，即通过$watch监听的（watch也属于User Watcher）,具体的可以看一下$watch这个方法
            this.lazy = !!options.lazy; // 监听计算属性,设置lazy=true，延迟执行watcher的get方法
            this.sync = !!options.sync; // 是否同步执行
            this.before = options.before; // 这个是render Watcher的beforeUpdate声明周期的触发
        } else {
            this.deep = this.user = this.lazy = this.sync = false;
        }
        this.cb = cb;
        this.id = ++uid; // uid for batching
        this.active = true;
        this.dirty = this.lazy; // for lazy watchers 脏值标记 initComputed初次执行的时候会默认为true
        this.deps = [];
        this.newDeps = [];
        this.depIds = new Set();
        this.newDepIds = new Set();
        this.expression =
            process.env.NODE_ENV !== "production" ? expOrFn.toString() : "";
        // parse expression for getter
        // 这里还是区分了一下具体的场景，watch的内容基本上走的都是else的逻辑，parsePath实际上是对路径做了一个解析（所谓的路径解析是指将a.b.c这种属性调用进行解析），并且一层一层的找到最终的那个属性值
        if (typeof expOrFn === "function") {
            this.getter = expOrFn;
        } else {
            this.getter = parsePath(expOrFn);
            if (!this.getter) {
                this.getter = noop;
                process.env.NODE_ENV !== "production" &&
                    warn(
                        `Failed watching path: "${expOrFn}" ` +
                            "Watcher only accepts simple dot-delimited paths. " +
                            "For full control, use a function instead.",
                        vm
                    );
            }
        }
        // computed计算属性在初次处理的时候，不调用get方法，也不会进行Watcher和dep的绑定操作，而是在第一次渲染的时候进行处理
        this.value = this.lazy ? undefined : this.get();
    }
}
```

-   get

触发 getter，并且重新获取依赖关系，首先将当前 Watcher 实例设置到 Dep 的 targetStack 栈里，然后调用了 getter 方法，这个时候会触发响应式属性的 Dep，从而执行 Dep.depend 方法，而 Dep.depend 方法会触发当前实例的 addDep 方法，就在 Watcher 和 Dep 之间建立起了联系，并且通过任意一种方式，都可以触发修改。这里还有一个注意点，在深度监听的时候，会遍历响应式属性的值，这个时候就会触发里面响应式的 get 方法，从而实现了 Watcher 和 Dep 的绑定。联系建立完成后，要执行出栈操作，将当前的 Watcher 实例从栈顶推出，然后执行下一个 Watcher 的绑定。最后的时候，需要进行新老依赖关系的替换，将由 cleanupDeps 处理。

```javascript
/**
   * Evaluate the getter, and re-collect dependencies.
   */
  get() {
    // 这里将当前的Watcher放到了Dep.target上
    pushTarget(this);
    let value;
    const vm = this.vm;
    try {
      // 这里会触发响应式中的get方法，所以会触发执行Dep.depend()方法，而Dep.depend方法会触发当前实例的addDep方法。
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, `getter for watcher "${this.expression}"`);
      } else {
        throw e;
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      // 如果是深度监听的数据，则需要将所有
      if (this.deep) {
        // 这里为什么会实现深度绑定呢，原因在于traverse方法执行的时候，是通过递归的方式进行的，在递归的时候，针对数据里的每一个值，实际上都会触发到响应式的get方法，所以这里存在一个隐式的get调用，以及Watcher和Dep的绑定
        traverse(value);
      }
      popTarget();
      // watcher和dep的关系绑定完成后，清空deps，即将新的dep关系替换旧的，并将新的清空
      this.cleanupDeps();
    }
    return value;
  }
```

traverse 方法在 vue\src\core\observer\traverse.js 下，本质上就是一个递归获取属性的过程，在获取的过程中由于会触发响应式数据的 get 方法，所以会触发 Dep.depend()方法，从而深层绑定依赖关系

```javascript
const seenObjects = new Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
export function traverse(val: any) {
    _traverse(val, seenObjects);
    seenObjects.clear();
}

function _traverse(val: any, seen: SimpleSet) {
    let i, keys;
    const isA = Array.isArray(val);
    if (
        (!isA && !isObject(val)) ||
        Object.isFrozen(val) ||
        val instanceof VNode
    ) {
        return;
    }
    if (val.__ob__) {
        const depId = val.__ob__.dep.id;
        if (seen.has(depId)) {
            return;
        }
        seen.add(depId);
    }
    if (isA) {
        i = val.length;
        while (i--) _traverse(val[i], seen);
    } else {
        keys = Object.keys(val);
        i = keys.length;
        while (i--) _traverse(val[keys[i]], seen);
    }
}
```

-   addDep

判断当前 Dep 是否添加过，如果没添加过，则将它放到新的依赖数组里，然后判断 Dep 中是否添加过当前的 Watcher 实例，没添加过就添加一下，从而实现双向建立联系

```javascript
/**
   * Add a dependency to this directive.
   */
  addDep(dep: Dep) {
    const id = dep.id;
    if (!this.newDepIds.has(id)) {
      // watcher添加它和dep关系
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        // 反过来，dep添加和watcher的关系
        dep.addSub(this);
      }
    }
  }
```

-   cleanupDeps

清理依赖，实际上执行的是一个新老替换的流程，但是由于涉及到和 Dep 双向的关联，所以会先将老依赖中不在新依赖关系里的 Dep 的上移除当前 Watcher 实例，然后直接替换依赖列表即可，记得要初始化新的依赖列表，供后续重新执行流程时使用。

```javascript
/**
   * Clean up for dependency collection.
   */
  cleanupDeps() {
    let i = this.deps.length;
    while (i--) {
      const dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    let tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  }
```

-   update

update 是在 Dep 触发 notify 的时候触发的，这个时候说明响应式属性被执行了 set，Dep 会触发该属性的所有 Watcher 执行 update 方法，update 的时候，如果这个数据是懒加载的（一般只有 computed 的数据是设置 lazy 为 true 的），不会立即触发更新，只有在获取数据的时候，才会更新 computed 的数据，在 Vue 的官方文档中说到，计算属性的结果会被缓存，除非依赖的响应式 property 变化才会重新计算，这里说的缓存是因为，computed 的属性虽然接收的是一个 function，但是在获取的时候，如果所关联的响应式数据未发生改变的时候，是不会再次调用的，这种缓存可以提高一部分效率。这里需要注意的一个点是，computed 和 watch 的不同点从这里更新的处理逻辑既可以看出来，watch 触发的时机要比 computed 更早，因为 watch 的 Watcher 监听到之后就执行了，而 computed 是在渲染的时候执行的（这里有个重要的前提条件，computed 在 template 中存在调用的情况下）。

TODO 这里还有一个问题没有考虑明白，为什么 Vue 实例上的 computed 字段在未在 template 中使用的时候，会在对应的响应式数据变化之后就发生变化了，而且还未触发 computed 的 function
。这个问题是因为浏览器 console 的时候，对象直接展示的，这个时候如果你看具体的对象中字段的值，实际上是会触发 Object.defineProperty 中的 get 方法的，并且会触发 computed 中注册的 function 的调用，但是在实际获取的时候并不会触发。

```javascript
/**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  update() {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  }
```

-   run

触发响应式数据的 get 方法，这里只有在两次回去的数据不一致，并且是如果是深度监听，或者数据本身是对象的情况下才触发回调，由于 User Watcher，即$watch 或者 watch 里面设置的监听函数可能存在执行错误的问题，所以需要通过 try catch 包裹，从而保证不影响框架执行。

```javascript
  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  run() {
    if (this.active) {
      const value = this.get();
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        const oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(
              e,
              this.vm,
              `callback for watcher "${this.expression}"`
            );
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  }
```

-   evaluate

这个方法理论上只有 computed 获取数据的时候会触发，实际上就是触发 get 方法，因为 computed 的数据更新的机制不太一样，computed 是在渲染的时候再获取的，我认为这个和 Computed 的机制有关系，因为 Computed 实际本质上也是一个响应式属性，但是在 API 中，computed 无论是设置 get、set 的方式还是 function 的方式，本质上都是一个 function，所以频繁的执行，时间是不可控的，所以这种缓存的方式，对于性能是有保障的，所以 computed 的执行时机是在渲染的时候，触发 get 方法，从而更改值。

```javascript
  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  evaluate() {
    this.value = this.get();
    this.dirty = false;
  }
```

-   depend

TODO 获取 Computed 的响应式数据的时候，如果当前 Dep.target 有值，则 target 的这个 Watcher 和 Computed 这个 Watcher 下的所有的 Dep 都进行双向绑定，但是具体的使用场景没有考虑到，后续补充。

```javascript
  /**
   * Depend on all deps collected by this watcher.
   */
  depend() {
    let i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  }
```

-   teardown

在组件销毁的时候，从当前实例的 vm.\_watchers 列表中移除当前 Watcher，并且移除所有关联该 Watcher 的 Dep 的依赖关系

```javascript
  /**
   * Remove self from all dependencies' subscriber list.
   */
  teardown() {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      let i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  }
```

这里说明一下为啥 Watcher 和 Dep 需要互相绑定关系，因为实际上在创建实例的时候，同一个属性的 Dep 有可能存在不止一个 Watcher，我们都知道在实例化的时候，会创建一个 Watcher 挂载在 Vue 实例上，并且 Vue.\_watcher 存储这个实例，但是实例中存在 watch、computed，甚至可以通过$watch 手动监听一些属性变化，所以导致了同一个 Dep，有可能有多个 Watcher 监听，然后一个 Watcher 有可能监听多个属性的变化，所以成了 N : N 的关系，所以 Watcher 和 Dep 之间需要相互保存关系。

![Vue2-Watcher-Dep-关系图](/images/Vue2-Watcher-Dep-关系图.png)

还有一种场景是通过$set和$delete 进行绑定的数据,本质上和 Data 的绑定方式是一样的，只不过对于非响应式数据，多了一些操作罢了，$delete 实际上也只是 delete 属性，然后触发一下 Dep

```javascript
export function set(target: Array<any> | Object, key: any, val: any): any {
    if (
        process.env.NODE_ENV !== "production" &&
        (isUndef(target) || isPrimitive(target))
    ) {
        warn(
            `Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`
        );
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.length = Math.max(target.length, key);
        target.splice(key, 1, val);
        return val;
    }
    if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        return val;
    }
    const ob = (target: any).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
        process.env.NODE_ENV !== "production" &&
            warn(
                "Avoid adding reactive properties to a Vue instance or its root $data " +
                    "at runtime - declare it upfront in the data option."
            );
        return val;
    }
    if (!ob) {
        target[key] = val;
        return val;
    }
    defineReactive(ob.value, key, val);
    ob.dep.notify();
    return val;
}

/**
 * Delete a property and trigger change if necessary.
 */
export function del(target: Array<any> | Object, key: any) {
    if (
        process.env.NODE_ENV !== "production" &&
        (isUndef(target) || isPrimitive(target))
    ) {
        warn(
            `Cannot delete reactive property on undefined, null, or primitive value: ${(target: any)}`
        );
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1);
        return;
    }
    const ob = (target: any).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
        process.env.NODE_ENV !== "production" &&
            warn(
                "Avoid deleting properties on a Vue instance or its root $data " +
                    "- just set it to null."
            );
        return;
    }
    if (!hasOwn(target, key)) {
        return;
    }
    delete target[key];
    if (!ob) {
        return;
    }
    ob.dep.notify();
}
```

#### Computed 相关的数据响应式

Computed 相关的数据响应式处理主要是在 initMixin（vue\src\core\instance\index.js） 方法的 initState（\vue\src\core\instance\state.js） 中的 initComputed（\vue\src\core\instance\state.js）方法里。 这里实际上执行的操作很少，只是创建了一个 Watcher，并且绑定到了当前实例的 ComputedWatchers 上，这里需要注意的是，一个 Computed 会生成一个 Watcher，并且 Computed 属性，必须是当前实例上没有的操行，即命名不能重复。

```javascript
function initComputed(vm: Component, computed: Object) {
    // $flow-disable-line
    const watchers = (vm._computedWatchers = Object.create(null));
    // computed properties are just getters during SSR
    const isSSR = isServerRendering();

    for (const key in computed) {
        const userDef = computed[key];
        const getter = typeof userDef === "function" ? userDef : userDef.get;
        if (process.env.NODE_ENV !== "production" && getter == null) {
            warn(`Getter is missing for computed property "${key}".`, vm);
        }

        if (!isSSR) {
            // create internal watcher for the computed property.
            watchers[key] = new Watcher(
                vm,
                getter || noop,
                noop,
                computedWatcherOptions
            );
        }

        // component-defined computed properties are already defined on the
        // component prototype. We only need to define computed properties defined
        // at instantiation here.
        if (!(key in vm)) {
            defineComputed(vm, key, userDef);
        } else if (process.env.NODE_ENV !== "production") {
            if (key in vm.$data) {
                warn(
                    `The computed property "${key}" is already defined in data.`,
                    vm
                );
            } else if (vm.$options.props && key in vm.$options.props) {
                warn(
                    `The computed property "${key}" is already defined as a prop.`,
                    vm
                );
            }
        }
    }
}
```

defineComputed 方法中 Computed 由于是作为一个属性挂载到当前实例的，所以本质上也是一个响应式数据，所以也是使用 Object.defineProperty 来实现的，这里设置 get 方法有点不同，因为在 SSR 场景下，是无法触发到响应式处理逻辑的，所以直接返回调用方法即可。

```javascript
export function defineComputed(
    target: any,
    key: string,
    userDef: Object | Function
) {
    const shouldCache = !isServerRendering();
    if (typeof userDef === "function") {
        sharedPropertyDefinition.get = shouldCache
            ? createComputedGetter(key)
            : createGetterInvoker(userDef);
        sharedPropertyDefinition.set = noop;
    } else {
        sharedPropertyDefinition.get = userDef.get
            ? shouldCache && userDef.cache !== false
                ? createComputedGetter(key)
                : createGetterInvoker(userDef.get)
            : noop;
        sharedPropertyDefinition.set = userDef.set || noop;
    }
    if (
        process.env.NODE_ENV !== "production" &&
        sharedPropertyDefinition.set === noop
    ) {
        sharedPropertyDefinition.set = function () {
            warn(
                `Computed property "${key}" was assigned to but it has no setter.`,
                this
            );
        };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
}
```

```javascript
function createGetterInvoker(fn) {
    return function computedGetter() {
        return fn.call(this, this);
    };
}
```

createComputedGetter ，浏览器场景下只有在触发过 run 之后，实际上才会触发到 Computed 属性的响应式 get 方法，否则直接返回的缓存下来的值，这个也就是出于性能上的要求，所以做的设计

这里 Dep 绑定的这个没有想明白具体场景。

```javascript
function createComputedGetter(key) {
    return function computedGetter() {
        const watcher = this._computedWatchers && this._computedWatchers[key];
        if (watcher) {
            if (watcher.dirty) {
                watcher.evaluate();
            }
            if (Dep.target) {
                watcher.depend();
            }
            return watcher.value;
        }
    };
}
```

#### Watch 相关的数据响应式

Watch 相关的数据响应式处理主要是在 initMixin（vue\src\core\instance\index.js） 方法的 initState（\vue\src\core\instance\state.js） 中的 initWatch \vue\src\core\instance\state.js）方法里，实际上就是创建一个 Watcher，这里调用的也是当前实例上的$watcher方法，所以本质还是$watch 。

```javascript
function initWatch(vm: Component, watch: Object) {
    for (const key in watch) {
        const handler = watch[key];
        if (Array.isArray(handler)) {
            for (let i = 0; i < handler.length; i++) {
                createWatcher(vm, key, handler[i]);
            }
        } else {
            createWatcher(vm, key, handler);
        }
    }
}
function createWatcher(
    vm: Component,
    expOrFn: string | Function,
    handler: any,
    options?: Object
) {
    if (isPlainObject(handler)) {
        options = handler;
        handler = handler.handler;
    }
    if (typeof handler === "string") {
        handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options);
}
```
