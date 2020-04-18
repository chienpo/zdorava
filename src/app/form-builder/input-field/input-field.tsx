import React, { FC } from 'react';
import { Field } from 'react-final-form';

import { FieldError } from '../field-error/field-error';
import { FieldWrapper, Label, Input, Textarea, LabelText, RequiredStar } from './styled';

interface Props {
  name: string;
  type: string;
  children: any;
  validate: (value: any) => any;
  placeholder?: any | '';
}

export const InputField: FC<any> = ({
  validate,
  name,
  type,
  children,
  ...props
}: Props) => {

  return (
    <Field
      name={name}
      validate={validate}
      render={({ input, meta }: any) => (
        <FieldWrapper>
          <Label>
            <LabelText>
              {children}
              {validate && (
                <RequiredStar>*</RequiredStar>
              )}
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
  )
};
