import { useRef, createElement, useEffect } from 'react';
import { useCycle } from 'framer-motion';
import { useRoute } from 'react-router5';

import { Route } from 'models/route.model';

import { BurgerMenuView } from './burger-menu-view';

interface RefObject {
  current: HTMLElement;
}

const useDimensions = (ref: RefObject) => {
  const dimensions = useRef<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, [ref]);

  return dimensions.current;
};

export const BurgerMenu: React.FC<{ routes: Route[] }> = ({ routes }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLElement>(null);
  const { height } = useDimensions(containerRef as RefObject);
  const { router } = useRoute();

  return createElement(BurgerMenuView, {
    isOpen,
    height,
    containerRef,
    toggleOpen,
    routes,
    router,
  });
};
