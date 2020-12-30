// eslint-disable-next-line no-undef
module.exports = {
  'env': {
    'node': true,
    'commonjs': true,
    'browser': true,
    'es6': true,
    'jest': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  'globals': {
    'JSX': 'readonly',
  },
  'rules': {
    'react-hooks/exhaustive-deps': 'error',
    'no-var': 'error',
    'brace-style': 'error',
    'prefer-template': 'error',
    'space-before-blocks': 'error',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'require-jsdoc': 'off',
    'max-len': [
      'warn',
      {
        'tabWidth': 2,
        'ignoreComments': false,
        'ignoreTrailingComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true,
        'code': 100,
      },
    ],
  },
};
