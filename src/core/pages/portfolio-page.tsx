import React from 'react';

import { Portfolio } from '~/features/portfolio';
import Header from '~/core/components/header';
import Footer from '~/core/components/footer';

const PortfolioPage = () => (
  <>
    <Header />
    <main>
      <Portfolio />
    </main>
    <Footer />
  </>
);

// eslint-disable-next-line import/no-default-export
export default PortfolioPage;
