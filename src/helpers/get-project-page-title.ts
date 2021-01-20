import portfolioData from '~/features/portfolio/mocks/portfolio-data.json';

import { PortfolioItemModel } from '~/models/portfolio-item.model';

// TODO: Update without mock
export const getProjectPageTitle = (projectName: string, locale: string) => {
  const projects = portfolioData.portfolio;
  const project = (projects as PortfolioItemModel[]).find(
    ({ alt }) => alt === projectName
  );

  if (project) {
    return project.title[locale];
  }

  return '404';
};
