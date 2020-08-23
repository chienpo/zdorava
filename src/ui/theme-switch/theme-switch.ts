import { FC, createElement, useState, ChangeEvent } from 'react';
import { useStore } from 'effector-react';

import { $themeStore, toggleTheme } from '~/store/theme-store';

import { DARK_MODE } from '~/constants/theme';
import { ThemeSwitchView } from './theme-switch-view';

export interface ThemeSwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  onToggleTheme?: (checked: boolean) => void;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  disabled,
  onToggleTheme,
}) => {
  const theme = useStore($themeStore);
  const toggledByDefault = theme === DARK_MODE && !disabled;

  const [checked, toggleSwitch] = useState<boolean>(toggledByDefault);

  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    toggleSwitch(prevState => !prevState);
    toggleTheme(checked);

    if (onToggleTheme) {
      onToggleTheme(target.checked);
    }
  };

  return createElement(ThemeSwitchView, {
    onChange: onChangeHandler,
    checked,
    disabled,
  });
};
