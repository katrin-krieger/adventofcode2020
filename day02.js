const { parseInput } = require("./utils");

data = parseInput("./data/data_day02.txt", "\n", el => {
    var line = [];
    const s = el.split(" ");
    line = line.concat(s[0].split("-").map(Number)); //first two elements are min and max;
    line.push(s[1].charAt(0)); // next is char minus the colon
    line.push(s[2]); // password

    return line;
});

const isValidPassword1 = (policy) => {
    var [min, max, char, password] = policy;
    password = password.split("");
    var n = password.filter(c => c === char).length;
    return (min <= n) && (n <= max);
}

const isValidPassword2 = (policy) => {
    var [idx1, idx2, char, password] = policy;
    password = password.split("");
    if ((password[idx1 - 1] === char || password[idx2 - 1] === char) && !(password[idx1 - 1] === char && password[idx2 - 1] === char))
        return true;
    return false;
}

const numberOfValidPasswords = (validationFn, data) => {
    return data.filter(validationFn).length;
}

console.log("****** Day 2: Password Philosophy *******")
console.log("Number of valid passwords variant 1: ", numberOfValidPasswords(isValidPassword1, data));
console.log("Number of valid passwords variant 2: ", numberOfValidPasswords(isValidPassword2, data));

module.exports.isValidPassword1 = isValidPassword1;
module.exports.isValidPassword2 = isValidPassword2;
module.exports.numberOfValidPasswords = numberOfValidPasswords;