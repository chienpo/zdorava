import styled from 'styled-components';

import overlayWhiteDot from '~/assets/images/overlay_white_four.png';
import overlayBlackDot from '~/assets/images/overlay_black.png';
import { DARK_MODE } from '~/constants/theme';
import { pulseIconAnim } from '~/animations/keyframes/pulse';
import {
  BLACK,
  GRAY,
  RED,
  WHITE,
  WHITE_90,
  BLACK_89,
  BLACK_40,
  WHITE_70,
  RED_70,
} from '~/constants/colors';
import { AnimatedDiv } from '~/animations/animated';

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
      ? `${BLACK_40} url(${overlayBlackDot}) repeat scroll 0 0;`
      : `${WHITE} url(${overlayWhiteDot}) repeat scroll 0 0;`};
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
      ? `${BLACK_89} url(${overlayBlackDot}) repeat scroll 0 0;`
      : `${WHITE_90} url(${overlayWhiteDot}) repeat scroll 0 0;`};
`;

export const FooterNav = styled.address`
  display: grid;
  grid-column-gap: 25px;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  padding: 45px 0;
`;

export const FooterSocialLink = styled.a<{ as?: string }>`
  ${({ as }) => as === 'button' && 'width: 30px; position: relative;'};
  display: flex;
  align-items: center;
  height: 34px;
  color: ${({ color, theme }) =>
    color ? `${theme.mode === DARK_MODE ? WHITE : BLACK}` : GRAY};
  font-size: ${({ color }) => (color ? '34px' : '30px')};
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  filter: brightness(150%);
  transition: color 0.4s;
  animation: ${({ color }) => color && pulseIconAnim} 4.4s infinite;

  &:focus {
    color: ${RED_70};
  }

  &:hover {
    color: ${RED};
  }
`;
