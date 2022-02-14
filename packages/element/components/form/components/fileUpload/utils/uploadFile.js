import { postFile, postMultipartFile } from './request';
const returnTrue = () => {
  return true;
};
let inputElement = null;
export default function(config) {
  const { url, onChange = returnTrue, accept, before, after, isManual, uploadFunc, multiple } = config;
  return new Promise((resolve, reject) => {
    // TODO 改成可复用， 性能优化
    if (inputElement) {
      document.body.removeChild(inputElement);
    }
    let input = (inputElement = document.createElement('input'));
    input.type = 'file';
    input.style.display = 'none';
    if (multiple) {
      input.visibility = false;
      input.multiple = true;
    }
    if (accept) {
      input.accept = accept;
    }
    input.onchange = e => {
      if (!onChange(e.target.files)) {
        document.body.removeChild(input);
        inputElement = null;
        reject();
        return;
      }
      const data = (before && before(e.target.files)) || { file: e.target.files };
      // TODO 检查一下
      if (!isManual) {
        if (url) {
          postFile({ url, data: data })
            .then(data => {
              data._file = e.target.files;
              after && after(data);
              resolve(data);
            })
            .catch(e => {
              reject(e);
            })
            .finally(() => {
              document.body.removeChild(input);
              inputElement = null;
            });
        } else {
          uploadFunc &&
            uploadFunc(data)
              .then(data => {
                data._file = e.target.files;
                after && after(data);
                resolve(data);
              })
              .catch(e => {
                reject(e);
              })
              .finally(() => {
                document.body.removeChild(input);
                inputElement = null;
              });
        }
      }
    };
    document.body.appendChild(input);
    input.click();
  });
}
