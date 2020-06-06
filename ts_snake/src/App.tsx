import React, { useReducer } from "react";

import { GlobalStyle } from "./utils/resets.style";
import Board from "./components/Board";

import { checkErrors, compareString, nextHead } from "./utils/functions";
import { state as initialState, reducer } from "./reducer";

const App = (): JSX.Element => {
  const [{ head, bodyCoords, foodCoords, gameState }, dispatch] = useReducer(reducer, initialState);

  const listener = (e: KeyboardEvent) => {
    e.stopImmediatePropagation();
    const acceptedkeys: string[] = [`arrowup`, `w`, `arrowright`, `d`, `arrowdown`, `s`, `arrowleft`, `a`];
    const formattedKey: string = compareString(e.key);
    if (!acceptedkeys.includes(formattedKey)) return;
    else {
      const newHead: number = nextHead(formattedKey, head);
      const errors: boolean = checkErrors(newHead, head, bodyCoords);
      if (errors) return dispatch({ type: `FAILURE` });
      else
        return dispatch({
          type: newHead === foodCoords ? `HAS_EATEN` : `NOT_EATEN`,
          payload: { newHead, currentHead: head, bodyCoords },
        });
    }
  };

  if (gameState === `PLAY`) window.addEventListener(`keyup`, listener, true);
  if (gameState === `FAIL`) window.removeEventListener(`keyup`, listener, true);

  return (
    <>
      <GlobalStyle />
      <Board bodyCoords={bodyCoords} foodCoords={foodCoords} head={head} playerHasLost={gameState === `FAIL`} />
    </>
  );
};

export default App;
