import React from 'react';
import { I18n } from '@lingui/react';

import { PORTFOLIO_CATEGORIES_TABS_LABELS } from 'constants/portfolio';
import { MotionPortfolioTabs, ButtonStyled } from './styled';

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
      <MotionPortfolioTabs
        variants={{
          enter: {
            opacity: 1,
            transition: {
              duration: 1,
            },
          },
          exit: {
            opacity: 0,
            transition: { duration: 1.5 },
          },
        }}
        initial="exit"
        animate="enter"
        exit="exit"
      >
        {categories.map(({ label }) => (
          <ButtonStyled
            key={label}
            onClick={() => onSetCategory(label)}
            className={label === activeCategory ? 'active' : ''}
            disabled={label === activeCategory}
          >
            {i18n._(PORTFOLIO_CATEGORIES_TABS_LABELS[label])}
          </ButtonStyled>
        ))}
      </MotionPortfolioTabs>
    )}
  </I18n>
);
