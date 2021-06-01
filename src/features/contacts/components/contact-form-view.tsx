import React, { FC } from 'react';
import { Form } from 'react-final-form';
import { i18nMark, I18n, Trans } from '@lingui/react';

import { ContactFormFields } from '~/models/contact-form.model';
import { ContactFormViewProps } from './types';
import { MoreLoader } from '~/ui/more-loader/more-loader';
import { InputField } from '~/form-builder';
import { required } from '~/form-builder/validators';
import { StyledButton, SuccessMessage } from './styled';

export const ContactFormView: FC<ContactFormViewProps> = ({
  onSubmit,
  requestLoading,
  messageSent,
}) => (
  <I18n>
    {({ i18n }) => (
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <InputField
              name={ContactFormFields.Name}
              type="text"
              placeholder={i18n._(i18nMark('Name'))}
              validate={required}
              disabled={requestLoading}
            >
              <Trans>Enter your name</Trans>
            </InputField>
            <InputField
              name={ContactFormFields.Email}
              type="email"
              placeholder={i18n._(i18nMark('Email'))}
              validate={required}
              disabled={requestLoading}
            >
              <Trans>Enter your email</Trans>
            </InputField>
            <InputField
              name={ContactFormFields.Message}
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
