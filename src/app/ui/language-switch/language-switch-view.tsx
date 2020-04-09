import React from 'react';

import { EN, RU } from '../../constants/languages';
import { SwitchProps } from './language-switch';
import { Label, Separator, Switch } from './styled';

export const LanguageSwitchView: React.FC<SwitchProps> = ({
  value,
  onChange,
}) => (
  <Switch>
    <Label>
      <input
        checked={value === EN}
        name="lang"
        type="radio"
        value={EN}
        onChange={(event: any) => onChange(event.target.value)}
      />
      <span>en</span>
    </Label>
    <Separator />
    <Label>
      <input
        checked={value === RU}
        name="lang"
        type="radio"
        value={RU}
        onChange={(event: any) => onChange(event.target.value)}
      />
      <span>ru</span>
    </Label>
  </Switch>
);
