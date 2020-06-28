import React from 'react';

import { NotFound } from 'features/not-found';
import { Footer } from 'core/components/footer';
import { Header } from 'core/components/header';

export const NotFoundPageView = () => (
  <>
    <Header />
    <main>
      <NotFound />
    </main>
    <Footer />
  </>
);
