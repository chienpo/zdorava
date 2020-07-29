import React, { FC } from 'react';

import { ButtonStyled } from './styled';

interface Props {
  children: string;
  plain: boolean;
  width: string;
  disabled: boolean;
}

export const Button: FC<any & Props> = ({ children, ...props }) => (
  <ButtonStyled {...props}>{children}</ButtonStyled>
);
