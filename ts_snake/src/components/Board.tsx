import * as React from "react";

import { Game, Square } from "./styles";

const Board: (head: number, bodyArrayCoords: number[]) => JSX.Element = (head, bodyArrayCoords) => (
  <Game>
    {[...Array(100).keys()].map((index: number) => (
      <Square isHead={head === index} isTail={bodyArrayCoords.includes(index)} />
    ))}
  </Game>
);

export default Board;
