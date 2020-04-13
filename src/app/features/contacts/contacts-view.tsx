import React, { FC } from 'react';
import { Trans } from '@lingui/macro';
import { PoseGroup } from 'react-pose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

import { FadeInOutVertically, FadeInOut } from 'app/animations/fade-in-out-vertically';
import { ContactForm } from './components/contact-form';
import { FormSection, FormSectionBackdrop, H2Styled, FormBox, CloseButton } from './styled';

interface Props {
  opened: boolean;
  onClose: () => any;
}

export const ContactsView: FC<Props> = ({ opened, onClose }) => (
  <PoseGroup style={{position: 'fixed'}}>
    {opened && [
      <FadeInOut key="fadeInOut">
        <FormSectionBackdrop />
      </FadeInOut>,
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
              <Trans>Contacts</Trans>
            </H2Styled>
            <ContactForm />
          </FormBox>
        </FormSection>
      </FadeInOutVertically>
    ]}
  </PoseGroup>
);
