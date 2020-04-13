import React, { FC } from 'react';
import { Trans } from '@lingui/macro';
import { Form } from 'react-final-form';

import { Button } from '../../../ui/button/button';
import { InputField } from '../../../form-builder';
import { required } from '../../../form-builder/validators';
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

export const ContactFormView: FC<Props> = ({ onSubmit, initialValues }) => (
  <Form
    onSubmit={onSubmit}
    initialValues={initialValues}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <InputField
          name={FIELD_NAME}
          type="text"
          placeholder="Name"
          validate={required}
        >
          <Trans>Enter your name</Trans>
        </InputField>
        <InputField
          name={FIELD_LAST_NAME}
          type="text"
          placeholder="Last name"
          validate={required}
        >
          <Trans>Enter your last name</Trans>
        </InputField>
        <InputField
          name={FIELD_EMAIL}
          type="email"
          placeholder="Email"
          validate={required}
        >
          <Trans>Enter your email</Trans>
        </InputField>
        <InputField
          name={FIELD_MESSAGE}
          type="text"
          placeholder="Message"
          validate={required}
        >
          <Trans>Enter your message</Trans>
        </InputField>
        <Button type="submit" plain width="100%">
          <Trans>Send message</Trans>
        </Button>
      </form>
    )}
  />
);
