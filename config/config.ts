import { defineConfig } from "dumi";
import menus from "./menus/index";

export default defineConfig({
  title: "sr-components",
  favicon: "https://retail.gtimg.com/sr_mms_test/favicon.ico",
  logo: "https://retail.gtimg.com/sr_mms_test/favicon.ico",
  outputPath: "docs-dist",
  dynamicImport: {},
  exportStatic: {},
  manifest: {},
  mode: "site",
  resolve: {
    includes: ["docs", "packages/constants/src", "packages/utils/src"],
  },
  extraBabelPlugins: [
    [
      "babel-plugin-import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
      },
      "antd",
    ],
  ],
  nodeModulesTransform: {
    type: "none",
    exclude: [],
  },
  navs: [
    {
      title: "指南",
      path: "/guide",
    },
    {
      title: "utils",
      path: "/utils",
    },
    {
      title: "constants",
      path: "/constants",
    },
    {
      title: "git",
      path: "https://github.com/toCfe/toCfe",
    },
  ],
  menus,
  // more config: https://d.umijs.org/config
});
