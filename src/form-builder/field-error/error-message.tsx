import React, { FC } from 'react';
import { I18n } from '@lingui/react';

import { ErrorBox, IconError } from './styled';
import { FIELD_ERRORS_TRANSLATED } from '~/form-builder/errors';

interface Props {
  message: string | boolean;
}

export const ErrorMessage: FC<Props> = ({ message }) => (
  <ErrorBox>
    <IconError>i</IconError>
    {typeof message === 'object' && message}
    {typeof message === 'string' && (
      <I18n>{({ i18n }) => i18n._(FIELD_ERRORS_TRANSLATED[message])}</I18n>
    )}
  </ErrorBox>
);
