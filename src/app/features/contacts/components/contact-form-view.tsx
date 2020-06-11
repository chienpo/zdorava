import React, { FC } from 'react';
import { Trans } from '@lingui/macro';
import { Form } from 'react-final-form';
import { i18nMark, I18n } from '@lingui/react';

import { FIELD_NAME, FIELD_EMAIL, FIELD_MESSAGE } from 'constants/contacts';
import { Button } from '../../../ui/button/button';
import { InputField } from '../../../form-builder';
import { required } from '../../../form-builder/validators';

interface Props {
  initialValues: any;
  onSubmit: (values: any) => any;
  requestLoading: boolean;
}

export const ContactFormView: FC<Props> = ({
  onSubmit,
  initialValues,
  requestLoading,
}) => (
  <I18n>
    {({ i18n }) => (
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <InputField
              name={FIELD_NAME}
              type="text"
              placeholder={i18n._(i18nMark('Name'))}
              validate={required}
            >
              <Trans>Enter your name</Trans>
            </InputField>
            <InputField
              name={FIELD_EMAIL}
              type="email"
              placeholder={i18n._(i18nMark('Email'))}
              validate={required}
            >
              <Trans>Enter your email</Trans>
            </InputField>
            <InputField
              name={FIELD_MESSAGE}
              type="textarea"
              placeholder={i18n._(i18nMark('Message'))}
              validate={required}
            >
              <Trans>Enter your message</Trans>
            </InputField>
            <Button type="submit" plain width="100%" disabled={requestLoading}>
              <Trans>Send message</Trans>
            </Button>
          </form>
        )}
      />
    )}
  </I18n>
);
