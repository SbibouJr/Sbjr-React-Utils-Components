const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = require('../../webpack.config');

const pack = require('./package.json');

module.exports = {
  ...config,
  entry: `${__dirname}/src`,
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'none',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minify: true,
      },
      inject: true,
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  },
};
