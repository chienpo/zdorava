import React from 'react';

import { Portfolio } from 'app/features/portfolio';
import { Footer } from 'app/core/components/footer';
import { Header } from 'app/core/components/header';

export const PortfolioPageView = () => (
  <>
    <Header />
    <main>
      <Portfolio />
    </main>
    <Footer />
  </>
);
