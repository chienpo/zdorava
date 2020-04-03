import React from 'react';
import { PortfolioTabs, PortfolioTab } from './styled';

interface Props {
  activeCategory: string;
  onSetCategory: (value: string) => void;
  categories: Categories[];
}

interface Categories {
  label: string;
}

export const PortfolioTabsView: React.FC<Props> = ({
  activeCategory,
  onSetCategory,
  categories,
}: Props) => {
  return (
    <PortfolioTabs>
      {categories.map(({ label}) => (
        <PortfolioTab
          key={label}
          onClick={() => onSetCategory(label)}
          className={label === activeCategory ? 'active' : ''}
        >
          {label}
        </PortfolioTab>
      ))}
    </PortfolioTabs>
  );
};
