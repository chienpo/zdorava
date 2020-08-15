import React, { Suspense } from 'react';
import { Router } from 'router5';
import { RouterProvider } from 'react-router5';

import Providers from 'providers/providers';
import { PageLoader } from 'ui/page-loader/page-loader';
import { PageSwitch } from './page-switch';
import { AppBox } from './styled';

interface Props {
  router: Router;
}

const AppView: React.FC<Props> = ({ router }) => (
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
