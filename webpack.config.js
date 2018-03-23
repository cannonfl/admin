'use strict';
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  performance: {
    hints: false
  },
  /*optimization: {
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                chunks: 'all'
            }
        }
    }
  },*/
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
