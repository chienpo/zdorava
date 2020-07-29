import React, { FC } from 'react';
import { Trans } from '@lingui/macro';
import { Form } from 'react-final-form';
import { i18nMark, I18n } from '@lingui/react';

import { FIELD_NAME, FIELD_EMAIL, FIELD_MESSAGE } from 'constants/contacts';
import { MoreLoader } from 'ui/more-loader/more-loader';
import { InputField } from 'form-builder';
import { required } from 'form-builder/validators';
import { StyledButton, SuccessMessage } from './styled';

interface Props {
  initialValues: { [key: string]: string };
  onSubmit: (values: { [key: string]: string }) => void;
  requestLoading: boolean;
  messageSent: boolean;
}

export const ContactFormView: FC<Props> = ({
  onSubmit,
  initialValues,
  requestLoading,
  messageSent,
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
              disabled={requestLoading}
            >
              <Trans>Enter your name</Trans>
            </InputField>
            <InputField
              name={FIELD_EMAIL}
              type="email"
              placeholder={i18n._(i18nMark('Email'))}
              validate={required}
              disabled={requestLoading}
            >
              <Trans>Enter your email</Trans>
            </InputField>
            <InputField
              name={FIELD_MESSAGE}
              type="textarea"
              placeholder={i18n._(i18nMark('Message'))}
              validate={required}
              disabled={requestLoading}
            >
              <Trans>Enter your message</Trans>
            </InputField>
            {messageSent ? (
              <SuccessMessage>
                <Trans>Message has been sent!</Trans>
              </SuccessMessage>
            ) : (
              <StyledButton
                type="submit"
                plain
                width="100%"
                disabled={requestLoading}
              >
                {requestLoading && (
                  <MoreLoader size="30px" style={{ marginRight: '10px' }} />
                )}
                <Trans>Send message</Trans>
              </StyledButton>
            )}
          </form>
        )}
      />
    )}
  </I18n>
);
