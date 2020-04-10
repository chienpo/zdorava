import React, { FC } from 'react';
import { Field } from 'react-final-form';

import { FieldError } from '../field-error/field-error';
import { FieldWrapper, Label, Input, LabelText } from './styled';

interface Props {
  name: string;
  type: string;
  children: any;
  validate: (value: any) => any | null;
}

export const InputField: FC<Props> = ({ validate, name, children, ...props }) => (
  <Field
    name={name}
    render={({ input, meta }: any) => (
      <FieldWrapper>
        <Label>
          <LabelText>
            {children}
          </LabelText>
          <Input {...input} {...props} />
        </Label>
        {meta && <FieldError meta={meta} />}
      </FieldWrapper>
    )}
  />
);
