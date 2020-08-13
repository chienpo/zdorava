import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { BLACK, BLACK_30, WHITE, WHITE_20 } from 'constants/colors';
import { ThemeSwitchProps } from './theme-switch';

import { SwitchBox, SwitchLabel, InputCheckbox, SlideRaw } from './styled';

export const ThemeSwitchView: React.FC<ThemeSwitchProps> = ({
  onChange,
  checked,
  disabled,
}) => {
  const sunColor = checked ? WHITE_20 : BLACK;
  const moonColor = checked ? WHITE : BLACK_30;

  return (
    <SwitchBox>
      <FontAwesomeIcon
        style={{ opacity: disabled ? 0.2 : 1 }}
        color={sunColor}
        icon={faSun}
      />
      <SwitchLabel>
        Theme switch
        <InputCheckbox
          type="checkbox"
          onChange={onChange}
          checked={checked}
          disabled={disabled}
        />
        <SlideRaw />
      </SwitchLabel>
      <FontAwesomeIcon
        style={{ opacity: disabled ? 0.2 : 1 }}
        color={moonColor}
        icon={faMoon}
      />
    </SwitchBox>
  );
};
