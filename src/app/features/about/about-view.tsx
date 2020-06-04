import * as React from 'react';
import { Trans } from '@lingui/macro';
import { motion } from 'framer-motion';

import { Accordion } from 'app/ui/accordion';
import { AboutLogo, RESUME_PANELS, DEFAULT_RESUME_PANEL } from './components';
import {
  SectionAbout,
  GridContent,
  AccordionBox,
  DeveloperName,
  Position,
  LogoWrap,
} from './styled';

export const AboutView: React.FC = () => (
  <SectionAbout>
    <GridContent>
      <LogoWrap>
        <AboutLogo />
      </LogoWrap>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          initial: {
            opacity: 0,
            x: '100%',
          },
          enter: {
            opacity: 1,
            x: '0%',
            transition: { duration: 1 },
          },
          exit: {
            opacity: 0,
            x: '100%',
            transition: { duration: 1.5 },
          },
        }}
        style={{ position: 'relative' }}
      >
        <AccordionBox>
          <DeveloperName>
            <Trans>Hello, I'm Stepan</Trans>
            <Position>
              <Trans>Front-end (React-JS) Developer</Trans>
            </Position>
          </DeveloperName>
          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
          >
            <Accordion
              data={RESUME_PANELS}
              defaultPanel={DEFAULT_RESUME_PANEL}
            />
          </motion.div>
        </AccordionBox>
      </motion.div>
    </GridContent>
  </SectionAbout>
);
