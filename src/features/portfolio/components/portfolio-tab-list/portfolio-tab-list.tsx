import React, { FC } from 'react';
import { I18n } from '@lingui/react';

import { CATEGORIES_DATA } from '~/constants/portfolio';
import { PortfolioTab } from './portfolio-tab';
import { MotionPortfolioTabs, PortfolioTabsBox } from './styled';

interface Props {
  onCategoryClick: (categoryName: string) => void;
  activeCategory: string;
}

export const PortfolioTabList: FC<Props> = ({
  onCategoryClick,
  activeCategory,
}) => (
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
          {CATEGORIES_DATA.map(({ label, value }) => (
            <PortfolioTab
              key={value}
              onClick={() => onCategoryClick(value)}
              className={value === activeCategory ? 'active' : ''}
              disabled={value === activeCategory}
              title={i18n._(label)}
            >
              {i18n._(label)}
            </PortfolioTab>
          ))}
        </MotionPortfolioTabs>
      </PortfolioTabsBox>
    )}
  </I18n>
);
