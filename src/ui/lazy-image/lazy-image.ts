import styled from 'styled-components';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import lazySizes from 'lazysizes';

import { lazyBlurUp } from './styled';

lazySizes.cfg.lazyClass = 'lazyload';

export const LazyImage = styled.img.attrs(({ style, alt, srcSet, src }) => ({
  className: 'lazyload blur-up',
  alt,
  'data-sizes': 'auto',
  'data-srcset': `${srcSet} 500w, ${srcSet} 640w, ${src} 1024w`,
  'data-src': src,
  style,
}))`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  ${lazyBlurUp};
`;
