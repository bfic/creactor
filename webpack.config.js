// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'build'),
  JS: path.resolve(__dirname, 'src/js'),
  SRC: path.resolve(__dirname, 'src'), // source folder path
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'app.js'),

  // Set 'mode' option to 'development' or 'production' to enable defaults for this environment. 
  mode: 'development',

  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },

  // Tell webpack to use html plugin
  // index.html is used as a template in which it'll inject bundled app.
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new ExtractTextPlugin({ filename: 'style.bundle.css', allChunks: true}),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      // CSS loader for style assets
      {
        test: /\.scss$/,
        use: [
          {
              loader: "style-loader" // creates style nodes from JS strings
          }, 
          {
              loader: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]" // translates CSS into CommonJS
          }, 
          {
              loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      // Url loader for image assets
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      },
      // Url loader for font assets
      {
          test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
          use: 'url-loader'
      },
    ],
  },
  // Automatically transform files with these extensions
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json', '.png']
  },
};