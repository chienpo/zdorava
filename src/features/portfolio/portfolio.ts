import { FC, createElement, useState, useEffect, useMemo } from 'react';
import { useStore } from 'effector-react';

import { PortfolioItemModel } from '~/models/portfolio-item.model';
import { PortfolioResponseDataModel } from '~/models/portfolio.model';

import {
  $portfolioTabsStore,
  setPortfolioCategory,
} from '~/store/portfolio-tabs-store';
import { $authStore } from '~/store/auth-store';

import {
  PORTFOLIO_CATEGORY_TAB_NAME_ALL,
  PORTFOLIO_CATEGORY_TAB_NAME_ART,
  PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND,
} from '~/constants/portfolio';
import { PROJECTS_URL } from '~/constants/api';
import { useHttp } from '~/hooks';
import { PageLoader } from '~/ui/page-loader/page-loader';
import { PortfolioView } from './portfolio-view';
import { transformObjectValuesIntoArrayOfValues } from '~/features/portfolio/helpers';
import { SomethingWentWrong } from '~/features/something-went-wrong';

export const Portfolio: FC = () => {
  const activePortfolioTab = useStore($portfolioTabsStore);
  const { userId } = useStore($authStore);
  const isAuthenticated = Boolean(userId);

  const [data, setData] = useState<PortfolioItemModel[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [dataLoadCount, setDataLoadCount] = useState<number>(1);

  const DATA_CHUNK_SIZE = 6;

  const { requestLoading, requestError, sendRequest } = useHttp();

  const sendRequestCallback = (response: PortfolioResponseDataModel) => {
    const dataUpdated = transformObjectValuesIntoArrayOfValues(response);
    setData(dataUpdated);
  };

  const queries = useMemo(() => {
    const defaultQueries = activePortfolioTab !==
      PORTFOLIO_CATEGORY_TAB_NAME_ALL && {
      orderByChild: 'category',
      equalTo: activePortfolioTab,
    };

    return {
      ...defaultQueries,
      once: 'value',
      orderBy: 'category',
    };
  }, [activePortfolioTab]);

  useEffect(() => {
    sendRequest(
      {
        url: `${PROJECTS_URL}`,
        method: 'GET',
        headers: null,
        body: null,
        queries: {
          ...queries,
          limitToFirst: DATA_CHUNK_SIZE,
        },
      },
      sendRequestCallback
    ).then(() => {
      setDataLoadCount((previousState) => previousState + 1);
    });
  }, [queries, sendRequest, activePortfolioTab]);

  const getNextDataChunk = () => {
    setDataLoadCount((previousState) => previousState + 1);

    sendRequest(
      {
        url: `${PROJECTS_URL}`,
        method: 'GET',
        headers: null,
        body: null,
        queries: {
          ...queries,
          limitToFirst: DATA_CHUNK_SIZE * dataLoadCount,
        },
      },
      sendRequestCallback
    ).then(() => {});
  };

  const onCategoryClick = (categoryName: string) => {
    setPortfolioCategory(categoryName);
    setDataLoadCount(1);
    setHasMore(true);
    setData([]);
  };

  useEffect(() => {
    let maxItemsLength: number;
    switch (activePortfolioTab) {
      case PORTFOLIO_CATEGORY_TAB_NAME_ART:
        maxItemsLength = 15;
        break;
      case PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND:
        maxItemsLength = 7;
        break;
      default:
        maxItemsLength = 22;
    }

    if (data.length >= maxItemsLength) {
      setHasMore(false);
    }
  }, [data, activePortfolioTab]);

  if (requestLoading && !hasMore) {
    return createElement(PageLoader);
  }

  if (requestError) {
    return createElement(SomethingWentWrong, {});
  }

  return createElement(PortfolioView, {
    data,
    onCategoryClick,
    getNextDataChunk,
    hasMore,
    activeCategory: activePortfolioTab,
    isAuthenticated,
  });
};
