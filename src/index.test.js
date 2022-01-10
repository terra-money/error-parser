import { parse } from "./index";

describe("Wrong type", () => {
  test("Undefined", () => {
    const msg = undefined;
    expect(parse(msg)).toBe("");
  });

  test("Null", () => {
    const msg = null;
    expect(parse(msg)).toBe("");
  });

  test("Array", () => {
    const msg = [];
    expect(parse(msg)).toBe("");
  });

  test("Object", () => {
    const msg = {};
    expect(parse(msg)).toBe("");
  });

  test("Number", () => {
    const msg = 1;
    expect(parse(msg)).toBe("");
  });

  test("String", () => {
    const msg = "Error";
    expect(parse(msg)).toBe("Error");
  });
});
