import React from 'react';

import { EN, RU } from '../../constants/languages';
import { SwitchProps } from './language-switch';
import { Label, Separator, Switch, InputRadio, LangText } from './styled';

export const LanguageSwitchView: React.FC<SwitchProps> = ({
  value,
  onChange,
}) => (
  <Switch>
    <Label>
      <InputRadio
        checked={value === EN}
        name="lang"
        type="radio"
        value={EN}
        onChange={(event: any) => onChange(event.target.value)}
        hidden
      />
      <LangText>en</LangText>
    </Label>
    <Separator />
    <Label>
      <InputRadio
        checked={value === RU}
        name="lang"
        type="radio"
        value={RU}
        onChange={(event: any) => onChange(event.target.value)}
        hidden
      />
      <LangText>ru</LangText>
    </Label>
  </Switch>
);
