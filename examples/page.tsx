import React, { useEffect, useRef, useState } from "react";
import Header from "./components/header";
import pageConfig from "./pageConfig";
import { Router, Route } from "../packages/router/src";
// import CreateHashHistory from "../packages/router/src/createHashHistory";
import { createHashHistory } from "history";
const history = createHashHistory();
// const history = CreateHashHistory();
// history.block("提示信息！");
history.block(({ action, location, retry }) => {
  // A transition was blocked!
  return '页面跳转'
});
const unListen = history.listen(function (...arg) {
  console.log(arg);
});
function Test() {
  return <div>test</div>;
}

function Home() {
  return <div></div>;
}

function Page(props) {
  const [currentPage, setCurrentPage] = useState(() => {
    return pageConfig[0].key || null;
  }); // 当前页面
  const [index, setIndex] = useState(0);
  const [currentMenu, setCurrentMenu] = useState([]); // 当前菜单
  const headerTabOnChange = (key) => {
    setCurrentPage(key);
  };

  const historyPush = () => {
    const num = index + 1;
    setIndex(num);
    history.push("/home" + num);
  };
  const historyReplace = () => {
    history.replace("/replace");
  };
  const historyGoBack = () => {
    history.goBack();
  };
  const historyGo = () => {
    history.go(-1);
  };
  const historyGoForward = () => {
    history.goForward();
  };

  useEffect(() => {
    if (currentPage) {
      // pageConfig.
    }
  }, [currentPage]);

  useEffect(() => {
    return () => {
      unListen();
    };
  }, []);
  return (
    <div className="home-components-box">
      <Header
        list={pageConfig}
        onChange={headerTabOnChange}
        value={currentPage}
      />
      {/* <div className="content">
        <div className="left"></div>
        <div className="right"></div>
      </div> */}
      <div onClick={historyPush}>history.push</div>
      <div onClick={historyReplace}>history.replace</div>
      <div onClick={historyGoBack}>history.goBack</div>
      <div onClick={historyGo}>history.go</div>
      <div onClick={historyGoForward}>history.goForward</div>
      <Router>
        <Route path="/home" components={<Home />}></Route>
        <Route path="/test" components={<Test />}></Route>
      </Router>
    </div>
  );
}

export default Page;
