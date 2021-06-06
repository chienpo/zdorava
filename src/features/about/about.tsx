import * as React from 'react';
import { Trans } from '@lingui/macro';

import { AnimatedDiv } from '~/animations/animated';
import { Layout } from '~/core/components';
import { LogoGrid, ResumeAccordion } from './components';
import {
  SectionAbout,
  GridContent,
  AccordionBox,
  DeveloperName,
  Position,
  LogoWrap,
} from './styled';

export const About: React.FC = () => (
  <Layout>
    <SectionAbout>
      <GridContent>
        <LogoWrap>
          <LogoGrid />
        </LogoWrap>
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
          <AccordionBox>
            <DeveloperName>
              <Trans>Hello, I&apos;m Stepan</Trans>
              <Position>
                <Trans>Front-end (React-JS) Developer</Trans>
              </Position>
            </DeveloperName>
            <ResumeAccordion />
          </AccordionBox>
        </AnimatedDiv>
      </GridContent>
    </SectionAbout>
  </Layout>
);
