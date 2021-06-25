import React, { FC } from 'react';
import { i18n } from '@lingui/core';

import { CATEGORIES_DATA } from '~/constants/portfolio';
import { PortfolioTab } from './portfolio-tab';
import { MotionPortfolioTabUl, PortfolioTabsBox } from './styled';

interface Props {
  onCategoryClick: (categoryName: string) => void;
  activeCategory: string;
}

export const PortfolioTabList: FC<Props> = ({
  onCategoryClick,
  activeCategory,
}) => (
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
    <MotionPortfolioTabUl>
      {CATEGORIES_DATA.map(({ label, value }) => (
        <li key={value}>
          <PortfolioTab
            onClick={() => onCategoryClick(value)}
            className={value === activeCategory ? 'active' : ''}
            disabled={value === activeCategory}
            title={i18n._(label)}
          >
            {i18n._(label)}
          </PortfolioTab>
        </li>
      ))}
    </MotionPortfolioTabUl>
  </PortfolioTabsBox>
);
