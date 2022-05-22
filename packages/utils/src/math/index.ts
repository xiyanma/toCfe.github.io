import { bignumber, chain } from "mathjs";

/**
 * 加法-fix精度问题
 * @param num
 * @param number
 * @returns num + number
 */
export const add = (num: number, number: number) => {
  return Number(chain(bignumber(num)).add(bignumber(number)));
};

/**
 * 减法-fix精度问题
 * @param num
 * @param number
 * @returns num - number
 */
export const subtract = (num: number, number: number) => {
  return Number(chain(bignumber(num)).subtract(bignumber(number)));
};

/**
 * 乘法-fix精度问题
 * @param num
 * @param multiple
 * @returns num * multiple
 */
export const multiply = (num: number, multiple: number) => {
  return Number(chain(bignumber(num)).multiply(bignumber(multiple)));
};

/**
 * 除法-fix精度问题
 * @param num
 * @param number
 * @returns num / number
 */
export const divide = (num: number, number: number) => {
  return Number(chain(bignumber(num)).divide(bignumber(number)));
};

/**
 * 分转元
 */
export const fen2yuan = (num: number) => {
  return divide(num, 100);
};

/**
 * 元转分
 */
export const yuan2fen = (num: number) => {
  return multiply(num, 100);
};

/**
 * 以千分位分割数字
 * @param num
 * @returns 1234.23 => 1,234.23
 */
export const thousandsFormate = (num: number, digits?: number) => {
  if (!num) return num;
  const synthetic = digits ? num?.toFixed(digits) : num;
  return (
    synthetic &&
    `${synthetic}`?.replace(/\d+/, function (s) {
      return s?.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    })
  );
};

/**
 * 分转换成 ￥x.y
 * @param num
 * @param digits
 * @returns
 */
export const renderFenAmount = (num: number, digits?: number) => {
  return num && `￥${thousandsFormate(fen2yuan(num), digits)}`;
};
