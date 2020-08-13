import { FC, createElement, useState } from 'react';
import { useStore } from 'effector-react';

import { $themeStore, toggleTheme } from 'store/theme-store';

import { DARK_MODE } from 'constants/theme';
import { ThemeSwitchView } from './theme-switch-view';

export interface Props {
  onChange?: () => void;
  checked?: boolean;
  disabled?: boolean;
}

export const ThemeSwitch: FC<Props> = ({ disabled }) => {
  const theme = useStore($themeStore);
  const toggledByDefault = theme === DARK_MODE && !disabled;

  const [checked, toggleSwitch] = useState<boolean>(toggledByDefault);

  const onToggleMode = () => {
    toggleSwitch(prevState => !prevState);
    toggleTheme(checked);
  };

  return createElement(ThemeSwitchView, {
    onChange: onToggleMode,
    checked,
    disabled,
  });
};
