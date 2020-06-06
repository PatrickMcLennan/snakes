type GameState = `PLAY` | `FAIL`;
type DirectionArrow = `arrowup` | `w` | `arrowright` | `d` | "arrowdown" | "s" | "arrowleft" | "a";

interface IState {
  head: number;
  foodCoords: number;
  bodyCoords: number[];
  gameOver: false;
  gameState: GameState;
}
