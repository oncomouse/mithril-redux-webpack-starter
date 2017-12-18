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
    , 'indent': [
      'error'
      , 2
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