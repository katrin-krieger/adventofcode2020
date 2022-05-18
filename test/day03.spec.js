const { countTrees, countTreesOnDifferentRoutes } = require("../day03");
const { parseInput } = require("../utils");

var data;

beforeEach(() => {
    data = parseInput("./test/data/data_day03.txt", "\n", el => el.split("")
    );
})

describe("Day 3: Toboggan Trajectory", () => {
    test("Input data parsed correctly", () => {
        expect(data[0][0]).toBe(".");
        expect(data[1][0]).toBe("#");
    });
    test("Count trees", () => {
        expect(countTrees(3, 1, data)).toBe(7);
        expect(countTreesOnDifferentRoutes(data)).toBe(336);
    })
})