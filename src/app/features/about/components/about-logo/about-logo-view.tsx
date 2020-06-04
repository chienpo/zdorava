import React from 'react';
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';

import {
  GridItem,
  GridLogoWrapper,
  StyledMotionFigure,
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

lazySizes.cfg.lazyClass = 'lazyload';

export const AboutLogoView: React.FC<Props> = ({ logos }) => (
  <GridLogoWrapper
    initial="initial"
    animate="show"
    exit="out"
    variants={{ out: { transition: { staggerChildren: 0.1 } } }}
  >
    {logos.map(({ left, top, alt, src }) => (
      <GridItem key={alt}>
        <StyledMotionFigure
          variants={{
            initial: {
              opacity: 0,
              scale: 2,
              left,
              top,
              transition: { duration: 0.2, delay: 0.4 },
            },
            show: {
              opacity: 1,
              left: 0,
              top: 0,
              scale: 1,
              transition: { duration: 1, delay: 1 },
            },
            out: {
              opacity: 0,
              scale: 2,
              left,
              top,
              transition: { duration: 0.2, delay: 0.4 },
            },
          }}
          initial="initial"
          animate="show"
          exit="out"
        >
          <StyledImg
            className="lazyload"
            alt={alt}
            data-sizes="auto"
            data-srcset={`${src} 500w,
            ${src} 640w,
            ${src} 1024w`}
            data-src={src}
          />
        </StyledMotionFigure>
      </GridItem>
    ))}
  </GridLogoWrapper>
);
