/**
 * 去除首尾空格
 * @param str
 */
function trim(str: string): string {
    return str.replace(/^\s*/, "").replace(/\s*$/, "");
}

}

export default {
    trim,
};
