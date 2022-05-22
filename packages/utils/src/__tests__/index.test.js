import { multiply, divide, yuan2fen, fen2yuan, add, subtract, thousandsFormate, renderFenAmount } from "../math/index";

// 加法常见精度问题 0.1+0.2
test("add 0.1 + 0.2", () => {
  expect(add(0.1, 0.2)).toBe(0.3);
});

test("subtract 0.3 + 0.1", () => {
  expect(subtract(0.3, 0.1)).toBe(0.2);
});

// 乘除常见精度问题  19.9*100 19.9/100
test("multiply 19.9 * 100", () => {
  expect(multiply(19.9, 100)).toBe(1990);
});

test("divide 19.9 / 100", () => {
  expect(divide(19.9, 100)).toBe(0.199);
});

test("1元 = 100分", () => {
  expect(yuan2fen(1)).toBe(100);
});

test("200分 = 2元", () => {
  expect(fen2yuan(200)).toBe(2);
});

test("千分符分割", () => {
  expect(thousandsFormate(123456789)).toBe('123,456,789');
  expect(thousandsFormate(123456.33, 2)).toBe('123,456.33');
});

test("分转换为￥x.y", () => {
  expect(renderFenAmount(123456700)).toBe('￥1,234,567');
  expect(renderFenAmount(123456.33, 2)).toBe('￥1,234.56');
});
