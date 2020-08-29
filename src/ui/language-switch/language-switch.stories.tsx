import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { LanguageSwitchProps } from './language-switch-view';

import { LanguageSwitch } from '~/ui/language-switch/language-switch';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'UI/LanguageSwitch',
  component: LanguageSwitch,
  argTypes: {
    selectedLanguage: {
      control: {
        type: 'select',
        options: ['en', 'ru'],
      },
    },
  },
} as Meta;

const Template: Story<LanguageSwitchProps> = (args) => (
  <LanguageSwitch {...args} />
);

export const Toggled = Template.bind({});
Toggled.args = {
  selectedLanguage: 'en',
  onToggleLanguage: action('onToggleLanguage'),
};
