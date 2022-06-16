type Character = " " | "*";

const nCharactersToString = (n: number, char: Character) => {
  let string = "";
  for (let i = 0; i < n; i++) {
    string += char;
  }
  return string;
};
const drawLine = (n: number, lignIndex: number) =>
  `${nCharactersToString(Math.abs(lignIndex), " ")}${nCharactersToString(
    n - Math.abs(lignIndex) * 2,
    "*"
  )}${nCharactersToString(Math.abs(lignIndex), " ")}`;

const isPositiveIndexCorrect = (n: number, lignIndex: number) => lignIndex >= 0 && lignIndex < Math.floor(n / 2);
const isNegativeIndexCorrect = (n: number, lignIndex: number) => lignIndex <= 0 && lignIndex > -Math.floor(n / 2);

// Index : 3  |   *   |
// Index : 2  |  ***  |
// Index : 1  | ***** |
// Index : 0  |*******|
// Index : -1 | ***** |
// Index : -2 |  ***  |
// Index : -3 |   *   |

export const diamond = (n: number, lignIndex: number = 0) => {
  const result: string[] = [];

  // draw the superiors lines
  if (isPositiveIndexCorrect(n, lignIndex)) result.push(diamond(n, lignIndex + 1));

  //draw the line
  result.push(drawLine(n, lignIndex));

  //draw the inferiors lines
  if (isNegativeIndexCorrect(n, lignIndex)) result.push(diamond(n, lignIndex - 1));
  return result.join("\n");
};
