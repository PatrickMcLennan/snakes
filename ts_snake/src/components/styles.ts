import styled, { css } from "styled-components";

export const Game = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  flex-wrap: wrap;
`;

export const Square = styled.div<{ isHead: boolean; isTail: boolean }>`
  flex-basis: 10%;
  border: 1px solid black;

  ${({ isHead }) =>
    isHead &&
    css`
      /* border: 1px solid red; */
      background-color: 1px solid red;
    `}

  ${({ isTail }) =>
    isTail &&
    css`
      /* border: 1px solid green; */
      background-color: 1px solid green;
    `}
`;
