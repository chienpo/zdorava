import React from 'react';

import { DARK_MODE } from 'constants/theme';
import { Home } from 'app/features/home';
import { Footer } from 'app/core/components/footer';
import { Header } from 'app/core/components/header';

export const HomePageView = () => (
  <>
    <Header theme={DARK_MODE} />
    <main>
      <Home />
    </main>
    <Footer theme={DARK_MODE} />
  </>
);
