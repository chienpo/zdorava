import React, { FC } from 'react';
import { Router } from 'router5';

import { useWebFonts } from '~/hooks/use-web-fonts';

import Providers from '~/providers/providers';
import { Root } from './root';
import { GlobalStyle } from './global-style';
import { FontFamilies, FontFamilyWeights } from '~/constants/fonts';

interface Props {
  router: Router;
}

export const AppFrame: FC<Props> = ({ router }) => {
  useWebFonts([
    {
      family: FontFamilies.Montserrat,
      weights: FontFamilyWeights[FontFamilies.Montserrat],
    },
  ]);

  return (
    <>
      <GlobalStyle />
      <Providers router={router}>
        <Root />
      </Providers>
    </>
  );
};
