import React from 'react';
import { Trans } from '@lingui/macro';
import InfiniteScroll from 'react-infinite-scroll-component';

import { PortfolioItemModel } from 'models/portfolio-item.model';

import { MasonryGrid } from './components/portfolio-layout/masonry-grid';
import { PortfolioTabs } from './components/portfolio-tabs/portfolio-tabs';
import {
  SectionPortfolio,
  PortfolioOverlay,
  ItemsLoadingStateDescription,
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
          <ItemsLoadingStateDescription>
            <Trans>Loading...</Trans>
          </ItemsLoadingStateDescription>
        }
        endMessage={
          <ItemsLoadingStateDescription>
            <Trans>Coming soon...</Trans>
          </ItemsLoadingStateDescription>
        }
      >
        <MasonryGrid data={data} selectedCategory={selectedCategory} />
      </InfiniteScroll>
    </PortfolioOverlay>
  </SectionPortfolio>
);
