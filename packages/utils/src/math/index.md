---
nav:
  path: /utils
  title: utils
---

# 数学方法

### 加法

```js
add(0.1, 0.2); // => 0.3
```

### 减法

```js
subtract(0.3, 0.1); // => 0.2
```

### 乘法

```js
multiply(19.9, 100); // => 1990
```

### 除法

```js
divide(19.9, 100); // => 0.199
```

### 分转元

```js
fen2yuan(200); // => 2
```

### 元转分

```js
yuan2fen(1); // => 100
```

### 千分符格式化数字

```js
// num：数字
// digits?：保留小数点
// thousandsFormate(num, digits)
thousandsFormate(123456789); // => 123,456,789
thousandsFormate(123456.33, 2); // => 123,456.33
```

### 分转换元，带金额符号￥ x.y

```js
// num：数字
// digits?：保留小数点
// thousandsFormate(num, digits)
renderFenAmount(123456700); // => '￥1,234,567'
renderFenAmount(123456.33, 2); // => '￥1,234.56'
```
