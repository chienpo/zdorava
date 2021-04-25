import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { ContactFormTriggerStyled } from './styled';

interface Props {
  toggleContactForm: (prevState: boolean) => void;
}

export const ContactFormTrigger: FC<Props> = ({ toggleContactForm }) => (
  <ContactFormTriggerStyled
    aria-label="contacts"
    as="button"
    onClick={() => toggleContactForm(true)}
  >
    <FontAwesomeIcon icon={faEnvelope} />
  </ContactFormTriggerStyled>
);
