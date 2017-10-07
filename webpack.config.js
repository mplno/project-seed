var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/client/main.js',
  output: {
    path: path.resolve(__dirname, './dist/client'),
    publicPath: '/',
    filename: 'build.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/client/assets/favicon.ico',
      template: './src/client/index.ejs',
      title: 'Project Seed',
      mobile: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      '@': path.resolve(__dirname, 'src/client'),
      'node_modules': path.resolve(__dirname, 'node_modules')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    quiet: false,
    overlay: true,
    proxy: {
      "/api": "http://localhost:5000"
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {

  module.exports.devtool = '#source-map'

  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
