import { isChrome } from '~/utils/detect-browser';
import { WEBP, PNG } from '~/constants/file-formats';

export const getModernSrcSet = (srcSetArray: string[]) => {
  const modernImgFormats = isChrome ? WEBP : PNG;

  return srcSetArray.find((item: string) => item.includes(modernImgFormats));
};
