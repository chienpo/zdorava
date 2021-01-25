import { PortfolioItemModel } from '~/models/portfolio-item.model';

const mockedProjectDataItem: PortfolioItemModel = {
  category: 'frontend',
  description: {
    en: 'en description',
    ru: 'ru description',
    pl: 'pl description',
  },
  descriptionList: {
    en: 'descriptionList descriptionList',
    ru: 'descriptionList descriptionList',
    pl: 'descriptionList descriptionList',
  },
  imageName: 'projectId',
  imageSrc: 'test',
  thumbnailSrc: 'test',
  title: {
    en: 'en title',
    ru: 'ru title',
    pl: 'pl title',
  },
};

export const mockedPortfolioData = [...new Array(10)].map(
  () => mockedProjectDataItem
);
