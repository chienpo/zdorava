import React, { FC } from 'react';
import { Field } from 'react-final-form';

import { InputFieldProps } from '~/form-builder/input-field/types';
import { FieldError } from '~/form-builder';

import {
  FieldWrapper,
  Label,
  Input,
  Textarea,
  LabelText,
  RequiredStar,
} from './styled';

export const InputField: FC<InputFieldProps> = ({
  validate,
  name,
  type,
  children,
  ...props
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
          {type === 'textarea' ? (
            <Textarea rows={4} {...input} {...props} />
          ) : (
            <Input type={type} {...input} {...props} />
          )}
        </Label>
        {meta && <FieldError meta={meta} />}
      </FieldWrapper>
    )}
  />
);
