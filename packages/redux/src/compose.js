export default function compose(...funcs) {
    if (funcs.length === 0) {
        // infer the argument type so it is usable in inference down the line
        return (arg) => arg;
    }

    // 对一个需要处理是因为reduce在入参只有一个的时候，只直接返回了当前的这个指，所以这里需要特殊处理
    if (funcs.length === 1) {
        return funcs[0];
    }

    return funcs.reduce(
        (a, b) =>
            (...args) =>
                a(b(...args))
    );
}
