---
nav:
  path: /constants
group:
  path: /constants
---

# 布局常量

### Span

- 说明：span 常量对象，常用于 Col、Form.Item 等场景

```js
// 使用
<Row className={styles.row} gutter={8}>
  <Col {...SPAN_4}>
    <div>SPAN_4</div>
  </Col>
  <Col {...SPAN_12}>
    <div>SPAN_12</div>
  </Col>
</Row>;

// 定义：SPAN_1后面的数字对应span的值
export const SPAN_1 = {
  span: 1,
};
```

<br/>
<code src="./demos/index.tsx" title="span常量" />

### FormLayout

- 说明：常用于 Form.layout

```js
// 使用
<Form {...FORM_LAYOUT_1_1}>{content}</Form>;

// 定义解释：FORM_LAYOUT_{label}_{wrapper} 数字是label:wrapper的比例
export const FORM_LAYOUT_1_1 = {
  labelCol: SPAN_12,
  wrapperCol: SPAN_12,
};
```

<br/>
<code src="./demos/formLayout.tsx" title="formLayout常量" />

### RES_LAYOUT

- 说明：响应式栅格常量，常用在 Col

```js
<Col {...COL_RES_LAYOUT}>响应式宽度</Col>
```

<br/>
<code src="./demos/responsive.tsx" title="响应式布局，缩放屏幕大小观察变化" />
