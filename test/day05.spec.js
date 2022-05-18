const { parseInput } = require("../utils");

var data;

beforeEach(() => {
    data = parseInput("test/data/data_day05.txt", "\n", el => el.split(""))
})

describe("Day 5: Binary Boarding", () => {
    test("Input parsed correctly", () => {
        expect(data[0][0]).toBe("F");
        expect(data.length).toBe(4);
        expect(data[3].length).toBe(10);
    })
})