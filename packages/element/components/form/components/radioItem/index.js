import React from "react";
import { Radio } from "dpl-react";

/**
 * 默认的Checkbox中Option的配置
 */
const defaultOptionConfig = {
  value: "value",
  label: "label",
};

export default function CheckboxItem(props) {
  const {
    other,
    onChange,
    options,
    optionConfig,
    type = "radio",
    value,
  } = props;
  const config = Object.assign({}, defaultOptionConfig, optionConfig);
  return (
    <Radio.Group {...other} onChange={onChange} value={value}>
      {type.toLowerCase() !== "radiobutton" &&
        options &&
        options.length > 0 &&
        options.map((option, index) => {
          return (
            <Radio
              value={option[config.value]}
              key={option[config.value]}
              disabled={option.disabled || false}
            >
              {option[config.label]}
            </Radio>
          );
        })}
      {type.toLowerCase() === "radiobutton" &&
        options.length > 0 &&
        options.map((option, index) => {
          return (
            <Radio
              value={option[config.value]}
              key={option[config.key]}
              disabled={option.disabled || false}
            >
              {option[config.title]}
            </Radio>
          );
        })}
    </Radio.Group>
  );
}
