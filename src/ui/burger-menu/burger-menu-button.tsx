import * as React from 'react';
import styled from 'styled-components';
import { MotionProps } from 'framer-motion';
import { useStore } from 'effector-react';

import { BLACK, RED_70, RED, WHITE } from '~/constants/colors';
import { ThemeModes } from '~/constants/theme';
import { AnimatedPath } from '~/animations/animated';
import { $themeStore } from '~/store/theme-store';

const BurgerButton = styled.button`
  position: absolute;
  top: 12px;
  left: 17px;
  display: flex;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;

  path {
    transition: all 0.2s;
    stroke: ${({ theme }) => (theme.mode === ThemeModes.Dark ? WHITE : BLACK)};
  }

  &:focus path {
    stroke: ${RED_70};
  }

  &:hover path {
    stroke: ${RED};
  }
`;

const Path: React.FC<
  MotionProps & {
    stroke?: string;
    d?: string;
  }
> = (props) => (
  <AnimatedPath
    fill="transparent"
    strokeWidth="2"
    strokeLinecap="square"
    {...props}
  />
);

interface Props {
  onClick: () => void;
}

export const BurgerMenuButton: React.FC<Props> = ({ onClick }) => {
  const themeMode = useStore($themeStore);
  const isDarkMode = themeMode === ThemeModes.Dark;

  return (
    <BurgerButton
      aria-label="burger-menu-button"
      type="button"
      onClick={onClick}
    >
      <svg height="46" viewBox="0 0 22 22">
        <Path
          variants={{
            closed: { d: 'M 2 4 L 20 4', stroke: isDarkMode ? BLACK : WHITE },
            open: { d: 'M 4 18 L 18 4', stroke: isDarkMode ? WHITE : BLACK },
          }}
        />
        <Path
          d="M 2 10.923 L 20 10.923"
          variants={{
            closed: { opacity: 1, stroke: isDarkMode ? BLACK : WHITE },
            open: { opacity: 0, stroke: isDarkMode ? WHITE : BLACK },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: {
              d: 'M 2 17.846 L 20 17.846',
              stroke: isDarkMode ? BLACK : WHITE,
            },
            open: { d: 'M 4 4 L 18 18', stroke: isDarkMode ? WHITE : BLACK },
          }}
        />
      </svg>
    </BurgerButton>
  );
};
