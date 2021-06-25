import React, { FC } from 'react';

import { AnimatePresence } from 'framer-motion';
import { Trans } from '@lingui/macro';

import { Layout } from '~/core/components';
import { AnimatedDiv } from '~/animations/animated';
import { Overlay, SectionNotFound } from '~/features/not-found/styled';

export const SomethingWentWrong: FC = () => (
  <Layout>
    <SectionNotFound>
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
            <Trans>Oops ;)</Trans>
          </AnimatedDiv>
        </Overlay>
      </AnimatePresence>
    </SectionNotFound>
  </Layout>
);
