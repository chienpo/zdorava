import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { themes } from '@storybook/theming';
import { ThemeProvider } from 'styled-components';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: themes.dark,
  },
  controls: { expanded: true },
};

export const decorators = [
  // TODO: Check any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (Story: any) => (
    <ThemeProvider theme={{ mode: 'LIGHT_MODE' }}>
      <Story />
    </ThemeProvider>
  ),
];
