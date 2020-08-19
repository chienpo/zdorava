import React from 'react';
import { shallow } from 'enzyme';

import { ThemeSwitchView as ThemeSwitch } from './theme-switch-view';

it('should render ThemeSwitch component ', () => {
  const wrapper = shallow(<ThemeSwitch />);

  expect(wrapper).toMatchSnapshot();
});
