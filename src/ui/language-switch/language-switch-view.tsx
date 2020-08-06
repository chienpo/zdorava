import React, { ChangeEvent } from 'react';

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
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChangeLanguage(event.target.value)
        }
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
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChangeLanguage(event.target.value)
        }
      />
      <LangText>ru</LangText>
    </Label>
  </Switch>
);
