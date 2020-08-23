import React from 'react';

import { About } from '~/features/about';
import Header from '~/core/components/header';
import Footer from '~/core/components/footer';

export const AboutPageView = () => (
  <>
    <Header />
    <main>
      <About />
    </main>
    <Footer />
  </>
);
