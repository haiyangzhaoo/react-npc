const baseCon = require('./webpack.config.base')
const {merge} = require('webpack-merge')
const webpack = require('webpack')
const path    = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const getPath = pathname => path.resolve(__dirname, pathname)

const proCon = {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'), // JSON.stringify('development')
      IS_DEVELOPMETN: true
    }),
    new CleanWebpackPlugin()
	// new webpack.optimize.UglifyJsPlugin({
	//      compress: {
	//        warnings: true,
	// 	   drop_debugger: true,
	// 	           drop_console: true
	//      }
	// })
  ]
}

module.exports = merge(baseCon, proCon)
