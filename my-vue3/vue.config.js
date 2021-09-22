const path = require("path");
// const UglifyPlugin = require("uglifyjs-webpack-plugin");
const title = "Cesium开发项目"
module.exports = {
  // 基本路径
  /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
  /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  // 输出文件目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  //   compiler: false,
  runtimeCompiler: true, //关键点在这

  // webpack-dev-server 相关配置
  devServer: {
    /* 自动打开浏览器 */
    open: true,
    host: "0.0.0.0", //局域网和本地访问
    port: 8080,
    https: false,
    hotOnly: false,
    /* 使用代理 */
    proxy: {
      "/api": {
        /* 目标代理服务器地址 */
        target: "http://192.168.30.102:10004",
        /* 允许跨域 */
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    before: () => {}
  },
  // 调整内部的 webpack 配置。
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = title;
        return args;
      })
  },
};