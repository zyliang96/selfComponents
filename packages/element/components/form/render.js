export const defaultItemScheam = {
  label: undefined, // string | React.ReactNode | 不填 字段标题，不填的时候不展示
  name: undefined, // string state名称，主要是为了解决联动
  key: undefined, // string 字段属性
  type: undefined, // Object | Array | children  表单类型，只有Object和Array两种选择，不写的情况下则当为叶子结点，写了则向下寻找节点，如果找不到节点，则认为是叶子结点
  dataType: undefined, // 'string' | 'object' | 'array' | 'number'  数据类型，即name对应的
  display: true, // boolean 是否可见
  readOnly: false, // boolean 是否只读
  description: undefined, //() => {}  React.ReactNode 描述，用于描述性部分，解决表单中的一些静态提示内容，description 存在的情况下，不会展示x-components
  properties: [], // defaultItemScheam 对象描述，类型为itemSchem的内容，如果dataType是Object，则会根据该字段创建表单结构
  itemLength: 1, // item的个数
  children: [], //
  beforelabel: undefined, // () => {} React.ReactNode  一般来说最好是icon的形式
  labelWidth: 100, // number | string label的宽度，默认值为100，单位为px， 需要判断label 是否存在
  wrapperCol: { span: 24, offset: 0 }, // x-components 控件的布局 不设置默认 span = 24  offset = 0
  defaultValue: undefined, // 默认数值，类型取决于dataType的类型，具体是否增加校验待定
  "x-components": undefined, // string | React.ReactNode 组件类型 类型会提供方法注册, 大小写敏感
  "x-components-props": {}, // 组件属性,后续会放在组件上
  "x-rules": {
    required: false, // boolean 是否必填 为true的试试
    message: "", // string 错误时的提示信息， required 为true的时候，但是没有message的时候，显示${name} is required
  }, // 校验规则，校验的时候，根绝type类型去执行不同的校验方法
};

