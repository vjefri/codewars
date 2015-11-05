// You are a number. But that's good for you since you live in the beautiful world, where the only living creatures are numbers. Unfortunately, a nasty zombie virus is spreading out in the digital cities. You work at the digital CDC and your job is to look over the city maps and tell which areas are contaminated by the zombie virus so the digital army would know where to drop the bombs. They are the new kind of digital zombies which can travel only in vertical and horizontal directions and infect only numbers same as them, but don't let it fool you, they're still very dangerous. Time is running out...

// You'll be given two-dimensional array with numbers in it. For some mysterious reason patient zero is always found in north west area of the city (element [0][0] of the matrix) and the plague spreads from there to other cells by moving left, right, up or down. You must create a function that returns a map (2-dimensional array) with all the contaminated areas marked as 1 and virus-free marked as 0.

// In other words: find all the matrix elements with the same value as [0][0] that you can go to by moving only down, up, right or left from [0][0] - without going into a field storing any other value.

// For example:

var city1 = [
    [7, 2, 3],
    [7, 2, 3],
    [1, 2, 7]
];

var contaminatedInCity1 = [
    [1, 0, 0],
    [1, 0, 0],
    [0, 0, 0]
]; // number 7 is a zombie, but the 7 in bottom right corner is not a zombie yet - the virus didn't get there.

var city2 = [
    [9, 1, 2],
    [9, 9, 9],
    [7, 4, 9],
    [7, 9, 7]
];

var contaminatedInCity2 = [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 0]
];
//infection inflicted the 9s, but the virus didn't get to the one in the south of the city yet.


function findZombies(matrix) {
    // extract the infected target
    var target = matrix[0][0];

    // keep track of person location
    var row,
        column,
        lastRow,
        lastColumn;

    // find target in matrix //
    return matrix.map(function(arr) {
        // keep track of row and lastRow
        row = matrix.indexOf(arr);
        var lastRow = row.length - 1;
        // check each val in sub array
        return arr.map(function(person) {
            // keep track of column ans last column
            column = arr.indexOf(person);
            lastColumn = arr.length - 1;
            // if person is target, check if person is zombie(returns 1 or 0)
            if (person === target) return checkZombie(person, matrix);
        });
    });

    function checkZombie(person, matrix) {

        var personLoc = matrix[row][column];

        // how do we account for a row not begin present and returning undefin

        var leftInfectedCheck = matrix[row][column - 1];
        var rightInfectedCheck = matrix[row][column + 1];

        // if row 0, check down
        if (row === 0) {
            var bottomInfectedCheck = matrix[row + 1][column];
        }
        // if last row, check up
        if (row === lastColumn) {
            var topInfectedCheck = matrix[row - 1][column];
        }

        if (row)


    }

    console.log(findZombies(city2));

    // returns 2 dimentional array
