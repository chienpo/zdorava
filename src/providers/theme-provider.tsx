import React, { ReactElement, FC } from 'react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider as ThemeProviderLib } from 'styled-components';
import { useStore } from 'effector-react';

import { $themeStore } from 'store/theme-store';
import { DEFAULT_ROUTE_THEME_MODES } from 'constants/theme';

type Props = {
  children: ReactElement;
  routerStateName: string;
};

export const ThemeProvider: FC<Props> = ({ children, routerStateName }) => {
  const themeMode = useStore($themeStore);

  return (
    <ThemeProviderLib
      theme={{
        // TODO: Decide later. If all pages will be available for theming path just themeMode and that it
        mode: DEFAULT_ROUTE_THEME_MODES[routerStateName] || themeMode,
      }}
    >
      <Normalize />
      {children}
    </ThemeProviderLib>
  );
};
