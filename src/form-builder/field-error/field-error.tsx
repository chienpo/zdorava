import React, { FC } from 'react';

import { ErrorBox, IconError } from './styled';

interface Props {
  meta: {
    error: string;
    touched: boolean;
  };
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
