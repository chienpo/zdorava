import { FC, createElement } from 'react';

import { LanguageSwitchView } from './language-switch-view';

export interface LanguageSwitchProps {
  onChangeLanguage: (name: string) => void;
  selectedLanguage: string;
}

export interface SwitchProps {
  onChange: (checked: string) => void;
  value: string;
}

export const LanguageSwitch: FC<LanguageSwitchProps> = ({ selectedLanguage, onChangeLanguage }) => {

  return createElement<SwitchProps>(LanguageSwitchView, {
    onChange: (checked: string) => onChangeLanguage(checked),
    value: selectedLanguage,
  });
};
