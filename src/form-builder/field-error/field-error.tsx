import React, { FC } from 'react';
import { FormSubscription } from 'final-form';

import { ErrorBox, IconError } from './styled';

interface Props {
  meta: FormSubscription;
}

export const FieldError: FC<Props> = ({ meta }) => {
  if (meta.error && meta.touched) {
    return (
      <ErrorBox>
        <IconError>i</IconError>
        {meta.error}
      </ErrorBox>
    );
  }

  return null;
};
