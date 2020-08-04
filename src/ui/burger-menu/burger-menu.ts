import { FC, createElement } from 'react';
import { useRoute } from 'react-router5';
import { useCycle } from 'framer-motion';

import { Route } from 'models/route.model';

import { BurgerMenuView } from './burger-menu-view';

interface Props {
  routes: Route[];
}

export const BurgerMenu: FC<Props> = ({ routes }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { router } = useRoute();

  return createElement(BurgerMenuView, {
    isOpen,
    toggleOpen,
    routes,
    router,
  });
};
