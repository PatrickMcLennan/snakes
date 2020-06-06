import { Reducer } from "react";

interface IState {
  direction: number;
  head: number;
  bodyCoords: number[];
  gameOver: false;
}

export const state: IState = {
  direction: +1,
  head: 10,
  bodyCoords: [7, 8, 9],
  gameOver: false,
};

export const reducer: Reducer<IState, { type: string; payload: number | boolean | string }> = (
  state,
  { type, payload }
) => {
  switch (type) {
    case "CHANGE_DIRECTION":
      return {
        ...state,
        direction: payload,
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
