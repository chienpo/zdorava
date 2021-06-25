import React from 'react';
import { Helmet } from 'react-helmet';
import { i18n } from '@lingui/core';
import { useRoute } from 'react-router5';
import { useStore } from 'effector-react';
import * as env from '~/env';

import { Children } from '~/lib/types';
import { $languageStore } from '~/store/language-store';
import { $portfolioTabsStore } from '~/store/portfolio-tabs-store';
import { getProjectPageTitle } from '~/helpers/get-project-page-title';

import { PAGE_TITLES, PORTFOLIO_PAGE_TITLES } from '~/constants/page-titles';
import { ROUTE_NAME_PORTFOLIO } from '~/router/routes';

export const TitleProvider: React.FC<Children> = ({ children }) => {
  const {
    route: { name, params },
  } = useRoute();
  const language = useStore($languageStore);

  const selectedCategory = useStore($portfolioTabsStore);

  const projectPageTitle = params.id
    ? ` ${getProjectPageTitle(params.id, language)}`
    : '';

  const pageTitle =
    name === ROUTE_NAME_PORTFOLIO && selectedCategory
      ? PORTFOLIO_PAGE_TITLES[selectedCategory]
      : PAGE_TITLES[name];

  const title = `${env.SITE_NAME} | ${i18n._(pageTitle)}${i18n._(
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
};
