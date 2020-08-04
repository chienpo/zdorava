import React from 'react';

import { DARK_MODE } from 'constants/theme';
import Home from 'features/home';
import Header from 'core/components/header';
import Footer from 'core/components/footer';

export const HomePageView = () => (
  <>
    <Header theme={DARK_MODE} />
    <Home />
    <Footer theme={DARK_MODE} />
  </>
);
