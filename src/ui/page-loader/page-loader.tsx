import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { AnimatedDiv } from 'animations/animated';
import { IconSignature } from './icon-signature';
import { LoaderBox } from './styled';

interface Props {
  showSpinner?: boolean;
}

export const PageLoader: React.FC<Props> = ({ showSpinner = true }) => (
  <AnimatedDiv style={{ width: '100vw', height: '100vh' }}>
    <AnimatePresence>
      <LoaderBox
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          initial: {
            opacity: 0,
          },
          enter: {
            opacity: 1,
            transition: { duration: 0.4 },
          },
          exit: {
            opacity: 0,
          },
        }}
      >
        {showSpinner && <IconSignature />}
      </LoaderBox>
    </AnimatePresence>
  </AnimatedDiv>
);
