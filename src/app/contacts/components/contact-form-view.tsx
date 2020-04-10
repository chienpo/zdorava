import React, { FC } from 'react';
import { Trans } from '@lingui/macro';
import { Form } from 'react-final-form';
import { Button } from '../../ui/button/button';
import { InputField } from '../../form-builder';
import {
  FIELD_NAME,
  FIELD_LAST_NAME,
  FIELD_EMAIL,
  FIELD_MESSAGE,
} from './contact-form';

interface Props {
  initialValues: any;
  onSubmit: (values: any) => any;
}

const required = (value: any) => {
  if (value) {
    return undefined
  }

  return 'Required'
};

export const ContactFormView: FC<Props> = ({ onSubmit, initialValues }) => {

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({handleSubmit, ...formProps}) => {

        const { valid } = formProps;

        return (
          <form onSubmit={handleSubmit}>
            <InputField
              name={FIELD_NAME}
              type="text"
              validate={required}
            >
              <Trans>Enter your name *</Trans>
            </InputField>
            <InputField
              validate={required}
              name={FIELD_LAST_NAME}
              type="text"
            >
              <Trans>Enter your last name *</Trans>
            </InputField>
            <InputField
              validate={required}
              name={FIELD_EMAIL}
              type="email"
            >
              <Trans>Enter your email *</Trans>
            </InputField>
            <InputField
              validate={required}
              name={FIELD_MESSAGE}
              type="text"
            >
              <Trans>Enter your message *</Trans>
            </InputField>
            <Button
              type="submit"
              disabled={!valid}
            >
              Submit
            </Button>
          </form>
        )
      }}
    />
  )
};
