import React, { FC, useEffect } from 'react';
import { Router } from 'router5';

import { loadWebFonts } from '~/utils/web-font-loader';

import Providers from '~/providers/providers';
import { Root } from './root';
import { GlobalStyle } from './global-style';

interface Props {
  router: Router;
}

export const AppFrame: FC<Props> = ({ router }) => {
  useEffect(() => {
    loadWebFonts().then((response) =>
      response.load({
        google: {
          families: ['Montserrat:100,400,700&display=swap'],
        },
      })
    );
  }, []);

  return (
    <>
      <GlobalStyle />
      <Providers router={router}>
        <Root />
      </Providers>
    </>
  );
};
