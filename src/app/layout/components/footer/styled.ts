import styled, {keyframes} from 'styled-components';

import overlayBlackDot from 'assets/images/overlay_black.png';
import overlayWhiteDot from '../../../../assets/images/overlay_white_four.png';
import { DARK_MODE } from '../../../constants/theme';
import {
  BLACK,
  GRAY,
  RED,
  WHITE,
  WHITE_SMOKE_10,
} from '../../../constants/colors';


export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  text-align: center;
  align-items: center;
  background: ${({ theme }) =>
  theme.mode === DARK_MODE
    ? `rgba(0,0,0,0.93) url(${overlayBlackDot}) repeat scroll 0 0;`
    : `rgba(255,255,255,0.9) url(${overlayWhiteDot}) repeat scroll 0 0;`};
  z-index: 1;
`;

export const FooterNav = styled.nav`
  display: grid;
  grid-column-gap: 25px;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  padding: 45px 0;
`;

export const FooterCopy = styled.small`
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.5px;
  display: block;
  width: 100%;
  color: ${GRAY};
  background: ${WHITE_SMOKE_10};
  padding: 4px 0;

  background: ${({ theme }) =>
  theme.mode === DARK_MODE
    ? `rgba(0,0,0,0.4) url(${overlayBlackDot}) repeat scroll 0 0;`
    : `${WHITE_SMOKE_10}`};
`;

const pulse = keyframes`
  0% {
    font-size: 30px;
  }
  40% {
    font-size: 30px;
  }
  50% {
    font-size: 34px;
  }
  70% {
    font-size: 30px;
  }
  100% {
    font-size: 30px;
  }
`;

export const FooterSocialLink = styled.a`
  display: flex;
  align-items: center;
  color: ${({ color, theme }) => color ? `${theme.mode === DARK_MODE ? WHITE : BLACK}` : GRAY};
  font-size: ${({ color }) => color ? '34px' : '30px'};
  height: 34px;
  width: 25px;
  animation: ${({ color }) => color && pulse} 4.4s infinite;
  background: none;
  border: none;
  cursor: pointer;
  transition: color ease-out 0.4s;

  &:hover {
    color: ${RED};
  }
`;
