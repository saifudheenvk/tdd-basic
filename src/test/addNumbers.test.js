const { addNumbers } = require("../addNumbers");

describe("addNumbers", () => {
    it("function should return 0 if empty string passed", () => {
        expect(addNumbers("")).toBe(0);
    });
});