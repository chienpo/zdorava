import { createElement, useState } from 'react';

import { FooterView } from './footer-view';

export const Footer = () => {
  const [contactFormOpened, toggleContactForm] = useState<boolean>(false);

  return createElement(FooterView, {
    toggleContactForm,
    contactFormOpened,
  });
};
