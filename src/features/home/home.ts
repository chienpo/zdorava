import { createElement, useState } from 'react';

import { HomeView } from './home-view';

export const Home = () => {
  const [bgIsToggling, toggleDefaultBg] = useState(false);

  return createElement(HomeView, {
    bgIsToggling,
    toggleDefaultBg,
  });
};
