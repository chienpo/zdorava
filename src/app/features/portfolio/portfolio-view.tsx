import React from 'react';
import { Trans } from '@lingui/macro';
import InfiniteScroll from 'react-infinite-scroll-component';

import { MasonryGrid } from './components/portfolio-layout/masonry-grid';
import { PortfolioTabs } from './components/portfolio-tabs/portfolio-tabs';
import {
  SectionPortfolio,
  PortfolioOverlay,
  ItemsLoadingStateDescription,
} from './styled';

interface Props {
  data: PortfolioItem[];
  activeCategoryPayload: (name: string) => void;
  getNextPortfolioDate: any;
  hasMore: boolean;
  selectedCategory: string;
}

interface PortfolioItem {
  category: string;
  imageSrc: string;
  alt: string;
  name: string;
  description: string;
}

export const PortfolioView: React.FC<Props> = ({
  data,
  activeCategoryPayload,
  getNextPortfolioDate,
  hasMore,
  selectedCategory,
}: Props) => (
  <SectionPortfolio className="test">
    <PortfolioOverlay>
      <PortfolioTabs activeCategoryPayload={activeCategoryPayload} />
      <InfiniteScroll
        dataLength={data.length}
        next={getNextPortfolioDate}
        hasMore={hasMore}
        loader={(
          <ItemsLoadingStateDescription>
            <Trans>Loading...</Trans>
          </ItemsLoadingStateDescription>
        )}
        endMessage={(
          <ItemsLoadingStateDescription>
            <Trans>Coming soon...</Trans>
          </ItemsLoadingStateDescription>
        )}
      >
        <MasonryGrid data={data} selectedCategory={selectedCategory} />
      </InfiniteScroll>
    </PortfolioOverlay>
  </SectionPortfolio>
);
