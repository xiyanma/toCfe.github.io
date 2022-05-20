import { bignumber, chain } from "mathjs";

/**
 * 乘法-fix精度问题
 * @param num
 * @param multiple 
 * @returns number
 */
export const multiply = (num: number, multiple: number) => {
  return Number(chain(bignumber(num)).multiply(bignumber(multiple)));
};

/**
 * 除法-fix精度问题
 * @param num
 * @param multiple 
 * @returns number
 */
export const divide = (num: number, multiple: number) => {
  return Number(chain(bignumber(num)).divide(bignumber(multiple)));
};
