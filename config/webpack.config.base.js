const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const getPath = pathname => path.resolve(__dirname, pathname)

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
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      // 解析less文件
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true
            }
          }
        }]
      },
      // 解析sass文件
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
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
        ]
      },
      // 加载css
      {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        }]
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
    })
  ]
}

module.exports = baseCon
