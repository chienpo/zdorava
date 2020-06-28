import * as React from 'react';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import lazySizes from 'lazysizes';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;

lazySizes.cfg.lazyClass = 'lazyload';

export const LazyImage: React.FC<{
  alt: string;
  src: string;
  srcThumbnail: string;
  style?: { [key: string]: string };
}> = ({ alt, src, srcThumbnail, style }) => (
  <StyledImg
    className="lazyload"
    alt={alt}
    data-sizes="auto"
    data-srcset={`${srcThumbnail} 500w, ${srcThumbnail} 640w, ${src} 1024w`}
    data-src={src}
    style={style}
  />
);
