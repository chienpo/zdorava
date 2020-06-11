import React from 'react';

import { About } from 'features/about';
import { Footer } from 'core/components/footer';
import { Header } from 'core/components/header';

export const AboutPageView = () => (
  <>
    <Header />
    <main>
      <About />
    </main>
    <Footer />
  </>
);