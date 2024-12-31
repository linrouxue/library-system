module.exports = {
    extends: [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        // 禁用多词组件名称规则
        'vue/multi-word-component-names': 'off',
        'no-unused-vars': 'warn'
    }
};