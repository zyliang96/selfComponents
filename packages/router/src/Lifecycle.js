import React, { useEffect, useRef } from "react";

export default function Lifecycle(props) {
  const { onMount, onUpdate, to } = props;
  useEffect(() => {
    onMount && onMount();
  }, []);

  useEffect(() => {
    console.log(2222222222);
    onUpdate(props);
  }, [to]);
  return null;
}
