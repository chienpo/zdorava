import React from 'react';

import {
  GridItem,
  GridLogoWrapper,
  StyledPosedFigure,
  StyledImg,
} from './styled';

interface Logo {
  left: number;
  top: number;
  alt: string;
  src: string;
}

interface Props {
  logos: Logo[];
}

export const AboutLogoView: React.FC<Props> = ({ logos }) => (
  <GridLogoWrapper>
    {logos.map(({ left, top, alt, src }) => (
      <GridItem key={alt}>
        <StyledPosedFigure left={left} top={top} alt={alt}>
          <StyledImg src={src} alt={alt} />
        </StyledPosedFigure>
      </GridItem>
    ))}
  </GridLogoWrapper>
);
