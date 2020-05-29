import { createElement, useState } from 'react';

import { AccordionView } from './accordion-view';

interface AccordionData {
  [key: string]: {
    panelTitle: string;
    content: any;
  };
}

interface Props {
  data: AccordionData;
  defaultPanel?: string;
}

export const Accordion: React.FC<Props> = ({ data, defaultPanel }) => {
  const [expanded, setExpanded] = useState<false | string>(
    defaultPanel || false
  );

  return createElement(AccordionView, {
    expanded,
    setExpanded,
    data,
  });
};
