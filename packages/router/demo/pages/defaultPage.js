import React from "react";
import history from "../history";

export default function DefaultPage(props) {
  const gotoHome = () => {
    history.push("/home");
  };
  const gotoPageOne = () => {
    history.push("/pageOne");
  };
  return (
    <div>
      <div>DefaultPage</div>
      <div>
        <div>测试页面</div>
        <div onClick={gotoHome}>home</div>
        <div onClick={gotoPageOne}>pageOne</div>
      </div>
    </div>
  );
}
