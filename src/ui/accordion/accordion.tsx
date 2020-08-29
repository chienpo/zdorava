import { createElement, useState, FC } from 'react';

import { AccordionView, AccordionData } from './accordion-view';

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
