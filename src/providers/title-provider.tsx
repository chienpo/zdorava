/* eslint-disable promise/always-return,promise/catch-or-return */
import React, { ReactElement } from 'react';
import DocumentTitle from 'react-document-title';
import { I18n } from '@lingui/react';

import { PAGE_TITLES, PORTFOLIO_PAGE_TITLES } from 'constants/page-titles';
import { SITE_NAME } from 'constants/site';
import { ROUTE_NAME_PORTFOLIO_CATEGORY } from 'router/routes';
import { getProjectPageTitle } from 'helpers/get-project-page-title';

interface Props {
  children: ReactElement;
  curRouter: {
    name: string;
    path: string;
    params: {
      id?: string;
      category?: string;
    };
  };
}

export const TitleProvider: React.FC<Props> = ({ children, curRouter }) => {
  const { name, params } = curRouter;

  return (
    <I18n>
      {({ i18n }) => {
        const projectPageTitle = params.id
          ? ` ${getProjectPageTitle(params.id, i18n.language)}`
          : '';

        const pageTitle =
          name === ROUTE_NAME_PORTFOLIO_CATEGORY && params.category
            ? PORTFOLIO_PAGE_TITLES[params.category]
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
