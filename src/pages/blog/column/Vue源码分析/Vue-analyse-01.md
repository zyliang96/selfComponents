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

initMixin 方法在 Vue 的原型上设置了\_init 方法，这个方法在 new Vue 的时候会被触发（就是构造函数里的 this.\_init 的调用），\_init 方法主要做如下操作：
1、选项合并
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

2、初始化

```javaScript
initLifecycle(vm) // 生命周期相关的属性初始化$parent等
// <comp @my-click="onclick"></comp>
initEvents(vm) // 自定义组件事件监听
initRender(vm) // 插槽处理，$createElm === render(h)
// 调用生命周期的钩子函数
callHook(vm, 'beforeCreate')
// provide/inject
// 组件数据和状态初始化
initInjections(vm) // resolve injections before data/props
initState(vm) // data/props/methods/computed/watch
initProvide(vm) // resolve provide after data/props
callHook(vm, 'created')
```
initLifecycle 是初始化声明周期相关属性，这里面需要注意一下，实例挂载的$parent是第一个非抽象父组件，那么这里就需要了解一下什么是抽象组件了，在Vue中抽象组件主要是keep-alive、transition、transition-group等，它更像是对原有组件的一种包装，如果写过React，你会发现，这里的抽象组件很像React的HOC（高阶组件），但Vue自己实现的抽象组件并没有多余的DOM内容，更多的是对子组件的一种扩展。（个人有点不太理解，在自己设置组件为抽象组件）