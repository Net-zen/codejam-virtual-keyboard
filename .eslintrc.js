module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "no-underscore-dangle": 'off',
        "no-param-reassign": 'off',
        "max-len": 'off'
    },
    "extends": "airbnb-base/legacy"
};