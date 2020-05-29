import React from 'react';
import { Trans } from '@lingui/macro';

export const required = (value: any) => {
  if (value) {
    return undefined;
  }

  return <Trans>Required</Trans>;
};
