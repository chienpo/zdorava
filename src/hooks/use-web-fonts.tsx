import { useEffect } from 'react';

interface FontFamily {
  family: string;
  weights: number[];
}

export const useWebFonts = (fontFamilies: FontFamily[]) => {
  const fontFamiliesString = fontFamilies
    .map(({ family, weights }) => `${family}:${weights}&display=swap`)
    .join('&');

  useEffect(() => {
    import(`webfontloader`)
      .then(({ default: defaultCatalog }) => defaultCatalog)
      .then((response) =>
        response.load({
          google: {
            families: [fontFamiliesString],
          },
        })
      );
  }, [fontFamiliesString]);
};
