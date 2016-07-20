var path = require('path')
var root = path.resolve(__dirname)
var webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./src/main.css', './src/main.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        include: root
      },
      {
        test: /\.css/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('images/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
