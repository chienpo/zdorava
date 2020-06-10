import { useEffect, createElement, useState, useCallback } from 'react';
import { useRouteNode } from 'react-router5';
import firebase from 'firebase/app';
import 'firebase/database';

import { PortfolioItemModel } from 'models/portfolio-item.model';

import {
  FIREBASE_DATABASE_REF,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
} from 'app/constants/api';
import { SingleProjectView } from './single-project-view';

export const SingleProject = () => {
  const [data, setData] = useState<PortfolioItemModel[]>([]);
  const [pageLoading, setPageLoading] = useState<boolean>(true);

  const { route } = useRouteNode('');

  const getDataChunk = useCallback(async () => {
    if (route.params.id) {
      firebase
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
    if (!firebase.apps.length) {
      firebase.initializeApp({
        authDomain: FIREBASE_AUTH_DOMAIN,
        databaseURL: FIREBASE_DATABASE_URL,
      });
    }
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
