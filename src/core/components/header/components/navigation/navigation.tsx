import React, { FC } from 'react';
import { i18n } from '@lingui/core';
import { useStore } from 'effector-react';

import { $portfolioTabsStore } from '~/store/portfolio-tabs-store';

import { PAGE_TITLES } from '~/constants/page-titles';
import { Ul, BaseLinkStyled } from './styled';
import { NavigationProps } from './types';

export const Navigation: FC<NavigationProps> = ({ router, routes }) => {
  const category = useStore($portfolioTabsStore);

  return (
    <nav>
      <Ul>
        {routes.map(({ name }) => (
          <li key={name}>
            <BaseLinkStyled
              routeParams={{ category }}
              router={router}
              routeName={name}
              title={i18n._(PAGE_TITLES[name])}
            >
              {i18n._(PAGE_TITLES[name])}
            </BaseLinkStyled>
          </li>
        ))}
      </Ul>
    </nav>
  );
};
