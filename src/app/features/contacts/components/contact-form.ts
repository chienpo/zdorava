import { createElement } from 'react';

import { ContactFormView } from './contact-form-view';

export const FIELD_NAME = 'name';
export const FIELD_LAST_NAME = 'lastName';
export const FIELD_EMAIL = 'email';
export const FIELD_MESSAGE = 'message';

// const initialValues = {
//   [FIELD_NAME]: '',
//   [FIELD_LAST_NAME]: '',
//   [FIELD_EMAIL]: '',
//   [FIELD_MESSAGE]: '',
// };

const initialValues = {};

export const ContactForm = () => {
  const onSubmit = (values: any) => {
    console.info('1', values);
  };

  return createElement(ContactFormView, {
    onSubmit,
    initialValues,
  })
};
