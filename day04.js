const { parseInput } = require("./utils");

const data = parseInput("./data/data_day04.txt", "\n\n", el =>
    el.split("\n")
        .join(" ")
        .split(" ")
        .map(pairs => pairs.split(":"))
).map(line => Object.fromEntries(line));

const fields = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid'
]

const rules = {
    byr: {
        rule: "validYear",
        min: 1920,
        max: 2002
    },
    iyr: {
        rule: "validYear",
        min: 2010,
        max: 2020
    },
    eyr: {
        rule: "validYear",
        min: 2020,
        max: 2030
    },
    hgt: {
        rule: "validHeight",
        cm: {
            min: 150,
            max: 193
        },
        in: {
            min: 59,
            max: 76
        }
    },
    hcl: {
        rule: "validPattern",
        pattern: "^#[a-z 0-9]{6}$"
    },
    ecl: {
        rule: "validPattern",
        pattern: "^amb$|^blu$|^brn$|^gry$|^grn$|^hzl$|^oth$"
    },
    pid: {
        rule: "validPattern",
        pattern: "^[0-9]{9}$"
    }
}

const validYear = (year, min, max) => {
    return year.length == 4 && min <= year && year <= max
}

const validPattern = (value, pattern) => {
    const r = new RegExp(pattern);
    return r.test(value);
}

const validHeight = (height) => {
    const unit = height.slice(-2);
    const h = Number(height.slice(0, -2));
    switch (unit) {
        case "cm":
            return rules.hgt.cm.min <= h && h <= rules.hgt.cm.max;
        case "in":
            return rules.hgt.in.min <= h && h <= rules.hgt.in.max;
    }
}

const validate = (field, value) => {
    const fieldRule = rules[field];
    switch (fieldRule.rule) {
        case "validYear":
            return validYear(value, fieldRule.min, fieldRule.max);
        case "validPattern":
            return validPattern(value, fieldRule.pattern);
        case "validHeight":
            return validHeight(value);
        default:
            return true;
    }
}
const isValidPassport1 = (data) => {
    return fields.reduce((prev, curr) => {
        return prev && (data[curr] != undefined)
    }, true);
}
const isValidPassport2 = (data) => {
    return fields.reduce((prev, curr) => {
        return prev && (data[curr] != undefined) && validate(curr, data[curr])
    }, true);
}
const numberOfValidPassports = (filter, data) => {
    return data.filter(filter).length;
}

console.log("Day 4: Passport Processing");
console.log("Number of valid passports: ", numberOfValidPassports(isValidPassport1, data));
console.log("Number of  valid passports with value validation: ", numberOfValidPassports(isValidPassport2, data))

module.exports.isValidPassport1 = isValidPassport1;
module.exports.isValidPassport2 = isValidPassport2;
module.exports.numberOfValidPassports = numberOfValidPassports;