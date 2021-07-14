# Vue 源码解析（二）

### Vue 批量异步更新策略

Vue 的批量异步更新，是在响应式属性的 Dep 触发 notify 的时候，会触发当前 Dep 关联的所有 Watcher 的 update()方法，从而触发数据的响应式变化。从上一次数据响应式和 Vue 初始化逻辑的分析可以看出，在 Vue 中，实际真正能够触发到视图变化的应该只有 data 中的数据变化和 props 中的数据变化，computed 本身是惰性的，实际上只有在获取的时候才会更新，只会被动变化，watch 的用途是监听数据变化，所以在 Vue 中，引起视图变化的原理和 react 中是一样的，都是通过 data 或者 props 的变化来导致视图更新，所以需要关注的代码就是响应式数据的 set 方法。

在上一章中有提到 initMixin（src\core\instance\init.js）中注册的\_init 方法中调用 initState(src\core\instance\state.js)进行了数据的响应式处理以及一些响应式变化的处理逻辑，在 initData 和 initProps 中，都调用了 defineReactive 方法（src\core\observer\index.js），这个方法是实际进行响应式处理的方法，这里设置了 set 和 get 方法，所以实际触发是在 set 的时候 dep.notify()通知修改。具体的绑定关系在上一章已经说明过了，所以这里就直接进入主题，说一说这个通知修改的流程了。

dep.notify() 方法在 src\core\observer\dep.js 文件下，notify 实际上会遍历所有相关联的 Watcher，然后调用这些 Watcher 的 update 方法。在上一章中我们在分析 Watcher 结构的时候由说到过，update 中的逻辑，第一个 lazy 的场景是 computed 中声明的属性内容，也就是所谓的惰性更新（实际上就是只有在调用的时候才运行一次指定的方法，在依赖的响应式数据没有发生变化时，直接返回对应的值），第二个 sync 的场景，对应 watch 中声明的监听内容，如果有些数据响应式处理的时机需要立即执行，那么就加上 sync 字段，并设置为 true，这个时候，只要响应了，就立刻执行对应的回调方法（具体的使用看业务场景，这个就和 React 中 useEffect 和 useLayoutEffect 有点类似），最后一种场景是放到 Watcher 执行队列，这个才是 Vue 真正的批量异步更新策略的实际触发。

-   queueWatcher

主要逻辑在 scheduler.js （src\core\observer\scheduler.js） 文件中的 queueWatcher 方法，queueWatcher 方法会将没有添加过的Watcher进行处理，如果这个Watcher没有添加过，并且当前不是在渲染的情况下，将这个Watcher入队，如果已经在渲染了，则要判断当前的Watcher是否可以放到队列中执行，这里是通过Watcher的id进行判断（根据id判断是因为在创建Watcher的时候，实际上是有顺序的，创建的越早的，更新越早，这个在上一章中说Watcher的时候有提到过），这里的判断逻辑是从后往前找，这个场景单独看代码实际上还是比较难考虑明白的，我们假设一个场景，我们调用方法的时候，对一个响应式数据设置了值后，这个方法又设置了一个Promise.then的执行，这个时候会往微任务队列中入队一个任务，如果这个Promise有多个then的时候，并且这些then回调里的方法可能会触发到watch的时候，就会触发这里的逻辑，这里实际上就是一个策略问题，从后往前和从前往后找都可以，只是策略问题，从某种角度而言（比如promise的多个then方法），可能在大部分从后往前遍历的次数会更小，如果可以就插入到队列中，在下一个时刻执行。下一个时刻执行是因为
