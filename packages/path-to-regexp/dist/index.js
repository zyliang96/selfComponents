'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// 词法分析类型
const tokensType = {
  name: "NAME", // 名称
  char: "CHAR", // 字符
  open: "OPEN", // 开
  close: "CLOSE", // 关
  escapedChar: "ESCAPED_CHAR", // 分割符
  modifier: "MODIFIER", // 修饰符
  pattern: "PATTERN", // 范式 是用来描述name的
  end: "END", // 结束
};

/**
 * 词法分析
 * 实际上是分词,只不过这一步的分词主要是处理 范式(pattern) 和 字段名称(name) 这两种类型,其他的情况都简单处理,每个char都可以单独展示
 * @param {Array} str
 */
function lexer(str) {
  let tokens = [];
  let i = 0;
  const strLength = str.length;
  while (i < strLength) {
    const char = str[i];

    // 处理修饰符
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: tokensType.modifier, index: i, value: char });
      i++;
      continue;
    }
    // 处理分割符
    if (char === "\\") {
      tokens.push({ type: tokensType.escapedChar, index: i, value: char });
      i++;
      continue;
    }
    // 处理开标签 {
    if (char === "{") {
      tokens.push({ type: tokensType.open, index: i, value: char });
      i++;
      continue;
    }
    // 处理闭标签 }
    if (char === "}") {
      tokens.push({ type: tokensType.close, index: i, value: char });
      i++;
      continue;
    }

    // 处理定义的随机类型name
    if (char === ":") {
      let name = "";
      let j = i + 1;
      // 变量只能是0-9 a-z A-Z _(下滑线),这和很多的编程语言中变量的定义是一致的
      while (j < strLength) {
        const code = str.charCodeAt(j);

        if (
          // `0-9`
          (code >= 48 && code <= 57) ||
          // `A-Z`
          (code >= 65 && code <= 90) ||
          // `a-z`
          (code >= 97 && code <= 122) ||
          // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }

        break;
      }
      // 如果名称不存在,则提示类型错误
      if (!name) throw new TypeError(`Missing parameter name at ${i}`);
      tokens.push({ type: tokensType.name, index: i, value: name });
      // 跨国中间的值,直接到name之后
      i = j;
      continue;
    }

    // 处理pattern范式的情况
    if (char === "(") {
      let j = i + 1;
      let pattern = "";
      // 用来判断是否闭合
      let count = 1;

      if (str[j] === "?") {
        throw new SyntaxError(`Pattern cannot start with "?" at ${j}`);
      }

      while (j < strLength) {
        const patternChar = str[j];
        // 如果是 \ ,则添加两次,因为在比较的时候,字符串\\ 会被转义成 \ 所以实际上一个\对应两个字符,需要加两次
        if (patternChar === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }

        if (patternChar === ")") {
          // 如果是)就闭合判断结束
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (patternChar === "(") {
          // 套娃
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError(`Capturing groups are not allowed at ${j}`);
          }
        }

        pattern += str[j++];
      }
      // count 存在说明没有完全闭合或者闭合过多了
      if (count) throw new TypeError(`Unbalanced pattern at ${i}`);
      if (!pattern) throw new TypeError(`Missing pattern at ${i}`);

      tokens.push({ type: tokensType.pattern, index: i, value: pattern });
      i = j;
      continue;
    }

    // 不是以上各种情况,就全部认为是 字符 (char)
    tokens.push({ type: tokensType.char, index: i, value: str[i++] });
  }
  tokens.push({ type: tokensType.end, index: i, value: "" });
  return tokens;
}

/**
 * 根据词法分析结果 分词 ,或者说是生成一个标准化的数组,用于后续连续性处理
 * 返回字符串或者 词法对象
 * 词法对象结构
 * {
 *      modifier:'', // 修饰符
        name:'test', // 名称
        pattern:'[^\\/#\\?]+?', // 范式（用于实际匹配）
        prefix:'/', // 前缀
        suffix:'', // 后缀
 * }
 */
function parse(str, options = {}) {
  const tokens = lexer(str);
  console.log(tokens);
}

function tokensToRegexp() {}

/**
 * 字符串处理
 */
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options));
}

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
  const opt = Object.assign({}, defaultOptions, options);

  return stringToRegexp(path, keys, opt);
}

exports.pathToRegexp = pathToRegexp;
