import React from 'react';
import lazySizes from 'lazysizes';
import { motion, AnimatePresence } from 'framer-motion';
import 'lazysizes/plugins/attrchange/ls.attrchange';

import { GridLogoWrapper, StyledMotionFigure, StyledImg } from './styled';

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
            <StyledImg
              className="lazyload blur-up"
              alt={alt}
              data-sizes="auto"
              data-srcset={`${src} 500w,
            ${src} 640w,
            ${src} 1024w`}
              data-src={src}
            />
          </StyledMotionFigure>
        ))}
      </GridLogoWrapper>
    </AnimatePresence>
  </motion.div>
);
