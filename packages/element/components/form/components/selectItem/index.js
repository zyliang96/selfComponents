import React from "react";
import { Select } from "dpl-react";
const { Option } = Select;

/**
 * 默认的select中Option的配置
 */
const defaultOptionConfig = {
  value: "id",
  labal: "name"
};
export default function SelectItem(props) {
  const {
    other,
    onChange,
    options,
    optionConfig,
    value,
    isShowTitle = false
  } = props;
  const config = Object.assign({}, defaultOptionConfig, optionConfig); // select的选项配置
  return (
    <Select {...other} onChange={onChange} value={value}>
      {options && options.length > 0 &&
        options.map((option, index) => {
          if (isShowTitle) {
            return (
              <Option
                value={option[config.value]}
                key={option[config.value]}
                title={option[config.labal]}
              >
                {option[config.labal]}
              </Option>
            );
          }
          return (
            <Option value={option[config.value]} key={option[config.value]}>
              {option[config.labal]}
            </Option>
          );
        })}
    </Select>
  );
}
