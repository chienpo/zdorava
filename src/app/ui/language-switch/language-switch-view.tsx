import React from 'react';

import { SwitchProps } from './language-switch';
import { Label, Separator, Switch } from './styled';

export const LanguageSwitchView: React.FC<SwitchProps> = ({
  value,
  onChange,
}) => (
  <Switch>
    <Label>
      <input
        checked={value === 'en'}
        name="lang"
        type="radio"
        value="en"
        onChange={(event: any) => onChange(event.target.value)}
      />
      <span>en</span>
    </Label>
    <Separator />
    <Label>
      <input
        checked={value === 'ru'}
        name="lang"
        type="radio"
        value="ru"
        onChange={(event: any) => onChange(event.target.value)}
      />
      <span>ru</span>
    </Label>
  </Switch>
);