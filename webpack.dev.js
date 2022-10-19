const { merge } = require('webpack-merge')
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },

  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    compress: true,
    hot: true,
    port: 5500,
  },
});


