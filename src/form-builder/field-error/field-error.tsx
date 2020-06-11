import React, { FC } from 'react';

import { ErrorBox, IconError } from './styled';

interface Meta {
  error: string;
  touched: boolean;
}

interface Props {
  meta: Meta;
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
