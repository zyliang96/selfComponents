import React, { useEffect, useRef, useState } from "react";
import Header from "./components/header";
import pageConfig from "./pageConfig";
import { Router, Route } from "../packages/router/src";

function Test() {
  return <div>test</div>;
}

function home() {
  return <div></div>;
}

function Page(props) {
  const [currentPage, setCurrentPage] = useState(() => {
    return pageConfig[0].key || null;
  }); // 当前页面
  const [currentMenu, setCurrentMenu] = useState([]); // 当前菜单
  const headerTabOnChange = (key) => {
    setCurrentPage(key);
  };

  useEffect(() => {
    if (currentPage) {
      // pageConfig.
    }
  }, [currentPage]);
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
      <Router>
        <Route path="/home" components={<Home />}></Route>
        <Route path="/test" components={<Test />}></Route>
      </Router>
    </div>
  );
}

export default Page;
