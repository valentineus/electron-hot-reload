const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

const mainConfig = {
  mode: 'development',
  target: 'electron-main',
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  node: {
    __dirname: true,
    __filename: true
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
}

const rendererConfig = {
  mode: 'development',
  target: 'electron-renderer',
  entry: {
    renderer: './src/renderer.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Test Application'
    })
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/i,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
}

module.exports = [mainConfig, rendererConfig]
