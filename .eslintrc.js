module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended', //  eslint-plugin-prettier + eslint-config-prettier 동시 적용
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    node: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
