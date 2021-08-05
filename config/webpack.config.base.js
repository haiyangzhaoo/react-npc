const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const getPath = pathname => path.resolve(__dirname, pathname)
const devMode = process.env.NODE_ENV !== 'production'

console.log(process.env.NODE_ENV)

const baseCon = {
  entry: {
    index: getPath('../src/index.js')
  },
  output: {
    filename: 'bundle.[hash:6].js',
    path: getPath('../dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		include: [
			path.resolve(__dirname, "../src")
		],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        ]
      },
      // 解析less文件
      {
        test: /\.(le|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          // 'css-loader',
		  {
		  	loader: 'css-loader',
		  	options: {
		  	  modules: {
		  	    localIdentName: '[local]-[hash:base64:5]'
		  	  }
		  	}
		  },
          'sass-loader',
          {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true
                }
              }
          }
        ]
      },
      // 图片处理的loader
      {
        test: /\.(png|jpg|gif|svg)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              outputPath: 'images/' // 设置打包后图片的路径
            }
          }
        ],
		exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': getPath('../src')
    }
  },
  plugins: [
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
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash:6].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash:6].css',
    })
  ]
}

module.exports = baseCon
