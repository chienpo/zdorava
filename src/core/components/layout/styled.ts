import styled from 'styled-components';

import overlayWhiteDot from '~/assets/images/overlay_white_four.png';
import overlayBlackDot from '~/assets/images/overlay_black.png';
import { DARK_MODE } from '~/constants/theme';
import {
  BLACK_40,
  BLACK_89,
  GRAY,
  WHITE,
  WHITE_70,
  WHITE_90,
} from '~/constants/colors';
import { AnimatedDiv } from '~/animations/animated';
import { SocialLinks } from '~/ui/common';

export const FooterCopy = styled.small`
  display: block;
  width: 100%;
  padding: 4px 0;
  color: ${({ theme }) => (theme.mode === DARK_MODE ? WHITE_70 : BLACK_89)};
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: ${({ theme }) =>
    theme.mode === DARK_MODE
      ? `${BLACK_40} url(${overlayBlackDot}) repeat scroll 0 0`
      : `${WHITE} url(${overlayWhiteDot}) repeat scroll 0 0`};
`;

export const FooterWrapper = styled(AnimatedDiv)`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  align-items: center;
  text-align: center;
  background: ${({ theme }) =>
    theme.mode === DARK_MODE
      ? `${BLACK_89} url(${overlayBlackDot}) repeat scroll 0 0`
      : `${WHITE_90} url(${overlayWhiteDot}) repeat scroll 0 0`};
`;

export const SocialLinksStyled = styled(SocialLinks)`
  padding: 45px 0;

  a {
    color: ${GRAY};
    filter: brightness(150%);
  }
`;
