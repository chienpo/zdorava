/* eslint-disable promise/always-return,promise/catch-or-return */
import React from 'react';
import DocumentTitle from 'react-document-title';
import { I18n } from '@lingui/react';

import { PAGE_TITLES } from 'app/constants/page-titles';

interface Props {
  children: any;
  routeName: string;
}

export const TitleProvider: React.FC<Props> = ({ children, routeName }) => (
  <I18n>
    {({ i18n }) => (
      <DocumentTitle title={`ZDORAVA | ${i18n._(PAGE_TITLES[routeName])}`}>
        {children}
      </DocumentTitle>
    )}
  </I18n>
);
