import React, { FC } from 'react';
import { Trans } from '@lingui/macro';
import posed, { PoseGroup } from 'react-pose';

import { FadeInOutVertically } from 'app/animations/fade-in-out-vertically';
import { ButtonCloseAnimated } from 'app/ui/button-close-animated';
import { ContactForm } from './components/contact-form';
import { FormSection, H2Styled, FormBox, SectionControls } from './styled';

interface Props {
  opened: boolean;
  onClose: () => void;
}

const BackdropFade = posed.div({
  enter: {
    position: 'fixed',
    height: '100vh',
    left: '0px',
    right: '0px',
    transition: { duration: 200 },
    zIndex: 5,
    backdropFilter: 'blur(3px)',
  },
  exit: {
    position: 'fixed',
    height: '100vh',
    left: '0px',
    right: '0px',
    transition: { duration: 200, delay: 400 },
    zIndex: 5,
    backdropFilter: 'blur(0px)',
  },
});

export const ContactsView: FC<Props> = ({ opened, onClose }) => (
  <>
    <PoseGroup
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
      }}
    >
      {opened && <BackdropFade key="fadeInOut" onClick={onClose} />}
    </PoseGroup>
    <PoseGroup style={{ position: 'fixed' }}>
      {opened && [
        <FadeInOutVertically key="fadeInOutVertically">
          <FormSection>
            <SectionControls>
              <ButtonCloseAnimated isOpen={opened} clicked={onClose} />
            </SectionControls>
            <FormBox>
              <H2Styled>
                <Trans>Write me</Trans>
              </H2Styled>
              <ContactForm onEscapeClicked={onClose} />
            </FormBox>
          </FormSection>
        </FadeInOutVertically>,
      ]}
    </PoseGroup>
  </>
);
