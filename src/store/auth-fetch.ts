import { createEffect, Effect } from 'effector';

import {
  STORAGE_KEY_USER_ID,
  STORAGE_KEY_USER_EXPIRATION_DATE,
  STORAGE_KEY_USER_TOKEN,
} from '~/store/constants';
import { AuthFormSubmitValues } from '~/features/auth/auth-form/types';

import {
  authFail,
  authStart,
  authSuccess,
  checkAuthTimeout,
} from '~/store/auth-store';

interface AuthResponseData {
  displayName: string;
  email: string;
  expiresIn: string;
  token: string;
  kind: string;
  userId: string;
  refreshToken: string;
  registered: true;
}

interface AuthResponseErrorData {
  error: string;
}

interface AuthResponse {
  params: unknown;
  // TODO: Update any type for auth response result
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result: any | AuthResponseData | AuthResponseErrorData;
}

export const fetchAuthData: Effect<
  AuthFormSubmitValues,
  { [key: string]: string }
> = createEffect();

fetchAuthData.use(async ({ email, password }) => {
  authStart();

  const authData = {
    email,
    password,
  };

  const url = `${process.env.REACT_APP_BACKEND_URL}/users/signin`;

  const request = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  return request.json();
});

fetchAuthData.done.watch((response: AuthResponse) => {
  const apiJWTExpiresIn = 60 * 60;

  const expirationDate: Date = new Date(
    new Date().getTime() + apiJWTExpiresIn * 1000
  );

  localStorage.setItem(STORAGE_KEY_USER_TOKEN, response.result.token);
  localStorage.setItem(
    STORAGE_KEY_USER_EXPIRATION_DATE,
    expirationDate.toString()
  );
  localStorage.setItem(STORAGE_KEY_USER_ID, response.result.userId);

  authSuccess({
    token: response.result.token,
    userId: response.result.userId,
  });

  checkAuthTimeout({ expiresIn: apiJWTExpiresIn });

  if (response.result.error) {
    const { result } = response;

    authFail({ error: result.error });
  }
});
