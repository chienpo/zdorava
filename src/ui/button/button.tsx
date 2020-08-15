import React, { ButtonHTMLAttributes, FC } from 'react';

import { ButtonStyled } from './styled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  plain?: boolean;
  width?: string;
}

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
