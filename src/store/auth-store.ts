import { createStore, createEvent, Event } from 'effector';

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

const initialState = {
  token: '',
  userId: localStorage.getItem('userId') || '',
  error: '',
  loading: false,
  authRedirectPath: '/',
};

export const $authStore = createStore(initialState);

$authStore
  .on(authStart, (state) => {
    return { ...state, loading: true };
  })
  .on(authSuccess, (state: AuthState, action) => {
    return {
      ...state,
      token: action.idToken,
      userId: action.userId,
      error: '',
      loading: false,
    };
  })
  .on(authFail, (state, action) => {
    return { ...state, error: action.error, loading: false };
  })
  .on(signOut, (state) => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');

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
  .on(setAuthRedirectPath, (state, action) => {
    return { ...state, authRedirectPath: action.path };
  });
