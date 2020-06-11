import React from 'react';

import { EN, RU } from 'constants/languages';
import { LanguageSwitchProps } from './language-switch';
import { Label, Separator, Switch, InputRadio, LangText } from './styled';

export const LanguageSwitchView: React.FC<LanguageSwitchProps> = ({
  selectedLanguage,
  onChangeLanguage,
}) => (
  <Switch>
    <Label>
      <InputRadio
        checked={selectedLanguage === EN}
        name="lang"
        type="radio"
        value={EN}
        onChange={(event: any) => onChangeLanguage(event.target.value)}
        hidden
      />
      <LangText>en</LangText>
    </Label>
    <Separator />
    <Label>
      <InputRadio
        checked={selectedLanguage === RU}
        name="lang"
        type="radio"
        value={RU}
        onChange={(event: any) => onChangeLanguage(event.target.value)}
        hidden
      />
      <LangText>ru</LangText>
    </Label>
  </Switch>
);
