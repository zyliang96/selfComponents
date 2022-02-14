import React, { useState, useEffect } from 'react';
import './index.scss';
import { Icon, Button, message } from 'dpl-react';
import photoSwipHtml from './utils/photoSwipHtml.js';
import openSwipe from './photoSwipe/index';
import uploadFile from './utils/uploadFile';
import configCheck from './checkConfig';

// 默认的format对象
const defaultFormatObject = {
  name: 'name', // 名称取值字段
  path: 'path' // 地址取值字段
};

const defaultConfig = {
  isManualUpload: false, // 是否手动上传，默认为false
  action: null, // 上传地址，在isManualUpload为false的情况下，没有上传地址则使用uploadFunc,如果两个都不存在则会直接提示错误
  uploadFunc: null, // 文件上传方法
  accept: '', // 接受的文件上传类型，默认为空字符串，允许任何文件被上传
  fileSize: null, // 每个文件的大小
  nameLength: null, // 文件名长度
  defaultFileList: null, // 默认的文件列表
  showUploadList: true, // 是否展示上传列表，默认为true
  multiple: false, // 是否支持多选文件上传
  isDownloadFile: false, // 是否支持下载文件
  buttonRender: null, // 上传按钮自定义展示
  uploadListRender: null, // 上传文件列表的自定义展示类型，只有在showUploadList为false下才生效
  beforeUpload: null, // 上传接口调用前的处理操作
  afterUpload: null, // 上传接口返回后的处理操作
  buttonName: '上传', // 文件上传按钮名称
  mode: 'list', // showUploadList情况下的时候，展示的形式
  format: defaultFormatObject, // 自定义参数取值逻辑
  disabled: false, // 不可提交
  maxLength: null, // 数量限制
  downloadFunc: null // 下载方法，默认为window.open()
};

// mode 类型
const modeMap = {
  default: 'list', // 列表形式
  card: 'card', // 卡片的形式
  picture: 'picture' // 图片的上传
};

// 默认的图片允许接收类型
const defaultPictureAccept = ['.png', '.jpg', '.jpeg', '.gif'];
// 默认图片的错位类型
const pictureErrorMap = {
  typeError: '图片格式不正确',
  nameLengthError: '图片名字超过${length}个字',
  sizeError: '图片大小超过${size}M'
};
// 默认的文件允许接收类型
const defaultFileAccept = '';
// 默认文件的错误类型
const fileErrorMap = {
  typeError: '文件格式不正确',
  nameLengthError: '文件名字超过${length}个字',
  sizeError: '文件大小超过${size}M'
};
// 加载图片的html元素的默认id
const photoSwipeHtmlId = 'photoSwipe';

export default function FileUpload(props) {
  const { other, onChange, value, mode = 'list' } = props;
  configCheck(other);
  const {
    showUploadList, // 是否展示上传列表，默认为true
    buttonName, // 文件上传按钮名称
    accept, // 接受的文件上传类型，默认为空字符串，允许任何文件被上传
    nameLength, // 文件名长度
    fileSize, // 每个文件的大小
    action, // 上传地址，在isManualUpload为false的情况下，没有上传地址则使用uploadFunc,如果两个都不存在则会直接提示错误
    buttonRender, // 上传按钮自定义展示
    isManualUpload, // 是否手动上传，默认为false
    uploadFunc, // 文件上传方法
    defaultFileList, // 默认的文件列表
    multiple, // 是否支持多选文件上传
    isDownloadFile, // 是否支持下载文件
    uploadListRender, // 上传文件列表的自定义展示类型，只有在showUploadList为false下才生效
    beforeUpload, // 上传接口调用前的处理操作,校验文件类型、名字长度、大小之后执行
    afterUpload, // 上传接口返回后的处理操作，会将接口返回的json内容返回
    format, // 自定义参数取值逻辑
    disabled, // 不可提交
    maxLength, // 数量限制
    downloadFunc // 下载方法，默认为window.open()
  } = Object.assign({}, defaultConfig, other);
  const [fileList, setFileList] = useState(() => {
    return value || [];
  }); // 文件列表
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({}); // 错误信息
  const [loadingList, setLoadingList] = useState([]); // 加载列表

  const formatFileObject = Object.assign({}, defaultFormatObject, format);

  /**
   * 设置文件校验参数
   * @param {String} type
   */
  const settingAcceptConfig = type => {
    if (type === modeMap['picture']) {
      setErrorMessage(pictureErrorMap);
    } else {
      setErrorMessage(fileErrorMap);
    }
  };

  /**
   * 图片的html元素是否存在
   */
  const isPhotoSwipeExist = () => {
    const elem = document.getElementById(photoSwipeHtmlId);
    if (elem) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * 检查组件类型
   */
  const checkType = type => {
    settingAcceptConfig(type);
    switch (type) {
      // TODO 写成对象
      case modeMap['picture']:
        if (!isPhotoSwipeExist()) {
          const divELement = document.createElement('div');
          divELement.id = photoSwipeHtmlId;
          divELement.innerHTML = photoSwipHtml();
          document.body.appendChild(divELement);
        }
        return;
      default:
        return;
    }
  };

  /**
   * 校验file类型、名字长度、大小
   */
  const checkFile = file => {
    let acceptList = accept ? accept.split(',') : [];
    acceptList = acceptList.map(item => {
      return item.substring(item.indexOf('.') + 1);
    });
    // 根据文件名后缀修改，避免
    // TODO 改成正则
    if (acceptList.length > 0 && acceptList.indexOf(file.name.substring(file.name.lastIndexOf('.') + 1)) < 0) {
      message.error(errorMessage.typeError);
      return false;
    }
    if (nameLength && file.name.length > nameLength) {
      message.error(errorMessage.nameLengthError.replace('${length}', nameLength));
      return false;
    }
    if (fileSize && file.size > fileSize * 1024 * 1024) {
      message.error(errorMessage.sizeError.replace('${size}', fileSize));
      return false;
    }
    return true;
  };

  /**
   * 文件加载
   */
  const loadingFileList = files => {
    const fileLength = files.length;
    let list = [];
    for (let i = 0; i < fileLength; i++) {
      list.push({
        name: files[i].name
      });
    }
    setLoadingList(list);
  };

  /**
   * 文件改变时的校验
   * @param {File} file
   */
  const onFileChange = files => {
    const fileLength = files.length;
    for (let i = 0; i < fileLength; i++) {
      if (!checkFile(files[i])) {
        return false;
      }
    }
    setLoading(true);
    loadingFileList(files);
    return true;
  };

  /**
   * 打开图片上传input
   */
  const openUploadFile = async () => {
    if (loading) return;
    if (fileList.length >= maxLength) return;
    const config = {
      url: action,
      onChange: onFileChange,
      accept: accept,
      before: beforeUpload,
      after: afterUpload,
      isManual: isManualUpload,
      uploadFunc: uploadFunc,
      multiple: multiple
    };
    const res = await uploadFile(config).finally(() => {
      setLoading(false);
    });
    if (res.success) {
      let result = fileList.concat(res.data);
      setLoadingList([]);
      setFileList(result);
      if (onChange) {
        onChange(result);
      }
    } else {
      message.error(res.message);
      setLoadingList([]);
    }
  };

  /**
   * 下载文件
   * @param {Object} file
   */
  const downloadFile = file => {
    if (isDownloadFile) {
      const filePath = file[formatFileObject.path];
      downloadFunc ? downloadFunc(file) : filePath && window.open(filePath);
    }
    return false;
  };

  /**
   *
   * @param {Object}} file
   * @param {number} index
   */
  const deleteFile = (file, index) => {
    if (!disabled) {
      // TODO 直接用index判断 考虑
      const newFileList = fileList.filter(item => {
        if (!(item[formatFileObject.path] === file[formatFileObject.path] && item[formatFileObject.name] === file[formatFileObject.name])) {
          return item;
        }
      });
      setFileList(newFileList);
      onChange && onChange(newFileList);
    }
  };

  /**
   * 进度长度
   */
  const progressLineWidth = index => {
    loadingList[index];
  };

  useEffect(() => {
    checkType(mode);
  }, []);

  return (
    <div className="file-upload-box">
      <div className="upload-button">
        {!buttonRender && (
          <Button onClick={openUploadFile} disabled={disabled}>
            <Icon type="upload" />
            {buttonName}
          </Button>
        )}
        {buttonRender && buttonRender()}
      </div>
      {showUploadList && (
        <div className="show-upload-file">
          {fileList.length > 0 &&
            fileList.map((file, index) => {
              return (
                // TODO 考虑key值是否有必要 可以直接使用index 原理自学
                <div key={file[formatFileObject.name] + file[formatFileObject.path] + index} className="filelist-box">
                  <span
                    onClick={() => {
                      downloadFile(file);
                    }}
                  >
                    <Icon type="paper-clip" className="filelist-before-icon" />
                    <a title={file[formatFileObject.name]} className="filelist-item">
                      {file[formatFileObject.name]}
                    </a>
                  </span>
                  {!disabled && (
                    <Icon
                      type="close"
                      className="close-icon"
                      title="删除文件"
                      onClick={() => {
                        deleteFile(file, index);
                      }}
                    />
                  )}
                </div>
              );
            })}
          {loadingList.length > 0 &&
            loadingList.map((file, indexx) => {
              return (
                <div className="loading-list-item" key={indexx}>
                  <div>
                    <Icon type="loading" className="loading-before-icon" />
                    <a title={file[formatFileObject.name]} className="loading-list-item">
                      {file[formatFileObject.name]}
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      )}
      <canvas id="canvas" width="500" height="500" style={{ display: 'none' }}></canvas>
    </div>
  );
}
