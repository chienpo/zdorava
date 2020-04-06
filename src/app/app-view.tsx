import React from 'react';
import { RouterProvider } from 'react-router5';
import Scrollbars from 'react-custom-scrollbars';

import Providers from './providers/providers';
import { Layout } from './layout';

// App providers
export const AppView = ({ router }: any) => (
  <RouterProvider router={router}>
    <Providers>
      <Scrollbars
        renderView={() => <Layout />}
        autoHide
        autoHideTimeout={500}
        autoHideDuration={200}
      />
    </Providers>
  </RouterProvider>
);
