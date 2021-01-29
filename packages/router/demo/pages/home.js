import React from "react";
import history from "../history";

export default function Home(props) {
  const goDefault = () => {
    history.push("/");
  };
  return (
    <div>
      <div>Home</div>
      <div onClick={goDefault}>goDefault</div>
    </div>
  );
}
