module.exports = {
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'project': './tsconfig.json',
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2019,
    'sourceType': 'module'
  },
  'extends': [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'ignorePatterns': ['node_modules', 'dist', '*.js'],
  'settings': {
    'disableEslintIgnore': true,
    'react': {
      'pragma': 'React',
      'version': 'detect'
    },
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      },
      'typescript': {}
    }
  },
  'plugins': ['import', '@typescript-eslint', 'react', 'react-hooks'],
  'rules': {
    'max-len': 0,
    'prefer-promise-reject-errors': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/jsx-wrap-multilines': [
      'error',
      { 'declaration': false, 'assignment': false }
    ],
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/self-closing-comp': 0,
    'react/no-unescaped-entities': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 0
  }
}
