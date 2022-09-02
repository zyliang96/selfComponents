# React 面试（一）

## 问题

1、vdom 为什么时间复杂度是 O(n^3)

### fiber 做了什么

- 利用浏览器空闲时间执行、不会长时间占用主线程

- 将对比更新 DOM 的操作碎片化

- 碎片化的任务，可以根据需要被暂停

requestIdleCallback （浏览器 API），react 应该模拟实现了这个浏览器方法，具体的可以看一下源码，如果没有记错的话应该是逐帧执行，这个好好看一下

### fiber 原理

1、fiber 对象有哪些属性？

### react 的声明周期

shouldComponentUpdate 这个声明周期比较关键
