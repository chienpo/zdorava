import { createElement, useState, useEffect } from 'react';
import { useStore } from 'effector-react';

import { $portfolioTabsStore } from 'store/portfolio-tabs-store';
import { HomeView } from './home-view';

export const Home = () => {
  const [bgIsToggling, toggleDefaultBg] = useState(false);

  useEffect(() => {
    const winkTimer = setTimeout(() => {
      toggleDefaultBg(true);
    }, 2000);

    return () => {
      clearTimeout(winkTimer);
    };
  });

  const portfolioSelectedCategory = useStore($portfolioTabsStore);

  return createElement(HomeView, {
    bgIsToggling,
    portfolioSelectedCategory,
  });
};
