import { useEffect, createElement, useState, useCallback } from 'react';
import { useRouteNode, useRoute } from 'react-router5';
import { useStore } from 'effector-react';

import { PortfolioItemModel } from '~/models/portfolio-item.model';
import { $portfolioTabsStore } from '~/store/portfolio-tabs-store';
import { $authStore } from '~/store/auth-store';

import { ROUTE_NAME_PORTFOLIO } from '~/router/routes';
import { auth, firebaseRefInstance } from '~/features/auth';
import { ProjectView } from './project-view';

export const Project = () => {
  const [data, setData] = useState<PortfolioItemModel[]>([]);

  const { route } = useRouteNode('');
  const { router } = useRoute();

  const portfolioSelectedCategory = useStore($portfolioTabsStore);
  const { userId } = useStore($authStore);
  const isAuthenticated = Boolean(userId);

  const projectId = route.params.id;

  const isEditState = Boolean(route.name === 'project.edit');

  const getDataChunk = useCallback(async () => {
    await firebaseRefInstance()
      .orderByChild('imageName')
      .equalTo(projectId)
      .once('value')
      .then((snapshot) => {
        const arrayOfKeys = Object.keys(snapshot.val());

        const results = arrayOfKeys.map((key) => ({
          ...snapshot.val()[key],
          uniqueId: key,
        }));
        setData(results);
      })
      .catch(() => {
        router.navigate(ROUTE_NAME_PORTFOLIO, {}, { reload: true });
      });
  }, [projectId, router]);

  useEffect(() => {
    auth();
  }, []);

  useEffect(() => {
    getDataChunk().catch(() => {
      if (route.name === ROUTE_NAME_PORTFOLIO) {
        router.navigate(ROUTE_NAME_PORTFOLIO, {}, { reload: true });
      }
    });
  }, [getDataChunk, router, route.name]);

  return createElement(ProjectView, {
    data: data[0],
    portfolioSelectedCategory,
    isEditState,
    router,
    isAuthenticated,
  });
};
