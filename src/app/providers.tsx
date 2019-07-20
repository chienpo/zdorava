/* eslint-disable import/no-default-export */

import React, { ReactNode } from 'react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

type Props = {
  children: ReactNode;
};

// App providers
export default ({ children }: Props) => (
  <ThemeProvider theme={{ mode: 'dark' }}>
    <>
      <Normalize />
      {children}
    </>
  </ThemeProvider>
);
