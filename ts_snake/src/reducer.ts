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
  const newHead: number = nextHead(payload?.direction ?? state.direction, state.head);
  const errors: boolean = checkErrors(newHead, state.head, state.bodyCoords);
  if (errors) return failState(state);
  const hasEaten: boolean = newHead === state.foodCoords;
  const bodyCoords: number[] = hasEaten
    ? [state.head, ...state.bodyCoords]
    : [state.head, ...state.bodyCoords.slice(0, -1)];
  const foodCoords: number = hasEaten ? generateFood([newHead, ...bodyCoords]) : state.foodCoords;

  switch (type) {
    case `FAILURE`:
      return failState(state);
    case `MOVE_SNAKE`:
      return {
        ...state,
        direction: payload?.direction ?? state.direction,
        head: newHead,
        bodyCoords,
        foodCoords,
      };
    default:
      if (Object.prototype.hasOwnProperty.call(state, type))
        return {
          ...state,
          [type]: payload,
        };
      else throw new Error(`${type} was sent to the reducer, this is a problem.`);
  }
};
