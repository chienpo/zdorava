import React from 'react';
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
  Story => (
    <ThemeProvider theme={{ mode: 'LIGHT_MODE' }}>
      <Story />
    </ThemeProvider>
  ),
];
