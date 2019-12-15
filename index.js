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
    'arrow-parens': ['warn', 'as-needed'],
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
}
