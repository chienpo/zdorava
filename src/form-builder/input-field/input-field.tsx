import React, { FC, ReactNode } from 'react';
import { Field } from 'react-final-form';

import { FieldError } from '../field-error/field-error';
import {
  FieldWrapper,
  Label,
  Input,
  Textarea,
  LabelText,
  RequiredStar,
} from './styled';

interface Props {
  name: string;
  type: string;
  children: ReactNode;
  validate: (value: string) => void;
  placeholder?: string | '';
  disabled?: boolean;
}

export const InputField: FC<Props> = ({
  validate,
  name,
  type,
  children,
  ...props
}) => {
  return (
    <Field
      name={name}
      validate={validate}
      render={({ input, meta }: any) => (
        <FieldWrapper>
          <Label>
            <LabelText>
              {children}
              {validate && <RequiredStar>*</RequiredStar>}
            </LabelText>
            {type === 'textarea' ? (
              <Textarea rows={4} {...input} {...props} />
            ) : (
              <Input {...input} {...props} />
            )}
          </Label>
          {meta && <FieldError meta={meta} />}
        </FieldWrapper>
      )}
    />
  );
};
