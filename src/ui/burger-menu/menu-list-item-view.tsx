import * as React from 'react';
import styled from 'styled-components';
import { I18n } from '@lingui/react';
import { BaseLink } from 'react-router5';
import { Router } from 'router5';
import { useStore } from 'effector-react';

import { $portfolioTabsStore } from '~/store/portfolio-tabs-store';

import { GRAY, RED, RED_70 } from '~/constants/colors';
import { PAGE_TITLES } from '~/constants/page-titles';
import { AnimatedLi } from '~/animations/animated';

const StyledMotionLi = styled(AnimatedLi)`
  display: flex;
  margin-bottom: 20px;
  list-style: none;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

const BaseLinkStyled = styled(BaseLink)`
  color: ${GRAY};
  font-size: 30px;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;
  transition: all ease-in-out 0.4s;

  &.active {
    font-weight: bold;
  }

  &:focus {
    color: ${RED_70};
    font-weight: 600;
    border-color: ${RED_70};
  }

  &:hover {
    color: ${RED};
    border-color: ${RED};
  }

  &&.active {
    color: ${RED};
  }
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
  onClick: () => void;
  router: Router;
}

export const MenuListItemView: React.FC<Props> = ({
  onClick,
  name,
  router,
}) => {
  const category = useStore($portfolioTabsStore);

  return (
    <I18n>
      {({ i18n }) => (
        <StyledMotionLi
          variants={variants}
          whileHover={{ color: RED }}
          whileTap={{ scale: 0.95 }}
        >
          <BaseLinkStyled
            title={i18n._(PAGE_TITLES[name])}
            router={router}
            routeName={name}
            routeParams={{ category }}
            onClick={onClick}
          >
            {i18n._(PAGE_TITLES[name])}
          </BaseLinkStyled>
        </StyledMotionLi>
      )}
    </I18n>
  );
};
