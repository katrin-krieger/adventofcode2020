const { parseInput } = require("../utils");
const { findPair, findTriplet, getProduct } = require("../day01");

var data;

beforeEach(() => {
    data = parseInput("./test/data/data_day01.txt", "\n", el => Number(el));
})

describe("Day 1: Report Repair", () => {
    test("correct input", () => {
        expect(data.length).toBe(6);
        expect(data[0]).toBe(1721);
        expect(data[5]).toBe(1456);
    });
    test("finds correct pair whose sum is 2020", () => {
        expect(findPair(data)).toContain(1721);
        expect(findPair(data)).toContain(299);
    })
    test("get correct product", () => {
        expect(getProduct(findPair(data))).toBe(514579);
        expect(getProduct(findTriplet(data))).toBe(241861950);
    })
    test("find triplet whose sum is 2020", () => {
        expect(findTriplet(data)).toContain(979);
        expect(findTriplet(data)).toContain(366);
        expect(findTriplet(data)).toContain(675);
    })
})