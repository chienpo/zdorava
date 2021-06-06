import { create } from '@storybook/theming';
import { addons } from '@storybook/addons';
import { SITE_URL, STORYBOOK_LOGO_PATH } from '~/env';

const mainTheme = create({
  base: 'dark',
  fontBase: '"Montserrat", sans-serif',
  fontCode: 'monospace',
  appBorderRadius: 4,
  brandTitle: 'ZDORAVA Storybook',
  brandUrl: SITE_URL,
  brandImage: `${STORYBOOK_LOGO_PATH}/storybook-logo.png`,
});

addons.setConfig({
  theme: mainTheme,
});
