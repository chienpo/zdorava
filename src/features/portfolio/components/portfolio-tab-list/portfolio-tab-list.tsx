import React, { FC } from 'react';
import { I18n } from '@lingui/react';

import {
  PORTFOLIO_CATEGORIES_TABS_LABELS,
  PORTFOLIO_CATEGORY_TAB_NAME_ALL,
  PORTFOLIO_CATEGORY_TAB_NAME_ART,
  PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND,
} from '~/constants/portfolio';
import { PortfolioTab } from './portfolio-tab';
import { MotionPortfolioTabs, PortfolioTabsBox } from './styled';

const CATEGORIES_DATA: { [key: string]: string }[] = [
  { label: PORTFOLIO_CATEGORY_TAB_NAME_ALL },
  { label: PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND },
  { label: PORTFOLIO_CATEGORY_TAB_NAME_ART },
];

interface Props {
  activeCategoryPayload: (name: string) => void;
  activeCategory: string;
}

export const PortfolioTabList: FC<Props> = ({
  activeCategoryPayload,
  activeCategory,
}) => {
  const onSetCategory = (name: string) => {
    activeCategoryPayload(name);
  };

  return (
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
            {CATEGORIES_DATA.map(({ label }) => (
              <PortfolioTab
                key={label}
                onClick={() => onSetCategory(label)}
                className={label === activeCategory ? 'active' : ''}
                disabled={label === activeCategory}
                title={i18n._(PORTFOLIO_CATEGORIES_TABS_LABELS[label])}
              >
                {i18n._(PORTFOLIO_CATEGORIES_TABS_LABELS[label])}
              </PortfolioTab>
            ))}
          </MotionPortfolioTabs>
        </PortfolioTabsBox>
      )}
    </I18n>
  );
};
