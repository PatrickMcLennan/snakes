import React, { useEffect, useReducer } from "react";

import { GlobalStyle } from "./utils/resets.style";
import Board from "./components/Board";

import { compareString } from "./utils/functions";
import { initialState, reducer } from "./reducer";

const App: () => JSX.Element = () => {
  const [{ direction, head, bodyCoords, foodCoords, gameState }, dispatch] = useReducer(reducer, initialState);

  const moveSnake = (newDirection?: DirectionArrow) =>
    dispatch({
      type: `MOVE_SNAKE`,
      payload: { direction: newDirection ?? direction },
    });

  const listener = (e: KeyboardEvent) => {
    e.stopImmediatePropagation();
    if (gameState === `FAIL`) return;
    const acceptedKeys: DirectionArrow[] = [`arrowup`, `w`, `arrowright`, `d`, `arrowdown`, `s`, `arrowleft`, `a`];
    const formattedKey: string = compareString(e.key);
    if (!acceptedKeys.includes(formattedKey as DirectionArrow)) return;
    else return moveSnake(formattedKey as DirectionArrow);
  };

  window.addEventListener(`keyup`, listener, true);

  useEffect(() => {
    setInterval(() => dispatch({ type: `MOVE_SNAKE` }), 400);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Board bodyCoords={bodyCoords} foodCoords={foodCoords} head={head} playerHasLost={gameState === `FAIL`} />
    </>
  );
};

export default App;
