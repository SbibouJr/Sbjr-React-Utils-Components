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
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'styles',
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  },
};
