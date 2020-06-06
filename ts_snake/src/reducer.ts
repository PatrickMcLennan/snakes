import { Reducer } from "react";

import { generateFood } from "./utils/functions";

export const state: IState = {
  head: 24,
  foodCoords: 50,
  bodyCoords: [23, 22, 21],
  gameOver: false,
  gameState: `PLAY`,
};

export const reducer: Reducer<IState, { type: string; payload? }> = (state, { type, payload }) => {
  console.log(payload);
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
        bodyCoords: [payload.currentHead, ...payload.bodyCoords],
        foodCoords: generateFood([payload.currentHead, ...payload.bodyCoords]),
      };
    case "NOT_EATEN":
      return {
        ...state,
        head: payload.newHead,
        bodyCoords: [payload.currentHead, ...payload.bodyCoords.slice(0, -1)],
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
