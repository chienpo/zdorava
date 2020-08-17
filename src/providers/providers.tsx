import React, { ReactElement } from 'react';
import { Router } from 'router5';
import { RouterProvider } from 'react-router5';

import { TitleProvider } from './title-provider';
import { LanguageProvider } from './language-provider';
import { ThemeProvider } from './theme-provider';

type Props = {
  children: ReactElement;
  router: Router;
};

// eslint-disable-next-line import/no-default-export
export default ({ children, router }: Props) => {
  const curRouter = router.getState();

  return (
    <RouterProvider router={router}>
      <ThemeProvider currentRouterStateName={curRouter.name}>
        <LanguageProvider>
          <TitleProvider curRouter={curRouter}>{children}</TitleProvider>
        </LanguageProvider>
      </ThemeProvider>
    </RouterProvider>
  );
};
