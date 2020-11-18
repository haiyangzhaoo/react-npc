const path = require('path')

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
        use: ['style-loader', 'css-loader', 'less-loader']
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
      '@': getPath('../src/')
    }
  },
}

module.exports = baseCon
