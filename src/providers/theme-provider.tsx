import React, { ReactElement, FC } from 'react';
import { Normalize } from 'styled-normalize';
import { useRoute } from 'react-router5';
import { ThemeProvider as ThemeProviderRoot } from 'styled-components';
import { useStore } from 'effector-react';

import { $themeStore } from '~/store/theme-store';
import { DEFAULT_ROUTE_THEME_MODES } from '~/constants/theme';

type Props = {
  children: ReactElement;
};

export const ThemeProvider: FC<Props> = ({ children }) => {
  const themeMode = useStore($themeStore);
  const { route } = useRoute();

  return (
    <ThemeProviderRoot
      theme={{
        // TODO: Decide later. If all pages will be available for theming path just themeMode and that it
        mode: DEFAULT_ROUTE_THEME_MODES[route.name] || themeMode,
      }}
    >
      <Normalize />
      {children}
    </ThemeProviderRoot>
  );
};
