import React, { FC } from 'react';
import { Trans } from '@lingui/macro';
import { motion, AnimatePresence } from 'framer-motion';

import { ButtonCloseAnimated } from 'app/ui/button-close-animated';
import { Backdrop } from 'app/ui/backdrop';
import { ContactForm } from './components/contact-form';
import {
  FormSection,
  H2Styled,
  FormBox,
  SectionControls,
  StyledMotionContactFormWrapper,
} from './styled';

interface Props {
  opened: boolean;
  onClose: () => void;
}

export const ContactsView: FC<Props> = ({ opened, onClose }) => (
  <StyledMotionContactFormWrapper
    initial="closed"
    animate={opened ? 'open' : 'closed'}
  >
    <AnimatePresence>
      {opened && <Backdrop onClick={onClose} />}
    </AnimatePresence>
    <AnimatePresence>
      {opened && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={{
            open: {
              y: '0',
              transition: { duration: 0.4 },
            },
            closed: {
              y: '-100%',
              transition: { duration: 0.4, delay: 0.4 },
            },
          }}
        >
          <FormSection>
            <SectionControls>
              <ButtonCloseAnimated clicked={onClose} />
            </SectionControls>
            <FormBox>
              <H2Styled>
                <Trans>Write me</Trans>
              </H2Styled>
              <ContactForm onEscapeClicked={onClose} />
            </FormBox>
          </FormSection>
        </motion.div>
      )}
    </AnimatePresence>
  </StyledMotionContactFormWrapper>
);
