import { FC, createElement, useState } from 'react';

import { AccordionView } from './accordion-view';

interface AccordionRow {
  panelTitle: string;
  content: any;
}

interface AccordionData {
  [key: string]: AccordionRow;
}

interface Props {
  data: AccordionData;
  defaultPanel: string;
}

export interface PanelsProps {
  data: AccordionData;
  activePanel: string;
  onTogglePanel: (tabName: string) => void;
}

export const Accordion: FC<Props> = ({ data, defaultPanel }) => {
  const [activePanel, toggleTab] = useState(defaultPanel);

  return createElement(AccordionView, {
    data,
    activePanel,
    onTogglePanel: (tabName: string) => toggleTab(tabName),
  });
};
