import { createElement, FC } from 'react';

import {
  PORTFOLIO_CATEGORY_TAB_NAME_ALL,
  PORTFOLIO_CATEGORY_TAB_NAME_ART,
  PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND,
} from '~/constants/portfolio';
import { PortfolioTabsView } from './portfolio-tabs-view';

interface Props {
  activeCategoryPayload: (name: string) => void;
  selectedCategory: string;
}

const categories = [
  { label: PORTFOLIO_CATEGORY_TAB_NAME_ALL },
  { label: PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND },
  { label: PORTFOLIO_CATEGORY_TAB_NAME_ART },
];

export const PortfolioTabs: FC<Props> = ({
  activeCategoryPayload,
  selectedCategory,
}: Props) => {
  const onSetCategory = (name: string) => {
    activeCategoryPayload(name);
  };

  return createElement(PortfolioTabsView, {
    activeCategory: selectedCategory,
    onSetCategory,
    categories,
  });
};
