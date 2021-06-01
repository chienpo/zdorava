import { createEffect, Effect } from 'effector';

import {
  STORAGE_KEY_USER_ID,
  STORAGE_KEY_USER_EXPIRATION_DATE,
  STORAGE_KEY_USER_TOKEN,
} from '~/store/constants';
import { AuthFormModel } from '~/models/auth-form.model';

import {
  authFail,
  authStart,
  authSuccess,
  checkAuthTimeout,
} from '~/store/auth-store';
import { AUTH_URL } from '~/constants/api';

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
  AuthFormModel,
  { [key: string]: string }
> = createEffect();

fetchAuthData.use(async ({ email, password }) => {
  authStart();

  const authData = {
    email,
    password,
    returnSecureToken: true,
  };

  const request = await fetch(AUTH_URL, {
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

  localStorage.setItem(STORAGE_KEY_USER_TOKEN, response.result.idToken);
  localStorage.setItem(
    STORAGE_KEY_USER_EXPIRATION_DATE,
    expirationDate.toString()
  );
  localStorage.setItem(STORAGE_KEY_USER_ID, response.result.localId);

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
