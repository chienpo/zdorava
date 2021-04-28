import { createElement, useState, FC } from 'react';
import emailjs from 'emailjs-com';

import {
  EMAIL_JS_SERVICE_ID,
  EMAIL_JS_TEMPLATE_ID,
  EMAIL_JS_USER_ID,
} from '~/constants/constants';
import { useKeyPress } from '~/hooks';
import { KEY_CODE_ESCAPE } from '~/constants/key-codes';
import { MESSAGE_SENT_TIMEOUT } from '~/constants/contacts';
import { ContactFormView } from './contact-form-view';

const initialValues = {};

interface Props {
  onEscapeClicked: () => void;
}

export const ContactForm: FC<Props> = ({ onEscapeClicked }) => {
  const [requestLoading, setRequestLoading] = useState<boolean>(false);
  const [messageSent, setMessageSent] = useState<boolean>(false);

  useKeyPress(KEY_CODE_ESCAPE, onEscapeClicked);

  const onSubmit = (values: { [key: string]: string }) => {
    setRequestLoading(true);

    emailjs
      .send(
        `${EMAIL_JS_SERVICE_ID}`,
        `${EMAIL_JS_TEMPLATE_ID}`,
        values,
        `${EMAIL_JS_USER_ID}`
      )
      .then(() => {
        setMessageSent(true);
        setRequestLoading(false);
      })
      .finally(() => {
        setTimeout(() => setMessageSent(false), MESSAGE_SENT_TIMEOUT);
      })
      .catch((error) => {
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
