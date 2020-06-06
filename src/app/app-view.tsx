import React from 'react';
import { RouterProvider } from 'react-router5';

import Providers from './providers/providers';
import { Layout } from './core/components/layout';
import { Content } from './styled';

export const AppView = ({ router }: any) => (
  <RouterProvider router={router}>
    <Providers>
      <Content>
        <Layout />
      </Content>
    </Providers>
  </RouterProvider>
);
