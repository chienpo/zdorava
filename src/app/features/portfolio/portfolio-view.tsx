import React from 'react';
import { Trans } from '@lingui/macro';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Button } from '../../ui/button/button';
import { MasonryGrid } from './components/portfolio-layout/masonry-grid';
import { PortfolioTabs } from './components/portfolio-tabs/portfolio-tabs';
import { SectionPortfolio, PortfolioOverlay } from './styled';

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
          <Button disabled>
            <Trans>Loading...</Trans>
          </Button>
        )}
        endMessage={(
          <Button disabled>
            <Trans>Coming soon...</Trans>
          </Button>
        )}
      >
        <MasonryGrid data={data} />
      </InfiniteScroll>
    </PortfolioOverlay>
  </SectionPortfolio>
);
