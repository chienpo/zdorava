import styled from 'styled-components';
import { motion } from 'framer-motion';

import overlayWhiteDot from 'assets/images/overlay_white_four.png';
import overlayBlackDot from 'assets/images/overlay_black.png';

import { DARK_MODE } from 'constants/theme';
import { pulseIconAnim } from 'animations/keyframes/pulse';
import {
  BLACK,
  GRAY,
  RED,
  WHITE,
  WHITE_SMOKE_10,
  WHITE_90,
  BLACK_40,
} from 'constants/colors';

export const FooterCopy = styled.small`
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.5px;
  display: block;
  width: 100%;
  color: ${GRAY};
  background: ${WHITE_SMOKE_10};
  padding: 4px 0;
`;

export const FooterWrapper = styled(motion.footer)`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  text-align: center;
  align-items: center;
  background: ${({ theme }) =>
    theme === DARK_MODE
      ? `rgba(0,0,0,0.93) url(${overlayBlackDot}) repeat scroll 0 0;`
      : `${WHITE_90} url(${overlayWhiteDot}) repeat scroll 0 0;`};
  position: relative;
  z-index: 1;

  ${FooterCopy} {
    background: ${({ theme }) =>
      theme === DARK_MODE
        ? `${BLACK_40} url(${overlayBlackDot}) repeat scroll 0 0;`
        : `${WHITE_SMOKE_10}`};
  }
`;

export const FooterNav = styled.address`
  display: grid;
  grid-column-gap: 25px;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  padding: 45px 0;
`;

export const FooterSocialLink = styled.a<{ as?: string }>`
  display: flex;
  align-items: center;
  color: ${({ color, theme }) =>
    color ? `${theme.mode === DARK_MODE ? WHITE : BLACK}` : GRAY};
  font-size: ${({ color }) => (color ? '34px' : '30px')};
  height: 34px;
  animation: ${({ color }) => color && pulseIconAnim} 4.4s infinite;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.4s;
  ${({ as }) => as === 'button' && 'width: 30px; position: relative;'};

  &:hover {
    color: ${RED};
  }
`;
