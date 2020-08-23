import React from 'react';

import { Portfolio } from '~/features/portfolio';
import Header from '~/core/components/header';
import Footer from '~/core/components/footer';

export const PortfolioPageView = () => (
  <>
    <Header />
    <main>
      <Portfolio />
    </main>
    <Footer />
  </>
);
