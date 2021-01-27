import React, { FC } from 'react';

import { LanguageSelectProps } from './types';
import { Languages } from '~/constants/languages';
import { Select } from '..';
import { DropdownIndicator } from '../components';
import { SelectBox } from './styled';

export const LanguageSelect: FC<LanguageSelectProps> = ({
  selectedLanguage: defaultValue,
  onToggleLanguage: onSelect,
}) => {
  const options = Object.entries(Languages).map(([key, value]) => ({
    value,
    label: key,
  }));

  return (
    <SelectBox>
      <Select
        onChange={(inputValue) => {
          if (inputValue) {
            onSelect(inputValue.value);
          }
        }}
        defaultValue={options.find((it) => it.value === defaultValue)}
        options={options}
        isRtl={false}
        isSearchable={false}
        components={{ DropdownIndicator }}
      />
    </SelectBox>
  );
};
