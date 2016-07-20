const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const projectRoot = path.resolve(__dirname, '../')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('main.css')
const autoprefixer = require('autoprefixer');

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
        loader: extractCSS.extract(['css', 'postcss'])
      },
      {
        test: /\.scss$/i,
        loader: extractCSS.extract(['css', 'postcss', 'sass'])
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
  postcss: function () {
    return [autoprefixer];
  },
  plugins: [
    extractCSS
  ],
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}
