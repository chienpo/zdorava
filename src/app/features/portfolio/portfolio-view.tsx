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
  getNextPortfolioDate: () => void;
  hasMore: boolean;
}

interface PortfolioItem {
  category: string;
  src: string;
  alt: string;
  name: string;
  description: string;
}

export const PortfolioView: React.FC<Props> = ({
  data,
  activeCategoryPayload,
  getNextPortfolioDate,
  hasMore,
}: Props) => (
  <SectionPortfolio>
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
        <MasonryGrid data={data} />
      </InfiniteScroll>
    </PortfolioOverlay>
  </SectionPortfolio>
);
