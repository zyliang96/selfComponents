import React from "react";
import { Cascader } from "dpl-react";

export default function CascaderItem(props) {
  const { other, onChange, value } = props;
  return <Cascader {...other} onChange={onChange} value={value}></Cascader>;
}
