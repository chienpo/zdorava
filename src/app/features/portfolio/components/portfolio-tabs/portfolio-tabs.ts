import { createElement, useState } from 'react';

import { PortfolioTabsView } from './portfolio-tabs-view';

interface Props {
  activeCategoryPayload: (name: string) => void;
}

const categories = [{ label: 'all' }, { label: 'art' }, { label: 'frontend' }];

export const PortfolioTabs: React.FC<Props> = ({
  activeCategoryPayload,
}: Props) => {
  const [activeCategory, setCategory] = useState('all');

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
