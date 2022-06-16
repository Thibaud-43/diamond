import { diamond } from ".";

describe("Test of buildRow() function", function () {
  test("", function () {
    expect(diamond(1)).toEqual("*");
  });
  test("", function () {
    expect(diamond(3)).toEqual(" * \n***\n * ");
  });
  test("", function () {
    expect(diamond(1)).toEqual("*");
  });
  test("", function () {
    expect(diamond(7)).toEqual("   *   \n  ***  \n ***** \n*******\n ***** \n  ***  \n   *   ");
  });
});
