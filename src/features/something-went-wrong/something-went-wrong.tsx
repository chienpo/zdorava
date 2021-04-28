import React, { FC } from 'react';

import { AnimatePresence } from 'framer-motion';
import { Trans } from '@lingui/react';

import Header from '~/core/components/header';
import Footer from '~/core/components/footer';
import { AnimatedDiv } from '~/animations/animated';
import { Overlay, SectionNotFound } from '~/features/not-found/styled';

export const SomethingWentWrong: FC = () => (
  <>
    <Header />
    <main>
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
              <Trans>Oops ;)</Trans>
            </AnimatedDiv>
          </Overlay>
        </AnimatePresence>
      </SectionNotFound>
    </main>
    <Footer />
  </>
);
