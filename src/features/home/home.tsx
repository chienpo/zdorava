import React from 'react';

import { HomeView } from './home-view';
import Header from '~/core/components/header';
import Footer from '~/core/components/footer';

export const Home = () => (
  <>
    <Header />
    <main>
      <HomeView />
    </main>
    <Footer />
  </>
);
