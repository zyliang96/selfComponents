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

eventsMixin 在 vue\src\core\instance\events.js 文件下，Vue 原型上挂载一些实例方法，做事件处理，本别是$on、$once、$off、$emit，这些方法的使用场景可以看一下[Vue 官方的 API](https://cn.vuejs.org/v2/api/?#vm-on)。

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

实例上挂载一些生命周期相关的方法，有\_update、$forceUpdate、$destroy，其中\_update 是不对外暴露的，是 Vue 内部调用的，\_update 是做 diff 算法执行的方法，这里主要调用了**patch**方法，这个方法在入口文件中执行的挂载。

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