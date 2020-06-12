import { useEffect, createElement, useState, useCallback } from 'react';
import { useRouteNode } from 'react-router5';

import { PortfolioItemModel } from 'models/portfolio-item.model';

import { auth, firebaseInstance } from 'features/auth';
import { FIREBASE_DATABASE_REF } from 'constants/api';
import { SingleProjectView } from './single-project-view';

export const SingleProject = () => {
  const [data, setData] = useState<PortfolioItemModel[]>([]);
  const [pageLoading, setPageLoading] = useState<boolean>(true);

  const { route } = useRouteNode('');

  const getDataChunk = useCallback(async () => {
    if (route.params.id) {
      firebaseInstance
        .database()
        .ref(FIREBASE_DATABASE_REF)
        .orderByChild('alt')
        .equalTo(route.params.id)
        .once('value')
        .then(snapshot => {
          const arrayOfKeys = Object.keys(snapshot.val());

          const results = arrayOfKeys.map(key => snapshot.val()[key]);

          setData(results);
          setPageLoading(false);
        })
        .catch(error => {
          throw error;
        });
    }
  }, [route.params.id]);

  useEffect(() => {
    auth();
  }, []);

  useEffect(() => {
    getDataChunk().catch(error => {
      throw error;
    });
  }, [getDataChunk]);

  if (pageLoading) {
    return null;
  }

  return createElement(SingleProjectView, { data: data[0] });
};
