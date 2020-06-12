import portfolioData from 'features/portfolio/portfolio-data.json';

import { PortfolioItemModel } from '../models/portfolio-item.model';

export const getProjectPageTitle = (projectName: string, locale: string) => {
  const projects = portfolioData.portfolio;
  const [project] = (projects as PortfolioItemModel[]).filter(
    ({ alt }) => alt === projectName
  );

  return project.title[locale];
};
