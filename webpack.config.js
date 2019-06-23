const Path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

/**
 * @type {webpack.Configuration}
 */
module.exports = {
  entry: {
    main: './src/web/main.js'
  },
  output: {
    path: Path.resolve(__dirname, 'dist/web'),
    filename: 'js/[name]_[hash:8].js',
    publicPath: '/',
  },
  devServer: {
    contentBase: 'dist/web',
    hot: true,
    inline: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/web/template.html',
      filename: 'index.html',
      inject: 'head'
    })
  ]
}
