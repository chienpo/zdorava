import styled from 'styled-components';
import { BLACK, RED, RED_70 } from '~/constants/colors';

interface Props {
  as?: string;
}

export const Anchor = styled.a.attrs(() => ({
  rel: 'noopener noreferrer',
  target: '_blank',
}))<Props>`
  display: inline-block;
  color: ${BLACK};
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.5px;
  text-decoration: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  transition: color 0.4s;

  &:focus {
    color: ${RED_70};
  }

  &:hover {
    color: ${RED};
  }

  ${({ as }) =>
    as === 'button' &&
    `
    width: 30px;
    position: relative;

    svg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  `};
`;
