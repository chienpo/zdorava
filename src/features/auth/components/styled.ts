import styled from 'styled-components';
import { Link } from 'react-router5';

import { BLACK_80, RED, RED_70, WHITE_80 } from '~/constants/colors';
import { ThemeModes } from '~/constants/theme';

export const LogoStyled = styled.figure`
  display: inline-flex;
  width: 28px;
  margin-left: 8px;
  overflow: hidden;
  border-radius: 50%;
  transition: color 0.2s, opacity 0.2s, font-weight 0.2s, border-color 0.2s;
`;

export const ButtonStyled = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 20px;
  color: ${({ theme }) =>
    theme.mode === ThemeModes.Dark ? WHITE_80 : BLACK_80};
  font-size: 20px;
  text-transform: uppercase;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: color 0.2s, opacity 0.2s, font-weight 0.2s;

  &:focus {
    color: ${RED_70};
    font-weight: 600;

    ${LogoStyled} {
      border-color: ${RED_70};
      opacity: 0.8;
    }
  }

  &:hover {
    color: ${RED};
    opacity: 1;

    ${LogoStyled} {
      border-color: ${RED};
      opacity: 0.8;
    }
  }
`;
