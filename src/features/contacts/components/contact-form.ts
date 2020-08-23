import { createElement, useState } from 'react';
import emailjs from 'emailjs-com';

import { useKeyPress } from '~/hooks/use-key-press';
import { KEY_CODE_ESCAPE } from '~/constants/key-codes';
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '~/constants/contacts';
import { ContactFormView } from './contact-form-view';

const initialValues = {};

interface Props {
  onEscapeClicked: () => void;
}

export const ContactForm: React.FC<Props> = ({ onEscapeClicked }) => {
  const [requestLoading, setRequestLoading] = useState<boolean>(false);
  const [messageSent, setMessageSent] = useState<boolean>(false);

  useKeyPress(KEY_CODE_ESCAPE, onEscapeClicked);

  const onSubmit = (values: { [key: string]: string }) => {
    setRequestLoading(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, values, USER_ID)
      .then(() => {
        setMessageSent(true);
        setRequestLoading(false);
      })
      .finally(() => {
        setTimeout(() => setMessageSent(false), 2000);
      })
      .catch(error => {
        setRequestLoading(false);
        throw error.text;
      });
  };

  return createElement(ContactFormView, {
    onSubmit,
    initialValues,
    requestLoading,
    messageSent,
  });
};
