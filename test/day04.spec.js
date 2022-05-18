const { parseInput } = require("../utils");
const { isValidPassport1, numberOfValidPassports, isValidPassport2 } = require("../day04");

var data;

beforeEach(() => {
    data = parseInput("./test/data/data_day04.txt", "\n\n", el =>
        el.split("\n")
            .join(" ")
            .split(" ")
            .map(pairs => pairs.split(":"))
    ).map(line => Object.fromEntries(line));
})


describe("Day 4: Passport Processing", () => {
    test("Input parsed correctly", () => {
        expect(data[0].ecl).toBe("gry");
        expect(data[0].byr).toBe("1937");
        expect(data[2].cid).toBeUndefined();
    });
    test("Passport validation works correctly", () => {
        expect(isValidPassport1(data[0])).toBeTruthy();
        expect(isValidPassport1(data[1])).toBeFalsy();
        expect(isValidPassport1(data[2])).toBeTruthy();
    });
    test("Passport fields are presents and values are valid", () => {
        expect(isValidPassport2(data[0])).toBeTruthy();
        expect(isValidPassport2(data[1])).toBeFalsy();
    })
    test("Number of valid passports", () => {
        expect(numberOfValidPassports(isValidPassport1, data)).toBe(2);
        expect(numberOfValidPassports(isValidPassport2, data)).toBe(2);
    });
})