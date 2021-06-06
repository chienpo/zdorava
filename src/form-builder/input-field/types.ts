import { Props as ReactSelectProps } from 'react-select';

import { ChildrenOptional } from '~/lib/types';

export interface SelectFieldProps extends ReactSelectProps, ChildrenOptional {
  name: string;
  validate?: (value: string) => void;
}

export interface InputFieldProps extends ChildrenOptional {
  name: string;
  type?: string;
  validate?: (value: string) => void;
  placeholder?: string | '';
  disabled?: boolean;
}

export interface InputFieldLocalizedProps extends InputFieldProps {
  selectedLanguage: string;
}
