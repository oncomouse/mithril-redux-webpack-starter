const INDENT_SPACES = 4

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
            , 'experimentalObjectRestSpread': true
        }
        , 'sourceType': 'module'
    }
    , 'parser': 'babel-eslint'
    , 'plugins': [
        'react'
    ]
    , 'settings': {
        'react': {
            'pragma': 'm'
        }
    }
    , 'rules': {
        'array-callback-return': [
            'error'
        ]
        , 'camelcase': [
            'error'
        ]
        , 'comma-dangle': [
            'error'
            , 'never'
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
            , {
                'exceptions': {
                    'ArrayExpression': false
                    , 'ArrayPattern': false
                    , 'ArrowFunctionExpression': false
                    , 'CallExpression': false
                    , 'FunctionDeclaration': false
                    , 'FunctionExpression': false
                    , 'ImportDeclaration': false
                    , 'ObjectExpression': false
                    , 'ObjectPattern': false
                    , 'VariableDeclaration': false
                }
            }
        ]
        , 'eol-last': [
            'error'
            , 'never'
        ]
        , 'generator-star-spacing': [
            'error'
            , 'after'
        ]
        , 'indent': [
            'error'
            , INDENT_SPACES
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
            , {
                'code': 80
                , 'ignoreComments': true
                , 'ignoreTrailingComments': true
                , 'ignoreUrls': true
            }
        ]
        , 'no-array-constructor': [
            'error'
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
            , {
                'ignore': [0, 1]
                , 'ignoreArrayIndexes': true
            }
        ]
        , 'no-prototype-builtins': [
            'error'
        ]
        , 'no-template-curly-in-string': [
            'error'
        ]
        , 'no-trailing-spaces': [
            'error'
        ]
        , 'object-curly-spacing': [
            'error'
            , 'always'
        ]
        , 'prefer-const': [
            'error'
        ]
        , 'prefer-spread': [
            'error'
        ]
        , 'quotes': [
            'error'
            , 'single'
        ]
        , 'react/jsx-indent': [
            'error'
            , INDENT_SPACES
        ]
        , 'react/jsx-max-props-per-line': [
            'error'
            , {
                'maximum': 1
                , 'when': 'always'
            }
        ]
        , 'react/jsx-one-expression-per-line': [
            'error'
        ]
        , 'react/jsx-pascal-case': [
            'error'
        ]
        , 'react/jsx-tag-spacing': [
            'error'
        ]
        , 'react/jsx-uses-react': [
            'error'
        ]
        , 'react/jsx-uses-vars': [
            'error'
        ]
        , 'rest-spread-spacing': [
            'error'
            , 'never'
        ]
        , 'semi': [
            'error'
            , 'never'
        ]
    }
}