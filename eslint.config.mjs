// @ts-check
import stylistic from '@stylistic/eslint-plugin-js'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  plugins: {
    '@stylistic/js': stylistic,
  },
  rules: {
    'indent': ['error', 2, { SwitchCase: 1 }],
    'comma-dangle': ['error', 'always-multiline'],

    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],

    'vue/html-indent': ['error', 2, {}],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: 1,
    }],
    'vue/no-v-html': ['off'],

    '@typescript-eslint/no-explicit-any': ['off'],

    '@stylistic/indent': ['error', 2],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    '@stylistic/space-before-function-paren': ['error', 'never'],
    '@stylistic/js/keyword-spacing': ['error', { before: true, after: true }],
    '@stylistic/js/block-spacing': ['error', 'always'],
    '@stylistic/js/array-bracket-spacing': ['error', 'never'],
    '@stylistic/js/comma-spacing': ['error', { before: false, after: true }],
    '@stylistic/js/arrow-spacing': ['error', { before: true, after: true }],
    '@stylistic/js/computed-property-spacing': ['error', 'never'],
    '@stylistic/js/function-call-spacing': ['error', 'never'],
    '@stylistic/js/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
    '@stylistic/js/object-curly-spacing': ['error', 'always'],
    '@stylistic/js/rest-spread-spacing': ['error', 'never'],
    '@stylistic/js/semi-spacing': ['error'],
    '@stylistic/js/template-curly-spacing': ['error', 'never'],
    '@stylistic/js/no-mixed-spaces-and-tabs': ['error'],
    '@stylistic/js/no-multi-spaces': ['error'],
    '@stylistic/js/no-trailing-spaces': ['error'],
    '@stylistic/js/no-whitespace-before-property': ['error'],
    '@stylistic/js/space-before-blocks': ['error'],
    '@stylistic/js/space-in-parens': ['error', 'never'],
    '@stylistic/js/space-infix-ops': ['error'],
    '@stylistic/js/space-unary-ops': ['error'],
    '@stylistic/js/spaced-comment': ['error', 'always'],
  },
})
