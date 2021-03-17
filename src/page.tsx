import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import Header from "./components/header";
import pageConfig from "./pageConfig";
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
        pageConfig.forEach((item) => {
            if (match == null) {
                const path = addLeadingSlash(item.path);
                match = matchPath(locationPathName, { path });

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
        setCurrentPage(key);
    };

    useEffect(() => {
        if (currentPage && Array.isArray(pageConfig)) {
            const len = pageConfig.length;
            for (let i = 0; i < len; i++) {
                const item = pageConfig[i];
                if (currentPage === item.key) {
                    history.push(item.path);
                }
            }
        }
    }, [currentPage]);

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
                        {Array.isArray(pageConfig) &&
                            pageConfig.map((item) => {
                                return (
                                    <Route
                                        key={item.key}
                                        exact
                                        path={item.path}
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
