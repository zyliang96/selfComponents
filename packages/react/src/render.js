let nextUnitOfWork = null;
let wipRoot = null;
let currentRoot = null;

function commitWork(fiber) {
  if (!fiber) {
    return
  }
  const domParent = fiber.parent.dom
  domParent.appendChild(fiber.dom)
  // 先渲染子节点，子节点挂在到父节点上，然后再挂载兄弟节点
  commitWork(fiber.child)
  commitWork(fiber.sibling)
}

function commitRoot() {
  // TODO add nodes to dom
  commitWork(wipRoot.child)
  currentRoot = wipRoot
  wipRoot = null
}


function performUnitOfWork(fiber) {
  // 如果当前的fiber没有dom元素的时候，创建dom元素
    if (!fiber.dom) {
        fiber.dom = createDom(fiber)
      }
    ​

      const elements = fiber.props.children
  let index = 0
  // prevSibling 是一个兄弟节点的链表
  let prevSibling = null
​
  while (index < elements.length) {
    const element = elements[index];
​     // 子节点创建新的Fiber
    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    }
    // index 为 0 的时候，设置当前fiber的字节点
    if (index === 0) {
      fiber.child = newFiber
    } else {
      prevSibling.sibling = newFiber
    }
​     // 前一个兄弟节点
    prevSibling = newFiber
    index++
  }
  // 有子节点的时候，就返回子节点
  if (fiber.child) {
    return fiber.child
  }
  // 从没有子节点的节点开始遍历，这里应该是一个树的后序遍历
  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }

}
​
function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(
      nextUnitOfWork
    )
    // 是否需要打断
    shouldYield = deadline.timeRemaining() < 1;
  }
  if (!nextUnitOfWork && wipRoot) {
    commitRoot()
  }
  requestIdleCallback(workLoop)
}

/**
 * window.requestIdleCallback()方法将在浏览器的空闲时段内调用的函数排队。
 * 这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。
 * 函数一般会按先进先调用的顺序执行，然而，如果回调函数指定了执行超时时间timeout，则有可能为了在超时前执行函数而打乱执行顺序。
 */
​
requestIdleCallback(workLoop)

// 创建dom元素
function createDom(fiber) {
    const dom =
      fiber.type == "TEXT_ELEMENT"
        ? document.createTextNode("")
        : document.createElement(fiber.type);
  ​
    const isProperty = key => key !== "children";
    Object.keys(fiber.props).filter(isProperty).forEach(name => {
        dom[name] = fiber.props[name]
      })
    return dom;
  }


// render方法
function render(element, container) {
  wipRoot = {
        dom: container,
        props: {
          children: [element],
        },
        alternate: currentRoot,
    }
    nextUnitOfWork = wipRoot
}

export default render
