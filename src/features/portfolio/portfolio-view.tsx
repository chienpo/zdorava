import React, { useEffect, useRef } from 'react';
import { Trans } from '@lingui/macro';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAnimation } from 'framer-motion';

import { PortfolioItemModel } from 'models/portfolio-item.model';

import { BLACK, WHITE } from 'constants/colors';
import { MoreLoader } from 'ui/more-loader/more-loader';
import { AnimatedDiv } from 'animations/animated';
import { PortfolioGrid } from './components/portfolio-grid/portfolio-grid';
import { PortfolioTabs } from './components/portfolio-tabs/portfolio-tabs';
import {
  AnimatedSectionStyled,
  ItemsLoadingSpinnerBox,
  ItemsLoadingStateDescription,
} from './styled';

interface Props {
  activeCategoryPayload: (name: string) => void;
  data: PortfolioItemModel[];
  getNextDataChunk: () => void;
  hasMore: boolean;
  selectedCategory: string;
}

export const PortfolioView: React.FC<Props> = ({
  activeCategoryPayload,
  data,
  getNextDataChunk,
  hasMore,
  selectedCategory,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const originOffset = useRef<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  return (
    <AnimatedSectionStyled
      variants={{
        enter: {
          backgroundColor: BLACK,
          transition: {
            duration: 1,
          },
        },
        exit: {
          backgroundColor: WHITE,
          transition: { duration: 0.4 },
        },
      }}
      initial="exit"
      animate="enter"
      exit="exit"
    >
      <PortfolioTabs
        selectedCategory={selectedCategory}
        activeCategoryPayload={activeCategoryPayload}
      />
      <AnimatedDiv initial="hidden" animate={controls} variants={{}}>
        <InfiniteScroll
          style={{ overflow: 'hidden' }}
          dataLength={data.length}
          next={getNextDataChunk}
          hasMore={hasMore}
          loader={
            <ItemsLoadingSpinnerBox>
              <MoreLoader />
            </ItemsLoadingSpinnerBox>
          }
          endMessage={
            <ItemsLoadingStateDescription>
              <Trans>Coming soon ...</Trans>
            </ItemsLoadingStateDescription>
          }
        >
          <PortfolioGrid
            data={data}
            selectedCategory={selectedCategory}
            originOffset={originOffset}
          />
        </InfiniteScroll>
      </AnimatedDiv>
    </AnimatedSectionStyled>
  );
};
