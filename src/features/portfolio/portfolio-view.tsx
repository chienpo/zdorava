import React, { useEffect, useRef } from 'react';
import { Trans } from '@lingui/macro';
import InfiniteScroll from 'react-infinite-scroll-component';
import { motion, useAnimation } from 'framer-motion';

import { PortfolioItemModel } from 'models/portfolio-item.model';

import { BLACK, WHITE } from 'constants/colors';
import { MoreLoader } from 'ui/more-loader/more-loader';
import { PortfolioGrid } from './components/portfolio-grid/portfolio-grid';
import { PortfolioTabs } from './components/portfolio-tabs/portfolio-tabs';
import {
  SectionPortfolio,
  ItemsLoadingStateDescription,
  ItemsLoadingSpinnerBox,
} from './styled';

interface Props {
  data: PortfolioItemModel[];
  activeCategoryPayload: (name: string) => void;
  getNextDataChunk: () => void;
  hasMore: boolean;
  selectedCategory: string;
}

export const PortfolioView: React.FC<Props> = ({
  data,
  activeCategoryPayload,
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
    <SectionPortfolio
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
      <motion.div initial="hidden" animate={controls} variants={{}}>
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
              <Trans>COMING SOON ...</Trans>
            </ItemsLoadingStateDescription>
          }
        >
          <PortfolioGrid
            data={data}
            selectedCategory={selectedCategory}
            originOffset={originOffset}
          />
        </InfiniteScroll>
      </motion.div>
    </SectionPortfolio>
  );
};
