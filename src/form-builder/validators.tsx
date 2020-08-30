import React from 'react';
import { Trans } from '@lingui/react';

export const required = (value: string) => {
  if (value) {
    return null;
  }

  return <Trans>Required</Trans>;
};
