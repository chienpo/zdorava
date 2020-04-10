import React, { FC } from 'react';

import { ContactForm } from './components/contact-form';
import { FormSection } from './styled';

interface Props {
  data: any;
}

export const ContactsView: FC<Props> = () => {

  return (
    <FormSection>
      <ContactForm />
    </FormSection>
  )
};
