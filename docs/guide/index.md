## 如何在项目中安装、使用

1.  例如想在 srOmsWeb 中使用【时间戳转 YYYY-MM-DD HH:mm:ss】通用方法

```js
// 在oms中安装依赖
tnpm i @tentcent/sr-utils
// 在项目中使用
import { formateTime2seconds } from '@tencent/sr-utils';
formateTime2seconds(time)
```

2.  如何在 Apackage 中使用 Bpackage 进行本地开发

```js
lerna add b --scope a
```

例子见：`packages/utils/src/index.ts`

## 修改 components 和提交注意事项

修改通用方法时，不能影响已有代码功能逻辑，提交代码后最好是提 PR 让其他同事 CR 一下

## 发版注意事项

通常来说，发版只需要发某个 package，发版使用 np 来规范流程

## 规范说明

## 文档贡献说明

可以设置检索目录，通常文档放在 docs 下，以 docs 为例

1. 如果不在`config/menus/index.ts`中显示的声明路由，则会以 docs 为根路径('/')，以文件夹结构作为默认 path
2. 如何快速添加 Navs(页面右上角导航按钮)，`config/config.ts/navs`
3. [其他参考](https://d.umijs.org/zh-CN/config)

## lerna 相关

1. [命令文档](http://www.febeacon.com/lerna-docs-zh-cn/routes/basic/about.html)
2. [谁在使用](https://www.lernajs.cn/#users)
