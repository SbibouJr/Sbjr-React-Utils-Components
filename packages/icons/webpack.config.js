const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('../../webpack.config');

module.exports = {
  ...config,
  entry: `${__dirname}/src`,
  plugins: [
    ...config.plugins,
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'styles',
            },
          },
        ],
      },
    ],
  },
  externals: {
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
      root: 'styled',
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
  },
  output: {
    libraryTarget: 'umd',
    library: {
      root: 'SbjrRUCIcons',
      commonjs: '@sbjr-react-utils-components/icons',
      amd: '@sbjr-react-utils-components/icons',
    },
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
};
