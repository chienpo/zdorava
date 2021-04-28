import { PortfolioResponseDataModel } from '~/models/portfolio.model';

export const transformObjectValuesIntoArrayOfValues = (
  resp: PortfolioResponseDataModel
) => Object.values(resp);
