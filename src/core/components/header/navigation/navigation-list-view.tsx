import * as React from 'react';
import { I18n } from '@lingui/react';
import { useStore } from 'effector-react';

import { Route } from 'models/route.model';

import { $portfolioTabsStore } from 'store/portfolio-tabs-store';

import {
  ROUTE_NAME_PORTFOLIO_CATEGORY,
  ROUTE_NAME_PORTFOLIO_PROJECT,
} from 'router/routes';
import { PAGE_TITLES } from 'constants/page-titles';
import { NavigationList, BaseLinkStyled } from './styled';

interface Props {
  router: any;
  routes: Route[];
}

export const NavigationListView: React.FC<Props> = ({ router, routes }) => {
  const category = useStore($portfolioTabsStore);

  return (
    <I18n>
      {({ i18n }) => (
        <NavigationList>
          {routes
            .filter(({ name }) => name !== ROUTE_NAME_PORTFOLIO_PROJECT)
            .filter(({ name }) => name !== ROUTE_NAME_PORTFOLIO_CATEGORY)
            .map(({ name }) => (
              <BaseLinkStyled
                routeParams={{ category }}
                key={name}
                router={router}
                routeName={name}
              >
                {i18n._(PAGE_TITLES[name])}
              </BaseLinkStyled>
            ))}
        </NavigationList>
      )}
    </I18n>
  );
};
