import React, { FC } from 'react';
import { Field } from 'react-final-form';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { InputFileFieldProps } from '~/form-builder/input-field/types';
import { FieldError } from '~/form-builder';

import {
  Label,
  LabelText,
  ButtonEmitter,
  FieldWrapper,
  InputFile,
} from './styled';

export const InputUpload: FC<InputFileFieldProps> = ({
  validate,
  name,
  children,
  onPreviewChange,
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
            accept=".jpg,.png"
            onChange={(event) => {
              const { target } = event;

              if (target.files && target.files.length === 1) {
                const reader = new FileReader();
                reader.addEventListener('load', () => {
                  onPreviewChange(reader.result, false);
                  input.onChange(reader.result);
                });

                reader.addEventListener('loadstart', () => {
                  onPreviewChange(reader.result, false);
                });

                reader.addEventListener('progress', () => {
                  onPreviewChange(reader.result, true);
                });

                reader.addEventListener('onloadend', () => {
                  onPreviewChange(reader.result, false);
                });

                reader.readAsDataURL(target.files[0]);
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
