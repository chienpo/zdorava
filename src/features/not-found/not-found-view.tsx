import * as React from 'react';
import { Trans } from '@lingui/macro';
import { AnimatePresence, motion } from 'framer-motion';

import { SectionNotFound, Overlay } from './styled';

export const NotFoundView = () => (
  <SectionNotFound animate="enter" exit="exit">
    <AnimatePresence>
      <Overlay>
        <motion.div
          initial="exit"
          variants={{
            enter: {
              opacity: 1,
            },
            exit: {
              opacity: 0,
              transition: { duration: 1.5 },
            },
          }}
        >
          <Trans>404</Trans>
        </motion.div>
      </Overlay>
    </AnimatePresence>
  </SectionNotFound>
);
