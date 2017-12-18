module.exports = {
  'env': {
    'browser': true
    , 'commonjs': true
    , 'es6': true
  }
  , 'extends': 'eslint:recommended'
  , 'globals': {
    'process': false
    , 'APP_TITLE': false
  }
  , 'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
    , 'sourceType': 'module'
  }
  , 'rules': {
    'array-callback-return': [
      'error'
    ]
    , 'camelcase': [
      'error'
    ]
    , 'comma-spacing': [
      'error'
      , {
        'before': false
        , 'after': true
      }
    ]
    // I prefer commas at the start of lists; disable to turn off:
    , 'comma-style': [
      'error'
      , 'first'
    ]
    , 'eol-last': [
      'error'
      , 'never'
    ]
    , 'indent': [
      'error'
      , 2
    ]
    , 'jsx-quotes': [
      'error'
      , 'prefer-double'
    ]
    , 'linebreak-style': [
      'error'
      , 'unix'
    ]
    // Enforce a max line-length of 80 chars:
    , 'max-len': [
      'error'
      , { 'code': 80 }
    ]
    , 'no-extra-bind': [
      'error'
    ]
    , 'no-extra-parens': [
      'error'
      , 'all'
      , {
        'conditionalAssign': false
        , 'ignoreJSX': 'all'
        , 'nestedBinaryExpressions': false
        , 'returnAssign': false
      }
    ]
    , 'no-implicit-coercion': [
      'error'
    ]
    , 'no-implicit-globals': [
      'error'
    ]
    , 'no-magic-numbers': [
      'error'
    ]
    , 'no-prototype-builtins': [
      'error'
    ]
    , 'no-template-curly-in-string': [
      'error'
    ]
    , 'object-curly-spacing': [
      'error'
      , 'always'
    ]
    , 'quotes': [
      'error'
      , 'single'
    ]
    , 'semi': [
      'error'
      , 'never'
    ]
  }
}