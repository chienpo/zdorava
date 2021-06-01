import React from 'react';

import { getModernSourceSet } from '~/helpers/get-modern-source-set';
import { LazyImage } from '~/ui/lazy-image';
import { LOGO_GRID_DATA } from './logo-grid-data';
import { GridLogoWrapper, StyledMotionFigure } from './styled';

export const LogoGrid = () => (
  <GridLogoWrapper>
    {LOGO_GRID_DATA.map(({ left, top, alt, srcSet }) => (
      <StyledMotionFigure
        title={alt}
        key={alt}
        initial={{
          opacity: 0,
          scale: 2,
          left,
          top,
        }}
        animate={{
          opacity: 1,
          left: 0,
          top: 0,
          scale: 1,
          transition: { duration: 2 },
        }}
        exit={{
          opacity: 0,
          scale: 2,
          left,
          top,
          transition: { duration: 2, delay: 0.4 },
        }}
      >
        <LazyImage
          alt={alt}
          src={getModernSourceSet(srcSet)}
          srcSet={getModernSourceSet(srcSet)}
        />
      </StyledMotionFigure>
    ))}
  </GridLogoWrapper>
);
