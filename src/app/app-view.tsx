import React, { Suspense } from 'react';
import { Router } from 'router5';

import Providers from 'providers/providers';
import { PageLoader } from 'ui/page-loader/page-loader';
import { PageSwitch } from './page-switch';
import { AppBox } from './styled';

interface Props {
  router: Router;
}

export const AppView: React.FC<Props> = ({ router }) => (
  <Suspense fallback={<PageLoader showSpinner={false} />}>
    <Providers router={router}>
      <AppBox>
        <PageSwitch />
      </AppBox>
    </Providers>
  </Suspense>
);
