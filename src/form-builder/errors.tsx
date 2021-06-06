import { defineMessage } from '@lingui/macro';
import { MessageDescriptor } from '@lingui/core';

export const EMAIL_NOT_FOUND = 'EMAIL_NOT_FOUND';
export const INVALID_PASSWORD = 'INVALID_PASSWORD';
export const TOO_MANY_ATTEMPTS_TRY_LATER = 'TOO_MANY_ATTEMPTS_TRY_LATER';
const INVALID = 'Invalid';
const REQUIRED = 'Required';

export const FIELD_ERRORS_TRANSLATED: { [key: string]: MessageDescriptor } = {
  [EMAIL_NOT_FOUND]: defineMessage({ message: 'Email not found' }),
  [INVALID_PASSWORD]: defineMessage({ message: 'Invalid password' }),
  [INVALID]: defineMessage({ message: 'Invalid' }),
  [REQUIRED]: defineMessage({ message: 'Required' }),
};
