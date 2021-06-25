import React, { useEffect, ReactNode, FC } from 'react';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';

import { Children } from '~/lib/types';
import { dynamicActivate } from '~/utils/i18n-loader';
import { defaultLang } from '~/store/language-store';

export const LanguageProvider: FC<Children> = ({
  children,
}) => {
  useEffect(() => {
    dynamicActivate(defaultLang).then((result) => result);
  }, []);

  return (
    <I18nProvider forceRenderOnLocaleChange={false} i18n={i18n}>
      {children}
    </I18nProvider>
  );
};
