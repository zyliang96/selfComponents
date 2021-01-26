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
 * 拆分string
 */
function escapeString(str) {
  // 将非 ! : $ { } ( ) [ ] / \ 的都按照转义字符处理,实际上看起来就是将通用的正则表达式中不是数据处理的数据全部剔除
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}

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
  const { prefixes = "./" } = options;
  // defaultPattern 应该是一个特性的范式,用来匹配任意值即可,实际上用排除法,在路由的判断里,不能算在路由中的实际上只有 /(pathname) #(hash) ?(search)
  const defaultPattern = `[^${escapeString(options.delimiter || "/#?")}]+?`;
  let i = 0;
  const tokensLength = tokens.length;
  let result = [];
  let path = "";
  let key = 0;

  /**
   * 尝试获取指定类型的值,不存在则返回null
   */
  const tryConsume = (type) => {
    let result = null;
    if (i < tokensLength && tokens[i].type === type) {
      result = tokens[i].value;
      i++;
    }
    return result;
  };

  /**
   * 必须获取指定值,如果不是指定值则报错
   */
  var mustConsume = function (type) {
    const value = tryConsume(type);
    // 满足期望,则返回值
    if (value !== undefined) {
      return value;
    }
    // 不满足期望则提示
    const { type: nextType, index } = tokens[i];
    throw new TypeError(`Unexpected ${nextType} at ${index}, expected ${type}`);
  };
  /**
   * 获取固定的前缀
   */
  var consumeText = function () {
    let result = "";
    var value;
    while (
      (value =
        tryConsume(tokensType.char) || tryConsume(tokensType.escapedChar))
    ) {
      result += value;
    }
    return result;
  };

  while (i < tokensLength) {
    // 获取char
    const char = tryConsume(tokensType.char);
    // 获取name 和 pattern
    const name = tryConsume(tokensType.name);
    const pattern = tryConsume(tokensType.pattern);
    // name 或者 pattern 存在说明了存在匹配类型,从本质上看,这两种情况的处理逻辑是一致的,都是设置name值,然后设置范式
    if (name || pattern) {
      // 前缀默认为char的值
      const prefix = char || "";
      /**
       * 如果前缀不存在,则表明char是path的一部分,如果前缀存在则直接作为前缀使用即可,还存在一种特殊的场景,就是固定的值后又匹配了对应的数据,是一个动态的路由
       * 举一个例子,动态路由的前缀都是/detail + 对应详情id的形式,用于的场景可能是埋点等,暂时考虑不到实际的使用用途,但是应该有存在的可能性
       */
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      /**
       * 如果path存在就直接设置了path,因为对于path存在的场景,数据是固定了路由的,所以范式和配置的其他条件都是没有用的
       * 没有前缀的时候,实际上说明上一个数据是一个的固定值,这就可能是一个动态路由的场景
       */
      if (path) {
        result.push(path);
        path = "";
      }
      // 需要按照动态参数的匹配场景处理,有name就使用name,没有就默认key值即可,对于一个url而言,实际上基本key不会太多,修饰符标识1个多个的关系,就是正则表达式中的+ ? *
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume(tokensType.modifier) || "",
      });
      continue;
    }

    // 分割符当作是路由的一部分,可能属于一种奇怪的路由形式,其他情况就是不断的拼接char,知道无法拼接完成(本质上是将之前拆分的分词组合起来)
    const value = char || tryConsume(tokensType.escapedChar);
    if (value) {
      path += value;
      continue;
    }

    // 如果path存在就直接填充
    if (path) {
      result.push(path);
      path = "";
      continue;
    }

    const open = tryConsume(tokensType.open);
    if (open) {
      /**
       * open中的内容实际上也只包含三种类型,首先前面char类型的,一开始获取到的char类型的实际上都是前缀,因为这部分是不变的
       * 然后获取到的类型为 name 和 pattern 两种,  最后的char类型按照后缀来
       * 但是必须要open close 组合结尾,不能多个open,这种情况不做处理
       */
      const prefix = consumeText();
      const name = tryConsume(tokensType.name) || "";
      const pattern = tryConsume(tokensType.pattern) || "";
      const suffix = consumeText();
      mustConsume(tokensType.close);
      // 插入判断类型
      result.push({
        prefix,
        name,
        pattern,
        suffix,
        modifier: tryConsume(tokensType.modifier) || "",
      });
      continue;
    }
    // 当所有的情况都不匹配的时候,必须是end结尾
    mustConsume(tokensType.end);
  }
  return result;
}

/**
 * 将分词处理过的数据,转换成正则表达式
 */
function tokensToRegexp(tokens, keys, options) {
  const {
    strict = false,
    start = true,
    end = true,
    encode = (x) => x,
  } = options;
  // 设置的结尾字符转义化处理
  const endsWith = `[${escapeString(options.endsWith || "")}]|$`;
  // 匹配的最后一个词的转义化处理
  const delimiter = `[${escapeString(options.delimiter || "/#?")}]`;
  let route = start ? "^" : "";

  

}

/**
 * 字符串处理
 */
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
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
export function pathToRegexp(path, keys, options) {
  const opt = Object.assign({}, defaultOptions, options);

  return stringToRegexp(path, keys, opt);
}
