import { createElement, useState } from 'react';

import { PortfolioTabsView } from './portfolio-tabs-view';

interface Props {
  activeCategoryPayload: (name: string) => void;
}

const categories = [{ lable: 'all' }, { lable: 'art' }, { lable: 'frontend' }];

export const PortfolioTabs: React.FC<Props> = ({
  activeCategoryPayload,
}: Props) => {
  const [activeCategory, setCategory] = useState(categories[0].lable);

  const onSetCategory = (name: string) => {
    setCategory(name);
    activeCategoryPayload(name);
  };

  return createElement(PortfolioTabsView, {
    activeCategory,
    onSetCategory,
    categories,
  });
};
