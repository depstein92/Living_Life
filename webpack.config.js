const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  entry: './client/index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: ['babel-loader'],
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
         use: [ { loader: "style-loader" },
                { loader: "css-loader" },
                { loader: "sass-loader" } ]
       },
       {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
       },
      {
       test: /\.(png|jpg|gif)$/, //A)
       use: [
         {
           loader: 'url-loader',
           options: {
             limit: 8192
           }
         }
       ]
     }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
  ]
};

/* A)
 A webpage does
not have to load an external image.
Reducing the things a webpage has to
 load will naturally make that
 page faster.
 Reduces the size and the execution time of code
 */
