import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border: 1px solid black;
  outline: none;
  bottom: 10px;
  right: 1%;
  padding: 10px 20px;
  cursor: pointer;
  width: 8%;
  box-sizing: inherit;
  transition: all ease-in-out 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  color: whitesmoke;
  background: #222225;
  border: 1px solid #262629;
  opacity: 0.8;
  margin: 0 3px;
  width: 80%;
  margin: 0 auto;

  &:hover {
    background: white;
    color: black;
  }

  ${(props: any) =>
    props.more &&
    `
    cursor: default;

    &:hover {
      background: #222225;
      color: white;
    }
  `};
`;
