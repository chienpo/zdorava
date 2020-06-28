import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { IconSignature } from './icon-signature';
import { LoaderBox } from './styled';

export const PageLoader = () => (
  <motion.div animate="enter" exit="exit">
    <AnimatePresence>
      <LoaderBox
        variants={{
          initial: {
            opacity: 0,
          },
          enter: {
            opacity: 1,
          },
          exit: {
            opacity: 0,
          },
        }}
      >
        <IconSignature />
      </LoaderBox>
    </AnimatePresence>
  </motion.div>
);
