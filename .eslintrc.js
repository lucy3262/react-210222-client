module.exports = {
  root: true,
  parser: "babel-eslint",
  plugins: [
    "prettier",
    "import",
    "flowtype",
    "jsx-a11y",
    "react",
    "react-hooks",
  ],
  extends: ["react-app", "plugin:prettier/recommended"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    React: true,
    shallow: true,
    render: true,
    mount: true,
  },
  settings: {
    react: {
      version: "16",
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    // https://eslint.org/docs/rules/
    "accessor-pairs": "warn",
    "array-callback-return": "error",
    "arrow-body-style": "warn",
    "block-scoped-var": "warn",
    "consistent-return": "warn",
    "constructor-super": "error",
    curly: "warn",
    "default-case": ["warn", { commentPattern: "^no default$" }],
    "dot-notation": "error",
    eqeqeq: ["error", "smart"],
    "getter-return": "error",
    "for-direction": "error",
    "max-classes-per-file": "warn",
    "new-parens": "warn",
    "no-alert": "warn",
    "no-array-constructor": "warn",
    "no-async-promise-executor": "warn",
    "no-await-in-loop": "warn",
    "no-case-declarations": "warn",
    "no-cond-assign": ["error", "except-parens"],
    "no-console": ["warn", { allow: ["error"] }],
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-control-regex": "warn",
    "no-debugger": "warn",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "warn",
    "no-empty": "error",
    "no-empty-character-class": "warn",
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "warn",
    "no-extra-bind": "warn",
    "no-extra-boolean-cast": "error",
    "no-extra-semi": "warn",
    "no-fallthrough": "warn",
    "no-floating-decimal": "warn",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "warn",
    "no-implied-eval": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "warn",
    "no-irregular-whitespace": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "warn",
    "no-mixed-operators": [
      "warn",
      {
        groups: [
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"],
        ],
        allowSamePrecedence: false,
      },
    ],
    "no-new": "error",
    "no-new-func": "warn",
    "no-new-object": "warn",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-obj-calls": "error",
    "no-octal": "warn",
    "no-octal-escape": "warn",
    "no-redeclare": "error",
    "no-regex-spaces": "warn",
    "no-restricted-properties": [
      "error",
      {
        object: "require",
        property: "ensure",
        message:
          "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting",
      },
      {
        object: "System",
        property: "import",
        message:
          "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting",
      },
    ],
    "no-restricted-syntax": ["warn", "WithStatement"],
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-undef": "error",
    "no-unmodified-loop-condition": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-useless-catch": "warn",
    "no-unexpected-multiline": "warn",
    "no-unreachable": "error",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    "no-unused-vars": [
      "error",
      {
        args: "none",
        ignoreRestSiblings: true,
      },
    ],
    "no-use-before-define": [
      "warn",
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": [
      "error",
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    "no-useless-return": "warn",
    "no-var": "warn",
    "no-with": "error",
    "no-whitespace-before-property": "warn",
    "object-shorthand": "error",
    "prefer-const": "warn",
    "prefer-rest-params": "warn",
    "prefer-template": "warn",
    "require-await": "warn",
    "require-atomic-updates": "error",
    "require-yield": "warn",
    "rest-spread-spacing": ["warn", "never"],
    strict: ["error", "never"],
    "unicode-bom": ["warn", "never"],
    "use-isnan": "error",
    "valid-typeof": "error",
    "vars-on-top": "warn",
    yoda: [
      "error",
      "never",
      {
        exceptRange: true,
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    "import/first": "error",
    "import/no-amd": "error",
    "import/no-webpack-loader-syntax": "error",

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    "jsx-a11y/accessible-emoji": "warn",
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/anchor-has-content": "warn",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        aspects: ["noHref", "invalidHref"],
      },
    ],
    "jsx-a11y/aria-activedescendant-has-tabindex": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/heading-has-content": "warn",
    "jsx-a11y/iframe-has-title": "warn",
    "jsx-a11y/img-redundant-alt": "warn",
    "jsx-a11y/no-access-key": "error",
    "jsx-a11y/no-distracting-elements": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/scope": "error",

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    "react/boolean-prop-naming": "warn",
    "react/button-has-type": "warn",
    "react/default-props-match-prop-types": "warn",
    "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],
    "react/jsx-curly-brace-presence": "warn",
    "react/jsx-key": "warn",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-pascal-case": [
      "warn",
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "warn",
    "react/no-children-prop": "error",
    "react/no-danger-with-children": "warn",
    "react/no-deprecated": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-is-mounted": "error",
    "react/no-string-refs": "warn",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/no-unsafe": "error",
    "react/no-unused-prop-types": "error",
    "react/no-will-update-set-state": "error",
    "react/no-unused-state": "warn",
    "react/no-access-state-in-setstate": "warn",
    "react/react-in-jsx-scope": "error",
    "react/require-default-props": "warn",
    "react/require-render-return": "error",
    "react/self-closing-comp": "warn",
    "react/style-prop-object": "warn",
    "react/void-dom-elements-no-children": "error",

    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};