export const loadWebFonts = () => {
  const importCatalog = async () =>
    import(`webfontloader`).then(
      ({ default: defaultCatalog }) => defaultCatalog
    );

  return importCatalog().then(res => res);
};
