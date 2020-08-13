import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react';

import {
  LanguageSwitch,
  LanguageSwitchProps,
} from 'ui/language-switch/language-switch';

// eslint-disable-next-line import/no-default-export,@typescript-eslint/no-object-literal-type-assertion
export default {
  title: 'UI/LanguageSwitch',
  component: LanguageSwitch,
} as Meta;

const Template: Story<LanguageSwitchProps> = args => (
  <LanguageSwitch {...args} />
);

export const Enabled = Template.bind({});
Enabled.args = {
  onChangeLanguage: lang => lang,
};
