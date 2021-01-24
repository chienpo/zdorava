import React, { ReactElement } from 'react';
import DocumentTitle from 'react-document-title';
import { I18n } from '@lingui/react';
import { useRoute } from 'react-router5';
import { useStore } from 'effector-react';

import { $portfolioTabsStore } from '~/store/portfolio-tabs-store';
import { getProjectPageTitle } from '~/helpers/get-project-page-title';

import { PAGE_TITLES, PORTFOLIO_PAGE_TITLES } from '~/constants/page-titles';
import { SITE_NAME } from '~/constants/site';
import { ROUTE_NAME_PORTFOLIO } from '~/router/routes';

interface Props {
  children: ReactElement;
}

export const TitleProvider: React.FC<Props> = ({ children }) => {
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

        return (
          <DocumentTitle
            title={`${SITE_NAME} | ${i18n._(pageTitle)}${i18n._(
              projectPageTitle
            )}`}
          >
            {children}
          </DocumentTitle>
        );
      }}
    </I18n>
  );
};
