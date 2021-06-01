import { createElement, useEffect } from 'react';
import { useStore } from 'effector-react';

import { router } from '~/router';
import { AuthView } from '~/features/auth/auth-view';
import { $authStore } from '~/store/auth-store';
import { ROUTE_NAME_HOME } from '~/router/routes';

export const Auth = () => {
  const { userId } = useStore($authStore);
  const isAuthenticated = Boolean(userId);

  useEffect(() => {
    if (isAuthenticated) {
      router.navigate(ROUTE_NAME_HOME, { reload: true });
    }
  }, [isAuthenticated]);

  return createElement(AuthView);
};
