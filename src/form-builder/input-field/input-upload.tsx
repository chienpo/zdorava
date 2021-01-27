import React, { FC } from 'react';
import { Field } from 'react-final-form';

import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputFieldProps } from '~/form-builder/input-field/types';
import { FieldError } from '~/form-builder';

import {
  Label,
  LabelText,
  ButtonEmitter,
  FieldWrapper,
  InputFile,
} from './styled';

export const InputUpload: FC<InputFieldProps> = ({
  validate,
  name,
  children,
  ...props
}) => (
  <Field
    name={name}
    validate={validate}
    render={({ input, meta }) => (
      <FieldWrapper>
        <Label>
          <LabelText>{children}</LabelText>
          <InputFile
            type="file"
            onChange={(event) => {
              const { target } = event;

              if (target.files) {
                const reader = new FileReader();
                reader.readAsDataURL(target.files[0]);
                reader.addEventListener('load', () => {
                  input.onChange(reader.result);
                });
              }
            }}
            {...props}
          />
          <ButtonEmitter>
            <FontAwesomeIcon icon={faFileUpload} style={{ fontSize: '20px' }} />
          </ButtonEmitter>
          {meta && <FieldError meta={meta} />}
        </Label>
      </FieldWrapper>
    )}
  />
);
