/**
 * hashHistory  hash 路由
 */

function CreateHashHistory() {
  // 浏览器全局的histroy
  const globalHistory = window.history;

  function go(index) {
    globalHistory.go(index)
  }

  
  function push(){

  }

  const history = {
    length: globalHistory.length, // 浏览器历史栈中的长度
    action: "POP",
    location: initialLocation, // locationObj 对象结构为 {pathname:"",search:"",hash:""}
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    block,
    listen,
  };
  return history;
}

export default CreateHashHistory;
