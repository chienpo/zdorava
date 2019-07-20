import React from 'react';
import { RouterProvider } from 'react-router5';

import Providers from './providers/providers';
import { Layout } from './layout';

// App providers
export const AppView = ({ router }: any) => (
  <>
    <RouterProvider router={router}>
      <Providers>
        <Layout />
      </Providers>
    </RouterProvider>
  </>
);
