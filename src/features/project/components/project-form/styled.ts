import styled from 'styled-components';

import { Button } from '~/ui/button/button';
// import { RED } from '~/constants/colors';

export const StyledButton = styled(Button)`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;

  &:disabled {
    grid-template-columns: 40px auto auto;
    padding: 9px;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
`;

export const LangSelectBox = styled.div`
  width: 80px;
  margin: 0 0 20px auto;
`;

export const FieldGroup = styled.div`
  margin-bottom: 40px;
`;

export const FieldsRow = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

// TODO: SuccessMessage styled
// export const SuccessMessage = styled.div`
//   width: 100%;
//   padding: 15px 0;
//   color: ${RED};
//   font-size: 16px;
//   text-align: center;
//   text-transform: uppercase;
// `;
