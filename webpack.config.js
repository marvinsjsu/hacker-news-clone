// npm install --save-dev
// @babel/core
// @babel/preset-env
// @babel/preset-react
// webpack
// webpack-cli
// webpack-dev-server
// babel-loader
// css-loader
// style-loader
// html-webpack-plugin
// copy-webpack-plugin
// @babel/plugin-proposal-class-properties
// babel-plugin-syntax-dynamic-import


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      favicon: 'favicon.ico'
    }),
    new CopyPlugin([
      { from: '_redirects' }
    ])
  ],
  devServer: {
    historyApiFallback: true
  }
};