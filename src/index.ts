type Character = " " | "*";

const nCharactersToString = (n: number, char: Character) => {
  let string = "";
  for (let i = 0; i < n; i++) {
    string += char;
  }
  return string;
};
const drawLine = (n: number, index: number) =>
  `${nCharactersToString(Math.abs(index), " ")}${nCharactersToString(
    n - Math.abs(index) * 2,
    "*"
  )}${nCharactersToString(Math.abs(index), " ")}`;

const isPositiveIndexCorrect = (n: number, index: number) => index >= 0 && index < Math.floor(n / 2);
const isNegativeIndexCorrect = (n: number, index: number) => index <= 0 && index > -Math.floor(n / 2);

// Index : 3  |   *   |
// Index : 2  |  ***  |
// Index : 1  | ***** |
// Index : 0  |*******|
// Index : -1 | ***** |
// Index : -2 |  ***  |
// Index : -3 |   *   |

export const diamond = (n: number, index: number = 0) => {
  const result: string[] = [];

  // draw the superiors lines
  if (isPositiveIndexCorrect(n, index)) result.push(diamond(n, index + 1));

  //draw the line
  result.push(drawLine(n, index));

  //draw the inferiors lines
  if (isNegativeIndexCorrect(n, index)) result.push(diamond(n, index - 1));
  return result.join("\n");
};
