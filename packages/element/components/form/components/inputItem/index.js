import React, { useState } from "react";
import { Input } from "dpl-react";
const Search = Input.Search;
const TextArea = Input.TextArea;
const typeList = ["search", "textarea"];

function Input_Search(props) {
  const { other, onChange, value } = props;
  return <Search {...other} onChange={onChange} value={value}></Search>;
}
function Input_TextArea(props) {
  const { other, onChange, value } = props;
  return <TextArea {...other} onChange={onChange} value={value}></TextArea>;
}
function Input_Default(props) {
  const { other, onChange, value } = props;
  const onChangeTest = (e) => {
    const value = e.target.value;
    onChange(value);
  };
  return <Input {...other} onChange={onChangeTest} value={value}></Input>;
}

function Input_Number(props) {
  const { other, onChange, value } = props;
  const [isComposition, setIsComposition] = useState(false);

  // 修改判断是否为数字
  const numberChange = (e, flag) => {
    let num = e.target.value;
    flag = typeof flag === "undefined" ? isComposition : flag;
    if (flag) {
      onChange(num);
      return;
    }
    if (num && num.trim()) {
      num = num.replace(/\D*/g,'')
      onChange(num);
    } else {
      onChange(num);
    }
  };
  /**
   * 中文输入时的调用方法
   */
  const compositionStartFunc = (e) => {
    setIsComposition(true);
  };

  /**
   * 中文输入时的调用方法
   */
  const compositionEndFunc = (e) => {
    setIsComposition(false);
    numberChange(e,false)
  };

  return (
    <Input
      onCompositionStart={compositionStartFunc}
      onCompositionEnd={compositionEndFunc}
      {...other}
      onChange={numberChange}
      value={value}
      autocomplete="off"
    ></Input>
  );
}
const InputItem = {
  Input_Search,
  Input_TextArea,
  Input_Default,
  Input_Number,
};
export default InputItem;
