import { useCallback, useState } from 'react';

import { generateQueryString } from '~/helpers';
import { PortfolioResponseDataModel } from '~/models/portfolio-response-data.model';

export const useHttp = () => {
  const [requestLoading, setRequestLoading] = useState<boolean>(false);
  const [requestError, setRequestError] =
    useState<PortfolioResponseDataModel | null>(null);

  const sendRequest = useCallback(
    async (
      requestConfig,
      applyData: (data: PortfolioResponseDataModel) => void
    ) => {
      setRequestLoading(true);
      setRequestError(null);

      const url = requestConfig.queries
        ? `${requestConfig.url}${generateQueryString(requestConfig.queries)}`
        : `${requestConfig.url}`;

      try {
        const response = await fetch(`${url}`, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });

        const responseData = await response.json();

        if (!response.ok) {
          return new Error(responseData.message);
        }

        applyData(responseData);
      } catch (error) {
        setRequestError(error.message);

        return error;
      }

      return setRequestLoading(false);
    },
    []
  );

  return { requestLoading, requestError, sendRequest };
};
