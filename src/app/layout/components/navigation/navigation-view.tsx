import * as React from 'react';
import { NavigationWrapper, NavigationList, NavLinkStyled } from './styled';

type Props = {
  navLinks: any;
  theme: string;
  router: any;
};

type NavigationProps = {
  label: string;
  routeName: string;
};

export const NavigationView = ({ navLinks, theme, router }: Props) => (
  <NavigationWrapper theme={theme}>
    <NavigationList>
      {navLinks.map(({ label, routeName }: NavigationProps) => (
        <NavLinkStyled
          key={routeName}
          router={router}
          routeName={routeName}
          theme={theme}
        >
          {label}
        </NavLinkStyled>
      ))}
    </NavigationList>
  </NavigationWrapper>
);
