import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import { I18n } from '@lingui/react';

import { PORTFOLIO_CATEGORIES_TABS_LABELS } from 'app/constants/portfolio';
import { PortfolioItemModel } from '../../../../../models/portfolio-item.model';
import { PORTFOLIO_IMAGES_PATH, SITE_URL } from '../../../../constants/site';
import {
  Item,
  ItemTitle,
  ItemFigure,
  ItemImage,
  ItemCategoryName,
  ItemCategoryLabel,
  ItemOrientationType,
} from './styled';

lazySizes.cfg.lazyClass = 'lazyload';

interface Props extends PortfolioItemModel {
  delayPerPixel: number;
  index: number;
  originIndex: number;
  originOffset: { current: { [key: string]: number } };
  selectedCategory: string;
  chunkType: string;
}

export const PortfolioChunkItemView: React.FC<Props> = ({
  onItemClick,
  selectedCategory,
  category,
  alt,
  description,
  thumbnailSrc,
  // For animation below
  delayPerPixel,
  index,
  originIndex,
  originOffset,
  chunkType,
  title,
}) => {
  const delayRef = useRef<number>(0);
  const offset = useRef<{ top: number; left: number }>({ top: 0, left: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    offset.current = {
      top: element.offsetTop,
      left: element.offsetLeft,
    };

    if (index === originIndex) {
      originOffset.current = offset.current;
    }
  }, [delayPerPixel, index, originIndex, originOffset]);

  useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left);
    const dy = Math.abs(offset.current.top - originOffset.current.top);
    const d = Math.sqrt(Math.sqrt(dx ** 2 + dy ** 2));
    delayRef.current = d * delayPerPixel;
  }, [delayPerPixel, originOffset]);

  const imgThumbnailSrc = `${SITE_URL}${PORTFOLIO_IMAGES_PATH}${category}-thumbnail/${thumbnailSrc}`;

  return (
    <I18n>
      {({ i18n }) => (
        <Item
          className={`${chunkType} ${selectedCategory}`}
          ref={ref}
          variants={{
            open: {
              x: 0,
              y: 0,
              transition: {
                x: { stiffness: 1000, velocity: -250, duration: 1.2 },
                y: {
                  stiffness: 1000,
                  velocity: -250,
                  duration: 1.2,
                  delay: 1.2,
                },
                border: { duration: 0.4 },
              },
            },
            closed: {
              x: 200,
              y: 200,
              transition: {
                x: { stiffness: 1000, duration: 1.6 },
                y: { stiffness: 1000, duration: 0.2 },
              },
            },
          }}
          custom={delayRef}
          onClick={onItemClick}
        >
          <ItemOrientationType>
            <ItemFigure>
              <ItemImage
                data-sizes="auto"
                alt={alt}
                srcSet={imgThumbnailSrc}
                className="lazyload blur-up"
              />
            </ItemFigure>
            <ItemCategoryName>
              <FontAwesomeIcon icon={faImage} />
              <ItemCategoryLabel>
                {i18n._(PORTFOLIO_CATEGORIES_TABS_LABELS[selectedCategory])}
              </ItemCategoryLabel>
            </ItemCategoryName>
            <ItemTitle>{title[i18n.language]}</ItemTitle>
          </ItemOrientationType>
        </Item>
      )}
    </I18n>
  );
};
