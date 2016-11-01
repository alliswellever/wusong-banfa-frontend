var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './index.js',

  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      {test: /\.scss$/, loader: 'style?isertAt=top!css!sass'},
      // {test: /(\.css|\.scss)$/, loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')}
    ]
  }
}
