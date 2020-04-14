import React from 'react';
import { I18n } from '@lingui/react';

import { PORTFOLIO_CATEGORIES_TABS_LABELS } from '../../../../constants/portfolio';
import { PortfolioTabs } from './styled';
import { Button } from '../../../../ui/button/button';

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
          <Button
            key={label}
            onClick={() => onSetCategory(label)}
            className={label === activeCategory ? 'active' : ''}
            disabled={label === activeCategory}
          >
            {i18n._(PORTFOLIO_CATEGORIES_TABS_LABELS[label])}
          </Button>
        ))}
      </PortfolioTabs>
    )}
  </I18n>
);
