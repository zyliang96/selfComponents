// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!D:/self/develop/selfComponents/packages/element/components/electronicReader/demo/base.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!D:/self/develop/selfComponents/packages/element/components/inputWithAt/demo/base.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!D:/self/develop/selfComponents/packages/element/components/lego-table/demo/base.tsx?dumi-raw-code';

export default {
  'electronicreader-base': {
    component: (require('D:/self/develop/selfComponents/packages/element/components/electronicReader/demo/base.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode1}},"dependencies":{"react":{"version":"17.0.2"},"pdfjs-dist":{"version":"2.13.216"},"worker-loader":{"version":"^3.0.8"}},"componentName":"electronicReader","identifier":"electronicreader-base"},
  },
  'inputwithat-base': {
    component: (require('D:/self/develop/selfComponents/packages/element/components/inputWithAt/demo/base.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode2}},"dependencies":{"@moon-base/element":{"version":"1.0.0"},"react":{"version":">=16.8.0 || >=17.0.0"},"@types/react":{"version":">=16.8.0 || >=17.0.0"},"@types/react-dom":{"version":">=16.8.0 || >=17.0.0"},"clipboard":{"version":">=2.0.6"},"react-dom":{"version":">=16.8.0"}},"componentName":"inputWithAt","identifier":"inputwithat-base"},
  },
  'lego-table-base': {
    component: (require('D:/self/develop/selfComponents/packages/element/components/lego-table/demo/base.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode3}},"dependencies":{"@moon-base/element":{"version":"1.0.0"},"@types/react":{"version":">=16.8.0 || >=17.0.0"},"@types/react-dom":{"version":">=16.8.0 || >=17.0.0"},"clipboard":{"version":">=2.0.6"},"react":{"version":">=16.8.0 || >=17.0.0"},"react-dom":{"version":">=16.8.0"}},"componentName":"lego-table","identifier":"lego-table-base"},
  },
};
