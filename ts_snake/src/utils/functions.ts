const rightWall: number[] = [9, 19, 29, 39, 40, 59, 69, 79, 89, 99];
const leftWall: number[] = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];

export const compareString: (string: string) => string = (string) => string.trim().toLowerCase();

// Gameplay
export const checkErrors: (direction: Direction, head: number, bodyCoords: number[]) => boolean = (
  direction,
  head,
  bodyCoords
) => {
  switch (direction) {
    case `UP`:
      if (head <= 9) return true;
      if (bodyCoords.includes(head - 10)) return true;
      else return false;
    case `RIGHT`:
      if (rightWall.includes(head)) return true;
      if (bodyCoords.includes(head + 1)) return true;
      else return false;
    case `DOWN`:
      if (head >= 90) return true;
      if (bodyCoords.includes(head + 10)) return true;
      else return false;
    case `LEFT`:
      if (leftWall.includes(head)) return true;
      if (bodyCoords.includes(head - 1)) return true;
      else return false;
  }
};

export const generateFood: (totalSnake: number[]) => number = (totalSnake) => {
  const newFood: number = Math.floor(Math.random() * 100);
  return totalSnake.includes(newFood) ? generateFood(totalSnake) : newFood;
};

export const getDirection: (keyPress: string) => Direction = (keyPress) => {
  switch (keyPress) {
    case `arrowup`:
    case `w`:
      return `UP`;
    case `arrowright`:
    case `d`:
      return `RIGHT`;
    case `arrowdown`:
    case `s`:
      return `DOWN`;
    case `arrowleft`:
    case `a`:
      return `LEFT`;
  }
};
