import React from 'react';

import { NotFound } from 'features/not-found';
import Header from 'core/components/header';
import Footer from 'core/components/footer';

export const NotFoundPageView = () => (
  <>
    <Header />
    <main>
      <NotFound />
    </main>
    <Footer />
  </>
);
