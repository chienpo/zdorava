import React, { ChangeEvent } from 'react';
import { components, OptionTypeBase, IndicatorProps } from 'react-select';

import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RED, BLACK } from '~/constants/colors';

export interface LanguageSwitchProps {
  selectedLanguage: string;
  onChange?: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  onToggleLanguage?: (lang: string) => void;
  options: OptionTypeBase;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DropdownIndicator = (props: IndicatorProps<any, any>) => {
  const { selectProps } = props;

  return (
    <components.DropdownIndicator {...props}>
      <FontAwesomeIcon
        color={selectProps.menuIsOpen ? RED : BLACK}
        icon={faGlobe}
        size="sm"
      />
    </components.DropdownIndicator>
  );
};
