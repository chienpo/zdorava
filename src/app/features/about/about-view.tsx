import * as React from 'react';
import { Trans } from '@lingui/macro';

import { Accordion } from 'app/ui/accordion/accordion';
import {
  SectionAbout,
  IntroduceImage,
  AccordionBox,
  DeveloperName,
  Position,
} from './styled';
import { RESUME, SKILLS } from 'app/constants/about';
import aboutLogo from 'assets/images/about-logo.png';

export const AboutView = () => (
  <SectionAbout>
    <IntroduceImage>
      <img src={aboutLogo} alt="logo" />
    </IntroduceImage>
    <AccordionBox>
      <DeveloperName>
        <Trans>Stefan Lagunovsky</Trans>
      </DeveloperName>
      <Position>
        Front-End <strong>ReactJS</strong> <Trans>Developer</Trans>
      </Position>
      <Accordion data={RESUME} activePanel={SKILLS} />
    </AccordionBox>
  </SectionAbout>
);
