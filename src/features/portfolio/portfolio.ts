import { FC, createElement, useState, useEffect, useCallback } from 'react';
import { useStore } from 'effector-react';

import { PortfolioItemModel } from '~/models/portfolio-item.model';

import {
  $portfolioTabsStore,
  setPortfolioCategory,
} from '~/store/portfolio-tabs-store';
import { $authStore } from '~/store/auth-store';

import {
  PORTFOLIO_CATEGORY_TAB_NAME_ART,
  PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND,
} from '~/constants/portfolio';
import { PageLoader } from '~/ui/page-loader/page-loader';
import { PortfolioView } from './portfolio-view';
import { useHttpClient } from '~/hooks/use-http-client';

export const Portfolio: FC = () => {
  const categoryFromStore = useStore($portfolioTabsStore);
  const { userId } = useStore($authStore);
  const isAuthenticated = Boolean(userId);

  const [data, setData] = useState<PortfolioItemModel[]>([]);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [dataLoadCount, setDataLoadCount] = useState<number>(1);
  const [activeCategory, setCategory] = useState<string>(categoryFromStore);

  const DATA_CHUNK_SIZE = 6;

  useEffect(() => {
    setCategory(categoryFromStore);
  }, [categoryFromStore]);

  const { sendRequest } = useHttpClient();

  const getDataChunk = useCallback(
    async (/* categoryName: string */) => {
      // const params = {
      //   orderByChild: categoryName,
      //   limitToFirst: DATA_CHUNK_SIZE,
      //   equalTo: '',
      // };

      try {
        const response = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/projects`,
          'GET'
        );

        setData(response.data as PortfolioItemModel[]);

        setDataLoadCount((previousState) => previousState + 1);
      } finally {
        setDataLoadCount((previousState) => previousState + 1);
      }
    },
    [sendRequest]
  );

  const getNextDataChunk = useCallback(async () => {
    setDataLoadCount((previousState) => previousState + 1);

    const params = {
      orderByChild: activeCategory,
      limitToFirst: DATA_CHUNK_SIZE * dataLoadCount,
      equalTo: '',
    };

    // eslint-disable-next-line no-console
    console.log(params);

    try {
      const response = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/projects`
      );
      setData([response.data] as PortfolioItemModel[]);
    } catch (error) {
      return error;
    } finally {
      // eslint-disable-next-line no-console
      console.log('finally');
    }

    // eslint-disable-next-line no-console
    return console.log('finally');

    // await getDataChunkEmmitPromise('', params)
    //   .then((response) => {
    //     setData(response as PortfolioItemModel[]);
    //   })
    //   .catch((error) => {
    //     throw error;
    //   });
  }, [sendRequest, activeCategory, dataLoadCount]);

  const onCategoryClick = (categoryName: string) => {
    setPortfolioCategory(categoryName);

    setCategory(categoryName);
    setDataLoadCount(1);
    setHasMore(true);
    setData([]);
  };

  useEffect(() => {
    let maxItemsLength: number;
    switch (categoryFromStore) {
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
  }, [data, categoryFromStore]);

  useEffect(() => {
    getDataChunk(/* categoryFromStore */)
      .then(() => {
        setPageLoading(false);
      })
      .catch((error) => {
        throw error;
      });
  }, [getDataChunk, categoryFromStore]);

  if (pageLoading) {
    return createElement(PageLoader);
  }

  return createElement(PortfolioView, {
    data,
    onCategoryClick,
    getNextDataChunk,
    hasMore,
    activeCategory,
    isAuthenticated,
  });
};
