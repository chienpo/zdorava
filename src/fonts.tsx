export const getFonts = () => {
  const importCatalog = async () =>
    import(`webfontloader`).then(
      ({ default: defaultCatalog }) => defaultCatalog
    );

  return importCatalog().then(res => res);
};
