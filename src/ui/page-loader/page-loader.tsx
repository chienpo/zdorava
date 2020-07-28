import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { IconSignature } from './icon-signature';
import { LoaderBox } from './styled';

export const PageLoader: React.FC<{ showSpinner?: boolean }> = ({
  showSpinner = true,
}) => (
  <motion.div style={{ width: '100vw', height: '100vh' }}>
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
  </motion.div>
);
