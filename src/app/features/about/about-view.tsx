import * as React from 'react';
import { Trans } from '@lingui/macro';
import posed, { PoseGroup } from 'react-pose';

import { Accordion } from 'app/ui/accordion';
import {
  RESUME_PANELS,
  DEFAULT_RESUME_PANEL,
  AboutLogo
} from './components';
import {
  SectionAbout,
  AccordionBox,
  DeveloperName,
  Position,
} from './styled';


const Container = posed.div({
  enter: { staggerChildren: 10, applyAtStart: { height: '100%' } }
});

const Wrap = posed.div({
  enter: { opacity: 1, left: 0, position: 'relative', transition: {delay: 1250}, applyAtStart: { height: '100%' } },
  exit: { opacity: 0, left: '100%', position: 'relative', }
});

export const AboutView = ({ poseKey }: any) => (
  <PoseGroup animateOnMount>
    <Container key={poseKey}>
      <SectionAbout>
        <AboutLogo />
        <Wrap>
          <AccordionBox>
            <DeveloperName>
              <Trans>Hello, I am Stepan</Trans>
            </DeveloperName>
            <Position>
              FrontEnd&nbsp;(ReactJS)&nbsp;
              <Trans>Developer</Trans>
            </Position>
            <Accordion data={RESUME_PANELS} defaultPanel={DEFAULT_RESUME_PANEL} />
          </AccordionBox>
        </Wrap>
      </SectionAbout>
    </Container>
  </PoseGroup>
);
