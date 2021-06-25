import React, { FC } from 'react';
import { i18n } from '@lingui/core';

import { ErrorBox, IconError } from './styled';
import { FIELD_ERRORS_TRANSLATED } from '~/form-builder/errors';

interface Props {
  message: string | boolean;
}

export const ErrorMessage: FC<Props> = ({ message }) => (
  <ErrorBox>
    <IconError>i</IconError>
    {typeof message === 'object' && message}
    {typeof message === 'string' && i18n._(FIELD_ERRORS_TRANSLATED[message])}
  </ErrorBox>
);
