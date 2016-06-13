var webpack = require('webpack');

module.exports = {

  entry: [
  'webpack-dev-server/client?http://localhost:8080/',
  'webpack/hot/dev-server',
  __dirname + '/app/index.js'
  ],

  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    preLoaders: [
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' } }
    ],
    loaders: [
      { test: /\.js$|\.tag$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  devServer: {
    contentBase: './app'
  }
};
