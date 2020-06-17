import * as React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { I18n } from '@lingui/react';
import { BaseLink } from 'react-router5';

import { GRAY, WHITE, RED } from 'constants/colors';
import { DARK_MODE } from 'constants/theme';
import { PAGE_TITLES } from 'constants/page-titles';

const StyledMotionLi = styled(motion.li)`
  list-style: none;
  margin-bottom: 10px;
  display: flex;
  cursor: pointer;
`;

const NavLinkStyled = styled(BaseLink)`
  transition: all ease-in-out 0.4s;
  text-decoration: none;
  color: ${GRAY};
  font-size: 30px;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 5px 0;

  &.active {
    font-weight: bold;
  }

  ${({ theme }) =>
    theme.mode === DARK_MODE
      ? `
      color: ${GRAY};

        &.active {
          color: ${WHITE};
        }

        &:hover {
          color: ${RED};
          border-color: ${RED};
        }
      `
      : `
        &.active {
          color: ${RED};
        }

        &:hover {
          color: ${RED};
          border-color: ${RED};
        }
      `};
`;

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface Props {
  name: string;
  router: any;
}

export const MenuListItemView: React.FC<Props> = ({ name, router }) => (
  <I18n>
    {({ i18n }) => (
      <StyledMotionLi
        variants={variants}
        whileHover={{ color: RED }}
        whileTap={{ scale: 0.95 }}
      >
        <NavLinkStyled
          title={i18n._(PAGE_TITLES[name])}
          router={router}
          routeName={name}
        >
          {i18n._(PAGE_TITLES[name])}
        </NavLinkStyled>
      </StyledMotionLi>
    )}
  </I18n>
);
