import { createElement, useState, useEffect, FC } from 'react';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/database';

import {
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_DATABASE_REF,
} from 'constants/api';
import {
  PORTFOLIO_CATEGORY_DEFAULT_TAB_NAME,
  // PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND,
} from 'constants/portfolio';
import { PageLoader } from '../../ui/page-loader/page-loader';
import { PortfolioView } from './portfolio-view';
import { PortfolioItemModel } from '../../models/portfolio-item.model';

export const Portfolio: FC = () => {
  // eslint-disable-next-line max-len
  const [data, setData] = useState<PortfolioItemModel[]>([]);
  const [, /* projectsTotalCount */ setProjectsTotalCount] = useState<number>(
    0
  );
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [dataLoadCount, setDataLoadCount] = useState<number>(1);
  const [selectedCategory, setCategory] = useState<string>(
    PORTFOLIO_CATEGORY_DEFAULT_TAB_NAME
  );

  const DATA_CHANK_SIZE = 6;

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
    const categoryStartIndex = categoryName === 'art' ? '7' : '0';
    const categoryEndIndex =
      categoryName === 'art'
        ? (DATA_CHANK_SIZE + DATA_CHANK_SIZE).toString()
        : DATA_CHANK_SIZE.toString();

    firebase
      .database()
      .ref(FIREBASE_DATABASE_REF)
      .orderByKey()
      .startAt(categoryStartIndex)
      .endAt(categoryEndIndex)
      .once('value')
      .then(snapshot => {
        const arrayOfKeys = Object.keys(snapshot.val());
        // TODO: Check and remove console
        // console.info(arrayOfKeys);

        const results = arrayOfKeys.map(key => snapshot.val()[key]);
        // TODO: Check and remove console
        // console.info(results);

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

    const artOffset = selectedCategory === 'art' ? 0 : 6;

    firebase
      .database()
      .ref(FIREBASE_DATABASE_REF)
      .orderByKey()
      .startAt((dataLoadCount * DATA_CHANK_SIZE + 1 - artOffset).toString())
      .endAt(
        selectedCategory === 'frontend'
          ? '6'
          : (
              dataLoadCount * DATA_CHANK_SIZE -
              artOffset +
              DATA_CHANK_SIZE
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

        // TODO: Remove console
        // console.info(results);

        setData(prevState => [...prevState, results].flatMap(item => item));

        // TODO: Check later and remove console below
        // const frontEndTotalLength = projectsTotalCount - 15;
        // const artTotalLength = projectsTotalCount - 7;

        // const maxDataLength = data.some(({ category }) =>
        //   category.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND)
        // )
        //   ? frontEndTotalLength
        //   : artTotalLength;

        // console.info('maxDataLength', data, maxDataLength);
      })
      .catch(error => {
        throw error;
      });
  };

  const onCategoryClick = (name: string) => {
    setCategory(name);
    setDataLoadCount(1);
    setHasMore(true);
    setData([]);
    getDataChunk(name).catch(error => {
      throw error;
    });
  };

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        authDomain: FIREBASE_AUTH_DOMAIN,
        databaseURL: FIREBASE_DATABASE_URL,
      });
    }
  }, []);

  useEffect(() => {
    Promise.all([
      getProductsTotalCount(),
      getDataChunk(PORTFOLIO_CATEGORY_DEFAULT_TAB_NAME),
    ])
      .then(() => {
        setPageLoading(false);
      })
      .catch(error => {
        throw error;
      });
  }, []);

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
