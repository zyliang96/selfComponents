import React, { useEffect, useRef, useState } from "react";
import Header from "./components/header";
import pageConfig from "./pageConfig";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "./utils/router.js";
import Home from "./pages/home";

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
      <Router>
        <Redirect exact to="/home" />
        <Switch>
          {/* <Route exact path="/" component={DefaultPage} /> */}
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/pageOne" component={PageOne} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default Page;
