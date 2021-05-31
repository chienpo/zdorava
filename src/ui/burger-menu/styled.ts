import styled from 'styled-components';

import { AnimatedDiv, AnimatedUl } from '~/animations/animated';
import { ThemeModes } from '~/constants/theme';
import { BLACK_90, WHITE_20 } from '~/constants/colors';

export const SocialLinksAnimatedWrapper = styled(AnimatedDiv)`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  padding: 0 15px 15px;
`;

export const NavStyled = styled.nav`
  width: 100%;
  margin-top: 100px;
  padding: 25px 15px;
`;

export const StyledMotionNavWrapper = styled(AnimatedDiv)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  height: 100%;
`;

export const StyledMotionMenuBackdrop = styled(AnimatedDiv)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 320px;
  background: ${({ theme }) =>
    theme.mode === ThemeModes.Dark ? WHITE_20 : BLACK_90};
`;

export const StyledMotionUl = styled(AnimatedUl)`
  display: flex;
  flex-direction: column;
`;
