/* eslint-disable import/no-default-export */

import React, { ReactNode } from 'react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { LanguageProvider } from './language-provider';

type Props = {
  children: (ReactNode);
};

// App providers
export default ({ children }: Props) => (
  <ThemeProvider theme={{ mode: 'dark' }}>
    <LanguageProvider>
      <Normalize />
      {children}
    </LanguageProvider>
  </ThemeProvider>
);
