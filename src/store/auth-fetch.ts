import { createEffect, Effect } from 'effector';

import { FIREBASE_API_KEY } from '~/constants/api';
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
  idToken: string;
  kind: string;
  localId: string;
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
    returnSecureToken: true,
  };

  const url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${FIREBASE_API_KEY}`;

  const request = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  return request.json();
});

fetchAuthData.pending.watch((/* pending */) => {
  // console.log(pending);
});

fetchAuthData.done.watch((response: AuthResponse) => {
  const expirationDate: Date = new Date(
    new Date().getTime() + Number(response.result.expiresIn) * 1000
  );

  localStorage.setItem('token', response.result.idToken);
  localStorage.setItem('expirationDate', expirationDate.toString());
  localStorage.setItem('userId', response.result.localId);

  authSuccess({
    idToken: response.result.idToken,
    userId: response.result.localId,
  });
  checkAuthTimeout({ expiresIn: Number(response.result.expiresIn) });

  if (response.result.error) {
    const { result } = response;

    authFail({ error: result.error });
  }
});

fetchAuthData.fail.watch(({ error }) => {
  // eslint-disable-next-line no-console
  console.error('error, rejected value', error);
});

fetchAuthData.finally.watch((data) => {
  if (data.status === 'done') {
    // const { result } = data;
    // console.log('result', result);
  } else {
    // const { error } = data;
    // console.log('error', error);
  }
});
