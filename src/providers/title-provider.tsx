/* eslint-disable promise/always-return,promise/catch-or-return */
import React, { ReactElement } from 'react';
import DocumentTitle from 'react-document-title';
import { I18n } from '@lingui/react';

import { PAGE_TITLES } from 'constants/page-titles';
import { SITE_NAME } from 'constants/site';
import { getProjectPageTitle } from 'helpers/get-project-page-title';

interface Props {
  children: ReactElement;
  curRouter: {
    name: string;
    path: string;
    params: {
      id?: string;
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

        return (
          <DocumentTitle
            title={`${SITE_NAME} | ${i18n._(
              PAGE_TITLES[name]
            )}${projectPageTitle}`}
          >
            {children}
          </DocumentTitle>
        );
      }}
    </I18n>
  );
};
