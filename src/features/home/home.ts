import { createElement, useState } from 'react';
import { useStore } from 'effector-react';

import { $portfolioTabsStore } from 'store/portfolio-tabs-store';
import { HomeView } from './home-view';

export const Home = () => {
  const [bgIsToggling, toggleDefaultBg] = useState(false);

  const portfolioSelectedCategory = useStore($portfolioTabsStore);

  return createElement(HomeView, {
    bgIsToggling,
    toggleDefaultBg,
    portfolioSelectedCategory,
  });
};
