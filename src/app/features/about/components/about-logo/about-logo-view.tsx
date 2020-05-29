import React from 'react';
import posed from 'react-pose';

import { GridFigure, GridLogo } from './styled';

const PosedFigure = posed.figure({
  enter: {
    opacity: 1,
    left: 0,
    top: 0,
    scale: 1,
    transition: { duration: 1200, delay: 400 },
    position: 'relative',
  },
  exit: {
    opacity: 0,
    scale: 5,
    left: ({ left }: { left: number }) => `${left}%`,
    top: ({ top }: { top: number }) => `${top}%`,
    transition: { duration: 1200, delay: 100 },
    position: 'relative',
  },
});

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
  <GridLogo>
    {logos.map(({ left, top, alt, src }) => (
      <GridFigure key={alt}>
        <PosedFigure left={left} top={top} src={src}>
          <img src={src} alt={alt} />
        </PosedFigure>
      </GridFigure>
    ))}
  </GridLogo>
);
