import React, { FC, useEffect } from 'react';
import { Form } from 'react-final-form';
import { i18nMark, I18n, Trans } from '@lingui/react';
import { useStore } from 'effector-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { fetchAuthData } from '~/store/auth-fetch';
import { $authStore } from '~/store/auth-store';
import { router } from '~/router';

import { AuthFormSubmitValues } from './types';
import { ROUTE_NAME_HOME } from '~/router/routes';
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
  const { loading: requestLoading, userId } = useStore($authStore);
  const isAuthenticated = Boolean(userId);

  useEffect(() => {
    if (isAuthenticated) {
      router.navigate(ROUTE_NAME_HOME, { reload: true });
    }
  }, [isAuthenticated]);

  const onSubmit = (values: AuthFormSubmitValues) => {
    return fetchAuthData({ ...values }).then((data: Error | AuthError) => {
      if (data.error) {
        let fieldErrors;

        if (
          (data as Error).error.message.includes(TOO_MANY_ATTEMPTS_TRY_LATER)
        ) {
          fieldErrors = <Trans>To many attempts</Trans>;
        } else if ((data as Error).error.message.includes(EMAIL_NOT_FOUND)) {
          fieldErrors = { email: data.error.message };
        } else {
          fieldErrors = { password: data.error.message };
        }

        return fieldErrors;
      }

      return {};
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
