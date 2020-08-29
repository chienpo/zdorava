import React, { FC } from 'react';

import { ButtonProps } from './types';

import { ButtonStyled } from './styled';

export const Button: FC<ButtonProps> = ({
  className,
  plain,
  width,
  children,
  ...props
}) => (
  <ButtonStyled plain={plain} width={width} className={className} {...props}>
    {children}
  </ButtonStyled>
);
