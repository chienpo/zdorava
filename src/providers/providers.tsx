import React, { ReactElement } from 'react';
import { useRoute } from 'react-router5';

import { TitleProvider } from './title-provider';
import { LanguageProvider } from './language-provider';
import { ThemeProvider } from './theme-provider';

type Props = {
  children: ReactElement;
};

// eslint-disable-next-line import/no-default-export
export default ({ children }: Props) => {
  const { router } = useRoute();
  const curRouter = router.getState();

  return (
    <ThemeProvider currentRouterStateName={curRouter.name}>
      <LanguageProvider>
        <TitleProvider curRouter={curRouter}>{children}</TitleProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};
