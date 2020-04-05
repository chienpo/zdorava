import React from 'react';
import { I18n } from '@lingui/react';

import { PORTFOLIO_CATEGORIES_TABS_LABELS } from '../../../../constants/portfolio';
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
}: Props) => (
  <I18n>
    {({ i18n }) => (
      <PortfolioTabs>
        {categories.map(({ label}) => (
          <PortfolioTab
            key={label}
            onClick={() => onSetCategory(label)}
            className={label === activeCategory ? 'active' : ''}
          >
            {i18n._(PORTFOLIO_CATEGORIES_TABS_LABELS[label])}
          </PortfolioTab>
        ))}
      </PortfolioTabs>
    )}
  </I18n>
);;
