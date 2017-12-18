module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
	"globals": {
		"process": false
		, "APP_TITLE": false
	}
    , "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
		"comma-style": [
			"error"
			, "first"
		]
        , "indent": [
            "error"
            , "tab"
        ]
		, "max-len": [
			"error"
			, { "code": 80 }
		]
        , "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};