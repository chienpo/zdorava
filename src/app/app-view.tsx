import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router5';

import Providers from 'providers/providers';
import { PageLoader } from 'ui/page-loader/page-loader';
import { PageSwitch } from './page-switch';
import { AppBox } from './styled';

const AppView = ({ router }: any) => (
  <Suspense fallback={<PageLoader showSpinner={false} />}>
    <RouterProvider router={router}>
      <Providers>
        <AppBox>
          <PageSwitch />
        </AppBox>
      </Providers>
    </RouterProvider>
  </Suspense>
);

// eslint-disable-next-line import/no-default-export
export default AppView;
