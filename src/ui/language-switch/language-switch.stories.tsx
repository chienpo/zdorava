import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import {
  LanguageSwitch,
  LanguageSwitchProps,
} from 'ui/language-switch/language-switch';

// eslint-disable-next-line import/no-default-export,@typescript-eslint/no-object-literal-type-assertion
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

const Template: Story<LanguageSwitchProps> = args => (
  <LanguageSwitch {...args} />
);

export const Toggled = Template.bind({});
Toggled.args = {
  selectedLanguage: 'en',
  onToggleLanguage: action('onToggleLanguage'),
};
