import styled from 'styled-components';

import { GRAY, RED } from 'constants/colors';
import { motion } from 'framer-motion';

export const SidebarSocial = styled(motion.address)`
  position: absolute;
  bottom: 15px;
  left: 15px;
  width: 300px;
`;

export const StyledMotionSocialLink = styled.a`
  transition: all ease-in-out 0.4s;
  text-decoration: none;
  color: ${GRAY};
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  display: inline-block;
  margin-right: 15px;

  &:hover {
    color: ${RED};
  }
`;
