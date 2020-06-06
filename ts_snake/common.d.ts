type GameState = `PLAY` | `FAIL`;
type Direction = `UP` | `DOWN` | `RIGHT` | `LEFT`;

interface IState {
  direction: Direction;
  head: number;
  foodCoords: number;
  bodyCoords: number[];
  gameOver: false;
  gameState: GameState;
}
