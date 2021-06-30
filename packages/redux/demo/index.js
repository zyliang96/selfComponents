import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { createStore } from "../src/index.js";

const store = createStore(() => {}, {});
console.log(store);
function App(props) {
    return (
        <div>
            <div>Redux测试</div>
        </div>
    );
}

ReactDom.render(<App />, document.getElementById("root"));
