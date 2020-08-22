import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { getModernSrcSet } from '~/helpers/get-modern-src-set';
import { LazyImage } from '~/ui/lazy-image';
import { AnimatedDiv } from '~/animations/animated';
import { LOGOS_DATA } from './logos-data';
import { GridLogoWrapper, StyledMotionFigure } from './styled';

export const LogoGridView = () => (
  <AnimatedDiv animate="enter" exit="exit">
    <AnimatePresence>
      <GridLogoWrapper
        variants={{
          enter: {
            transition: {
              staggerChildren: 0.07,
              delayChildren: 0.2,
            },
          },
          exit: {
            transition: {
              staggerChildren: 0.05,
              staggerDirection: -1,
            },
          },
        }}
        initial="exit"
      >
        {LOGOS_DATA.map(({ left, top, alt, srcSet }) => (
          <StyledMotionFigure
            title={alt}
            key={alt}
            variants={{
              enter: {
                opacity: 1,
                left: 0,
                top: 0,
                scale: 1,
                transition: { duration: 2 },
              },
              exit: {
                opacity: 0,
                scale: 2,
                left,
                top,
                transition: { duration: 2, delay: 0.4 },
              },
            }}
          >
            <LazyImage
              alt={alt}
              src={getModernSrcSet(srcSet)}
              srcSet={getModernSrcSet(srcSet)}
            />
          </StyledMotionFigure>
        ))}
      </GridLogoWrapper>
    </AnimatePresence>
  </AnimatedDiv>
);
