import React from 'react';
import { RouterProvider } from 'react-router5';

import Providers from './providers/providers';
import { PageSwitch } from './page-switch';
import { AppBox } from './styled';

export const AppView = ({ router }: any) => (
  <RouterProvider router={router}>
    <Providers>
      <AppBox>
        <PageSwitch />
      </AppBox>
    </Providers>
  </RouterProvider>
);
