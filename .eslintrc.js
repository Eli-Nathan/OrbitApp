module.exports = {
    extends: [
        '@react-native-community',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:react/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        'react',
        'jest',
        '@typescript-eslint',
        'no-only-tests',
        'react-hooks',
    ],
    rules: {
        'prefer-const': 'error',
        'no-empty-pattern': 'off',
        'no-case-declarations': 'off',
        'no-console': [
            'warn',
            {
                allow: ['warn', 'error', 'info', 'debug'],
            },
        ],
        'no-debugger': 'warn',

        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_',
            },
        ],

        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react/no-children-prop': 'warn',
        'react/no-deprecated': 'warn',
        'no-only-tests/no-only-tests': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'no-prototype-builtins': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
    },
    globals: {
        __DEV__: true,
        FDLocalisedString: true,
        FD: true,
    },
    env: {
        node: true,
        browser: true,
        es6: true,
        'jest/globals': true,
        jest: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
