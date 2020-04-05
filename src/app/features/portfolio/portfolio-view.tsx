import * as React from 'react';
import { Trans } from '@lingui/macro';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Button } from '../../ui/button/button';
import { MasonryGrid } from './components/portfolio-layout/masonry-grid';
import { PortfolioTabs } from './components/portfolio-tabs/portfolio-tabs';
import { SectionPortfolio, PortfolioOverlay } from './styled';

interface Props {
  data: PortfolioItem[];
  activeCategoryPayload: (name: string) => void;
  getPortfolioDate: () => void;
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
  getPortfolioDate,
  hasMore,
}: Props) => (
  <SectionPortfolio id="scrollableDiv" style={{ height: 500, overflow: "auto" }}>
    <PortfolioOverlay>
      <PortfolioTabs activeCategoryPayload={activeCategoryPayload} />
      <InfiniteScroll
        scrollableTarget="scrollableDiv"
        dataLength={5}
        next={getPortfolioDate}
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
