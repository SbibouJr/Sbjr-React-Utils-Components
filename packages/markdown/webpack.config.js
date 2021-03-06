const path = require('path');

const config = require('../../webpack.config');

module.exports = {
  ...config,
  entry: `${__dirname}/src`,
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
      root: 'SbjrRUCMarkdown',
      commonjs: '@sbjr-react-utils-components/markdown',
      amd: '@sbjr-react-utils-components/markdown',
    },
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
};
