import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react';

import { ThemeSwitch, Props } from 'ui/theme-switch/theme-switch';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'UI/ThemeSwitch',
  component: ThemeSwitch,
} as Meta;

const Template: Story<Props> = args => <ThemeSwitch {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  disabled: false,
};
