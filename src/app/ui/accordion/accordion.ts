import { createElement, useState } from 'react';

import { AccordionView } from './accordion-view';

interface Props {
  data: AccordionData;
  activePanel: string;
}

interface AccordionData {
  [key: string]: AccordionRow;
}

interface AccordionRow {
  title: string;
  content: ContentRow[];
}

interface ContentRow {
  label: string;
  text: string;
}

export interface PanelsProps {
  data: AccordionData;
  currentTab: string;
  onTogglePanel: (tabName: string) => void;
}

export const Accordion: React.FC<Props> = ({ data, activePanel }) => {
  const [currentTab, toggleTab] = useState(activePanel);

  return createElement<PanelsProps>(AccordionView, {
    data,
    currentTab,
    onTogglePanel: (tabName: string) => toggleTab(tabName),
  });
};
