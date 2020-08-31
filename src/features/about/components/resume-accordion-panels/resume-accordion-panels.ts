import { i18nMark } from '@lingui/react';

import {
  PanelAboutView,
  PanelExperienceView,
  PanelTechnologyStackView,
  PanelLanguagesAndCertificatesView,
} from './resume-accordion-panels-view';

const PANEL_ABOUT = 'PANEL_ABOUT';
const PANEL_EXPERIENCE = 'PANEL_EXPERIENCE';
const PANEL_SKILLS = 'PANEL_SKILLS';
const PANEL_CERTIFICATES = 'PANEL_CERTIFICATES';

export const DEFAULT_RESUME_PANEL = PANEL_ABOUT;

export const RESUME_PANELS = {
  [PANEL_ABOUT]: { panelTitle: i18nMark('About'), content: PanelAboutView },
  [PANEL_EXPERIENCE]: {
    panelTitle: i18nMark('Experience'),
    content: PanelExperienceView,
  },
  [PANEL_SKILLS]: {
    panelTitle: i18nMark('Technology stack & skills'),
    content: PanelTechnologyStackView,
  },
  [PANEL_CERTIFICATES]: {
    panelTitle: i18nMark('Languages & achievements letters'),
    content: PanelLanguagesAndCertificatesView,
  },
};
