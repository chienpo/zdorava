import React from 'react';

import { ResumeAccordionPanels } from '~/features/about/components/resume-accordion/types';
import { RESUME_ACCORDION_DATA } from './resume-accordion-data';
import { Accordion } from '~/ui/accordion';

export const ResumeAccordion = () => (
  <Accordion
    data={RESUME_ACCORDION_DATA}
    defaultPanel={ResumeAccordionPanels.About}
  />
);
