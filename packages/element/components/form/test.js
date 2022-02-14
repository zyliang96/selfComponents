// 弹窗表单
const ModalConfig = {
    type: "Object", // Object | Array | 表单类型，只有Object和Array两种选择，不写的情况下默认为Object类型
    // itemLength:2,
    properties: [
      {
        description: () => {
          return (
            <div className="confirm-text-box">
              <span>发布规则</span>
            </div>
          );
        }, //  React.ReactNode 描述,用于描述性部分，解决表单中的一些静态提示内容，如果x-components存在，则不展示
      },
      {
        label: "入口类型", // string | React.ReactNode | 不填 字段标题，不填的时候不展示
        name: "entryType", // string 字段名称，对应数据结构中的key值
        key: "entryType", // string 字段名称，对应数据结构中的key值
        dataType: "string", // 'string' | 'object' | 'array' | 'number'  数据类型，即name对应的
        defaultValue: defaultEnterTypeCode,
        wrapperCol: { span: 8 }, // x-components 控件的布局 不设置默认 span = 24  offset = 0
        "x-components": "select", // string | React.ReactNode 组件类型 类型会提供方法注册, 大小写敏感
        "x-components-props": {
          options: addAllOption(enterTypeList),
          allowClear: true,
        }, // 组件属性,后续会放在组件上
        "x-rules": {
          required: true, // boolean 是否必填 为true的试试
          message: "请选择入口类型", // string 错误时的提示信息， required 为true的时候，但是没有message的时候，显示${name} is required
        }, // 校验规则，校验的时候，根绝type类型去执行不同的校验方法
      },
      {
        label: "地区", // string | React.ReactNode | 不填 字段标题，不填的时候不展示
        name: "location", // string 字段名称，对应数据结构中的key值
        key: "location", // string 字段名称，对应数据结构中的key值
        dataType: "string", // 'string' | 'object' | 'array' | 'number'  数据类型，即name对应的
        wrapperCol: { span: 8 }, // x-components 控件的布局 不设置默认 span = 24  offset = 0
        "x-components": "input", // string | React.ReactNode 组件类型 类型会提供方法注册, 大小写敏感
        "x-components-props": {}, // 组件属性,后续会放在组件上
        "x-rules": {
          required: true, // boolean 是否必填 为true的试试
          message: "请输入地区代码", // string 错误时的提示信息， required 为true的时候，但是没有message的时候，显示${name} is required
        }, // 校验规则，校验的时候，根绝type类型去执行不同的校验方法
      },
      {
        label: "产品代码", // string | React.ReactNode | 不填 字段标题，不填的时候不展示
        name: "cpdm", // string 字段名称，对应数据结构中的key值
        key: "cpdm", // string 字段名称，对应数据结构中的key值
        dataType: "string", // 'string' | 'object' | 'array' | 'number'  数据类型，即name对应的
        wrapperCol: { span: 8 }, // x-components 控件的布局 不设置默认 span = 24  offset = 0
        "x-components": "input", // string | React.ReactNode 组件类型 类型会提供方法注册, 大小写敏感
        "x-components-props": {}, // 组件属性,后续会放在组件上
      },
      {
        label: "来源渠道", // string | React.ReactNode | 不填 字段标题，不填的时候不展示
        name: "channel", // string 字段名称，对应数据结构中的key值
        key: "channel", // string 字段名称，对应数据结构中的key值
        dataType: "string", // 'string' | 'object' | 'array' | 'number'  数据类型，即name对应的
        wrapperCol: { span: 8 }, // x-components 控件的布局 不设置默认 span = 24  offset = 0
        "x-components": "input", // string | React.ReactNode 组件类型 类型会提供方法注册, 大小写敏感
        "x-components-props": {}, // 组件属性,后续会放在组件上
      },
      {
        label: "模块", // string | React.ReactNode | 不填 字段标题，不填的时候不展示
        name: "module", // string 字段名称，对应数据结构中的key值
        key: "module", // string 字段名称，对应数据结构中的key值
        dataType: "string", // 'string' | 'object' | 'array' | 'number'  数据类型，即name对应的
        wrapperCol: { span: 8 }, // x-components 控件的布局 不设置默认 span = 24  offset = 0
        "x-components": "input", // string | React.ReactNode 组件类型 类型会提供方法注册, 大小写敏感
        "x-components-props": {}, // 组件属性,后续会放在组件上
      },
      {
        description: () => {
          return (
            <div className="confirm-text-box">
              <span>入口规则</span>
            </div>
          );
        }, //  React.ReactNode 描述,用于描述性部分，解决表单中的一些静态提示内容，如果x-components存在，则不展示
      },
      {
        label: "入口数量", // string | React.ReactNode | 不填 字段标题，不填的时候不展示
        name: "entryAmount", // string 字段名称，对应数据结构中的key值
        key: "entryAmount", // string 字段名称，对应数据结构中的key值
        dataType: "number", // 'string' | 'object' | 'array' | 'number'  数据类型，即name对应的
        defaultValue: 2, // 默认数值，类型取决于dataType的类型，具体是否增加校验待定
        wrapperCol: { span: 12 }, // x-components 控件的布局 不设置默认 span = 24  offset = 0
        "x-components": "select", // string | React.ReactNode 组件类型 类型会提供方法注册, 大小写敏感
        "x-components-props": {
          options: entryAmountList,
        }, // 组件属性,后续会放在组件上
        "x-rules": {
          required: true, // boolean 是否必填 为true的试试
          message: "请输入地区代码", // string 错误时的提示信息， required 为true的时候，但是没有message的时候，显示${name} is required
        }, // 校验规则，校验的时候，根绝type类型去执行不同的校验方法
      },
      {
        type: "Array",
        name: "entryList",
        key: "entryList",
        itemLength: 2,
        label: (state, index) => {
          return <span>入口{index + 1}</span>;
        }, //
        properties: [
          {
            label: "默认图片", // string | React.ReactNode | 不填 字段标题，不填的时候不展示
            name: "defaultImg", // string 字段名称，对应数据结构中的key值
            key: "defaultImg", // string 字段名称，对应数据结构中的key值
            dataType: "object", // 'string' | 'object' | 'array' | 'number'  数据类型，即name对应的
            wrapperCol: { span: 12 }, // x-components 控件的布局 不设置默认 span = 24  offset = 0
            "x-components": "Image", // string | React.ReactNode 组件类型 类型会提供方法注册, 大小写敏感
            "x-components-props": {}, // 组件属性,后续会放在组件上
            "x-rules": {
              required: true, // boolean 是否必填 为true的试试
              message: "请选择图片", // string 错误时的提示信息， required 为true的时候，但是没有message的时候，显示${name} is required
            }, // 校验规则，校验的时候，根绝type类型去执行不同的校验方法
          },
          {
            label: "悬浮图片", // string | React.ReactNode | 不填 字段标题，不填的时候不展示
            name: "hoverImg", // string 字段名称，对应数据结构中的key值
            key: "hoverImg", // string 字段名称，对应数据结构中的key值
            dataType: "object", // 'string' | 'object' | 'array' | 'number'  数据类型，即name对应的
            wrapperCol: { span: 12 }, // x-components 控件的布局 不设置默认 span = 24  offset = 0
            "x-components": "Image", // string | React.ReactNode 组件类型 类型会提供方法注册, 大小写敏感
            "x-components-props": {}, // 组件属性,后续会放在组件上
          },
          {
            label: "产品维度", // string | React.ReactNode | 不填 字段标题，不填的时候不展示
            name: "cpwd", // string 字段名称，对应数据结构中的key值
            key: "cpwd", // string 字段名称，对应数据结构中的key值
            dataType: "string", // 'string' | 'object' | 'array' | 'number'  数据类型，即name对应的
            wrapperCol: { span: 12 }, // x-components 控件的布局 不设置默认 span = 24  offset = 0
            "x-components": "input", // string | React.ReactNode 组件类型 类型会提供方法注册, 大小写敏感
            "x-components-props": {}, // 组件属性,后续会放在组件上
          },
          {
            name: "vipEntranceFlag", // string 字段名称，对应数据结构中的key值
            key: "vipEntranceFlag", // string 字段名称，对应数据结构中的key值
            dataType: "string", // 'string' | 'object' | 'array' | 'number'  数据类型，即name对应的
            wrapperCol: { span: 11, offset: 1 }, // x-components 控件的布局 不设置默认 span = 24  offset = 0
            "x-components": "checkBox", // string | React.ReactNode 组件类型 类型会提供方法注册, 大小写敏感
            "x-components-props": {
              options: vipEntranceFlagList,
            }, // 组件属性,后续会放在组件上
          },
          {
            label: "会员构建", // string | React.ReactNode | 不填 字段标题，不填的时候不展示
            name: "vipGj",
            display: false,
            type: "Children", // Object | Array | children 表单类型，只有Object、Array、children三种种选择，不写的情况下则当为叶子结点，写了则向下寻找节点，如果节点存在，则将其值和父节点同级如果找不到节点，则认为是叶子结点，children类型表示children字段中的内容为子节点，和当前所在同级
            wrapperCol: { span: 12 }, // x-components 控件的布局 不设置默认 span = 24  offset = 0
            properties: [
              {
                name: "gjlx", // string 字段名称，对应数据结构中的key值
                key: "gjlx", // string 字段名称，对应数据结构中的key值
                dataType: "string", // 'string' | 'object' | 'array' | 'number'  数据类型，即name对应的
                labelWidth: 100, // number | string label的宽度，默认值为100，单位为px， 需要判断label 是否存在
                wrapperCol: { span: 8 }, // x-components 控件的布局 不设置默认 span = 24  offset = 0
                "x-components": "select", // string | React.ReactNode 组件类型 类型会提供方法注册, 大小写敏感
                "x-components-props": {}, // 组件属性,后续会放在组件上
                "x-rules": {
                  required: true, // boolean 是否必填 为true的试试
                  message: "请选择构建类型", // string 错误时的提示信息， required 为true的时候，但是没有message的时候，显示${name} is required
                }, // 校验规则，校验的时候，根绝type类型去执行不同的校验方法
              },
              {
                name: "gjid", // string 字段名称，对应数据结构中的key值
                key: "gjid", // string 字段名称，对应数据结构中的key值
                dataType: "string", // 'string' | 'object' | 'array' | 'number'  数据类型，即name对应的
                wrapperCol: { span: 16 }, // x-components 控件的布局 不设置默认 span = 24  offset = 0
                "x-components": "input", // string | React.ReactNode 组件类型 类型会提供方法注册, 大小写敏感
                "x-components-props": {}, // 组件属性,后续会放在组件上
                "x-rules": {
                  required: true, // boolean 是否必填 为true的试试
                  message: "请输入构建ID", // string 错误时的提示信息， required 为true的时候，但是没有message的时候，显示${name} is required
                }, // 校验规则，校验的时候，根绝type类型去执行不同的校验方法
              },
            ], // defaultItemScheam 数组描述，类型为itemSchem的内容，如果dataType是Object，则会根据该字段创建表单结构
            // wrapperCol: {}, // x-components 控件的布局 不设置默认 span = 24  offset = 0
          },
          {
            label: "无构建", // string | React.ReactNode | 不填 字段标题，不填的时候不展示
            name: "extraDealType", // string 字段名称，对应数据结构中的key值
            key: "extraDealType", // string 字段名称，对应数据结构中的key值
            dataType: "number", // 'string' | 'object' | 'array' | 'number'  数据类型，即name对应的
            display: false, // boolean 是否可见
            labelWidth: 100, // number | string label的宽度，默认值为100，单位为px， 需要判断label 是否存在
            defaultValue: extraDealTypeList[0].value,
            "x-components": "radio", // string | React.ReactNode 组件类型 类型会提供方法注册, 大小写敏感
            "x-components-props": {
              options: extraDealTypeList,
            }, // 组件属性,后续会放在组件上
            // wrapperCol: {}, // x-components 控件的布局 不设置默认 span = 24  offset = 0
          },
          {
            name: "extral",
            type: "Children", // Object | Array  表单类型，只有Object和Array两种选择，不写的情况下则当为叶子结点，写了则向下寻找节点，如果找不到节点，则认为是叶子结点
            display: false,
            properties: [
              {
                name: "extraImg", // string 字段名称，对应数据结构中的key值
                key: "extraImg", // string 字段名称，对应数据结构中的key值
                dataType: "object", // 'string' | 'object' | 'array' | 'number'  数据类型，即name对应的
                wrapperCol: { span: 12 }, // x-components 控件的布局 不设置默认 span = 24  offset = 0
                "x-components": "Image", // string | React.ReactNode 组件类型 类型会提供方法注册, 大小写敏感
                "x-components-props": {}, // 组件属性,后续会放在组件上
                "x-rules": {
                  required: true, // boolean 是否必填 为true的试试
                  message: "请输入弹出宣传图片", // string 错误时的提示信息， required 为true的时候，但是没有message的时候，显示${name} is required
                },
              },
              {
                label: "图片链接", // string | React.ReactNode | 不填 字段标题，不填的时候不展示
                name: "jumpPageUrl", // string 字段名称，对应数据结构中的key值
                key: "jumpPageUrl", // string 字段名称，对应数据结构中的key值
                dataType: "string", // 'string' | 'object' | 'array' | 'number'  数据类型，即name对应的
                wrapperCol: { span: 12 }, // x-components 控件的布局 不设置默认 span = 24  offset = 0
                "x-components": "input", // string | React.ReactNode 组件类型 类型会提供方法注册, 大小写敏感
                "x-components-props": {}, // 组件属性,后续会放在组件上
              },
            ],
            labelWidth: 100, // number | string label的宽度，默认值为100，单位为px， 需要判断label 是否存在
          },
        ],
      },
    ], // defaultItemScheam 对象描述，类型为itemSchem的内容，如果dataType是Object，则会根据该字段创建表单结构
  };

  // form 动态表单的effect 示例
  const formEffect = (action) => {
    const { setFieldState, onFieldValueChange } = action;
    // 入口数量修改的时候，改变入口数组的列表数量
    onFieldValueChange("entryAmount").subscribe(({ value }) => {
      setFieldState("entryList", (state) => {
        state.itemLength = value;
      });
    });

    onFieldValueChange("entryList.*.vipEntranceFlag").subscribe(
      ({ value,index }) => {
        setFieldState(
          `entryList.${index}.(vipGj,extraDealType,extral)`,
          (state) => {
            state.display =
              value.length > 0 && value[0] === vipEntranceFlagList[0].value;
          }
        );
      }
    );
    onFieldValueChange("entryList.*.extraDealType").subscribe(
      ({ value,index }) => {
        setFieldState(`entryList.${index}.extral.jumpPageUrl`, (state) => {
          state.display = value === extraDealTypeList[0].value;
        });
      }
    );
  };