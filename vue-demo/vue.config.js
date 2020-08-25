const path = require('path')
// const fs = require('fs')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  // baseUrl: '', // 部署应用时的基本 URL
  publicPath: '', //process.env.NODE_ENV === 'production' ? './' : './', // 部署应用时的基本 URL
  outputDir: 'dist', // 生产环境构建文件的目录
  // assetsDir: 'src/assets', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  // indexPath: 'index.html', // 指定生成的 index.html 的输出路径
  filenameHashing: true, // 生成的静态资源文件名是否使用哈希
  lintOnSave: false,
  productionSourceMap: false, // 生产环境构建map文件
  integrity: false,
  // configureWebpack: {

  // },
  devServer: {
    // headers: {
    //   'X-Custom-Foo': 'bar'
    // },
    open: true,
    port: 8081,
    host: '0.0.0.0',
  },
  chainWebpack: config => {
    config.module
      .rule('iview')
      .test('/iview.src.*?js$/')
      .use('babel')
      .loader('babel-loader')
      .end()    
  },
  css: { //引入主题配置css,不配会报错
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}