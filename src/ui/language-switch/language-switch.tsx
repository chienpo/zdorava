import { FC, createElement, useState } from 'react';

import { LanguageSwitchView } from './language-switch-view';

export interface LanguageSwitchProps {
  selectedLanguage: string;
  onChangeLanguage: (lang: string) => void;
}

export const LanguageSwitch: FC<LanguageSwitchProps> = ({
  selectedLanguage,
  onChangeLanguage,
}) => {
  const [checkedLanguage, toggleLanguage] = useState(selectedLanguage);

  const onChangeLanguageHandler = (selected: string) => {
    toggleLanguage(selected);
    onChangeLanguage(selected);
  };

  return createElement(LanguageSwitchView, {
    onChangeLanguage: onChangeLanguageHandler,
    selectedLanguage: checkedLanguage,
  });
};
