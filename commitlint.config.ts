module.exports = {
  extends: ['@commitlint/config-conventional'],
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  rules: {
    // 'scope-enum': [2, 'always', ['yourscope', 'yourscope']],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'chore',
        'style',
        'refactor',
        'ci',
        'test',
        'revert',
        'perf',
        'vercel',
      ],
    ],
  },
}
