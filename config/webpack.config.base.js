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
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': getPath('../src/')
    }
  }
}

module.exports = baseCon
