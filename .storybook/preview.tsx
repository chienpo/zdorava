import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { themes } from '@storybook/theming';
// eslint-disable-next-line import/no-extraneous-dependencies
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: themes.dark,
  },
  controls: { expanded: true },
};

type DecoratorFunction = Parameters<typeof addDecorator>[0];

const withThemeProvider: DecoratorFunction = (Story, context) => (
  <ThemeProvider theme={{ mode: 'LIGHT_MODE' }}>
    <Story {...context} />
  </ThemeProvider>
);

export const decorators = [withThemeProvider];
