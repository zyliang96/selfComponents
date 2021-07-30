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
