import React, { useEffect, useReducer } from "react";

import { GlobalStyle } from "./utils/resets.style";
import Board from "./components/Board";

import { checkErrors, compareString, getDirection } from "./utils/functions";
import { state as initialState, reducer } from "./reducer";

const App = (): JSX.Element => {
  const [{ direction, head, bodyCoords, foodCoords, gameState }, dispatch] = useReducer(reducer, initialState);

  const moveSnake: (newDirection?: Direction) => void = (newDirection) => {
    const playerHasLost: boolean = checkErrors(newDirection ?? direction, head, bodyCoords);
    if (playerHasLost) return dispatch({ type: `FAILURE` });
  };

  useEffect(() => {
    window.addEventListener(`keydown`, ({ key }) => {
      const acceptedkeys: string[] = [`arrowup`, `w`, `arrowright`, `d`, `arrowdown`, `s`, `arrowleft`, `a`];
      if (!acceptedkeys.includes(compareString(key))) return;
      else moveSnake(getDirection(compareString(key)));
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Board head={head} bodyCoords={bodyCoords} foodCoords={foodCoords} />
    </>
  );
};

export default App;
