var path = require('path')
var config = require('../config')
var projectRoot = path.resolve(__dirname, '../')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractCSS = new ExtractTextPlugin('main.css')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.js/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /(node_modules|bower_components)/
      },
    ],
    loaders: [
      {
        test: /\.css$/i,
        loader: extractCSS.extract(['css'])
      },
      {
        test: /\.scss$/i,
        loader: extractCSS.extract(['css', 'sass'])
      },
      {
        test: /\.js/,
        loader: 'babel',
        include: projectRoot,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: path.join(config.build.assetsSubDirectory, '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, '../node_modules/foundation-sites/scss/'),
      path.resolve(__dirname, '../node_modules/font-awesome/scss/')
    ]
  },
  plugins: [
    extractCSS
  ],
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}
