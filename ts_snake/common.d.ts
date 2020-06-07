type GameState = `PLAY` | `FAIL`;
type DirectionArrow = `arrowup` | `w` | `arrowright` | `d` | "arrowdown" | "s" | "arrowleft" | "a" | string;

interface IState {
  bodyCoords: number[];
  direction: DirectionArrow;
  foodCoords: number;
  gameState: GameState;
  head: number;
}
