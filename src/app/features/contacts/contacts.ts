import { createElement } from 'react';
import { ContactsView } from './contacts-view';

interface Props {
  opened: boolean;
  onClose: () => void;
}

export const Contacts: React.FC<Props> = ({ opened, onClose }) => {
  return createElement(ContactsView, { opened, onClose });
};
