export const loadWebFonts = () =>
  import(`webfontloader`).then(({ default: defaultCatalog }) => defaultCatalog);
