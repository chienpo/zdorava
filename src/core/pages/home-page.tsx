import React from 'react';

import Home from '~/features/home';
import Header from '~/core/components/header';
import Footer from '~/core/components/footer';

const HomePage = () => (
  <>
    <Header />
    <Home />
    <Footer />
  </>
);

// eslint-disable-next-line import/no-default-export
export default HomePage;
