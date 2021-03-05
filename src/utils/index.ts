import { SizeEnum } from "../types";
/**
 * 默认的纯静态方法
 */
export function staticFunction() {}

/**
 * 获取size对应的className简称
 */
export function getSize(size: String | SizeEnum): String {
  let sizeCls = "";
  switch (size) {
    case SizeEnum.large:
      sizeCls = "lg";
      break;
    case SizeEnum.small:
      sizeCls = "sm";
      break;
    default:
      break;
  }
  return sizeCls;
}
