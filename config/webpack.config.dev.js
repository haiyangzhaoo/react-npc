const baseCon = require('./webpack.config.base')
const {merge} = require('webpack-merge')
const webpack = require('webpack')
const path    = require('path')

const getPath = pathname => path.resolve(__dirname, pathname)


const devCon = {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // JSON.stringify('development')
      IS_DEVELOPMETN: true
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
