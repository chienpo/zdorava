import React, { ChangeEvent } from 'react';

import { EN, RU } from 'constants/languages';
import { LanguageSwitchProps } from './language-switch';
import { InputRadio, Label, LangText, SwitchBox } from './styled';

export const LanguageSwitchView: React.FC<LanguageSwitchProps> = ({
  selectedLanguage,
  onChange,
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
