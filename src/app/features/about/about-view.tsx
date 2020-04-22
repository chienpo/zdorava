import * as React from 'react';
import { Trans } from '@lingui/macro';
import posed from 'react-pose';

import aboutLogo1 from 'assets/images/about-logo-0.png';
import aboutLogo2 from 'assets/images/about-logo-1.png';
import aboutLogo3 from 'assets/images/about-logo-2.png';
import aboutLogo4 from 'assets/images/about-logo-3.png';
import aboutLogo5 from 'assets/images/about-logo-4.png';
import aboutLogo6 from 'assets/images/about-logo-5.png';
import aboutLogo7 from 'assets/images/about-logo-6.png';
import aboutLogo8 from 'assets/images/about-logo-7.png';
import aboutLogo9 from 'assets/images/about-logo-8.png';
import { RESUME, SKILLS } from 'app/constants/about';
import { Accordion } from 'app/ui/accordion/accordion';
import {
  SectionAbout,
  AccordionBox,
  DeveloperName,
  Position,
  GridLogo,
  GridFigure,
} from './styled';


const Container = posed.div({
  enter: { staggerChildren: 10, applyAtStart: { height: '100%' } }
});

const Wrap = posed.div({
  enter: { opacity: 1, left: 0, position: 'relative', transition: {delay: 1250}, applyAtStart: { height: '100%' } },
  exit: { opacity: 0, left: '100%', position: 'relative', }
});

const PosedImg = posed.img({
  enter: {
    opacity: 1,
    left: 0,
    top: 0,
    scale: 1,
    transition: {duration: 1200, delay: 400},
    position: 'relative'
  },
  exit: {
    opacity: 0,
    scale: 5,
    left: ({ left }: any) => `${left}%`,
    top: ({ top }: any) => `${top}%`,
    transition: {duration: 1200, delay: 100},
    position: 'relative'
  }
});

export const AboutView = ({ key }: any) => (
  <Container key={key}>
    <SectionAbout>
      <GridLogo>
        <GridFigure><PosedImg left={150} top={-250} src={aboutLogo1} alt="logo" /></GridFigure>
        <GridFigure><PosedImg left={-270} top={170} src={aboutLogo2} alt="logo" /></GridFigure>
        <GridFigure><PosedImg left={220} top={-220} src={aboutLogo3} alt="logo" /></GridFigure>
        <GridFigure><PosedImg left={720} top={720} src={aboutLogo4} alt="logo" /></GridFigure>
        <GridFigure><PosedImg left={-420} top={120} src={aboutLogo5} alt="logo" /></GridFigure>
        <GridFigure><PosedImg left={-220} top={220} src={aboutLogo6} alt="logo" /></GridFigure>
        <GridFigure><PosedImg left={220} top={-120} src={aboutLogo7} alt="logo" /></GridFigure>
        <GridFigure><PosedImg left={-620} top={620} src={aboutLogo8} alt="logo" /></GridFigure>
        <GridFigure><PosedImg left={-620} top={620} src={aboutLogo9} alt="logo" /></GridFigure>
      </GridLogo>
      <Wrap>
        <AccordionBox>
          <DeveloperName>
            <Trans>Stepan Lagunovsky</Trans>
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
      </Wrap>
    </SectionAbout>
  </Container>
);
