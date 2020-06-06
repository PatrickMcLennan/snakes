import React, { useEffect, useReducer } from "react";

import { GlobalStyle } from "./utils/resets.style";
import Board from "./components/Board";

import { state as initialState, reducer } from "./reducer";

const App = (): JSX.Element => {
  const [{ head, bodyCoords }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    window.addEventListener(`keydown`, ({ key }) => {
      const acceptedkeys: string[] = [`arrowup`, `w`, `arrowright`, `d`, `arrowdown`, `s`, `arrowleft`, `a`];
      if (!acceptedkeys.includes(key)) return;
      else return dispatch({ type: `CHANGE_DIRECTION`, payload: key });
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Board head={head} bodyCoords={bodyCoords} />
    </>
  );
};

export default App;
