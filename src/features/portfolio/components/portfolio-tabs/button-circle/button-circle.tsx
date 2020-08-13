import React from 'react';

import { ButtonCircleStyled } from './styled';

interface Props {
  title: string;
}

export const ButtonCircle: React.FC<Props> = ({ title }) => (
  <ButtonCircleStyled title={title}>{title}</ButtonCircleStyled>
);
