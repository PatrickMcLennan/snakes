import React, { useEffect, useReducer } from "react";

import { GlobalStyle } from "./utils/resets.style";
import Board from "./components/Board";

import { checkErrors, compareString, nextHead } from "./utils/functions";
import { state as initialState, reducer } from "./reducer";

const App = (): JSX.Element => {
  const [{ head, bodyCoords, foodCoords }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    window.addEventListener(`keydown`, ({ key }) => {
      const acceptedkeys: string[] = [`arrowup`, `w`, `arrowright`, `d`, `arrowdown`, `s`, `arrowleft`, `a`];
      const formattedKey: string = compareString(key);
      if (!acceptedkeys.includes(formattedKey)) return;
      else {
        const newHead: number = nextHead(formattedKey, head);
        const errors: boolean = checkErrors(head, newHead, bodyCoords);
        if (errors) return dispatch({ type: `FAILURE` });
        else
          return newHead === foodCoords
            ? dispatch({ type: `HAS_EATEN`, payload: newHead })
            : dispatch({ type: `NOT_EATEN`, payload: newHead });
      }
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
