import React, { useEffect, useRef } from 'react';
import { Trans } from '@lingui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAnimation } from 'framer-motion';

import { PortfolioItemModel } from '~/models/portfolio-item.model';

import { BLACK_100, WHITE_100 } from '~/constants/colors';
import { MoreLoader } from '~/ui/more-loader/more-loader';
import { AnimatedDiv } from '~/animations/animated';
import { PortfolioGrid, PortfolioTabs } from './components';
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
    const promise = controls.start('visible');

    promise.then((res) => res);
  }, [controls]);

  const originOffset = useRef<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  return (
    <AnimatedSectionStyled
      variants={{
        enter: {
          backgroundColor: BLACK_100,
          transition: {
            duration: 1,
          },
        },
        exit: {
          backgroundColor: WHITE_100,
          transition: { duration: 0.4 },
        },
      }}
      initial="enter"
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
