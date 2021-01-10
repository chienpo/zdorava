import React, { FC, useState } from 'react';
import { Form } from 'react-final-form';
import { i18nMark, I18n, Trans } from '@lingui/react';
import axios from 'axios';

import { FIELD_EMAIL, FIELD_PASSWORD } from './constants';
import { MoreLoader } from '~/ui/more-loader/more-loader';
import { InputField } from '~/form-builder';
import { required } from '~/form-builder/validators';
import { StyledButton } from './styled';
import { H1 } from '~/features/auth/styled';

const initialValues = {};

export const AuthFormView: FC = () => {
  const isLogIn = true;
  let url =
    'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCFb_IYOGeXg6-5cy9oJ9Uq4WeEg1oHTiM';

  if (isLogIn) {
    url =
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCFb_IYOGeXg6-5cy9oJ9Uq4WeEg1oHTiM';
  }

  const [requestLoading, setRequestLoading] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');

  // TODO: Update with store
  // const logout = () => {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('expirationDate');
  //   localStorage.removeItem('userId');
  //   return {
  //     // type: actionTypes.AUTH_LOGOUT
  //   };
  // };
  //
  // const checkAuthTimeout = (expirationTime: any) => {
  //   return (dispatch: any) => {
  //     setTimeout(() => {
  //       // dispatch(logout());
  //     }, expirationTime * 1000);
  //   };
  // };

  const onSubmit = (values: { [key: string]: string }) => {
    setRequestLoading(true);

    axios
      .post(url, { returnSecureToken: true, ...values })
      .then((response) => {
        const expirationDate: Date = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );

        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expirationDate', expirationDate.toString());
        localStorage.setItem('userId', response.data.localId);

        // yield put(actions.authSuccess(response.data.idToken, response.data.localId));
        // yield put(actions.checkAuthTimeout(response.data.expiresIn));
        // TODO: Remove next line
        window.location.reload();
        setRequestLoading(false);
      })
      .catch((error) => {
        setRequestLoading(false);
        setErrorText(error.message);
      });
  };

  // const authCheckState = () => {
  //   return (dispatch: any) => {
  //     const token = localStorage.getItem('token');
  //
  //     if (!token) {
  //       // dispatch(logout());
  //     } else {
  //       const storageExpirationDate: any = localStorage.getItem(
  //         'expirationDate'
  //       );
  //       const expirationDate = new Date(storageExpirationDate);
  //
  //       if (expirationDate <= new Date()) {
  //         // dispatch(logout());
  //       } else {
  //         const userId = localStorage.getItem('userId');
  //         // dispatch(authSuccess(token, userId));
  //         // dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
  //       }
  //     }
  //   };
  // };

  return (
    <>
      <H1>
        <Trans>Sign in</Trans>
      </H1>
      <I18n>
        {({ i18n }) => (
          <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={({ handleSubmit }) => (
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
                {errorText && <p>{errorText}</p>}
              </form>
            )}
          />
        )}
      </I18n>
    </>
  );
};
