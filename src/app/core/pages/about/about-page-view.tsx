import React from 'react';

import { About } from 'app/features/about';
import { Footer } from 'app/core/components/footer';
import { Header } from 'app/core/components/header';

export const AboutPageView = () => (
  <>
    <Header />
    <main>
      <About />
    </main>
    <Footer />
  </>
);
