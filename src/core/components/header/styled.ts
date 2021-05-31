import styled from 'styled-components';

import overlayBlackDot from '~/assets/images/overlay_black.png';
import overlayWhiteDot from '~/assets/images/overlay_white_four.png';
import { AnimatedDiv, AnimatedHeader } from '~/animations/animated';
import { BLACK_30, WHITE } from '~/constants/colors';
import { ThemeModes } from '~/constants/theme';

export const StyledHeader = styled(AnimatedHeader)`
  z-index: 5;
`;

export const LanguageSwitchBox = styled.div`
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const LanguageSelectBox = styled.div`
  margin: 0 20px;
`;

export const NavigationWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

export const AnimatedNavigationBox = styled(AnimatedDiv)`
  display: grid;
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    theme.mode === ThemeModes.Dark
      ? `${BLACK_30} url(${overlayBlackDot}) repeat scroll 0 -2px`
      : `${WHITE} url(${overlayWhiteDot}) repeat scroll 0 -2px`};
`;
