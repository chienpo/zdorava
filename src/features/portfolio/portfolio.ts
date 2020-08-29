import { createElement, useState, useEffect, FC } from 'react';
import { useStore } from 'effector-react';

import { PortfolioItemModel } from '~/models/portfolio-item.model';

import {
  $portfolioTabsStore,
  setPortfolioCategory,
} from '~/store/portfolio-tabs-store';

import {
  PORTFOLIO_CATEGORY_TAB_NAME_ALL,
  PORTFOLIO_CATEGORY_TAB_NAME_ART,
  PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND,
} from '~/constants/portfolio';
import { FIREBASE_DATABASE_REF } from '~/constants/api';
import { auth, firebaseInstance } from '~/features/auth';
import { PageLoader } from '~/ui/page-loader/page-loader';
import { PortfolioView } from './portfolio-view';

export const Portfolio: FC = () => {
  const categoryFromStore = useStore($portfolioTabsStore);

  const [data, setData] = useState<PortfolioItemModel[]>([]);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [dataLoadCount, setDataLoadCount] = useState<number>(1);
  const [selectedCategory, setCategory] = useState<string>(categoryFromStore);

  const DATA_CHUNK_SIZE = 6;

  useEffect(() => {
    setCategory(categoryFromStore);
  }, [categoryFromStore]);

  const getDataChunk = async (categoryName: string) => {
    const dbRef = firebaseInstance.database().ref(FIREBASE_DATABASE_REF);

    const queries =
      categoryName === PORTFOLIO_CATEGORY_TAB_NAME_ALL
        ? dbRef
        : dbRef.orderByChild('category').equalTo(categoryName);

    await queries
      .limitToFirst(DATA_CHUNK_SIZE)
      .once('value')
      .then((snap) => {
        if (snap.val()) {
          const responseData: PortfolioItemModel[] = Object.values(snap.val());

          setData(responseData);
        }
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => {
        setDataLoadCount((prevState) => prevState + 1);
      });
  };

  const getNextDataChunk = async () => {
    setDataLoadCount((prevState) => prevState + 1);
    const dbRef = firebaseInstance.database().ref(FIREBASE_DATABASE_REF);

    const queries =
      categoryFromStore === PORTFOLIO_CATEGORY_TAB_NAME_ALL
        ? dbRef
        : dbRef.orderByChild('category').equalTo(categoryFromStore);

    await queries
      .limitToFirst(DATA_CHUNK_SIZE * dataLoadCount)
      .once('value')
      .then((snap) => {
        const responseData: PortfolioItemModel[] = Object.values(snap.val());

        setData(responseData);
      })
      .catch((error) => {
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
    auth();
  }, []);

  useEffect(() => {
    getDataChunk(categoryFromStore)
      .then(() => {
        setPageLoading(false);
      })
      .catch((error) => {
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
