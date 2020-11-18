const baseCon = require('./webpack.config.base')
const {merge} = require('webpack-merge')
const webpack = require('webpack')
const path    = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const getPath = pathname => path.resolve(__dirname, pathname)


const devCon = {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // JSON.stringify('development')
      IS_DEVELOPMETN: true
    }),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: getPath('../public/index.html'),
      inject: true,
      minify: {
        html5: true, // 根据HTML5规范解析输入
        collapseWhitespace: true, // 折叠空白区域
        preserveLineBreaks: false, // 当标记之间的空格包含换行符时，始终折叠为1换行符（不完全删除它）。必须与collapseWhitespace=true一起使用
        minifyCSS: true, // 压缩文内css
        minifyJS: true, // 压缩文内js
        removeComments: true // 移除注释
      }
    })
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: getPath('../dist'),
    open: true,
  }
}

module.exports = merge(baseCon, devCon)
