import React, { ReactElement } from 'react';
import { useRoute } from 'react-router5';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import { ROUTE_THEME_MODES } from 'constants/theme';
import { TitleProvider } from './title-provider';
import { LanguageProvider } from './language-provider';

type Props = {
  children: ReactElement;
};

// eslint-disable-next-line import/no-default-export
export default ({ children }: Props) => {
  const { router } = useRoute();
  const curRouter = router.getState();

  return (
    <ThemeProvider theme={{ mode: ROUTE_THEME_MODES[curRouter.name] }}>
      <LanguageProvider>
        <Normalize />
        <TitleProvider curRouter={curRouter}>{children}</TitleProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};
