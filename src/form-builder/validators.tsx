import React from 'react';
import { Trans } from '@lingui/macro';

export const required = (value: string) => {
  if (value) {
    return null;
  }

  return <Trans>Required</Trans>;
};
