import * as React from 'react';
import { Trans } from '@lingui/react';
import { AnimatePresence } from 'framer-motion';

import { AnimatedDiv } from '~/animations/animated';
import { SectionNotFound, Overlay } from './styled';

export const NotFoundView = () => (
  <SectionNotFound animate="enter" exit="exit">
    <AnimatePresence>
      <Overlay>
        <AnimatedDiv
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
        </AnimatedDiv>
      </Overlay>
    </AnimatePresence>
  </SectionNotFound>
);
