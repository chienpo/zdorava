import React from 'react';

import { Home } from 'app/features/home';
import { Footer } from 'app/core/components/footer';
import { Header } from 'app/core/components/header';

export const HomePageView = () => (
  <>
    <Header />
    <main>
      <Home />
    </main>
    <Footer />
  </>
);
