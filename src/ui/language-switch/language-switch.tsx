import { FC, createElement } from 'react';

import { LanguageSwitchView } from './language-switch-view';

export interface LanguageSwitchProps {
  selectedLanguage: string;
  onChangeLanguage: (lang: string) => void;
}

export const LanguageSwitch: FC<LanguageSwitchProps> = ({
  selectedLanguage,
  onChangeLanguage,
}) =>
  createElement(LanguageSwitchView, {
    onChangeLanguage: (checked: string) => onChangeLanguage(checked),
    selectedLanguage,
  });
