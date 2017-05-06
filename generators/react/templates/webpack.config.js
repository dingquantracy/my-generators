var path = require('path');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].js'
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
    React: 'react'
  }
};