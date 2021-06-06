import React from 'react';
import { Helmet } from 'react-helmet';
import { I18n } from '@lingui/react';
import { useRoute } from 'react-router5';
import { useStore } from 'effector-react';

import { Children } from '~/lib/types';
import { $portfolioTabsStore } from '~/store/portfolio-tabs-store';
import { getProjectPageTitle } from '~/helpers/get-project-page-title';

import { PAGE_TITLES, PORTFOLIO_PAGE_TITLES } from '~/constants/page-titles';
import { ROUTE_NAME_PORTFOLIO } from '~/router/routes';

export const TitleProvider: React.FC<Children> = ({ children }) => {
  const {
    route: { name, params },
  } = useRoute();

  const selectedCategory = useStore($portfolioTabsStore);

  return (
    <I18n>
      {({ i18n }) => {
        const projectPageTitle = params.id
          ? ` ${getProjectPageTitle(params.id, i18n.language)}`
          : '';

        const pageTitle =
          name === ROUTE_NAME_PORTFOLIO && selectedCategory
            ? PORTFOLIO_PAGE_TITLES[selectedCategory]
            : PAGE_TITLES[name];

        const title = `${process.env.SITE_NAME} | ${i18n._(pageTitle)}${i18n._(
          projectPageTitle
        )}`;

        return (
          <>
            <Helmet>
              <title>{title}</title>
            </Helmet>
            {children}
          </>
        );
      }}
    </I18n>
  );
};
