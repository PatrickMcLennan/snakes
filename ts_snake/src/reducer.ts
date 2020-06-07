import { Reducer } from "react";

import { checkErrors, generateFood, nextHead } from "./utils/functions";

export const initialState: IState = {
  bodyCoords: [23, 22, 21],
  direction: `arrowright`,
  foodCoords: 50,
  gameState: `PLAY`,
  head: 24,
};

const failState: (prevState: IState) => IState = (prevState) => ({
  ...prevState,
  gameState: `FAIL`,
});

export const reducer: Reducer<IState, { type: string; payload? }> = (state, { type, payload }) => {
  switch (type) {
    case `FAILURE`:
      return failState(state);
    case "HAS_EATEN":
      return {
        ...state,
        direction: payload.direction ?? state.direction,
        head: nextHead(payload?.direction ?? state.direction, state.head),
        bodyCoords: [state.head, ...state.bodyCoords],
        foodCoords: generateFood([payload.newHead, state.head, ...payload.bodyCoords]),
      };
    case "NOT_EATEN":
      return checkErrors(nextHead(payload.direction ?? state.direction, state.head), state.head, state.bodyCoords)
        ? failState(state)
        : {
            ...state,
            direction: payload.direction ?? state.direction,
            head: nextHead(payload.direction ?? state.direction, state.head),
            bodyCoords: [state.head, ...state.bodyCoords.slice(0, -1)],
          };
    default:
      if (Object.prototype.hasOwnProperty.call(state, type))
        return {
          ...state,
          [type]: payload,
        };
      else throw new Error(`${type} is having troubles right now.`);
  }
};
