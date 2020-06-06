import styled, { css } from "styled-components";

export const Game = styled.div<{}>`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  height: 100vh;
  width: 100vw;
`;

export const Square = styled.div<{ isHead: boolean; isTail: boolean }>`
  background-color: white;
  border: 1px solid black;

  ${({ isHead }) =>
    isHead &&
    css`
      background-color: 1px solid red;
    `}

  ${({ isTail }) =>
    isTail &&
    css`
      background-color: 1px solid black;
    `}
`;
