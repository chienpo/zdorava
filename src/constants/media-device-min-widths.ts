export enum MinWidthResolutions {
  MOBILE = 'MOBILE',
  SM = 'SM',
  LG = 'LG',
  Screens = 'Screens',
}

export const MIN_WIDTH_RESOLUTIONS: { [key: string]: number } = {
  [MinWidthResolutions.MOBILE]: 321,
  [MinWidthResolutions.SM]: 768,
  [MinWidthResolutions.LG]: 1224,
  [MinWidthResolutions.Screens]: 1824,
};
