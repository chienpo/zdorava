import styled from 'styled-components';

import { BLACK, RED, RED_70 } from '~/constants/colors';
import { AnimatedAddress } from '~/animations/animated';

export const SidebarSocial = styled(AnimatedAddress)`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 0 15px 15px;
  width: 300px;
`;

export const StyledSocialLink = styled.a`
  transition: all ease-in-out 0.4s;
  text-decoration: none;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  display: inline-block;
  margin-right: 15px;
  outline: none;
  color: ${BLACK};

  &:focus {
    color: ${RED_70};
  }

  &:hover {
    color: ${RED};
  }
`;
