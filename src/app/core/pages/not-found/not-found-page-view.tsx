import React from 'react';

import { NotFound } from 'app/features/not-found';
import { Footer } from 'app/core/components/footer';
import { Header } from 'app/core/components/header';

export const NotFoundPageView = () => (
  <>
    <Header />
    <main>
      <NotFound />
    </main>
    <Footer />
  </>
);
