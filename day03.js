const { parseInput } = require("./utils");

const data = parseInput("./data/data_day03.txt", "\n", el => el.split(""));

const countTrees = (step_x, step_y, localdata) => {
    var count = 0;
    var next_x = step_x;
    var next_y = step_y;

    while (next_y < localdata.length) {
        if (localdata[next_y][next_x] === "#")
            count++;

        next_x += step_x; // 8 +3 = 11 [0 .. 9] --> 1 
        if (next_x > localdata[0].length - 1)
            next_x -= localdata[0].length
        next_y += step_y;
    }
    return count;
}

const countTreesOnDifferentRoutes = (localdata) => {
    var result = 1;
    result *= countTrees(1, 1, localdata);
    result *= countTrees(3, 1, localdata);
    result *= countTrees(5, 1, localdata);
    result *= countTrees(7, 1, localdata);
    result *= countTrees(1, 2, localdata);
    return result;
}

console.log("****** Day 3: Toboggan Trajectory *******")
console.log("Number of trees passed: ", countTrees(3, 1, data));
console.log("Trees on different routes: ", countTreesOnDifferentRoutes(data));

module.exports.countTrees = countTrees;
module.exports.countTreesOnDifferentRoutes = countTreesOnDifferentRoutes;