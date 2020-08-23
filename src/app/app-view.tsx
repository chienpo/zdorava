import React from 'react';
import { Router } from 'router5';

import Providers from '~/providers/providers';
import { PageSwitch } from './page-switch';
import { AppBox } from './styled';

interface Props {
  router: Router;
}

export const AppView: React.FC<Props> = ({ router }) => (
  <Providers router={router}>
    <AppBox>
      <PageSwitch />
    </AppBox>
  </Providers>
);
