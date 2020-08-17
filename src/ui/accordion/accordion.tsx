import { createElement, useState, ReactElement, FC } from 'react';

import { AccordionView } from './accordion-view';

export interface AccordionData {
  [key: string]: {
    panelTitle: string;
    content: () => ReactElement;
  };
}

interface Props {
  data: AccordionData;
  defaultPanel?: string;
}

export const Accordion: FC<Props> = ({ data, defaultPanel }) => {
  const [expanded, setExpanded] = useState<false | string>(
    defaultPanel || false
  );

  return createElement(AccordionView, {
    expanded,
    setExpanded,
    data,
  });
};
