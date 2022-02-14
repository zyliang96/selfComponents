import React from "react";
import { DatePicker } from "dpl-react";
const { MonthPicker, RangePicker, QuarterPicker } = DatePicker;
const datePickerList = ["monthpicker", "rangepicker", "quarterpicker"];

function DatePicker_MonthPicker(props) {
  const { other, onChange, value } = props;
  return <MonthPicker {...other} onChange={onChange} value={value} />;
}
function DatePicker_RangePicker(props) {
  const { other, onChange, value } = props;
  return <RangePicker {...other} onChange={onChange} value={value} />;
}
function DatePicker_QuarterPicker(props) {
  const { other, onChange, value } = props;
  return <QuarterPicker {...other} onChange={onChange} value={value} />;
}
function DatePicker_Default(props) {
  const { other, onChange, value } = props;
  return <DatePicker {...other} onChange={onChange} value={value} />;
}
const CascaderItem = {
  DatePicker_MonthPicker,
  DatePicker_RangePicker,
  DatePicker_QuarterPicker,
  DatePicker_Default
};
export default CascaderItem;
