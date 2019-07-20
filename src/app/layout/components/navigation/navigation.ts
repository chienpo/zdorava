import { createElement } from 'react';
import { useRoute } from 'react-router5';
import { NavigationView } from './navigation-view';

interface Props {
  theme: string;
}

export const Navigation: React.FC<Props> = ({ theme }) => {
  const navLinks = [
    {
      label: 'Main',
      routeName: 'home',
    },
    {
      label: 'About',
      routeName: 'about',
    },
    {
      label: 'Portfolio',
      routeName: 'portfolio',
    },
  ];

  const { router } = useRoute();

  return createElement(NavigationView, { router, navLinks, theme });
};
