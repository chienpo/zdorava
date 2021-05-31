import React, { FC } from 'react';
import ReactSelect, { Props } from 'react-select';
import { useStore } from 'effector-react';

import { $themeStore } from '~/store/theme-store';
import { ThemeModes } from '~/constants/theme';
import { BLACK, RED, RED_70 } from '~/constants/colors';
import { SelectBox } from './styled';

export const Select: FC<Props> = (selectProps) => {
  const themeMode = useStore($themeStore);

  const themeColors =
    themeMode === ThemeModes.Dark
      ? {
          primary: RED,
          primary25: RED_70,
          primary50: RED, // On click
          neutral70: 'yellow',
          neutral80: BLACK, // TEXT
          neutral90: 'pink',
        }
      : {
          primary: RED,
          primary25: RED_70,
          primary50: RED, // On click
          neutral70: 'yellow',
          neutral80: BLACK, // TEXT
          neutral90: 'pink',
        };

  return (
    <SelectBox>
      <ReactSelect
        className="react-select-container"
        classNamePrefix="react-select"
        getOptionLabel={({ label }) => label}
        getOptionValue={({ value }) => value}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            ...themeColors,
          },
        })}
        {...selectProps}
      />
    </SelectBox>
  );
};
