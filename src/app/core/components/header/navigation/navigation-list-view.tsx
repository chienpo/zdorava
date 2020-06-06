import * as React from 'react';
import { I18n } from '@lingui/react';

import { Route } from 'models/route.model';

import { PAGE_TITLES } from 'app/constants/page-titles';
import { NavigationList, NavLinkStyled } from './styled';

interface Props {
  router: any;
  routes: Route[];
}

export const NavigationListView: React.FC<Props> = ({ router, routes }) => (
  <I18n>
    {({ i18n }) => (
      <NavigationList>
        {routes.map(({ name }) => (
          <NavLinkStyled key={name} router={router} routeName={name}>
            {i18n._(PAGE_TITLES[name])}
          </NavLinkStyled>
        ))}
      </NavigationList>
    )}
  </I18n>
);
