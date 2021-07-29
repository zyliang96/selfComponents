/**
 * 浏览器匹配项
 */
export interface BrowserItem {
    s: string; // 名称
    r: RegExp; // 正则表达是
}
/**
 * 获取操作系统信息
 */
export function getOs(): string {
    const clientStrings: Array<BrowserItem> = [
        { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
        { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
        { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
        { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
        { s: "Windows Vista", r: /Windows NT 6.0/ },
        { s: "Windows Server 2003", r: /Windows NT 5.2/ },
        { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
        { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
        { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
        { s: "Windows 98", r: /(Windows 98|Win98)/ },
        { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
        {
            s: "Windows NT 4.0",
            r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/,
        },
        { s: "Windows CE", r: /Windows CE/ },
        { s: "Windows 3.11", r: /Win16/ },
        { s: "Android", r: /Android/ },
        { s: "Open BSD", r: /OpenBSD/ },
        { s: "Sun OS", r: /SunOS/ },
        { s: "Linux", r: /(Linux|X11)/ },
        { s: "iOS", r: /(iPhone|iPad|iPod)/ },
        { s: "Mac OS X", r: /Mac OS X/ },
        { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
        { s: "QNX", r: /QNX/ },
        { s: "UNIX", r: /UNIX/ },
        { s: "BeOS", r: /BeOS/ },
        { s: "OS/2", r: /OS\/2/ },
        {
            s: "Search Bot",
            r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
        },
    ];

    let os: string;

    for (const id in clientStrings) {
        const cs = clientStrings[id];

        // 注意不要用ua，ua是小写化
        if (cs.r.test(navigator.userAgent)) {
            os = cs.s;
            break;
        }
    }

    if (/Windows/.test(os)) {
        os = "Windows";
    }
    return os;
}

/**
 * 生成UUID
 */
export function makeUUID(): string {
    const s: Array<string> = [];
    const hexDigits: string = "0123456789abcdef";
    for (let i: number = 0; i < 36; i += 1) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] && 0x3) || 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = "-";
    s[13] = "-";
    s[18] = "-";
    s[23] = "-";

    return s.join("");
}

/**
 * 生成唯一Key值方法
 * 该方法在传入基本值的基础上，加上了时间戳和海伦校验码规则的逻辑处理，尽最大可能的生成一个唯一值
 */
export function makeUniqueKey(baseDate: string = ""): string {
    const date: string = Date.now().toString(32);
    const key: string = date + baseDate.toString();
    let newKey: Array<string> = [];
    let verificationData: number = 1; // 校验码位置
    let newKeyIndex: number = 0;
    for (let j: number = 1, len = key.length; j <= len; j++) {
        if (j === verificationData) {
            newKey[newKeyIndex] = String.fromCharCode(
                65 + Math.floor(Math.random() * 0x16)
            );
            newKeyIndex++;
            verificationData = 2 * verificationData;
        }
        newKey[newKeyIndex] = key[j - 1];
        newKeyIndex++;
    }

    return newKey.join("");
}
