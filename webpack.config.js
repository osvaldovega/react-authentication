const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
  PUB: path.resolve(__dirname, 'src/public'),
};


module.exports = {

  entry: path.join(PATHS.JS, 'index.js'),

  output: {
    path: PATHS.DIST,
    filename: '[name].bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  target: 'web',

  devtool: 'eval-source-map',

  devServer: {
    contentBase: PATHS.SRC,
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 8081,
    noInfo: false,
    stats: 'minimal',
    open: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /.(scss|css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: {
          loader: 'json-loader'
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: { minimize: true }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Auth',
      template: path.join(PATHS.PUB, 'index.html'),
      inject: true
    }),

    new webpack.NamedModulesPlugin(),

    new webpack.HotModuleReplacementPlugin(),
  ]
};
