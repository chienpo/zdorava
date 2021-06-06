import { PortfolioItemModel } from '~/models/portfolio-item.model';
import { PortfolioResponseDataModel } from '~/models/portfolio-response-data.model';

import mockedImage from '~/assets/images/selfies/2-320x320.png';

const mockedProjectDataItem: PortfolioItemModel = {
  category: 'frontend',
  description: {
    en: 'description',
    ru: 'описание',
    pl: 'pl description',
  },
  descriptionList: {
    en: 'descriptionList.descriptionList',
    ru: 'описание.описание',
    pl: '',
  },
  imageName: `en ${Math.random()}-title`,
  imageSrc: mockedImage,
  thumbnailSrc: mockedImage,
  title: {
    en: 'en title',
    ru: 'ru title',
    pl: 'pl title',
  },
};

export const mockedPortfolioData = Array.from({ length: 24 })
  .map(() => mockedProjectDataItem)
  .reduce((accumulator: PortfolioResponseDataModel, previous) => {
    accumulator[Math.random().toString()] = previous;
    return accumulator;
  }, {});

export const mockedPortfolioResponsePromise =
  new Promise<PortfolioResponseDataModel>((resolve) => {
    setTimeout(() => {
      resolve(mockedPortfolioData);
    }, 200);
  });
