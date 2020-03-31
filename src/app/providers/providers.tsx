/* eslint-disable import/no-default-export */

import React, { ReactNode } from 'react';
import { useRoute } from 'react-router5';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import { DARK_MODE, LIGHT_MODE } from 'app/constants/theme';
import { PAGE_ABOUT } from 'app/constants/page-titles';
import { TitleProvider } from './title-provider';
import { LanguageProvider } from './language-provider';

type Props = {
  children: (ReactNode);
};

// App providers
export default ({ children }: Props) => {
  //TODO: Check and suppose update theme-flow (may be create theme-provider in this folder like language-provider and useEffect, which will set theme depends on route with useState )
  const { router } = useRoute();
  const curRouter = router.getState();

  const THEME_MODE: string = curRouter.name === PAGE_ABOUT
    ? LIGHT_MODE
    : DARK_MODE;

  return (
    <ThemeProvider theme={{ mode: THEME_MODE }}>
      <LanguageProvider>
        <Normalize />
        <TitleProvider routeName={curRouter.name}>
          {children}
        </TitleProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
