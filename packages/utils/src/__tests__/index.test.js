import { multiply, divide } from "../math/index";

// 常见精度问题  19.9*100 19.9/100
test("multiply 19.9 * 100", () => {
  expect(multiply(19.9, 100)).toBe(1990);
});

test("divide 19.9 / 100", () => {
  expect(divide(19.9, 100)).toBe(0.199);
});
