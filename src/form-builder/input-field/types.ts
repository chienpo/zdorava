import { ReactNode } from 'react';

import { Props as ReactSelectProps } from 'react-select';

export interface SelectFieldProps extends ReactSelectProps {
  name: string;
  validate?: (value: string) => void;
  children?: ReactNode;
}

export interface InputFieldProps {
  name: string;
  type?: string;
  validate?: (value: string) => void;
  children?: ReactNode;
  placeholder?: string | '';
  disabled?: boolean;
}
