const recover = require("./index");

test("récuperer prénom", () => {
  expect(recover("Joe")).toBe("Joe");
});