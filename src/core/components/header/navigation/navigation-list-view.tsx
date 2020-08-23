import * as React from 'react';
import { I18n } from '@lingui/react';
import { useStore } from 'effector-react';

import { Route, Router } from 'router5';

import { $portfolioTabsStore } from '~/store/portfolio-tabs-store';

import { PAGE_TITLES } from '~/constants/page-titles';
import {
  ROUTE_NAME_PORTFOLIO_CATEGORY,
  ROUTE_NAME_PORTFOLIO_PROJECT,
} from '~/router/routes';
import { NavUl, BaseLinkStyled } from './styled';

interface Props {
  router: Router;
  routes: Route[];
}

export const NavigationListView: React.FC<Props> = ({ router, routes }) => {
  const category = useStore($portfolioTabsStore);

  return (
    <I18n>
      {({ i18n }) => (
        <NavUl>
          {routes
            .filter(({ name }) => name !== ROUTE_NAME_PORTFOLIO_PROJECT)
            .filter(({ name }) => name !== ROUTE_NAME_PORTFOLIO_CATEGORY)
            .map(({ name }) => (
              <li key={name}>
                <BaseLinkStyled
                  routeParams={{ category }}
                  router={router}
                  routeName={name}
                >
                  {i18n._(PAGE_TITLES[name])}
                </BaseLinkStyled>
              </li>
            ))}
        </NavUl>
      )}
    </I18n>
  );
};
