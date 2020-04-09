import * as React from 'react';
import { Trans } from '@lingui/macro';

import aboutLogo from 'assets/images/about-logo.png';
import { RESUME, SKILLS } from 'app/constants/about';
import { Accordion } from 'app/ui/accordion/accordion';
import {
  SectionAbout,
  IntroduceImage,
  AccordionBox,
  DeveloperName,
  Position,
} from './styled';

export const AboutView = () => (
  <SectionAbout>
    <IntroduceImage>
      <img src={aboutLogo} alt="logo" />
    </IntroduceImage>
    <AccordionBox>
      <DeveloperName>
        <Trans>Stepan</Trans>
        &nbsp;
        <Trans>Lagunovsky</Trans>
      </DeveloperName>
      <Position>
        Front-End
        &nbsp;
        <strong>ReactJS</strong>
        &nbsp;
        <Trans>Developer</Trans>
      </Position>
      <Accordion data={RESUME} activePanel={SKILLS} />
    </AccordionBox>
  </SectionAbout>
);
