import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { LazyImage } from 'ui/lazy-image';
import { GridLogoWrapper, StyledMotionFigure } from './styled';

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
  <motion.div animate="enter" exit="exit">
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
        {logos.map(({ left, top, alt, src }) => (
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
            <LazyImage alt={alt} src={src} srcSet={src} />
          </StyledMotionFigure>
        ))}
      </GridLogoWrapper>
    </AnimatePresence>
  </motion.div>
);
