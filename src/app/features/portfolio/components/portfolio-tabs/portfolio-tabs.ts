import { createElement, useState, FC } from 'react';

import { PortfolioTabsView } from './portfolio-tabs-view';
import {
  PORTFOLIO_CATEGORY_TAB_NAME_ALL,
  PORTFOLIO_CATEGORY_TAB_NAME_ART,
  PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND,
} from '../../../../constants/portfolio';

interface Props {
  activeCategoryPayload: (name: string) => void;
}

const categories = [
  { label: PORTFOLIO_CATEGORY_TAB_NAME_ALL },
  { label: PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND },
  { label: PORTFOLIO_CATEGORY_TAB_NAME_ART }
];

export const PortfolioTabs: FC<Props> = ({ activeCategoryPayload }: Props) => {
  const [activeCategory, setCategory] = useState(PORTFOLIO_CATEGORY_TAB_NAME_ALL);

  const onSetCategory = (name: string) => {
    if (activeCategory === name) {
      return
    }

    setCategory(name);
    activeCategoryPayload(name);
  };

  return createElement(PortfolioTabsView, {
    activeCategory,
    onSetCategory,
    categories,
  });
};
