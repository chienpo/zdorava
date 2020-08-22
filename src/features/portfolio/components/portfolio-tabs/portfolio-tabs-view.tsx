import React from 'react';
import { I18n } from '@lingui/react';

import { PORTFOLIO_CATEGORIES_TABS_LABELS } from '~/constants/portfolio';
import { MotionPortfolioTabs, PortfolioTabsBox } from './styled';
import { ButtonCircleStyled } from './button-circle/styled';

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
      <PortfolioTabsBox
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
        <MotionPortfolioTabs>
          {categories.map(({ label }) => (
            <ButtonCircleStyled
              key={label}
              onClick={() => onSetCategory(label)}
              className={label === activeCategory ? 'active' : ''}
              disabled={label === activeCategory}
            >
              {i18n._(PORTFOLIO_CATEGORIES_TABS_LABELS[label])}
            </ButtonCircleStyled>
          ))}
        </MotionPortfolioTabs>
      </PortfolioTabsBox>
    )}
  </I18n>
);
