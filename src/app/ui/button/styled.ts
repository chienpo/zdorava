import styled from 'styled-components';

import { BLACK, SHARK, WHITE } from 'app/constants/colors';

export const ButtonStyled = styled.button`
  outline: none;
  bottom: 10px;
  right: 1%;
  padding: 10px 20px;
  box-sizing: inherit;
  transition: all ease-in-out 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  color: whitesmoke;
  background: transparent;
  border: 1px solid ${SHARK};
  opacity: 0.8;
  width: 80%;
  margin: 0 auto;

  &:hover {
    background: ${WHITE};
    color: ${BLACK};
  }

  ${(props: any) =>
    props.more &&
    `
    cursor: default;

    &:hover {
      background: ${SHARK};
      color: ${WHITE};
    }
  `};
`;
