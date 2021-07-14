export default function compose(...funcs) {
    if (funcs.length === 0) {
        // infer the argument type so it is usable in inference down the line
        return (arg) => arg;
    }

    // 对一个需要处理是因为reduce在入参只有一个的时候，直接返回了当前的这个指，所以这里需要特殊处理
    if (funcs.length === 1) {
        return funcs[0];
    }
    // 这里存在一个隐式的柯里化，最后返回的实际上是一个function (...arg) => a(b(...arg))
    return funcs.reduce(
        (a, b) =>
            (...args) =>
                a(b(...args))
    );
}
