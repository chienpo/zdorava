import { PortfolioItemModel } from '~/models/portfolio-item.model';

const mockedProjectDataItem: PortfolioItemModel = {
  category: 'frontend',
  description: {
    en: 'en description',
    ru: 'ru description',
    pl: 'pl description',
  },
  descriptionList: {
    en: ['en', 'descriptionList', 'descriptionList'],
    ru: ['ru', 'descriptionList', 'descriptionList'],
    pl: ['pl', 'descriptionList', 'descriptionList'],
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
