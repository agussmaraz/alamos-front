module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: ['@nuxtjs', 'prettier', 'prettier/vue', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
        'nuxt/no-cjs-in-config': 'off',
        camelcase: 0,
        'function-paren-newline': ['error', 'consistent'],
        'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
        'function-call-argument-newline': ['error', 'consistent'],
        'max-len': 'off',
        'no-unused-expressions': 'off',
        // 'vue/no-v-html': 'off',
        'vue/prop-name-casing': 'off',
        'vue/attribute-hyphenation': 'off',
    },
};
