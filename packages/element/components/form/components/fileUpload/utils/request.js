import axios from 'axios';
import { isPlainObject, isFunction, isArray, isFileList } from './check';
import { baseUrl } from '@/const/index';
// import history from '../history'
import { deepMerge } from './deepMerge';

/**
 * @desc request工厂方法
 *  before 接收config，返回值将被合并进config中
 *  after 接收response对象，返回值将被resolve
 *  errorHandler 接收error.response对象，返回值将被reject
 * */
function requestCreator({ before, after, errorHandler }) {
  let defaultOptions = {
    headers: {
      'x-requested-with': 'XMLHttpRequest'
    }
  };
  let options = {};
  const axiosInstance = axios.create({
    baseURL: baseUrl
  });

  axiosInstance.interceptors.request.use(config => {
    if (isFunction(before)) {
      options = before(config);
      options = isPlainObject(options) ? deepMerge([config, defaultOptions, options]) : deepMerge([config, defaultOptions]);
    }
    return options;
  });

  axiosInstance.interceptors.response.use(
    response => {
      commonResponseInterceptor(response.data);
      if (response) {
        if (isFunction(after)) {
          return after(response);
        }
        return response.data;
      }
    },
    error => {
      commonErrorHandler(error.response);
      if (isFunction(errorHandler)) {
        const errResult = errorHandler(error.response);
        return errResult ? Promise.reject(errResult) : Promise.reject(error);
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}

function commonErrorHandler(error) {
  if (error) {
    switch (error.status) {
      case 404:
        return error;
      case 403:
        return error;
      case 500:
        // history.push('/500')
        return error;
      case 501:
        // history.push('/500')
        return error;
      case 502:
        // history.push('/500')
        return error;
      case 503:
        // history.push('/500')
        return error;
      default:
        return error;
    }
  }
}

function commonResponseInterceptor(data) {
  switch (data.messageCode) {
    case 'api.auth.unlogon': //未登录
      // history.push('/login')
      break;
    case 'api.permission.deny': //无权限
      //   history.push('/401')
      break;
    case 'api.database_error': //数据库异常
      //   history.push('/500')
      break;
    case 'api.unpredictable_exception': //未知异常
      //   history.push('/500')
      break;
    default:
      break;
  }
}

export const getFile = requestCreator({
  before(options) {
    return { method: 'get' };
  },
  after(response) {
    return response;
  }
});

export const postFile = requestCreator({
  before(options) {
    let originData = options.data;
    let resultData = new FormData();
    Object.keys(originData).forEach(key => {
      if (isArray(originData[key]) || isFileList(originData[key])) {
        const item = originData[key];
        for (let i = 0, len = item.length; i < len; i++) {
          resultData.append(key, item[i]);
        }
      } else {
        resultData.append(key, originData[key]);
      }
    });
    const resultOptions = {
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: resultData
    };
    return deepMerge(options, resultOptions);
  }
});
