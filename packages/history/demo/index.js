import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { createHashHistory, createBrowserHistory } from "../src/index.js";

// const history = createHashHistory({
//   isShowBeforeUnload: true,
// });
const history = createBrowserHistory({
  isShowBeforeUnload: true,
});

history.block((...arg) => {
  const result = window.confirm("是否确定跳转？");
  // const result = true;
  // console.log(arg,result);
  // if (arg[0] && arg[0].action === "POP") {
  //   return false;
  // }
  return result;
});
unListen = history.listen((arg) => {
  console.log("history listen");
  console.log(arg);
});

let unListen = null;

function App(props) {
  const [index, setIndex] = useState(0);

  const historyPush = () => {
    const num = index + 1;
    setIndex(num);
    history.push("/home" + index);
  };
  const historyReplace = () => {
    history.replace("/replace");
  };
  const historyGoBack = () => {
    history.back();
  };
  const historyGo = () => {
    history.go(-2);
  };
  const historyGoForward = () => {
    history.forward();
  };

  useEffect(() => {
    return () => {
      unListen();
    };
  }, []);
  return (
    <div>
      <div>history测试</div>
      <div onClick={historyPush}>history.push</div>
      <div onClick={historyReplace}>history.replace</div>
      <div onClick={historyGoBack}>history.goBack</div>
      <div onClick={historyGo}>history.go</div>
      <div onClick={historyGoForward}>history.goForward</div>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
