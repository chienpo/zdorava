import React from 'react';
import { Trans } from '@lingui/macro';
import InfiniteScroll from 'react-infinite-scroll-component';

import { PortfolioItemModel } from 'models/portfolio-item.model';

import { MoreLoader } from 'app/ui/more-loader/more-loader';
import { PortfolioMasonry } from './components/portfolio-masonry/portfolio-masonry';
import { PortfolioTabs } from './components/portfolio-tabs/portfolio-tabs';
import {
  SectionPortfolio,
  PortfolioOverlay,
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
}) => (
  <SectionPortfolio>
    <PortfolioOverlay>
      <PortfolioTabs activeCategoryPayload={activeCategoryPayload} />
      <InfiniteScroll
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
            <Trans>Coming soon...</Trans>
          </ItemsLoadingStateDescription>
        }
      >
        <PortfolioMasonry data={data} selectedCategory={selectedCategory} />
      </InfiniteScroll>
    </PortfolioOverlay>
  </SectionPortfolio>
);
