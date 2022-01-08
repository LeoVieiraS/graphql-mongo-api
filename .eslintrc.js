module.exports = {
    'env': {
      'node': true,
      'commonjs': true,
      'es2021': true
    },
    'parser': '@typescript-eslint/parser',
    'plugins': [
      '@typescript-eslint',
    ],
    'extends': [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    'parserOptions': {
      'ecmaVersion': 12
    },
    'rules': {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off',
      'indent': [
        'error',
        2
      ],
      'linebreak-style': [
        'error',
        'unix'
      ],
      'quotes': [
        'error',
        'single'
      ],
      'semi': [
        'error',
        'never'
      ]
    },
    'overrides': [
      {
        'files': [
          '**/*.spec.js',
          '**/*.js'
        ],
        'env': {
          'jest': true
        }
      }
    ]
  }
  