import React from 'react';

import { DARK_MODE } from 'constants/theme';
import { Home } from 'app/features/home';
import { Footer } from 'core/components/footer';
import { Header } from 'core/components/header';

export const HomePageView = () => (
  <>
    <Header theme={DARK_MODE} />
    <main>
      <Home />
    </main>
    <Footer theme={DARK_MODE} />
  </>
);
