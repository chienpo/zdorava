import { createStore, createEvent, Event } from 'effector';

import {
  STORAGE_KEY_USER_ID,
  STORAGE_KEY_USER_TOKEN,
  STORAGE_KEY_USER_EXPIRATION_DATE,
} from './constants';

export const authUser: Event<{
  email: string;
  password: string;
  isSignup: boolean;
}> = createEvent();
export const authStart = createEvent();
export const authSuccess: Event<{
  idToken: string;
  userId: string;
}> = createEvent();
export const authFail: Event<{ error: string }> = createEvent();
export const signOut = createEvent();
export const checkAuthTimeout: Event<{
  expiresIn: number;
}> = createEvent();
export const setAuthRedirectPath: Event<{
  path: string;
}> = createEvent();

export interface AuthState {
  token?: string;
  userId?: string;
  error?: string;
  loading: boolean;
  authRedirectPath: string;
}

export const INITIAL_USER_ID = localStorage.getItem(STORAGE_KEY_USER_ID) || '';

const initialState = {
  token: '',
  userId: INITIAL_USER_ID,
  error: '',
  loading: false,
  authRedirectPath: '/',
};

export const $authStore = createStore(initialState);

$authStore
  .on(authStart, (state) => ({ ...state, loading: true }))
  .on(authSuccess, (state: AuthState, action) => ({
    ...state,
    token: action.idToken,
    userId: action.userId,
    error: '',
    loading: false,
  }))
  .on(authFail, (state, action) => ({
    ...state,
    error: action.error,
    loading: false,
  }))
  .on(signOut, (state) => {
    localStorage.removeItem(STORAGE_KEY_USER_TOKEN);
    localStorage.removeItem(STORAGE_KEY_USER_EXPIRATION_DATE);
    localStorage.removeItem(STORAGE_KEY_USER_ID);

    return {
      ...state,
      token: '',
      userId: '',
    };
  })
  .on(checkAuthTimeout, (state: AuthState, action) => {
    setTimeout(() => {
      signOut();
    }, action.expiresIn * 1000);
  })
  .on(setAuthRedirectPath, (state, action) => ({
    ...state,
    authRedirectPath: action.path,
  }));

export const checkAuthLogoutHandler = () => {
  const expirationTime = localStorage.getItem(STORAGE_KEY_USER_EXPIRATION_DATE);

  if (expirationTime) {
    const logoutTime = new Date(expirationTime);
    const currentTime = new Date();

    if (currentTime > logoutTime) {
      localStorage.removeItem(STORAGE_KEY_USER_ID);
      localStorage.removeItem(STORAGE_KEY_USER_TOKEN);
      localStorage.removeItem(STORAGE_KEY_USER_EXPIRATION_DATE);
    }
  }
};
