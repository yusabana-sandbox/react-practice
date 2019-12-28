module.exports = {
  plugins: ['react'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
    'no-cond-assign': ['warn', 'always'],
    'no-console': 'off',
    'no-constant-condition': 'warn',
    'no-control-regex': 'warn',
    'no-debugger': 'warn',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'warn',
    'no-duplicate-case': 'warn',
    'no-empty': 'warn',
    'no-empty-character-class': 'warn',
    'no-ex-assign': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-extra-parens': ['warn', 'functions'],
    'no-extra-semi': 'warn',
    'no-func-assign': 'warn',
    'no-inner-declarations': ['warn', 'both'],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'warn',
    'no-unsafe-negation': 'error',
    'no-obj-calls': 'error',
    'no-regex-spaces': 'warn',
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'off',
    'no-unexpected-multiline': 'warn',
    'no-unreachable': 'warn',
    'no-unsafe-finally': 'warn',
    'use-isnan': 'warn',
    'valid-jsdoc': 'off',
    'valid-typeof': 'warn',
    'accessor-pairs': 'off',
    'array-callback-return': 'warn',
    'block-scoped-var': 'warn',
    'class-methods-use-this': 'off',
    'complexity': 'off',
    'consistent-return': 'off',
    'curly': ['warn', 'multi-line'],
    'default-case': 'off',
    'dot-location': ['warn', 'property'],
    'dot-notation': 'warn',
    'eqeqeq': ['warn', 'allow-null'],
    'guard-for-in': 'off',
    'no-alert': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'warn',
    'no-div-regex': 'off',
    'no-else-return': 'off',
    'no-empty-function': 'off',
    'no-empty-pattern': 'warn',
    'no-eq-null': 'off',
    'no-eval': 'off',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-fallthrough': 'warn',
    'no-floating-decimal': 'warn',
    'no-global-assign': 'warn',
    'no-implicit-coercion': ['warn', { number: false, string: false, allow: ['!!'] }],
    'no-implicit-globals': 'warn',
    'no-implied-eval': 'warn',
    'no-invalid-this': 'warn',
    'no-iterator': 'warn',
    'no-labels': 'warn',
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-magic-numbers': 'off',
    'no-multi-spaces': ['warn', { exceptions: { VariableDeclarator: true } }],
    'no-multi-str': 'warn',
    'no-new': 'warn',
    'no-new-func': 'warn',
    'no-new-wrappers': 'warn',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-proto': 'warn',
    'no-redeclare': 'warn',
    'no-restricted-properties': 'off',
    'no-return-assign': ['warn', 'always'],
    'no-return-await': 'warn',
    'require-await': 'warn',
    'no-script-url': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-throw-literal': 'warn',
    'no-unmodified-loop-condition': 'warn',
    'no-unused-expressions': ['warn', { allowShortCircuit: true, allowTernary: true }],
    'no-unused-labels': 'warn',
    'no-useless-call': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-return': 'warn',
    'no-void': 'warn',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'radix': 'warn',
    'vars-on-top': 'off',
    'wrap-iife': ['warn', 'inside'],
    'yoda': ['warn', 'never', { exceptRange: true }],
    'strict': 'off',
    'init-declarations': 'off',
    'no-catch-shadow': 'off',
    'no-shadow-restricted-names': 'warn',
    'no-undef': 'warn',
    'no-undef-init': 'warn',
    'no-undefined': 'off',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'warn',
    'callback-return': 'off',
    'global-require': 'off',
    'handle-callback-err': 'off',
    'no-mixed-requires': 'warn',
    'no-new-require': 'off',
    'no-path-concat': 'warn',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'off',
    'array-bracket-spacing': 'warn',
    'block-spacing': 'warn',
    'brace-style': ['warn', 'stroustrup', { allowSingleLine: true }],
    'camelcase': 'off',
    'capitalized-comments': 'off',
    'comma-spacing': ['warn', { before: false, after: true }],
    'comma-style': 'warn',
    'computed-property-spacing': 'warn',
    'consistent-this': 'warn',
    'eol-last': 'warn',
    'func-names': 'off',
    'func-style': 'off',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'indent': ['warn', 2, { SwitchCase: 1 }],
    'jsx-quotes': ['warn', 'prefer-double'],
    'key-spacing': ['warn', { beforeColon: false, afterColon: true, mode: 'minimum' }],
    'keyword-spacing': 'warn',
    'line-comment-position': 'off',
    'linebreak-style': ['warn', 'unix'],
    'lines-around-comment': 'off',
    'lines-around-directive': 'off',
    'max-depth': 'off',
    'max-len': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'multiline-ternary': 'off',
    'new-cap': 'warn',
    'new-parens': 'warn',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-array-constructor': 'off',
    'no-bitwise': 'warn',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'warn',
    'no-new-object': 'warn',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-tabs': 'off',
    'func-call-spacing': 'warn',
    'func-name-matching': 'off',
    'no-ternary': 'off',
    'no-trailing-spaces': 'warn',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'warn',
    'no-whitespace-before-property': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': ['warn', 'never'],
    'quote-props': 'off',
    'quotes': ['warn', 'single', 'avoid-escape'],
    'require-jsdoc': 'off',
    'semi': ['warn', 'always'],
    'sort-keys': 'off',
    'semi-spacing': 'warn',
    'sort-imports': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'warn',
    'space-before-function-paren': ['warn', 'never'],
    'space-in-parens': 'warn',
    'space-infix-ops': 'warn',
    'space-unary-ops': 'warn',
    'spaced-comment': 'off',
    'wrap-regex': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'arrow-spacing': 'warn',
    'constructor-super': 'warn',
    'generator-star-spacing': ['warn', { before: false, after: true }],
    'no-class-assign': 'warn',
    'no-confusing-arrow': 'warn',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'warn',
    'no-new-symbol': 'error',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-constructor': 'warn',
    'no-var': 'warn',
    'object-shorthand': ['warn', 'methods'],
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'prefer-numeric-literals': 'off',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'require-yield': 'warn',
    'symbol-description': 'off',
    'template-curly-spacing': 'warn',
    'yield-star-spacing': 'warn',

    'react/display-name': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-danger': 'off',
    'react/no-deprecated': 'warn',
    'react/no-did-mount-set-state': ['warn'],
    'react/no-did-update-set-state': ['warn'],
    'react/no-direct-mutation-state': 'warn',
    'react/no-is-mounted': 'warn',
    'react/no-multi-comp': 'off',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'off',
    'react/no-unknown-property': 'warn',
    'react/prefer-es6-class': 'warn',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'warn',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': 'off',
    'react/sort-prop-types': 'off',
    'react/wrap-multilines': 'off',
    'react/jsx-boolean-value': ['warn', 'always'],
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-curly-spacing': 'warn',
    'react/jsx-equals-spacing': 'warn',
    'react/jsx-handler-names': 'off',
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-indent': ['warn', 2],
    'react/jsx-key': 'warn',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-duplicate-props': 'warn',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-undef': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-sort-props': 'off',
    'react/jsx-space-before-closing': 'warn',
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
  },
};