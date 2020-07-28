import * as React from 'react';
import { Trans } from '@lingui/macro';
import { motion, AnimatePresence } from 'framer-motion';

import { Accordion } from 'ui/accordion';
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
    <GridContent className="132">
      <LogoWrap>
        <AboutLogo />
      </LogoWrap>
      <motion.div animate="enter" exit="exit">
        <AnimatePresence>
          <motion.div
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
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </GridContent>
  </SectionAbout>
);
