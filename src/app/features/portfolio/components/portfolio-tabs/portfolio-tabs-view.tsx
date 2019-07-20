import React from 'react';
import { PortfolioTabs, PortfolioTab } from './styled';

interface Props {
  activeCategory: string;
  onSetCategory: (value: string) => void;
  categories: Categories[];
}

interface Categories {
  lable: string;
}

export const PortfolioTabsView: React.FC<Props> = ({
  activeCategory,
  onSetCategory,
  categories,
}: Props) => {
  return (
    <PortfolioTabs>
      {categories.map(category => (
        <PortfolioTab
          key={category.lable}
          onClick={() => onSetCategory(category.lable)}
          className={category.lable === activeCategory ? 'active' : ''}
        >
          {category.lable}
        </PortfolioTab>
      ))}
    </PortfolioTabs>
  );
};
