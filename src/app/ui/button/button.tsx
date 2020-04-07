import React, { FC } from 'react';

import { ButtonStyled } from './styled';

interface Props {
  children: string;
}

export const Button: FC<any> = ({ children, ...props }: Props) => (
  <ButtonStyled {...props}>
    {children}
  </ButtonStyled>
);
