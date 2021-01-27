import React, { FC } from 'react';
import { FormSubscription } from 'final-form';

import { ErrorMessage } from '~/form-builder/field-error/error-message';

interface Props {
  meta: FormSubscription;
  name?: string;
}

export const FieldError: FC<Props> = ({ meta }) => {
  const errorMessage =
    meta && ((meta.touched && meta.error) || meta.submitError || null);

  if (meta && errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  return null;
};
