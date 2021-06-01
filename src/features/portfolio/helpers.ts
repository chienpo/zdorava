import { PortfolioResponseDataModel } from '~/models/portfolio-response-data.model';

export const transformObjectValuesIntoArrayOfValues = (
  response: PortfolioResponseDataModel
) => Object.values(response);
