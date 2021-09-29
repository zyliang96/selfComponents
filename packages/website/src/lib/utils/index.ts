// 生成随机数
export function randomString(len: number, originData?: string): string {
    len = len || 16;
    let $chars: string =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let maxPos: number = $chars.length;
    let rs: string = originData || Date.now().toString(32);
    for (let i = rs.length; i < len; i++) {
        //0~32的整数
        rs += $chars.charAt(Math.floor(Math.random() * (maxPos + 1)));
    }
    return rs;
}
