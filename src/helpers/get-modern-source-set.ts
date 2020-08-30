import { isChrome } from '~/utils/detect-browser';
import { WEBP, PNG } from '~/constants/file-formats';

export const getModernSourceSet = (sourceSetArray: string[]) => {
  const modernImgFormats = isChrome ? WEBP : PNG;

  return sourceSetArray.find((item: string) => item.includes(modernImgFormats));
};
