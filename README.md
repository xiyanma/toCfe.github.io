- [Getting Started](#getting-started)
- [关于贡献代码](#关于贡献代码)
- [关于贡献文档](#关于贡献文档)
  - [新增组件后修改文档步骤示例](#新增组件后修改文档步骤示例)
- [关于发版](#关于发版)

### Getting Started

1. Install dependencies

```bash
npm i && lerna bootstrap
```

2. start(启动文档服务)

```bash
npm run start
```

3. [浏览器预览](http://localhost:8000)

Build library via `father-build`,

```bash
$ npm run build
```

4. 部署文档

```js
npm run deploy
```

### 关于贡献代码

1. 先 fork [源仓库](https://github.com/toCfe/toCfe.github.io)到自己的 github 上: https://github.com/toCfe/toCfe.github.io
2. clone 自己的项目后，更新方法、组件
3. 提交到 github 后提 pr 到[源仓库](https://github.com/toCfe/toCfe.github.io)
4. 分配其他人 review 和合代码
5. `npm run deploy`发布到 npm

### 关于贡献文档

#### 新增组件后修改文档步骤示例

1. 建议在同层目录的 doc 下新增 xx.markdown
   1. [markdown 配置项](https://d.umijs.org/zh-CN/config/frontmatter#markdown-%E9%85%8D%E7%BD%AE%E9%A1%B9)
2. 如果要写示例代码，可以参考`packages/constants/src/layout/doc/index.md`

### 关于发版

1. lerna publish 会检测有修改的子包，然后打 tag 后发布
   1. [其他命令](http://www.febeacon.com/lerna-docs-zh-cn/routes/commands/publish.html#from-git)
2. 如果 lerna publish 失败了，因为其需要文件改动才能重新发版，但是没关系，可以去子包内直接 npm publish 即可
