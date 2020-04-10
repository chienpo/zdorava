import styled from 'styled-components';

import { LIGHT_MODE } from 'app/constants/theme';
import { WHITE } from 'app/constants/colors';
import { H2 } from 'app/ui/headings';

export const FormSection = styled.section`
  width: 100vw;
  box-shadow: 0px -48px 35px 45px ${({ theme }) => theme.mode === LIGHT_MODE && `rgb(17,17,17)`};
`;

export const FormBox = styled.div`
  background: ${WHITE};
  padding: 50px 15px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const H2Styled = styled(H2)`
  text-align: center;
  margin-bottom: 20px;
`;
