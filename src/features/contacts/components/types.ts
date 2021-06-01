import { ContactFormModel } from '~/models/contact-form.model';

export interface Props {
  onEscapeClicked: () => void;
}

export interface ContactFormViewProps {
  onSubmit: (values: ContactFormModel) => void;
  requestLoading: boolean;
  messageSent: boolean;
}
