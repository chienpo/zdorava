import React, { FC } from 'react';

import { I18n } from '@lingui/react';
import { ValueType } from 'react-select';
import { LanguageSelectProps } from './types';
import { LANGUAGE_LABELS, Languages } from '~/constants/languages';
import { Select } from '..';
import { DropdownIndicator } from '../components';
import { SelectBox } from './styled';

export const LanguageSelect: FC<LanguageSelectProps> = ({
  selectedLanguage: defaultValue,
  onToggleLanguage: onSelect,
}) => (
  <I18n>
    {({ i18n }) => {
      const options = Object.entries(Languages).map(([, value]) => ({
        value,
        label: i18n._(LANGUAGE_LABELS[value]),
      }));

      return (
        <SelectBox>
          <Select
            onChange={(
              inputValue: ValueType<{ label: string; value: string }, false>
            ) => {
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
    }}
  </I18n>
);
