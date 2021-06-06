import { defineMessage } from '@lingui/macro';
import { MessageDescriptor } from '@lingui/core';

export enum PortfolioCategories {
  All = 'all',
  Art = 'art',
  FrontEnd = 'frontend',
}

export enum ChunkType {
  One = 'CHUNK_TYPE_ONE',
  Two = 'CHUNK_TYPE_TWO',
  Three = 'CHUNK_TYPE_THREE',
}

export const PORTFOLIO_CATEGORIES_TABS_LABELS: {
  [key: string]: MessageDescriptor;
} = {
  [PortfolioCategories.All]: defineMessage({ message: 'All' }),
  [PortfolioCategories.Art]: defineMessage({ message: 'Art' }),
  [PortfolioCategories.FrontEnd]: defineMessage({ message: 'Front-end' }),
};

export const CATEGORIES_DATA = Object.entries(PortfolioCategories).map(
  ([, value]) => ({
    value,
    label: PORTFOLIO_CATEGORIES_TABS_LABELS[value],
  })
);
