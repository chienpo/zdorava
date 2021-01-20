import React, { ChangeEvent } from 'react';

import { Languages } from '~/constants/languages';
import { InputRadio, Label, LangText, SwitchBox } from './styled';

export interface LanguageSwitchProps {
  selectedLanguage: string;
  onChange?: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  onToggleLanguage?: (lang: string) => void;
}

export const LanguageSwitchView: React.FC<LanguageSwitchProps> = ({
  selectedLanguage,
  onChange,
}) => (
  <SwitchBox>
    {Object.values(Languages).map((lang) => (
      <Label>
        <InputRadio
          checked={selectedLanguage === lang}
          name="lang"
          type="radio"
          value={lang}
          onChange={onChange}
        />
        <LangText>{lang}</LangText>
      </Label>
    ))}
  </SwitchBox>
);
