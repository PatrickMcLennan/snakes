const rightWall: number[] = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
const leftWall: number[] = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];

export const compareString: (string: string) => string = (string) => string.trim().toLowerCase();

// Gameplay
export const checkErrors: (newHead: number, currentHead: number, bodyCoords: number[]) => boolean = (
  newHead,
  currentHead,
  bodyCoords
) => {
  //   console.log(newHead, currentHead, bodyCoords);
  if (bodyCoords.includes(newHead)) return true;
  if (rightWall.includes(currentHead) && currentHead + 1 === newHead) return true;
  if (leftWall.includes(currentHead) && currentHead - 1 === newHead) return true;
  if (newHead > 100 || newHead < 0) return true;
  else return false;
};

export const generateFood: (totalSnake: number[]) => number = (totalSnake) => {
  const newFood: number = Math.floor(Math.random() * 100);
  return totalSnake.includes(newFood) ? generateFood(totalSnake) : newFood;
};

export const nextHead: (direction: DirectionArrow, currentHead: number) => number = (direction, currentHead) => {
  switch (direction) {
    case `arrowup`:
    case `w`:
      return currentHead - 10;
    case `arrowright`:
    case `d`:
      return currentHead + 1;
    case `arrowdown`:
    case `s`:
      return currentHead + 10;
    case `arrowleft`:
    case `a`:
      return currentHead - 1;
  }
};
