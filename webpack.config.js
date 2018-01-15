const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  resolve: {
     alias: {
        '../../theme.config$': path.join(__dirname, 'semantic-ui/theme.config')
     }
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
     use: ExtractTextPlugin.extract({
       use: ['css-loader', 'less-loader']
     }),
     test: /\.less$/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
    new ExtractTextPlugin({
     filename: '[name].[contenthash].css',
   }),
  ]
};
