import React from "react";

import { Game, Square } from "./styles";

interface IProps {
  head: number;
  bodyCoords: number[];
  foodCoords: number;
}

const Board: (IProps) => JSX.Element = ({ head, bodyCoords }) => {
  return (
    <Game>
      {[...Array(100).keys()].map(
        (index: number): JSX.Element => (
          <Square isHead={head === index} isTail={bodyCoords.includes(index)} key={index} />
        )
      )}
    </Game>
  );
};

export default Board;
