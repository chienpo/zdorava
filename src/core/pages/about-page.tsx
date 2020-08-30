import React from 'react';

import { About } from '~/features/about';
import Header from '~/core/components/header';
import Footer from '~/core/components/footer';

const AboutPage = () => (
  <>
    <Header />
    <main>
      <About />
    </main>
    <Footer />
  </>
);

// eslint-disable-next-line import/no-default-export
export default AboutPage;
