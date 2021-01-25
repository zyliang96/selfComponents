/**
 * 词法分析
 * 返回字符串或者 词法对象
 * 词法对象结构
 * {
 *      modifier:'', // 修饰符
        name:'test', // 名称
        pattern:'[^\\/#\\?]+?', // 范式（用于实际匹配）
        prefix:'/', // 前缀
        suffix:'', // 后缀
 * }
 * @param {Array} str
 */
function lexer(str){

}



function stringToRegexp() {}

/**
 * 默认配置
 */
const defaultOptions = {
  /**
   * When `true` the regexp will be case sensitive. (default: `false`)
   * 为true的时候，默认区分大小写
   */
  sensitive: false,
  /**
   * When `true` the regexp won't allow an optional trailing delimiter to match. (default: `false`)
   * 为true的时候，regexp将不允许可选的尾部分隔符匹配
   */
  strict: false,
  /**
   * When `true` the regexp will match to the end of the string. (default: `true`)
   * 当'true'时，regexp将与字符串的结尾匹配
   */
  end: true,
  /**
   * When `true` the regexp will match from the beginning of the string. (default: `true`)
   * 当'true'时，regexp将从字符串的开头匹配
   */
  start: true,
  /**
   * Sets the final character for non-ending optimistic matches. (default: `/`)
   * 设置匹配的最后一个字符
   */
  delimiter: "/",
  /**
   * List of characters that can also be "end" characters.
   * 设置结束的字符串
   */
  endsWith: "$",
  /**
   * List of characters to automatically consider prefixes when parsing.
   * 前缀字段
   */
  prefixes: "./",
  /**
   * Encode path tokens for use in the `RegExp`.
   * 编码RegExp的方法
   */
  encode: (value) => value,
};

/**
 *
 * @param {String|Array|RegExp} path
 * @param {Array} keys
 * @param {Object} options
 */
function pathToRegexp(path, keys, options) {


    

}
