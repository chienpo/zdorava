import * as React from 'react';
import { Trans } from '@lingui/macro';
import posed, { PoseGroup } from 'react-pose';
import { AnimatePresence } from 'framer-motion';

import { Accordion } from 'app/ui/accordion-animated/accordion';
import { AboutLogo, RESUME_PANELS, DEFAULT_RESUME_PANEL } from './components';
import {
  SectionAbout,
  AccordionBox,
  DeveloperName,
  Position,
  LogoWrap,
} from './styled';

const Container = posed.div({
  enter: { staggerChildren: 10, applyAtStart: { height: '100%' } },
});

const Wrap = posed.div({
  enter: {
    opacity: 1,
    left: 0,
    position: 'relative',
    transition: { delay: 1250 },
    applyAtStart: { height: '100%' },
  },
  exit: { opacity: 0, left: '100%', position: 'relative' },
});

export const AboutView: React.FC<{ poseKey: string }> = ({ poseKey }) => (
  <PoseGroup animateOnMount>
    <Container key={poseKey}>
      <SectionAbout>
        <LogoWrap>
          <AnimatePresence>
            <AboutLogo />
          </AnimatePresence>
        </LogoWrap>
        <Wrap>
          <AccordionBox>
            <DeveloperName>
              <Trans>Hello, I'm Stepan</Trans>
              <Position>
                <Trans>Front-end (React-JS) Developer</Trans>
              </Position>
            </DeveloperName>
            <Accordion
              data={RESUME_PANELS}
              defaultPanel={DEFAULT_RESUME_PANEL}
            />
          </AccordionBox>
        </Wrap>
      </SectionAbout>
    </Container>
  </PoseGroup>
);
