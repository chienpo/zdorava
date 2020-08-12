// @ts-ignore
import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';

const mainTheme = create({
  appBorderRadius: 4,
  brandTitle: 'ZDORAVA Storybook',
  brandUrl: 'https://zdorava.com',
  brandImage: 'https://zdorava.com/assets/images/storybook-logo.png',
});

addons.setConfig({
  theme: mainTheme,
});
