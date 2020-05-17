import { PanelOneView, PanelTwoView, PanelThreeView, PanelFourView } from "./resume-accordion-panels-view";

const PANEL_ABOUT = 'PANEL_ABOUT';
const PANEL_EXPERIENCE = 'PANEL_EXPERIENCE';
const PANEL_SKILLS = 'PANEL_SKILLS';
const PANEL_CERTIFICATES = 'PANEL_CERTIFICATES';

export const DEFAULT_RESUME_PANEL = PANEL_ABOUT;

export const RESUME_PANELS = {
  [PANEL_ABOUT]: { panelTitle: 'Experience', content: PanelOneView },
  [PANEL_EXPERIENCE]: { panelTitle: 'Languages & achievements letters', content: PanelTwoView },
  [PANEL_SKILLS]: { panelTitle: 'About', content: PanelThreeView },
  [PANEL_CERTIFICATES]: { panelTitle: 'Languages & achievements letters', content: PanelFourView },
}
