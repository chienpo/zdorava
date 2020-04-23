import { createElement, useState, FC } from 'react';

import { HomeView } from './home-view';

export const Home: FC<any> = () => {
  const [bgIsToggling, toggleDefaultBg] = useState(false);

  return createElement(HomeView, {
    bgIsToggling,
    toggleDefaultBg,
  })
};

// // eslint-disable-next-line import/no-default-export
// export default Home;
