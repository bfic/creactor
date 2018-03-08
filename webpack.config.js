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
    new ExtractTextPlugin('style.bundle.css'),
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
      // CSS loader to CSS files
      // Files will get handled by css loader and then passed to the extract text plugin
      // which will write it to the file we defined above
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      // File loader for image assets
      // We'll add only image extensions, but you can things like svgs, fonts and videos
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  // Automatically transform files with these extensions
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json']
  },
};