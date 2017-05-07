var path = require('path');
var webpack = require("webpack")

module.exports = {
  entry: {
    index:[
      // 'webpack-dev-server/client?http://localhost:8080/',
      './src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: "/assets/",
    filename: '[name].js'
  },
  devServer:{
    // hot: true,
    // inline: true
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders:['style-loader', 'css-loader']
      }
    ]
  },
  externals: {
    React: 'react',
    ReactDom: 'react-dom'
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ]
};