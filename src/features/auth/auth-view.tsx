import * as React from 'react';
import { Trans } from '@lingui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { AnimatedDiv } from '~/animations/animated';
import { Layout } from '~/core/components';
import { AuthForm } from '~/features/auth/components';
import { SectionAuth, GridContent } from './styled';
import { H1 } from '~/ui/headings';
import { BLACK_20 } from '~/constants/colors';

export const AuthView: React.FC = () => (
  <Layout>
    <SectionAuth>
      <GridContent>
        <AnimatedDiv
          initial={{
            opacity: 0,
            x: '100%',
          }}
          animate={{
            opacity: 1,
            x: '0%',
            transition: { duration: 1, delay: 1 },
          }}
          exit={{
            opacity: 0,
            x: '100%',
            transition: { duration: 1.5 },
          }}
        >
          <H1 style={{ textAlign: 'center' }}>
            <FontAwesomeIcon icon={faSignOutAlt} size="2x" color={BLACK_20} />
            <span
              style={{
                display: 'block',
                width: '0',
                height: '0',
                overflow: 'hidden',
              }}
            >
              <Trans>Sign in</Trans>
            </span>
          </H1>
          <AuthForm />
        </AnimatedDiv>
      </GridContent>
    </SectionAuth>
  </Layout>
);
