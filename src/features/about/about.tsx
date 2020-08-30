import React from 'react';

import Header from '~/core/components/header';
import Footer from '~/core/components/footer';
import { AboutView } from './about-view';

export const About = () => (
  <>
    <Header />
    <main>
      <AboutView />
    </main>
    <Footer />
  </>
);
