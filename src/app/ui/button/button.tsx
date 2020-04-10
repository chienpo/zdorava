import React, { FC } from 'react';

import { ButtonStyled } from './styled';

interface Props {
  children: string;
  plain: any;
  width: any;
}

export const Button: FC<any> = ({
  children,
  ...props
}: Props) => (
  <ButtonStyled {...props}>
    {children}
  </ButtonStyled>
);
