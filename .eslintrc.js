module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "babel"
    ],
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "rules": {
        "accessor-pairs": "error",
        "array-bracket-newline": ["warn", {"multiline": true}],
        "array-bracket-spacing": ["error", "never"],
        "array-callback-return": "error",
        "arrow-body-style": "off",
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": "error",
        "block-scoped-var": "warn",
        "block-spacing": ["error", "never"],
        // "brace-style": ["error", "stroustrup"],
        "callback-return": "off",
        "camelcase": "error",
        "capitalized-comments": "off",
        "class-methods-use-this": "off",
        "comma-dangle": "warn",
        "comma-spacing": ["error", {"before": false, "after": true}],
        "comma-style": ["error", "last"],
        // "complexity": ["warn", 10],
        "computed-property-spacing": ["error", "never"],
        // "consistent-return": ["error", {"treatUndefinedAsUnspecified": true}],
        "consistent-this": "off",
        "constructor-super": "error",
        "curly": ["error", "all"],
        "default-case": "off",
        "dot-location": ["error", "property"],
        // "dot-notation": ["error", {"allowKeywords": false}],
        "eol-last": ["error", "always"],
        "eqeqeq": ["error", "always", {"null": "ignore"}],
        "for-direction": "off",
        "func-call-spacing": ["error", "never"],
        "func-name-matching": "off",
        // "func-names": ["warn", "always"],
        "func-style": "off",
        "generator-star-spacing": ["error", {"before": false, "after": true}],
        "global-require": "warn",
        // "guard-for-in": "warn",
        "handle-callback-err": "off",
        "id-blacklist": "off",
        "id-length": "off",
        "id-match": "off",
        "indent": ["error", 4, {"SwitchCase": 1}],
        "indent-legacy": "off",
        "init-declarations": "warn",
        "jsx-quotes": ["error", "prefer-double"],
        "key-spacing": ["error", {"beforeColon": false, "afterColon": true}],
        "keyword-spacing": "error",
        "line-comment-position": "off",
        "linebreak-style": ["error", "unix"],
        "lines-around-comment": "off",
        "max-depth": ["warn", 3],
        "max-len": ["error", 120, 4, {"ignoreUrls": true}],
        "max-lines": ["warn", 800],
        "max-nested-callbacks": "off",
        "max-params": "off",
        // "max-statements": ["warn", 30, {"ignoreTopLevelFunctions": true}],
        "max-statements-per-line": "error",
        "multiline-ternary": "off",
        "new-cap": "error",
        "new-parens": "warn",
        "newline-per-chained-call": "off",
        "no-alert": "warn",
        "no-array-constructor": "error",
        "no-await-in-loop": "off",
        "no-bitwise": "off",
        "no-buffer-constructor": "warn",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-catch-shadow": "off",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-confusing-arrow": ["error", {"allowParens": true}],
        // "no-console": "error",
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-continue": "off",
        "no-control-regex": "error",
        // "no-debugger": "error",
        "no-delete-var": "error",
        "no-div-regex": "off",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        // "no-duplicate-imports": "warn",
        "no-else-return": "off",
        "no-empty": "error",
        "no-empty-character-class": "error",
        // "no-empty-function": "error",
        "no-empty-pattern": "error",
        "no-eq-null": "off",
        "no-eval": "error",
        "no-ex-assign": "error",
        // "no-extend-native": "warn",
        "no-extra-bind": "warn",
        "no-extra-boolean-cast": "error",
        "no-extra-label": "error",
        "no-extra-parens": ["error", "functions"],
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-func-assign": "warn",
        "no-global-assign": "error",
        "no-implicit-coercion": "off",
        "no-implicit-globals": "off",
        "no-implied-eval": "error",
        "no-inline-comments": "off",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "error",
        "no-iterator": "off",
        "no-label-var": "off",
        "no-labels": "off",
        "no-lone-blocks": "off",
        "no-lonely-if": "error",
        "no-loop-func": "warn",
        "no-magic-numbers": "off",
        "no-mixed-operators": "off",
        "no-mixed-requires": "off",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": "warn",
        "no-multi-spaces": ["error", {"exceptions": {"Property": false}}],
        "no-multi-str": "warn",
        "no-multiple-empty-lines": "warn",
        // "no-negated-condition": "warn",
        "no-negated-in-lhs": "error",
        "no-nested-ternary": "off",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        // "no-param-reassign": ["warn", {"props": true}],
        "no-path-concat": "off",
        "no-plusplus": "off",
        "no-process-env": "off",
        "no-process-exit": "off",
        "no-proto": "error",
        "no-prototype-builtins": "off",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-restricted-globals": "off",
        "no-restricted-imports": "off",
        "no-restricted-modules": "off",
        "no-restricted-properties": "off",
        "no-restricted-syntax": "off",
        "no-return-assign": ["error", "except-parens"],
        "no-return-await": "error",
        "no-script-url": "warn",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": "off",
        "no-shadow-restricted-names": "off",
        "no-spaced-func": "error",
        "no-sparse-arrays": "error",
        "no-sync": "off",
        "no-tabs": "warn",
        "no-template-curly-in-string": "off",
        "no-ternary": "off",
        "no-this-before-super": "error",
        "no-throw-literal": "warn",
        "no-trailing-spaces": "error",
        // "no-undef": "warn",
        "no-undef-init": "warn",
        "no-undefined": "off",
        // "no-underscore-dangle": "warn",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "warn",
        "no-unneeded-ternary": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        // "no-unused-expressions": ["warn", {"allowShortCircuit": true}],
        "no-unused-labels": "error",
        // "no-unused-vars": "warn",
        "no-use-before-define": ["warn", {"variables": false, "classes": false, "functions": true}],
        "no-useless-call": "warn",
        "no-useless-computed-key": "error",
        "no-useless-concat": "warn",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": "off",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "nonblock-statement-body-position": "off",
        "object-curly-newline": ["warn", {"consistent": true, "multiline": true}],
        "object-curly-spacing": "off",
        "object-property-newline": "off",
        "object-shorthand": ["off", "consistent-as-needed"],
        "one-var": ["error", "never"],
        "one-var-declaration-per-line": "error",
        "operator-assignment": "off",
        "operator-linebreak": ["error", "before"],
        "padded-blocks": "off",
        "padding-line-between-statements": "off",
        // "prefer-arrow-callback": "warn",
        "no-duplicate-imports": "warn",
        "prefer-const": "warn",
        "prefer-destructuring": "off",
        "prefer-numeric-literals": "error",
        "prefer-promise-reject-errors": "warn",
        "prefer-reflect": "off",
        "prefer-rest-params": "error",
        "prefer-spread": "warn",
        "prefer-template": "off",
        "quote-props": "off",
        "quotes": ["error", "single"],
        "radix": "error",
        "require-await": "warn",
        "require-jsdoc": "off",
        "require-yield": "error",
        "rest-spread-spacing": ["error", "never"],
        "semi": ["error", "always"],
        "semi-spacing": "error",
        "semi-style": ["error", "last"],
        "sort-imports": "off",
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", {"anonymous": "always", "named": "never"}],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": "warn",
        "spaced-comment": ["error", "always"],
        "strict": "off",
        "switch-colon-spacing": ["error", {"before": false, "after": true}],
        "symbol-description": "warn",
        "template-curly-spacing": ["error", "never"],
        "template-tag-spacing": ["error", "never"],
        "unicode-bom": "warn",
        "use-isnan": "error",
        "valid-jsdoc": "off",
        "valid-typeof": "error",
        "vars-on-top": "off",
        "wrap-iife": ["error", "any"],
        "wrap-regex": "off",
        "yield-star-spacing": "off",
        "yoda": "warn",

        "babel/object-curly-spacing": ["error", "never"],

        
    }
};