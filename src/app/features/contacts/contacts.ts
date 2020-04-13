import { createElement } from 'react';
import { ContactsView } from './contacts-view';

export const Contacts = ({ opened, onClose }: any) => {

  return createElement(ContactsView, {opened, onClose})
};
