# Vue 源码解析（二）

### Vue 批量异步更新策略

Vue 的批量异步更新，是在响应式属性的 Dep 触发 notify 的时候，会触发当前 Dep 关联的所有 Watcher 的 update()方法，从而触发数据的响应式变化。从上一次数据响应式和 Vue 初始化逻辑的分析可以看出，在 Vue 中，实际真正能够触发到视图变化的应该只有 data 中的数据变化和 props 中的数据变化，computed 本身是惰性的，实际上只有在获取的时候才会更新，只会被动变化，watch 的用途是监听数据变化，所以在 Vue 中，引起视图变化的原理和 react 中是一样的，都是通过 data 或者 props 的变化来导致视图更新，所以需要关注的代码就是响应式数据的 set 方法。

在上一章中有提到 initMixin（src\core\instance\init.js）中注册的\_init 方法中调用 initState(src\core\instance\state.js)进行了数据的响应式处理以及一些响应式变化的处理逻辑，在 initData 和 initProps 中，都调用了 defineReactive 方法（src\core\observer\index.js），这个方法是实际进行响应式处理的方法，这里设置了 set 和 get 方法，所以实际触发是在 set 的时候 dep.notify()通知修改。
