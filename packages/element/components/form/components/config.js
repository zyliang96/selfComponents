import InputItem from "./inputItem";
import CascaderItem from "./cascaderItem";
import CheckBoxItem from "./checkBoxItem";
import DatePickerItem from "./datePickerItem";
import RadioItem from "./radioItem";
import SelectItem from "./selectItem";
import FileUpload from "./fileUpload";
import TreeSelect from "./treeSelect";

export default {
  input: InputItem.Input_Default,
  inputSearch: InputItem.Input_Search,
  inputTextArea: InputItem.Input_TextArea,
  inputNumber: InputItem.Input_Number,
  cascader: CascaderItem,
  checkBox: CheckBoxItem,
  datePicker: DatePickerItem.DatePicker_Default,
  datePickerMonthPicker: DatePickerItem.DatePicker_MonthPicker,
  datePickerQuarterPicker: DatePickerItem.DatePicker_QuarterPicker,
  datePickerRangePicker: DatePickerItem.DatePicker_RangePicker,
  radio: RadioItem,
  select: SelectItem,
  fileUpload: FileUpload,
  treeSelect: TreeSelect,
};
