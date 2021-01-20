1、hashHistory
history {
    // 历史栈操作方法
    push,
    replace,
    go,
    back() {
      go(-1);
    },
    forward() {
      go(1);
    },
    // 监听方法
    listen
}