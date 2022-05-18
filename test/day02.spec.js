const { parseInput } = require("../utils");
const { isValidPassword1, isValidPassword2, numberOfValidPasswords } = require("../day02");

var data;

beforeEach(() => {
    data = parseInput("./test/data/data_day02.txt", "\n", el => {
        var line = [];
        const s = el.split(" ");
        line = line.concat(s[0].split("-").map(Number)); //first two elements are min and max;
        line.push(s[1].charAt(0)); // next is char minus the colon
        line.push(s[2]); // password

        return line;
    });
})

describe("Day 2: Password Philosophy", () => {
    test("Input parsed correctly", () => {
        expect(data[0][0]).toBe(1);
        expect(data[0][1]).toBe(3);
        expect(data[0][2]).toBe("a");
        expect(data[0][3]).toBe("abcde");
    })
    test("Password validation 1 works correctly", () => {
        expect(isValidPassword1(data[0])).toBeTruthy();
        expect(isValidPassword1(data[2])).toBeTruthy();
        expect(isValidPassword1(data[1])).toBeFalsy();
    })
    test("Password validation 2 works correctly", () => {
        expect(isValidPassword2(data[0])).toBeTruthy();
        expect(isValidPassword2(data[1])).toBeFalsy();
        expect(isValidPassword2(data[2])).toBeFalsy();
    })
    test("Number of passwords computed correctly", () => {
        expect(numberOfValidPasswords(isValidPassword1, data)).toBe(2);
        expect(numberOfValidPasswords(isValidPassword2, data)).toBe(1);
    })
})