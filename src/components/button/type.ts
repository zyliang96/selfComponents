import React from "react";
import { sizeEnum } from "@/types";
/**
 * shape 枚举类型
 */
export enum shapeEnum {
  circle = "circle",
  round = "round",
}

/**
 * button props参数
 */
export interface buttonProps {
  block?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
  shape?: shapeEnum;
  size?: shapeEnum;
  onClick?: (event: React.event) => void;
}
