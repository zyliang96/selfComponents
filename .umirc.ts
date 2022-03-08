const path = require('path')
export default {
    base: '/',
    publicPath: '/',
    mode: 'site',
    title: 'StudyLibrary',
    locales: [['zh-CN', '中文']],
    resolve: {
        includes: ['docs', 'packages/element/components']
    },
    // 主题配置
    themeConfig: {
        carrier: 'test',
        hd: {
            rules: [{ mode: 'vw', options: [100, 1500] }],
        }
    },
    // 别名
    alias: {

    },
    // 包模块结构分析工具，可以看到项目各模块的大小，按需优化
    // analyze: {
    //     analyzerMode: 'server',
    //     analyzerPort: 8888,
    //     openAnalyzer: true,
    //     // generate stats file while ANALYZE_DUMP exist
    //     generateStatsFile: false,
    //     statsFilename: 'stats.json',
    //     logLevel: 'info',
    //     defaultSizes: 'parsed', // stat  // gzip
    // },
    favicon: '//img.alicdn.com/imgextra/i3/O1CN01XtT3Tv1Wd1b5hNVKy_!!6000000002810-55-tps-360-360.svg',
    hash: true,
    outputPath: './dist',
    extraBabelPlugins: ["@babel/plugin-syntax-dynamic-import"],
    mock: {},
}