import styled from 'styled-components';

import { GRAY, RED } from 'constants/colors';
import { motion } from 'framer-motion';

export const SidebarSocial = styled(motion.address)`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 0 15px 15px;
  width: 100%;
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
