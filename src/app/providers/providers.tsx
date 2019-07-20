/* eslint-disable import/no-default-export */

import React, { ReactNode } from 'react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { LanguageProvider } from './language-provider';

type Props = {
  children: (ReactNode);
};

const LANGUAGE = 'en';
const THEME_MODE = 'dark';

// App providers
export default ({ children }: Props) => (
  <ThemeProvider theme={{ mode: THEME_MODE }}>
    <LanguageProvider language={LANGUAGE}>
      <Normalize />
      {children}
    </LanguageProvider>
  </ThemeProvider>
);
