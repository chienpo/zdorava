module.exports = {
  locales: ['en', 'ru', 'pl'],
  catalogs: [
    {
      path: 'src/locales/{locale}/messages',
      include: ['src'],
      exclude: ['**/node_modules/**'],
    },
  ],
  format: 'po',
  sourceLocale: 'en',
};
