import { PortfolioItemModel } from '~/models/portfolio-item.model';

const mockedProjectDataItem: PortfolioItemModel = {
  category: 'test',
  imageSrc: 'test',
  thumbnailSrc: 'test',
  alt: 'test',
  description: {
    en: 'test',
    ru: 'test',
  },
  descriptionList: {
    en: ['test', 'test'],
    ru: ['test', 'test'],
  },
  details: 'test',
  title: {
    en: 'test',
    ru: 'test',
  },
};

export const mockedPortfolioData = [...new Array(10)].map(
  () => mockedProjectDataItem
);
