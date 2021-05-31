import { MIN_WIDTH_RESOLUTIONS } from '~/constants/media-device-min-widths';
import { useRespondToWindowInnerWidth } from '~/hooks/use-respond-to-window-inner-width';

export const useMediaMinWidth = (deviceType: string) => {
  const currentScreenWidth = Number(useRespondToWindowInnerWidth());

  return currentScreenWidth > MIN_WIDTH_RESOLUTIONS[deviceType];
};
