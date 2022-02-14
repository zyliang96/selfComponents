import { isObject, isArray, isFunction, isEmptyArray, isUndef, isBoolean, isString, isNumber } from './utils/check';
/**
 * 枚举设置信息的类型
 */
const configCheckMap = {
  isManualUpload: {
    required: false,
    checkFunc: [
      {
        name: 'boolean',
        func: isBoolean
      }
    ]
  }, // 是否手动上传，默认为false
  action: {
    required: false,
    checkFunc: [
      {
        name: 'string',
        func: isString
      }
    ]
  }, // 上传地址，在isManualUpload为false的情况下，没有上传地址则使用uploadFunc,如果两个都不存在则会直接提示错误
  uploadFunc: {
    required: false,
    checkFunc: [
      {
        name: 'function',
        func: isFunction
      }
    ]
  }, // 文件上传方法
  accept: {
    required: false,
    checkFunc: [
      {
        name: 'string',
        func: isString
      }
    ]
  }, // 接受的文件上传类型，默认为空字符串，允许任何文件被上传
  fileSize: {
    required: false,
    checkFunc: [
      {
        name: 'number',
        func: isNumber
      },
      {
        name: 'string',
        func: isString
      }
    ]
  }, // 每个文件的大小
  nameLength: {
    required: false,
    checkFunc: [
      {
        name: 'number',
        func: isNumber
      },
      {
        name: 'string',
        func: isString
      }
    ]
  }, // 文件名长度
  defaultFileList: {
    required: false,
    checkFunc: [
      {
        name: 'array',
        func: isArray
      }
    ]
  }, // 默认的文件列表
  showUploadList: {
    required: false,
    checkFunc: [
      {
        name: 'array',
        func: isArray
      }
    ]
  }, // 是否展示上传列表，默认为true
  multiple: {
    required: false,
    checkFunc: [
      {
        name: 'boolean',
        func: isBoolean
      }
    ]
  }, // 是否支持多选文件上传
  downloadFile: {
    required: false,
    checkFunc: [
      {
        name: 'boolean',
        func: isBoolean
      }
    ]
  }, // 是否支持下载文件
  buttonRender: {
    required: false,
    checkFunc: [
      {
        name: 'function',
        func: isFunction
      }
    ]
  }, // 上传按钮自定义展示
  uploadListRender: {
    required: false,
    checkFunc: [
      {
        name: 'function',
        func: isFunction
      }
    ]
  }, // 上传文件列表的自定义展示类型，只有在showUploadList为false下才生效
  beforeUpload: {
    required: false,
    checkFunc: [
      {
        name: 'function',
        func: isFunction
      }
    ]
  }, // 上传接口调用前的处理操作
  afterUpload: {
    required: false,
    checkFunc: [
      {
        name: 'function',
        func: isFunction
      }
    ]
  }, // 上传接口返回后的处理操作
  buttonName: {
    required: false,
    checkFunc: [
      {
        name: 'string',
        func: isString
      }
    ]
  }, // 文件上传按钮名称
  format: {
    required: false,
    children: {
      name: {
        required: false,
        checkFunc: [
          {
            name: 'string',
            func: isString
          }
        ]
      }, // 名称取值字段
      path: {
        required: false,
        checkFunc: [
          {
            name: 'string',
            func: isString
          }
        ]
      } // 地址取值字段
    }
  } // 自定义参数取值逻辑
}; // 配置信息中的必填参数列表
/**
 * 校验参数
 */
export default function configCheck(config) {
  const configKeys = Object.keys(config);
  let configIsRequire = [];
  // 获取枚举map的key值，遍历筛选出必填参数
  Object.keys(configCheckMap).forEach(item => {
    if (configCheckMap[item].required) {
      configIsRequire.push(item);
    }
  });
  // 判断必填参数是否已填
  configIsRequire.forEach(item => {
    if (configKeys.indexOf(item) < 0) {
      throw new Error(item + ' in useGetList is required !');
    }
  });
  // 校验参数的类型是否正常
  configKeys.forEach(key => {
    if (config[key] !== undefined && configCheckMap[key]) {
      if (configCheckMap[key].children) {
        const childrenConfig = configCheckMap[key].children;
        const childrenConfigKeys = Object.keys(childrenConfig);
        childrenConfigKeys.forEach(item => {
          const checkFunc = childrenConfig[item].checkFunc;
          let isOk = false;
          let errorTypeList = []; // 错误类型string
          for (let i = 0, len = checkFunc.length; i < len; i++) {
            if (checkFunc[i].func(config[key][item])) {
              isOk = true;
              break;
            } else {
              errorTypeList.push(checkFunc[i].name);
            }
          }
          if (!isOk) {
            throw new Error(key + 'is not a ' + errorTypeList.join(' or '));
          }
        });
      } else {
        const checkFunc = configCheckMap[key].checkFunc;
        let isOk = false;
        let errorTypeList = []; // 错误类型string
        for (let i = 0, len = checkFunc.length; i < len; i++) {
          if (checkFunc[i].func(config[key])) {
            isOk = true;
            break;
          } else {
            errorTypeList.push(checkFunc[i].name);
          }
        }
        if (!isOk) {
          throw new Error(key + 'is not a ' + errorTypeList.join(' or '));
        }
      }
    }
  });
  // 如果在手动上传为false的情况下，如果action和uploadFunc都为空则报错
  if (!config.isManualUpload && !config.action && !config.uploadFunc) {
    throw new Error('action or uploadFunc is required when isManualUpload is false');
  }
}
