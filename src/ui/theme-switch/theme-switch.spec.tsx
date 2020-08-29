import React from 'react';
import { shallow } from 'enzyme';

import { ThemeSwitchView as ThemeSwitch } from './theme-switch-view';

describe('ThemeSwitch component', () => {
  it('should render ThemeSwitch component with props', () => {
    const wrapper = shallow(
      <ThemeSwitch onChange={(val) => val} checked disabled />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ThemeSwitch component without props', () => {
    const wrapper = shallow(<ThemeSwitch />);
    expect(wrapper).toMatchSnapshot();
  });
});
