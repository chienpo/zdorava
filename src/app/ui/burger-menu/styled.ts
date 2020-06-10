import styled from 'styled-components';

import { GRAY, RED } from 'app/constants/colors';
import { motion } from 'framer-motion';

export const SidebarSocial = styled(motion.div)`
  position: absolute;
  bottom: 15px;
  left: 15px;
  width: 300px;
`;

export const StyledMotionSocialLink = styled.a`
  transition: all ease-in-out 0.4s;
  text-decoration: none;
  color: ${GRAY};
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  &:hover {
    color: ${RED};
  }
`;
