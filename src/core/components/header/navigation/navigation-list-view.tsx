import * as React from 'react';
import { I18n } from '@lingui/react';
import { useStore } from 'effector-react';

import { Route, Router } from 'router5';

import { $portfolioTabsStore } from '~/store/portfolio-tabs-store';

import { PAGE_TITLES } from '~/constants/page-titles';
import { Ul, BaseLinkStyled } from './styled';

interface Props {
  router: Router;
  routes: Route[];
}

export const NavigationListView: React.FC<Props> = ({ router, routes }) => {
  const category = useStore($portfolioTabsStore);

  return (
    <I18n>
      {({ i18n }) => (
        <Ul>
          {routes.map(({ name }) => (
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
        </Ul>
      )}
    </I18n>
  );
};
