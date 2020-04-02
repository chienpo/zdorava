import { createElement, useState } from 'react';

import { HomepageContentView } from './homepage-content-view';

export const HomepageContent = () => {
  const [bgIsToggling, toggleDefaultBg] = useState(false);

  return createElement(HomepageContentView, {
    bgIsToggling,
    toggleDefaultBg,
  })
};
