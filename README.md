- [Getting Started](#getting-started)
- [关于贡献代码](#关于贡献代码)
- [关于发版](#关于发版)

### Getting Started

1. Install dependencies,

```bash
$ lerna bootstrap && npm i
```

2. dumi start docs

```bash
$ npm run start
```

[open](http://localhost:8000)

Build library via `father-build`,

```bash
$ npm run build
```

### 关于贡献代码

1. `fork tocfe/components`
2. update files
3. pr to tocfe/components
4. other review and merged
5. lerna publish

### 关于发版

1. 如果 lerna publish 失败了，因为其需要文件改动才能重新发版，但是没关系，可以去子包内直接 npm publish 即可
