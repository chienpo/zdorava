import { createElement } from 'react';
import { ContactsView } from './contacts-view';

export const Contacts = ({ opened }: any) => {

  return createElement(ContactsView, {opened})
};
