import React from "react";
import posed from 'react-pose';


import {PageLinkStyled, LinkText, LinkOverlay } from "./styled";

interface Props {
  position: string;
  routeName: string;
  children: any;
}

const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});

export const PageLinkFadeView = ({ children, ...props }: Props) => (
  <Box>
    <PageLinkStyled {...props}>
      <LinkOverlay />
      <LinkText>
        {children}
      </LinkText>
    </PageLinkStyled>
  </Box>
);
