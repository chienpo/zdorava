import React from "react";

import {PageLinkStyled, LinkText, LinkOverlay } from "./styled";

interface Props {
  position: string;
  href: string;
  children: any;
}

export const PageLinkView = ({ children, ...props }: Props) => (
  <PageLinkStyled {...props}>
    <LinkOverlay />
    <LinkText>
      {children}
    </LinkText>
  </PageLinkStyled>
);
