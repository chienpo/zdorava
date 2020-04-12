import * as React from 'react';
import { Trans } from '@lingui/macro';

import { SectionNotFound, Overlay } from './styled';

export const NotFoundView = () => (
  <SectionNotFound>
    <Overlay>
      <Trans>404</Trans>
    </Overlay>
  </SectionNotFound>
);
