import React, { ChangeEvent } from 'react';

import { EN, RU } from '~/constants/languages';
import { InputRadio, Label, LangText, SwitchBox } from './styled';

export interface LanguageSwitchProps {
  selectedLanguage: string;
  onChange?: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  onToggleLanguage?: (lang: string) => void;
}

export const LanguageSwitchView: React.FC<LanguageSwitchProps> = ({
  selectedLanguage,
  onChange
}) => (
  <SwitchBox>
    <Label>
      <InputRadio
        checked={selectedLanguage === EN}
        name="lang"
        type="radio"
        value={EN}
        onChange={onChange}
      />
      <LangText>en</LangText>
    </Label>
    <Label>
      <InputRadio
        checked={selectedLanguage === RU}
        name="lang"
        type="radio"
        value={RU}
        onChange={onChange}
      />
      <LangText>ru</LangText>
    </Label>
  </SwitchBox>
);
