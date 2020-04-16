import { createElement, useState } from 'react';
import emailjs from 'emailjs-com';

import {
  SERVICE_ID,
  TEMPLATE_ID,
  USER_ID,
} from 'app/constants/contacts';
import { ContactFormView } from './contact-form-view';

const initialValues = {};

export const ContactForm = () => {
  const [requestLoading, setRequestLoading] = useState(false);

  const onSubmit = (values: any) => {
    setRequestLoading(true);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, values, USER_ID)
      .then(() => {
        setRequestLoading(false);
      }, (error) => {
        setRequestLoading(false);
        throw error.text
      });
  };

  return createElement(ContactFormView, {
    onSubmit,
    initialValues,
    requestLoading,
  })
};
