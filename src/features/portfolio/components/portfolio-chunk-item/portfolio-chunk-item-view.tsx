import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { I18n } from '@lingui/react';
import { AnimatePresence } from 'framer-motion';

import { PortfolioPreviewItemModel } from '~/models/portfolio-item.model';

import { PORTFOLIO_CATEGORIES_TABS_LABELS } from '~/constants/portfolio';
import { PORTFOLIO_IMAGES_PATH, SITE_URL } from '~/constants/site';
import { ROUTE_NAME_PORTFOLIO_PROJECT } from '~/router/routes';
import {
  Item,
  ItemCategoryLabel,
  ItemCategoryName,
  ItemFigure,
  ItemOrientationType,
  ItemTitle,
  LazyImageStyled,
} from './styled';

interface Props {
  chunkType: string;
  delayPerPixel: number;
  index: number;
  originIndex: number;
  originOffset: { current: { [key: string]: number } };
  selectedCategory: string;
}

export const PortfolioChunkItemView: React.FC<
  Props & PortfolioPreviewItemModel
> = ({
  alt,
  category,
  chunkType,
  delayPerPixel,
  index,
  originIndex,
  originOffset,
  selectedCategory,
  thumbnailSrc,
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
      // TODO: Check this according to the lint
      // eslint-disable-next-line no-param-reassign
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
    <AnimatePresence>
      <I18n>
        {({ i18n }) => (
          <Item
            className={`${chunkType} ${selectedCategory}`}
            ref={ref}
            variants={{
              open: {
                x: 0,
                y: 0,
                scale: 1,
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
                scale: 0,
                transition: {
                  x: { stiffness: 1000, duration: 1.6 },
                  y: { stiffness: 1000, duration: 0.2 },
                },
              },
            }}
            custom={delayRef}
          >
            <ItemOrientationType
              routeName={ROUTE_NAME_PORTFOLIO_PROJECT}
              routeParams={{ id: alt }}
              activeClassName="active"
            >
              <ItemFigure>
                <LazyImageStyled
                  alt={alt}
                  src={imgThumbnailSrc}
                  srcSet={imgThumbnailSrc}
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
    </AnimatePresence>
  );
};
