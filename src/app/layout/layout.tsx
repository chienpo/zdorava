import React from 'react';
import { Navigation } from './components/navigation';
import { Main } from './main';

import { AppContent } from './styled';

export const Layout = () => (
  <AppContent>
    <Navigation theme="dark" />
    <main>
      <Main />
    </main>
  </AppContent>
);
