const path = require('path');

const config = require('../../webpack.config');

module.exports = {
  ...config,
  entry: `${__dirname}/src`,
  plugins: [...config.plugins],
  module: {
    ...config.module,

    rules: [...config.module.rules],
  },
  externals: {
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
      root: 'styled',
    },
    '@sbjr-react-utils-components/icons': {
      commonjs: '@sbjr-react-utils-components/icons',
      commonjs2: '@sbjr-react-utils-components/icons',
      amd: '@sbjr-react-utils-components/icons',
      root: 'SbjrRUCIcons',
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
      root: 'SbjrRUCModal',
      commonjs: '@sbjr-react-utils-components/modal',
      amd: '@sbjr-react-utils-components/modal',
    },
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
};
