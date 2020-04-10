import React, { FC } from 'react';
import { Trans } from '@lingui/macro';

import { FadeInOutVertically } from 'app/animations/fade-in-out-vertically';
import { ContactForm } from './components/contact-form';
import { FormSection, H2Styled, FormBox } from './styled';

interface Props {
  opened: boolean;
}

export const ContactsView: FC<Props> = ({ opened }) => (
  <FadeInOutVertically pose={opened ? 'enter' : 'exit'}>
    <FormSection>
      <FormBox>
        <H2Styled>
          <Trans>Contacts</Trans>
        </H2Styled>
        <ContactForm />
      </FormBox>
    </FormSection>
  </FadeInOutVertically>
);
