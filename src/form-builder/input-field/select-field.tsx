import React, { FC } from 'react';
import { Field } from 'react-final-form';
import { OptionsType } from 'react-select';

import { SelectFieldProps } from './types';

import { Select } from '~/ui/select';
import { FieldError } from '~/form-builder';
import { FieldWrapper, Label, LabelText, RequiredStar } from './styled';

export const SelectField: FC<SelectFieldProps> = ({
  validate,
  name,
  children,
  options,
}) => (
  <Field
    name={name}
    validate={validate}
    render={({ input, meta }) => (
      <FieldWrapper>
        <Label>
          <LabelText>
            {children}
            {validate && <RequiredStar>*</RequiredStar>}
          </LabelText>
          <Select
            onChange={(changedValue) => {
              if (changedValue) {
                input.onChange(changedValue.value);
              }
            }}
            defaultValue={(options as OptionsType<{
              label: string;
              value: string;
            }>).find((item) => item.value === input.value)}
            options={options}
          />
        </Label>
        {meta && <FieldError meta={meta} />}
      </FieldWrapper>
    )}
  />
);
