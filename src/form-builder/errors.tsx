import { i18nMark } from '@lingui/react';

export const EMAIL_NOT_FOUND = 'EMAIL_NOT_FOUND';
export const INVALID_PASSWORD = 'INVALID_PASSWORD';
export const TOO_MANY_ATTEMPTS_TRY_LATER = 'TOO_MANY_ATTEMPTS_TRY_LATER';
const INVALID = 'Invalid';
const REQUIRED = 'Required';

export const FIELD_ERRORS_TRANSLATED: { [key: string]: string } = {
  [EMAIL_NOT_FOUND]: i18nMark('Email not found'),
  [INVALID_PASSWORD]: i18nMark('Invalid password'),
  [INVALID]: i18nMark('Invalid'),
  [REQUIRED]: i18nMark('Required'),
};
