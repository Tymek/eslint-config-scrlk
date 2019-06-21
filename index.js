module.exports = {
  extends: [
    'airbnb',
    'plugin:unicorn/recommended',
  ],
  plugins: [
    'json',
  ],
  rules: {
    semi: ['warn', 'never'],
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
}
