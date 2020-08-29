import { FC, createElement, useState, ChangeEvent } from 'react';

import {
  LanguageSwitchView,
  LanguageSwitchProps,
} from './language-switch-view';

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
