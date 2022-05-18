const { parseInput } = require("./utils");

const findPair = (data) => {
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data.length; j++) {
            if (data[i] + data[j] == 2020)
                return [data[i], data[j]];
        }
    }
    return [];
}

const findTriplet = data => {
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data.length; j++) {
            for (var k = 0; k < data.length; k++)
                if (data[i] + data[j] + data[k] == 2020)
                    return [data[i], data[j], data[k]];
        }
    }
    return [];
}

const getProduct = (pair) => {
    return pair.reduce((prev, curr) => prev * curr, 1)
}

const data = parseInput("./data/data_day01.txt", "\n", el => Number(el));
console.log("****** Day 1: Report Repair *******")
console.log("Product of correct pair: ", getProduct(findPair(data)));
console.log("Product of correct triplet: ", getProduct(findTriplet(data)));

module.exports.findPair = findPair;
module.exports.findTriplet = findTriplet;
module.exports.getProduct = getProduct;