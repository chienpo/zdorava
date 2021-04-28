import * as React from 'react';
import { AnimatePresence } from 'framer-motion';

import { AnimatedDiv } from '~/animations/animated';
import { SectionAuth, GridContent } from './styled';
import { Layout } from '~/core/components';
import { AuthForm } from '~/features/auth/auth-form';

export const AuthView: React.FC = () => (
  <Layout>
    <SectionAuth>
      <GridContent>
        <AnimatedDiv animate="enter" exit="exit">
          <AnimatePresence>
            <AnimatedDiv
              initial="initial"
              variants={{
                initial: {
                  opacity: 0,
                  x: '100%',
                },
                enter: {
                  opacity: 1,
                  x: '0%',
                  transition: { duration: 1, delay: 1 },
                },
                exit: {
                  opacity: 0,
                  x: '100%',
                  transition: { duration: 1.5 },
                },
              }}
            >
              <AuthForm />
            </AnimatedDiv>
          </AnimatePresence>
        </AnimatedDiv>
      </GridContent>
    </SectionAuth>
  </Layout>
);
