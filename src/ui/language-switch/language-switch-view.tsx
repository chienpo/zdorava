import React, { ChangeEvent } from 'react';

import { EN, RU } from 'constants/languages';
import { LanguageSwitchProps } from './language-switch';
import { InputRadio, Label, LangText, SwitchBox } from './styled';

export const LanguageSwitchView: React.FC<LanguageSwitchProps> = ({
  selectedLanguage,
  onChangeLanguage,
}) => (
  <SwitchBox>
    <Label>
      <InputRadio
        checked={selectedLanguage === EN}
        name="lang"
        type="radio"
        value={EN}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChangeLanguage(event.target.value)
        }
      />
      <LangText>en</LangText>
    </Label>
    <Label>
      <InputRadio
        checked={selectedLanguage === RU}
        name="lang"
        type="radio"
        value={RU}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChangeLanguage(event.target.value)
        }
      />
      <LangText>ru</LangText>
    </Label>
  </SwitchBox>
);
