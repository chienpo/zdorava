import React from 'react';

import { NotFound } from '~/features/not-found';
import Header from '~/core/components/header';
import Footer from '~/core/components/footer';

const NotFoundPage = () => (
  <>
    <Header />
    <main>
      <NotFound />
    </main>
    <Footer />
  </>
);

// eslint-disable-next-line import/no-default-export
export default NotFoundPage;
