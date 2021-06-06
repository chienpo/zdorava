import React, { FC } from 'react';
import { Form } from 'react-final-form';
import { t, Trans } from '@lingui/macro';
import { i18n } from '@lingui/core';
import { useStore } from 'effector-react';

import { fetchAuthData } from '~/store/auth-fetch';
import { $authStore } from '~/store/auth-store';

import { AuthFormFields, AuthFormModel } from '~/models/auth-form.model';
import { Error as ErrorType, AuthError } from './types';
import {
  EMAIL_NOT_FOUND,
  TOO_MANY_ATTEMPTS_TRY_LATER,
} from '~/form-builder/errors';
import { MoreLoader } from '~/ui/more-loader/more-loader';
import { InputField, FieldError } from '~/form-builder';
import { required } from '~/form-builder/validators';
import { StyledButton } from './styled';

const onSubmit = (values: AuthFormModel) =>
  fetchAuthData({ ...values })
    .then((data: ErrorType | AuthError) => {
      if (data.error) {
        let fieldErrors;

        if (
          (data as ErrorType).error.message.includes(
            TOO_MANY_ATTEMPTS_TRY_LATER
          )
        ) {
          fieldErrors = <Trans>To many attempts</Trans>;
        } else if (
          (data as ErrorType).error.message.includes(EMAIL_NOT_FOUND)
        ) {
          fieldErrors = { email: data.error.message };
        } else {
          fieldErrors = { password: data.error.message };
        }

        return fieldErrors;
      }

      return {};
    })
    .catch((error) => {
      throw new Error(error);
    });

export const AuthForm: FC = () => {
  const { loading: requestLoading } = useStore($authStore);

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitError }) => (
        <form onSubmit={handleSubmit}>
          <InputField
            name={AuthFormFields.Email}
            type="email"
            placeholder={i18n._(t`Email`)}
            validate={required}
            disabled={requestLoading}
          >
            <Trans>Enter your email</Trans>
          </InputField>
          <InputField
            name={AuthFormFields.Password}
            type="password"
            placeholder={i18n._(t`Password`)}
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
  );
};
