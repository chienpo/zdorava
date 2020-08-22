import React, { FC } from 'react';
import { Trans } from '@lingui/react';
import { AnimatePresence } from 'framer-motion';

import { ButtonCloseAnimated } from '~/ui/button-close-animated';
import { Backdrop } from '~/ui/backdrop';
import { AnimatedDiv } from '~/animations/animated';
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
      {opened && (
        <AnimatedDiv
          initial="closed"
          animate="open"
          exit="closed"
          variants={{
            open: {
              marginTop: '0%',
              transition: { duration: 0.4 },
            },
            closed: {
              marginTop: '-100%',
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
        </AnimatedDiv>
      )}
    </AnimatePresence>
    <AnimatePresence>
      {opened && <Backdrop fixed={false} onClick={onClose} />}
    </AnimatePresence>
  </StyledMotionContactFormWrapper>
);
