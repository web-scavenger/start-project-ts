module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser":  '@typescript-eslint/parser',
    "extends": [
        'plugin:@typescript-eslint/recommended'
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": false,
          "modules": true,
          "experimentalObjectRestSpread": true
        }
      },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "max-len": [
            "error",
            {
              "code": 120,
              "tabWidth": 2
            }
        ]
    }
};