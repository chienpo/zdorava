import { defineMessage } from '@lingui/macro';

import { ResumeAccordionPanels } from './types';
import {
  PanelAboutView,
  PanelExperienceView,
  PanelTechnologyStackView,
  PanelLanguagesAndCertificatesView,
} from './resume-accordion-panels';

export const RESUME_ACCORDION_DATA = {
  [ResumeAccordionPanels.About]: {
    panelTitle: defineMessage({ message: 'About' }),
    content: PanelAboutView,
  },
  [ResumeAccordionPanels.Experience]: {
    panelTitle: defineMessage({ message: 'Experience' }),
    content: PanelExperienceView,
  },
  [ResumeAccordionPanels.Skills]: {
    panelTitle: defineMessage({ message: 'Technology stack & skills' }),
    content: PanelTechnologyStackView,
  },
  [ResumeAccordionPanels.Certificates]: {
    panelTitle: defineMessage({ message: 'Certificates' }),
    content: PanelLanguagesAndCertificatesView,
  },
};
