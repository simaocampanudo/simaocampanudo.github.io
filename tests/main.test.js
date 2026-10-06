const { greet } = require("../src/main");

test("greet returns the correct message", () => {
  expect(greet("Simao")).toBe("Hello, Simao!");
});