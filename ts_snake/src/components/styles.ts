import styled, { css } from "styled-components";

export const Game = styled.div<{ playerHasLost: boolean }>`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  height: 100vh;
  width: 100vw;

  ${({ playerHasLost }) =>
    playerHasLost &&
    css`
      background-color: rgba(255, 0, 0, 0.3);
    `}
`;

export const Square = styled.div<{ isFood: boolean; isHead: boolean; isTail: boolean }>`
  background-color: white;
  border: 1px solid black;

  ${({ isFood }) =>
    isFood &&
    css`
      background-color: red;
    `}

  ${({ isHead }) =>
    isHead &&
    css`
      background-color: green;
    `}

  ${({ isTail }) =>
    isTail &&
    css`
      background-color: black;
    `}
`;
