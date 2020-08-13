import { createElement, useState, useEffect, FC } from 'react';
import axios from 'axios';
import { useStore } from 'effector-react';

import { PortfolioItemModel } from 'models/portfolio-item.model';

import {
  $portfolioTabsStore,
  setPortfolioCategory,
} from 'store/portfolio-tabs-store';

import {
  PORTFOLIO_CATEGORY_TAB_NAME_ART,
  PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND,
} from 'constants/portfolio';
import { FIREBASE_DATABASE_URL, FIREBASE_DATABASE_REF } from 'constants/api';
import { auth, firebaseInstance } from 'features/auth';
import { PageLoader } from 'ui/page-loader/page-loader';
import { PortfolioView } from './portfolio-view';

export const Portfolio: FC = () => {
  const categoryFromStore = useStore($portfolioTabsStore);

  // eslint-disable-next-line max-len
  const [data, setData] = useState<PortfolioItemModel[]>([]);
  const [, /* projectsTotalCount */ setProjectsTotalCount] = useState<number>(
    0
  );
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [dataLoadCount, setDataLoadCount] = useState<number>(1);
  const [selectedCategory, setCategory] = useState<string>(categoryFromStore);

  const DATA_CHUNK_SIZE = 6;

  useEffect(() => {
    setCategory(categoryFromStore);
  }, [categoryFromStore]);

  const getProductsTotalCount = async () => {
    try {
      const response = await axios.get(
        `${FIREBASE_DATABASE_URL}/portfolio.json`,
        {
          params: {
            shallow: true,
          },
        }
      );

      setProjectsTotalCount(Object.keys(response.data).length);
    } catch (error) {
      throw error;
    }
  };

  const getDataChunk = async (categoryName: string) => {
    const categoryStartIndex =
      categoryName === PORTFOLIO_CATEGORY_TAB_NAME_ART ? '7' : '0';
    const categoryEndIndex =
      categoryName === PORTFOLIO_CATEGORY_TAB_NAME_ART
        ? (DATA_CHUNK_SIZE + DATA_CHUNK_SIZE).toString()
        : DATA_CHUNK_SIZE.toString();

    firebaseInstance
      .database()
      .ref(FIREBASE_DATABASE_REF)
      .orderByKey()
      .startAt(categoryStartIndex)
      .endAt(categoryEndIndex)
      .once('value')
      .then(snapshot => {
        const arrayOfKeys = Object.keys(snapshot.val());
        const results = arrayOfKeys.map(key => snapshot.val()[key]);

        setData(results);
        setPageLoading(false);
        setDataLoadCount(prevState => prevState + 1);
      })
      .catch(error => {
        throw error;
      });
  };

  const getNextDataChunk = async () => {
    setDataLoadCount(prevState => prevState + 1);

    const artOffset =
      selectedCategory === PORTFOLIO_CATEGORY_TAB_NAME_ART ? 0 : 6;

    firebaseInstance
      .database()
      .ref(FIREBASE_DATABASE_REF)
      .orderByKey()
      .startAt((dataLoadCount * DATA_CHUNK_SIZE + 1 - artOffset).toString())
      .endAt(
        selectedCategory === PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND
          ? '6'
          : (
              dataLoadCount * DATA_CHUNK_SIZE -
              artOffset +
              DATA_CHUNK_SIZE
            ).toString()
      )
      .once('value')
      .then(snapshot => {
        if (!snapshot.val()) {
          setHasMore(false);

          return;
        }

        const arrayOfKeys = Object.keys(snapshot.val());
        const results = arrayOfKeys.map(key => snapshot.val()[key]);

        setData(prevState => [...prevState, results].flatMap(item => item));
      })
      .catch(error => {
        throw error;
      });
  };

  const onCategoryClick = (name: string) => {
    setPortfolioCategory(name);

    setCategory(name);
    setDataLoadCount(1);
    setHasMore(true);
    setData([]);
  };

  useEffect(() => {
    auth();
  }, []);

  useEffect(() => {
    Promise.all([getProductsTotalCount(), getDataChunk(categoryFromStore)])
      .then(() => {
        setPageLoading(false);
      })
      .catch(error => {
        throw error;
      });
  }, [categoryFromStore]);

  if (pageLoading) {
    return createElement(PageLoader);
  }

  return createElement(PortfolioView, {
    data,
    activeCategoryPayload: onCategoryClick,
    getNextDataChunk,
    hasMore,
    selectedCategory,
  });
};
