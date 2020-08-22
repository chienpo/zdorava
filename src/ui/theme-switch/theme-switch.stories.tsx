import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ThemeSwitch, ThemeSwitchProps } from '~/ui/theme-switch/theme-switch';

export default {
  title: 'UI/ThemeSwitch',
  component: ThemeSwitch,
} as Meta;

const Template: Story<ThemeSwitchProps> = args => <ThemeSwitch {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  onToggleTheme: action('onToggleTheme'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  onToggleTheme: action('onToggleTheme'),
};
