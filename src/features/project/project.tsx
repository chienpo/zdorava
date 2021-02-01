import { useEffect, createElement, useState, useCallback } from 'react';
import { useRouteNode, useRoute } from 'react-router5';
import { useStore } from 'effector-react';

import { PortfolioItemModel } from '~/models/portfolio-item.model';
import { $portfolioTabsStore } from '~/store/portfolio-tabs-store';
import { $authStore } from '~/store/auth-store';

import { ROUTE_NAME_PORTFOLIO } from '~/router/routes';
import { ProjectView } from './project-view';
import { getDataChunkEmmitPromise } from '~/features/portfolio/api';

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
    const params = {
      orderByChild: 'imageName',
      limitToFirst: null,
      equalTo: projectId,
    };

    await getDataChunkEmmitPromise('', params)
      .then((response) => {
        setData(response as PortfolioItemModel[]);
      })
      .catch(() => {
        router.navigate(ROUTE_NAME_PORTFOLIO, {}, { reload: true });
      });
  }, [projectId, router]);

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
