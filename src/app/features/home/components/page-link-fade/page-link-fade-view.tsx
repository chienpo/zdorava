import React, { useState } from "react";

import {PageLinkStyled, Text, LinkText, LinkOverlay } from "./styled";
import {FadeInOut} from "../../../../animations/fade-in-out-vertically";
import {Arrow} from "./icon";

interface Props {
  position: string;
  routeName: string;
  children: any;
}

export const PageLinkFadeView = ({ children, position, ...props }: Props) => {
  const [overlayVisible, showOverlay] = useState(false);

  return (
    <>
      {overlayVisible && (
        <FadeInOut pose="enter" key={position} onMouseEnter={() => showOverlay(false)}>
          <LinkOverlay onMouseEnter={() => showOverlay(false)} />
        </FadeInOut>
      )}
      <PageLinkStyled
        onBlur={() => showOverlay(false)}
        onFocus={() => showOverlay(true)}
        onMouseOver={() => showOverlay(true)}
        onMouseOut={() => showOverlay(false)}
        position={position}
        {...props}
      >
        <LinkText>
          <Text>
            <Arrow variant={position === 'left' ? 'next' : 'prev'} />
            {children}
          </Text>
        </LinkText>
      </PageLinkStyled>
    </>
  )
};
