# Promise 的深度学习记录

## 缘起

这次的Promise缘起与群里一个同行提出的问题：
```javascript
Promise.resolve().then(() => {
    console.log(0);
    return Promise.resolve(4);
}).then((res) => {
    console.log(res)
})

Promise.resolve().then(() => {
    console.log(1);
}).then(() => {
    console.log(2);
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(5);
}).then(() =>{
    console.log(6);
})
```

抱着有问题得往上冲，不能怂，并且想校验一下自己对于JavaScript中事件轮询机制的了解程度，开始了挑战，结果还是年轻了，为了探索真相，记录一下。本文内容参考了一下https://blog.csdn.net/lqyygyss/article/details/102662606文章中的代码片段（人家讲的挺好的，但是人家讲的好是人家的东西，自己未必理解了，还是需要说一下自己的理解）

## 知识基础

1. 首先我们需要知道的一点是，在js执行过程中，Promise产生的是JavaScript引擎内部的微任务，而setTimeout是浏览器API，它产生宏任务。

2. 我们分析所有的代码执行顺序都应该找打当前所有宏任务，再找到这些宏任务中的微任务，在执行的时候，是按照宏任务和其所有的微任务都执行完的情况下，才去执行下一个宏任务及其所有微任务。相关的内容可以看一下winter的重学前端，个人认为里面对于这一块的讲解还是比较清晰的。

3. [Promise A+](https://promisesaplus.com/#notes) 规范可以看一下


## 第一段代码

```javascript
new Promise((resolve, reject) => {
    console.log("外部promise");
    resolve();
})
.then(() => {
    console.log("外部第一个then");
    return new Promise((resolve, reject) => {
      console.log("内部promise");
      resolve();
    })
    .then(() => {
    console.log("内部第一个then");
    })
    .then(() => {
    console.log("内部第二个then");
    });
})
.then(() => {
    console.log("外部第二个then");
});
```

解析流程：
这个输出还是比较简单的，外部 Promise 执行，执行完 resolve ，执行外部第一个 then 。外部第一个 then 方法里面 return 一个 Promise，这个 return ，代表 外部的第二个 then 的执行需要等待 return 之后的结果。这里需要注意下，Promise.then onFulfilled 处理返回的是一个Promise ，在Promise A+ 规范中，Promise.then 处理值X的时候，如果X是一个Promise ， 那么会将当前的then方法改为x.then，所以这里在登录内部Promise执行完成后，才会执行到外部第一个then。由于每一次then返回的都是一个Promise，所以只有当内部第二个then也执行完成之后，对于外部第一个then才算真正的执行完成，这也就导致了，外部第二个then方法是最后一个被放到微任务队列中的。这里理解起来是比较绕的，很容易误导。

## 第二段代码
```javascript
new Promise((resolve, reject) => {
  console.log("外部promise");
  resolve();
})
  .then(() => {
    console.log("外部第一个then");
    new Promise((resolve, reject) => {
      console.log("内部promise");
      resolve();
    })
      .then(() => {
        console.log("内部第一个then");
      })
      .then(() => {
        console.log("内部第二个then");
      });
  })
  .then(() => {
    console.log("外部第二个then");
  });
```

解析流程：
这段代码和第一段代码就相差一个 return ，然而结果确是不一样的。这影响到了微任务的注册。
在执行内部Promise的时候，resolve之后，内部第一个then的方法，被放到了微任务队列，然后代码继续运行，外部第二个then的方法被放到了微任务队列，宏任务队列执行完成，所以开始执行当前宏任务下的微任务列表，执行完内部第一个then的方法后，内部第二个then的方法被放到微任务队列，然后执行外部的第二个then，然后执行最后一个微任务。
借鉴的博客里有一个地方需要注意，.then 的执行确实是同步的，内部是再开启一个 new Promise ，但是由于上一个状态未流转，该 then 并不会此时注册到微任务队列中，而是会等待上一个的执行完成。这种理解可以认为是，.then的执行是同步的，放到微任务队列的操作是异步的。

## 第三段代码
```javascript
new Promise((resolve, reject) => {
    console.log("外部promise");
    resolve();
})
.then(() => {
    console.log("外部第一个then");
    let p = new Promise((resolve, reject) => {
      console.log("内部promise");
      resolve();
    })
    p.then(() => {
        console.log("内部第一个then");
    })
    p.then(() => {
        console.log("内部第二个then");
    });
})
.then(() => {
    console.log("外部第二个then");
});
```

解析流程：
宏任务只有一个，所以执行完成之后，输出第一个微任务，外部第一个then，然后执行Promise p , 输出内部Promise，内部第一个then和内部第二个then是作用于同一个Promise，所以按照代码的执行顺序，放到微任务队列中，至此第一个then执行完成，然后讲外部第二个then放入到微任务队列，所以后续的输出是内部第一个then、内部第二个then、外部第二个then。