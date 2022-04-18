
import * as pdfJs from 'pdfjs-dist';
import * as PdfjsWorker from 'pdfjs-dist/build/pdf.worker'

// const PdfjsWorker = require('pdfjs-dist/build/pdf.worker.js');
export function createLoadingTask(src, options) {

  var source;
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


  var loadingTask = pdfJs.getDocument(source);
  // loadingTask.__PDFDocumentLoadingTask = true; // since PDFDocumentLoadingTask is not public

  if (options && options.onPassword)
    loadingTask.onPassword = options.onPassword;

  if (options && options.onProgress)
    loadingTask.onProgress = options.onProgress;

  return loadingTask;
}


export function initPdfjsWorker() {
  if (typeof window !== 'undefined' && 'Worker' in window && navigator.appVersion.indexOf('MSIE 10') === -1) {
    // console.log(pdfJs.GlobalWorkerOptions.workerPort)
    // console.log(PdfjsWorker)
    // const { WorkerMessageHandler } = PdfjsWorker
    window['pdfjsWorker'] = PdfjsWorker;
  }
}