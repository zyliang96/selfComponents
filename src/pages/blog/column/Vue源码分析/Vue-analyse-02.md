# Vue 源码解析（二）


### Vue批量异步更新策略

Vue的批量异步更新，是在响应式属性的Dep触发notify的时候，会触发当前Dep关联的所有Watcher的update()方法，从而触发
