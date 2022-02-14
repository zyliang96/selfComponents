import React from "react";
import { Checkbox } from "dpl-react";

/**
 * 默认的Checkbox中Option的配置
 */
const defaultOptionConfig = {
  value: "value",
  label: "label"
};

export default function CheckboxItem(props) {
  const { other, onChange, options, optionConfig, value } = props;
  const config = Object.assign({}, defaultOptionConfig, optionConfig);
  return (
    <Checkbox.Group {...other} onChange={onChange} value={value}>
      {options && options.length > 0 &&
        options.map((option, index) => {
          return (
            <Checkbox value={option[config.value]} key={option[config.value]}>
              {option[config.label]}
            </Checkbox>
          );
        })}
    </Checkbox.Group>
  );
}
