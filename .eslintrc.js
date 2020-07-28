module.exports = {
  env: {
    es6: true,
    jest: true
  },
  extends: ['prettier', 'standard', 'plugin:sonarjs/recommended', 'eslint-config-prettier'],
  plugins: ['prettier', 'sonarjs'],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module'
  },
  rules: { 'prettier/prettier': 'error' }
}
