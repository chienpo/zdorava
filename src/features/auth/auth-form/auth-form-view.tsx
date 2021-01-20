import React, { FC } from 'react';
import { Form } from 'react-final-form';
import { i18nMark, I18n, Trans } from '@lingui/react';
import { useStore } from 'effector-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { AuthFormSubmitValues } from './types';
import { FIELD_EMAIL, FIELD_PASSWORD } from './constants';
import { BLACK_20 } from '~/constants/colors';
import {
  EMAIL_NOT_FOUND,
  TOO_MANY_ATTEMPTS_TRY_LATER,
} from '~/form-builder/errors';
import { MoreLoader } from '~/ui/more-loader/more-loader';
import { InputField, FieldError } from '~/form-builder';
import { required } from '~/form-builder/validators';
import { H1 } from '~/ui/headings';
import { StyledButton } from './styled';

import { fetchAuthData } from '~/store/auth-fetch';
import { $authStore } from '~/store/auth-store';

const initialValues = {};

interface Error {
  error: {
    message: string;
  };
}

interface AuthError {
  error?: {
    message: string | { [key: string]: string };
  };
}

export const AuthFormView: FC = () => {
  const { loading: requestLoading } = useStore($authStore);

  const onSubmit = (values: AuthFormSubmitValues) => {
    return fetchAuthData({ ...values }).then((error: Error | AuthError) => {
      if (error.error) {
        let fieldErrors;

        if (
          (error as Error).error.message.includes(TOO_MANY_ATTEMPTS_TRY_LATER)
        ) {
          fieldErrors = <Trans>To many attempts</Trans>;
        } else if ((error as Error).error.message.includes(EMAIL_NOT_FOUND)) {
          fieldErrors = { email: error.error.message };
        } else {
          fieldErrors = { password: error.error.message };
        }

        return fieldErrors;
      }

      return error;
    });
  };

  return (
    <>
      <H1 style={{ textAlign: 'center' }}>
        <FontAwesomeIcon icon={faSignOutAlt} size="2x" color={BLACK_20} />
        <span
          style={{
            display: 'block',
            width: '0',
            height: '0',
            overflow: 'hidden',
          }}
        >
          <Trans>Sign in</Trans>
        </span>
      </H1>
      <I18n>
        {({ i18n }) => (
          <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={({ handleSubmit, submitError }) => (
              <form onSubmit={handleSubmit}>
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
                  name={FIELD_PASSWORD}
                  type="password"
                  placeholder={i18n._(i18nMark('Password'))}
                  validate={required}
                  disabled={requestLoading}
                >
                  <Trans>Enter your password</Trans>
                </InputField>
                <StyledButton
                  type="submit"
                  plain
                  width="100%"
                  disabled={requestLoading}
                >
                  {requestLoading && (
                    <MoreLoader size="30px" style={{ marginRight: '10px' }} />
                  )}
                  <Trans>Sign in</Trans>
                </StyledButton>
                <FieldError meta={submitError} />
              </form>
            )}
          />
        )}
      </I18n>
    </>
  );
};
