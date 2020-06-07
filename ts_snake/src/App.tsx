import React, { useReducer } from "react";

import { GlobalStyle } from "./utils/resets.style";
import Board from "./components/Board";

import { checkErrors, compareString, nextHead } from "./utils/functions";
import { initialState, reducer } from "./reducer";

const App = (): JSX.Element => {
  const [{ direction, head, bodyCoords, foodCoords, gameState }, dispatch] = useReducer(reducer, initialState);

  const moveSnake = (newDirection?: DirectionArrow) => {
    const newHead: number = nextHead(newDirection ?? direction, head);
    const errors: boolean = checkErrors(newHead, head, bodyCoords);
    if (errors) return dispatch({ type: `FAILURE` });
    return dispatch({
      type: newHead === foodCoords ? `HAS_EATEN` : `NOT_EATEN`,
      payload: { direction: newDirection ?? direction },
    });
  };

  const listener = (e: KeyboardEvent) => {
    e.stopImmediatePropagation();
    const acceptedKeys: DirectionArrow[] = [`arrowup`, `w`, `arrowright`, `d`, `arrowdown`, `s`, `arrowleft`, `a`];
    const formattedKey: DirectionArrow = compareString(e.key);
    if (!acceptedKeys.includes(formattedKey)) return;
    else return moveSnake(formattedKey);
  };

  window.addEventListener(`keyup`, listener, true);

  return (
    <>
      <GlobalStyle />
      <Board bodyCoords={bodyCoords} foodCoords={foodCoords} head={head} playerHasLost={gameState === `FAIL`} />
    </>
  );
};

export default App;
