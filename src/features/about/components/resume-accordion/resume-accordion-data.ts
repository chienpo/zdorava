import { i18nMark } from '@lingui/react';

import { ResumeAccordionPanels } from './types';
import {
  PanelAboutView,
  PanelExperienceView,
  PanelTechnologyStackView,
  PanelLanguagesAndCertificatesView,
} from './resume-accordion-panels';

export const RESUME_ACCORDION_DATA = {
  [ResumeAccordionPanels.About]: {
    panelTitle: i18nMark('About'),
    content: PanelAboutView,
  },
  [ResumeAccordionPanels.Experience]: {
    panelTitle: i18nMark('Experience'),
    content: PanelExperienceView,
  },
  [ResumeAccordionPanels.Skills]: {
    panelTitle: i18nMark('Technology stack & skills'),
    content: PanelTechnologyStackView,
  },
  [ResumeAccordionPanels.Certificates]: {
    panelTitle: i18nMark('Certificates'),
    content: PanelLanguagesAndCertificatesView,
  },
};
