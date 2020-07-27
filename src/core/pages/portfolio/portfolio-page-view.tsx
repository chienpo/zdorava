import React from 'react';

import { Portfolio } from 'features/portfolio';
import { Footer } from 'core/components/footer';
import { Header } from 'core/components/header';

export const PortfolioPageView = () => (
  <>
    <Header withShadow />
    <main>
      <Portfolio />
    </main>
    <Footer />
  </>
);
