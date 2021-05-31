import { i18nMark } from '@lingui/react';

export enum PortfolioCategories {
  All = 'all',
  Art = 'art',
  FrontEnd = 'frontend'
}

export enum ChunkType {
  One = 'CHUNK_TYPE_ONE',
  Two = 'CHUNK_TYPE_TWO',
  Three = 'CHUNK_TYPE_THREE',
}

export const PORTFOLIO_CATEGORIES_TABS_LABELS: { [key: string]: string } = {
  [PortfolioCategories.All]: i18nMark('All'),
  [PortfolioCategories.Art]: i18nMark('Art'),
  [PortfolioCategories.FrontEnd]: i18nMark('Front-end'),
};

export const CATEGORIES_DATA = Object.entries(PortfolioCategories)
  .map(([, value]) => ({
    value,
    label: PORTFOLIO_CATEGORIES_TABS_LABELS[value]
  }))
