import { FC, createElement } from 'react';
import { useRoute } from 'react-router5';
import { useCycle } from 'framer-motion';

import { Route } from 'router5';

import { BurgerMenuView } from './burger-menu-view';

interface Props {
  routes: Route[];
  showMenu: boolean;
}

export const BurgerMenu: FC<Props> = ({ routes, showMenu }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { router } = useRoute();

  return createElement(BurgerMenuView, {
    isOpen,
    toggleOpen,
    routes,
    router,
    showMenu,
  });
};
