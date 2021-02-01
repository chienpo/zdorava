import portfolioData from '~/features/portfolio/mocks/portfolio-data.json';
import { PORTFOLIO_CATEGORY_TAB_NAME_ALL } from '~/constants/portfolio';

interface Params {
  orderByChild?: string | null;
  limitToFirst?: number | null;
  equalTo?: string | null;
}

export const getDataChunkEmmitPromise = async (
  path: string,
  params: Params
) => {
  const { orderByChild, limitToFirst, equalTo } = params;

  return new Promise((resolve) => {
    const { projects } = portfolioData;

    let filteredData =
      !orderByChild || orderByChild === PORTFOLIO_CATEGORY_TAB_NAME_ALL
        ? Object.values(projects)
        : Object.values(projects).filter(
            ({ category }) => category === orderByChild
          );

    if (limitToFirst) {
      filteredData = filteredData.slice(0, limitToFirst);
    }

    if (orderByChild && equalTo) {
      filteredData = Object.values(projects).filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (it) => (it as any)[orderByChild] === equalTo
      );
    }

    setTimeout(() => {
      resolve(filteredData);
    }, 400);
  });
};
