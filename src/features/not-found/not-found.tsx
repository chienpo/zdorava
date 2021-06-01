import * as React from 'react';
import { Trans } from '@lingui/react';

import { AnimatedDiv } from '~/animations/animated';
import { Layout } from '~/core/components';
import { SectionNotFound, Overlay } from './styled';

export const NotFound = () => (
  <Layout>
    <SectionNotFound>
      <Overlay>
        <AnimatedDiv
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 1.5 },
          }}
          exit={{
            opacity: 0,
          }}
        >
          <Trans>404</Trans>
        </AnimatedDiv>
      </Overlay>
    </SectionNotFound>
  </Layout>
);
