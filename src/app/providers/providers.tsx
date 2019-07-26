/* eslint-disable import/no-default-export */

import React, { ReactNode } from 'react';
import { useRoute } from 'react-router5';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import { LanguageProvider } from './language-provider';
import { DARK_MODE, LIGHT_MODE } from 'app/constants/theme';

type Props = {
  children: (ReactNode);
};

// App providers
export default ({ children }: Props) => {
  //TODO: Check and suppose update theme-flow (may be create theme-provider in this folder like language-provider and useEffect, which will set theme depends on route with useState )
  const { router } = useRoute();
  const curRouter = router.getState();

  let THEME_MODE: string;
  THEME_MODE = curRouter.name === 'about' ? LIGHT_MODE : DARK_MODE;

  return (
    <ThemeProvider theme={{ mode: THEME_MODE }}>
      <LanguageProvider>
        <Normalize />
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
