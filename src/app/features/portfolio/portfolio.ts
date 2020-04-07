import { createElement, useState, useEffect, FC } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

import { FIREBASE_DATABASE_REF, FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE_URL } from '../../constants/api';
import {
  PORTFOLIO_CATEGORY_DEFAULT_TAB_NAME,
  PORTFOLIO_CATEGORY_TAB_NAME_ART,
  PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND,
} from '../../constants/portfolio';
import { PageLoader } from '../../ui/page-loader/page-loader';
import { PortfolioView } from './portfolio-view';

interface PortfolioItems {
  alt: string;
  category: string;
  description: string;
  src: string;
  name: string;
}

interface Props {
  data: PortfolioItems[];
  activeCategoryPayload: (name: string) => void;
  getNextPortfolioDate: () => void;
  hasMore: boolean;
}

export const Portfolio: FC<Props> = () => {
  // eslint-disable-next-line max-len
  const [data, setFirebaseData] = useState<PortfolioItems[]>([]);
  const [referenceToOldestKey, setReferenceToOldestKey] = useState<string>('');
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const FIREBASE_DATA_LIMIT = 6;
  const FIREBASE_DATA_NEXT_LIMIT = FIREBASE_DATA_LIMIT + 1;

  const prepareCategoryName = (name: string) => {
    let preparedCategoryName;
    switch (name) {
      case PORTFOLIO_CATEGORY_TAB_NAME_ART:
        preparedCategoryName = PORTFOLIO_CATEGORY_TAB_NAME_ART;
        break;
      case PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND:
        preparedCategoryName = PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND;
        break;
      default:
        preparedCategoryName = PORTFOLIO_CATEGORY_TAB_NAME_ART
    }

    return preparedCategoryName;
  };

  const getFirebaseData = (categoryName: string) => {
    const preparedCategoryNames = prepareCategoryName(categoryName);

    firebase.database().ref(FIREBASE_DATABASE_REF)
      .orderByChild("category")
      .equalTo(preparedCategoryNames)
      .limitToLast(FIREBASE_DATA_LIMIT)
      .once('value')
      .then(snapshot => {
        // changing to reverse chronological order (latest first)
        const arrayOfKeys = Object.keys(snapshot.val())
          .reverse();

        // transforming to array
        const results = arrayOfKeys
          .map((key) => snapshot.val()[key]);

        setFirebaseData(results);
        setReferenceToOldestKey(arrayOfKeys[arrayOfKeys.length-1]);
        setPageLoading(false)
      })
      .catch((error) => {
        throw error
      });
  };

  const getNextFirebaseData = () => {
    firebase.database().ref(FIREBASE_DATABASE_REF)
      .orderByKey()
      .endAt(referenceToOldestKey)
      .limitToLast(FIREBASE_DATA_NEXT_LIMIT)
      .once('value')
      .then((snapshot) => {
        const arrayOfKeys = Object.keys(snapshot.val())
          .sort()
          .reverse()
          .slice(1);

        const results = arrayOfKeys
          .map((key) => snapshot.val()[key]);

        setFirebaseData([...data, ...results]);
        setReferenceToOldestKey(arrayOfKeys[arrayOfKeys.length-1]);

        // console.log(firebaseData.length) // 14 should be category.data.length
        const maxDataLength = data.some(({category}) => category
          .includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND)) ? 4 : 14;

        if (data.length >= maxDataLength) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
      })
      .catch((error) => {
        throw error
      });
  };

  const onCategoryClick = (name: string) => {
    setHasMore(true);
    setFirebaseData([]);
    getFirebaseData(name);
  };

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        authDomain: FIREBASE_AUTH_DOMAIN,
        databaseURL: FIREBASE_DATABASE_URL,
      });
    }
    getFirebaseData(PORTFOLIO_CATEGORY_DEFAULT_TAB_NAME);
  }, []);

  if (pageLoading) {
    return createElement(PageLoader);
  }

  return createElement<Props>(PortfolioView, {
    data,
    activeCategoryPayload: onCategoryClick,
    getNextPortfolioDate: getNextFirebaseData,
    hasMore,
  });
};
