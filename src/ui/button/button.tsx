import React, { FC } from 'react';

import { ButtonStyled } from './styled';

interface Props {
  type: string;
  plain?: boolean;
  width?: string;
  disabled?: boolean;
  className?: string;
}

export const Button: FC<Props> = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};
