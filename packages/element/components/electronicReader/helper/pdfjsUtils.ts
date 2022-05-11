
import * as pdfJs from 'pdfjs-dist';
import * as PdfjsWorker from 'pdfjs-dist/build/pdf.worker'

// const PdfjsWorker = require('pdfjs-dist/build/pdf.worker.js');
/**
 * 创建pdfLoadingTask
 * @param src 
 * @param options 
 * @returns 
 */
export function createLoadingTask(src, options?) {
  return new Promise((resolve, reject) => {
    try {
      let source;
      if (typeof (src) === 'string')
        source = { url: src };
      else if (src instanceof Uint8Array)
        source = { data: src };
      else if (typeof (src) === 'object' && src !== null)
        source = Object.assign({}, src);
      else
        throw new TypeError('invalid src type');

      // source.verbosity = PDFJS.VerbosityLevel.INFOS;
      // source.pdfBug = true;
      // source.stopAtErrors = true;

      if (options && options.withCredentials)
        source.withCredentials = options.withCredentials;


      const loadingTask = pdfJs.getDocument(source);
      // loadingTask.__PDFDocumentLoadingTask = true; // since PDFDocumentLoadingTask is not public

      if (options && options.onPassword) {
        loadingTask.onPassword = options.onPassword;
      }

      if (options && options.onProgress) {
        loadingTask.onProgress = options.onProgress;
      }
      resolve(loadingTask)
    } catch (e) {
      reject(e)
    }
  })
}


export function initPdfjsWorker() {
  if (typeof window !== 'undefined' && 'Worker' in window && navigator.appVersion.indexOf('MSIE 10') === -1) {
    // console.log(pdfJs.GlobalWorkerOptions.workerPort)
    // console.log(PdfjsWorker)
    // const { WorkerMessageHandler } = PdfjsWorker
    window['pdfjsWorker'] = PdfjsWorker;
  }
}


/**
 * 获取目录信息
 * @param {*} pdfDocument 
 * @returns 
 */
export async function getOutline(pdfDocument: pdfJs.PDFDocumentProxy) {
  try {
    if (!pdfDocument) {
      return
    }
    const outLineInfo = await pdfDocument.getOutline();
    console.log('目录 outline', outLineInfo)
    const result = await getLockPage(pdfDocument, outLineInfo, 15)
    return outLineInfo
  } catch (e) {
    console.error(e)
  }
}

/**
 * 获取锁定的目录节点
 * @param {*} pdfDocument 
 * @param {*} outLine 
 * @param {*} targetPageIndex 
 */
export async function getLockPage(pdfDocument, outLine, targetPageIndex) {
  try {
    let list = []
    if (Array.isArray(outLine)) {
      let lastOutlineList = getLeafNode(outLine);
      while (lastOutlineList.length) {
        const list = lastOutlineList.pop();
        const len = list.length;
        for (let i = 0; i < len; i++) {
          const item = list[i]
          const page = await pdfDocument.getPageIndex(item.dest[0])
        }
      }
    }
  } catch (e) {
    console.log(e)
  }
}

/**
 * 获取叶子节点
 * @param {*} outLine 
 */
function getLeafNode(outLine) {
  let list = []
  if (Array.isArray(outLine) && outLine[0]) {
    let item = outLine[0].items
    while (item) {
      if (Array.isArray(item) && item.length > 0) {
        list.push(item)
      }
      if (item[0]) {
        item = item[0].items
      } else {
        break
      }
    }
  }
  return list
} 