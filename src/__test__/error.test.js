import ErrorRepository from "../ErrorRepository";

const errors = new ErrorRepository();

test("return error", () => {
  expect(errors.translate(404)).toBe("Not Found");
});

test("return unknown error", () => {
  expect(errors.translate(500)).toBe("Unknown error");
});
