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

export type FileUrlType = string | ArrayBuffer | null;

export interface InputFileFieldProps extends InputFieldProps {
  onPreviewChange: (imageUrl: FileUrlType, fileLoading: boolean) => void;
}

export interface InputFieldLocalizedProps extends InputFieldProps {
  selectedLanguage: string;
}
