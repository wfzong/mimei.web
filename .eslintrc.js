module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  // extends: ['plugin:vue/recommended', 'standard'],
  extends: ['standard'],
  // required to lint *.vue files
  plugins: ['vue', 'html', 'prettier'],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 函数名后不接 空格 不提示错误
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'ignore',
        named: 'ignore',
        asyncArrow: 'ignore'
      }
    ]
  }
}
