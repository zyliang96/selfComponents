import React from "react";
import history from "../history";
export default function PageOne(props) {
  const goDefault = () => {
    history.push("/");
  };
  return (
    <div>
      <div>PageOne</div>
      <div onClick={goDefault}>goDefault</div>
    </div>
  );
}
