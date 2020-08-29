import { create } from '@storybook/theming';
import { addons } from '@storybook/addons';

const mainTheme = create({
  base: 'light',
  fontBase: '"Montserrat", sans-serif',
  fontCode: 'monospace',
  appBorderRadius: 4,
  brandTitle: 'ZDORAVA Storybook',
  brandUrl: 'https://zdorava.com',
  brandImage: 'https://zdorava.com/assets/images/storybook-logo.png',
});

addons.setConfig({
  theme: mainTheme,
});
