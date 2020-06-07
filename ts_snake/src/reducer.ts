import { Reducer } from "react";

import { generateFood, nextHead } from "./utils/functions";

export const state: IState = {
  bodyCoords: [23, 22, 21],
  direction: `arrowright`,
  foodCoords: 50,
  gameOver: false,
  gameState: `PLAY`,
  head: 24,
};

export const reducer: Reducer<IState, { type: string; payload? }> = (state, { type, payload }) => {
  switch (type) {
    case `FAILURE`:
      return {
        ...state,
        gameState: `FAIL`,
      };
    case "HAS_EATEN":
      return {
        ...state,
        head: payload.newHead,
        bodyCoords: [state.head, ...state.bodyCoords],
        foodCoords: generateFood([payload.newHead, state.head, ...payload.bodyCoords]),
      };
    case "NOT_EATEN":
      return {
        ...state,
        head: payload.newHead,
        bodyCoords: [state.head, ...state.bodyCoords.slice(0, -1)],
      };
    default:
      if (Object.prototype.hasOwnProperty.call(state, type))
        return {
          ...state,
          [type]: payload,
        };
      else throw new Error(`Reducer is having troubles right now.`);
  }
};
