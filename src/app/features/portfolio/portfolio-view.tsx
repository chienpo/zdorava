import * as React from 'react';

import { Button } from '../../ui/button/button';
import { MasonryGrid } from './components/portfolio-layout/masonry-grid';
import { PortfolioTabs } from './components/portfolio-tabs/portfolio-tabs';
import { SectionPortfolio, PortfolioOverlay } from './styled';

interface Props {
  data: PortfolioItem[];
  activeCategoryPayload: (name: string) => void;
}

interface PortfolioItem {
  category: string;
  src: string;
  alt: string;
  name: string;
  description: string;
}

const noMore = true;

export const PortfolioView: React.FC<Props> = ({
  data,
  activeCategoryPayload,
}: Props) => (
  <SectionPortfolio>
    <PortfolioOverlay>
      <PortfolioTabs activeCategoryPayload={activeCategoryPayload} />
      <MasonryGrid data={data} />
      <Button more type="button">
        {noMore ? 'Comeing soon...' : 'Some More...'}
      </Button>
    </PortfolioOverlay>
  </SectionPortfolio>
);
