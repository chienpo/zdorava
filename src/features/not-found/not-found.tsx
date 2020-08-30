import React from 'react';

import { NotFoundView } from './not-found-view';
import Header from '~/core/components/header';
import Footer from '~/core/components/footer';

export const NotFound = () => (
  <>
    <Header />
    <main>
      <NotFoundView />
    </main>
    <Footer />
  </>
);
