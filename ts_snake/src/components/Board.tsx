import React from "react";

import { Game, Square } from "./styles";

interface IProps {
  head: number;
  bodyCoords: number[];
  foodCoords: number;
  playerHasLost: boolean;
}

const Board: (IProps) => JSX.Element = ({ head, bodyCoords, foodCoords, playerHasLost }) => {
  return (
    <Game playerHasLost={playerHasLost}>
      {[...Array(100).keys()].map(
        (index: number): JSX.Element => (
          <Square
            isFood={foodCoords === index}
            isHead={head === index}
            isTail={bodyCoords.includes(index)}
            key={index}
          />
        )
      )}
    </Game>
  );
};

export default Board;
