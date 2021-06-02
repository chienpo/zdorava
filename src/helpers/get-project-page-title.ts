import portfolioData from '~/features/portfolio/mocks/portfolio-data.json';

import { PortfolioItemModel } from '~/models/portfolio-item.model';

// TODO: Update without mock
export const getProjectPageTitle = (projectName: string, locale: string) => {
  const { projects } = portfolioData;

  const transformedData = Object.entries(projects).reduce(
    (accumulator: { [key: string]: PortfolioItemModel }, [, value]) => ({
      ...accumulator,
      [value.imageName]: value,
    }),
    {}
  );

  const projectsMap = new Map(Object.entries(transformedData));

  const project = projectsMap.get(projectName);

  if (project) {
    return project.title[locale];
  }

  return '404';
};
