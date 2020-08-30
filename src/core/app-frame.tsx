import React, { FC } from 'react';
import { Router } from 'router5';

import Providers from '~/providers/providers';
import { Root } from './root';

import { GlobalStyle } from './global-style';

interface Props {
  router: Router;
}

export const AppFrame: FC<Props> = ({ router }) => (
  <>
    <GlobalStyle />
    <Providers router={router}>
      <Root />
    </Providers>
  </>
);
