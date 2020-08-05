import React, { ReactElement } from 'react';
import { useRoute } from 'react-router5';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { useStore } from 'effector-react';

import { $themeStore } from 'store/theme-store';
import { DEFAULT_ROUTE_THEME_MODES } from 'constants/theme';

import { TitleProvider } from './title-provider';
import { LanguageProvider } from './language-provider';

type Props = {
  children: ReactElement;
};

// eslint-disable-next-line import/no-default-export
export default ({ children }: Props) => {
  const { router } = useRoute();
  const curRouter = router.getState();

  const themeMode = useStore($themeStore);

  return (
    <ThemeProvider
      theme={{
        // TODO: Decide later. If all pages will be available for theming path just themeMode and that it
        mode: DEFAULT_ROUTE_THEME_MODES[curRouter.name] || themeMode,
      }}
    >
      <LanguageProvider>
        <Normalize />
        <TitleProvider curRouter={curRouter}>{children}</TitleProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};
