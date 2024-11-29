/*
 * @Author: Jia.Yang
 * @Date: 2024-11-29 15:04:34
 * @LastEditors: Jia.Yang jia.yang@duomai.com
 * @LastEditTime: 2024-11-29 15:27:46
 * @FilePath: \study-project\src\utils\index.ts
 * @Description:
 */
import NP from "number-precision";

// 加减乘除的四个接口
export function plus(a: number, b: number) {
  return NP.plus(a, b);
}

export function minus(a: number, b: number) {
  return NP.minus(a, b);
}

export function times(a: number, b: number) {
  return NP.times(a, b);
}

export function divide(a: number, b: number) {
  return NP.divide(a, b);
}
