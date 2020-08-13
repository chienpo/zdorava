import { FC, createElement, useState, ChangeEvent } from 'react';

import { LanguageSwitchView } from './language-switch-view';

export interface LanguageSwitchProps {
  selectedLanguage: string;
  onChange?: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  onToggleLanguage?: (lang: string) => void;
}

export const LanguageSwitch: FC<LanguageSwitchProps> = ({
  selectedLanguage,
  onToggleLanguage,
}) => {
  const [checkedLanguage, toggleLanguage] = useState(selectedLanguage);

  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    toggleLanguage(target.value);
    if (onToggleLanguage) {
      onToggleLanguage(target.value);
    }
  };

  return createElement(LanguageSwitchView, {
    onChange: onChangeHandler,
    selectedLanguage: checkedLanguage,
  });
};
