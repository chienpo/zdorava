import React, { FC } from 'react';
import { Trans } from '@lingui/macro';
import posed, { PoseGroup } from 'react-pose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

import { FadeInOutVertically } from 'app/animations/fade-in-out-vertically';
import { ContactForm } from './components/contact-form';
import { FormSection, H2Styled, FormBox, CloseButton } from './styled';

interface Props {
  opened: boolean;
  onClose: () => any;
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
  }
});

export const ContactsView: FC<Props> = ({ opened, onClose }) => (
  <>
    <PoseGroup style={{position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw'}}>
      {opened && (
        <BackdropFade key="fadeInOut" />
      )}
    </PoseGroup>
    <PoseGroup style={{position: 'fixed'}}>
      {opened && [
        <FadeInOutVertically key="fadeInOutVertically">
          <FormSection>
            <CloseButton
              type="button"
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faWindowClose} />
            </CloseButton>
            <FormBox>
              <H2Styled>
                <Trans>Write me</Trans>
              </H2Styled>
              <ContactForm />
            </FormBox>
          </FormSection>
        </FadeInOutVertically>
      ]}
    </PoseGroup>
  </>
);
