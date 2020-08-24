import styled from 'styled-components';

import { BLACK, RED, RED_70 } from '~/constants/colors';
import { AnimatedAddress } from '~/animations/animated';

export const SidebarSocial = styled(AnimatedAddress)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 300px;
  padding: 0 15px 15px;
`;

export const StyledSocialLink = styled.a`
  display: inline-block;
  margin-right: 15px;
  color: ${BLACK};
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;
  transition: all ease-in-out 0.4s;

  &:focus {
    color: ${RED_70};
  }

  &:hover {
    color: ${RED};
  }
`;
