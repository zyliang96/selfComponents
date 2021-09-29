import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import Header from "./components/header";
import pageConfig, { routerConfig } from "./pageConfig";
import {
    Router,
    Route,
    Redirect,
    Switch,
    WithRouter,
    matchPath,
} from "./utils/router.js";
import { addLeadingSlash } from "./utils/history.min.js";
import history from "./history";

function Page(props) {
    const [currentPage, setCurrentPage] = useState(() => {
        let match = null;
        let key = null;
        const locationPathName = window.location.pathname;
        routerConfig.forEach((item) => {
            if (match == null) {
                const path = addLeadingSlash(item.path);
                match = matchPath(locationPathName, { path, exact: true });
                if (match) {
                    key = item.key;
                }
            }
        });
        return key || pageConfig[0].key || null;
    }); // 当前页面
    /**
     * 头部点击
     */
    const headerTabOnChange = (key) => {
        if (key && Array.isArray(pageConfig)) {
            const len = pageConfig.length;
            for (let i = 0; i < len; i++) {
                const item = pageConfig[i];
                if (key === item.key) {
                    history.push(addLeadingSlash(item.path));
                }
            }
        }
        setCurrentPage(key);
    };
    
    return (
        <div className="site-page-box">
            <Header
                list={pageConfig}
                onChange={headerTabOnChange}
                value={currentPage}
            />
            <Suspense fallback={<></>}>
                <Router history={history}>
                    <Switch>
                        <Route
                            path={"/"}
                            exact
                            render={(props) => (
                                <Redirect
                                    to={{ pathname: pageConfig[0].path }}
                                />
                            )}
                        />
                        {Array.isArray(routerConfig) &&
                            routerConfig.map((item) => {
                                return (
                                    <Route
                                        key={item.key}
                                        exact
                                        path={addLeadingSlash(item.path)}
                                        component={() => {
                                            const Comp = lazy(
                                                () =>
                                                    import(
                                                        `./pages${item.componentPath}`
                                                    )
                                            );
                                            const Result = WithRouter(Comp);
                                            return <Result />;
                                        }}
                                    />
                                );
                            })}
                    </Switch>
                </Router>
            </Suspense>
        </div>
    );
}

export default Page;
