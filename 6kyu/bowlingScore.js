var bowlingScore = function(rolls) {
    var frame = 0;
    var arr = [];

    function strike(rolls) {
    	arr.push(rolls[i] + rolls[i + 1] + rolls[i + 2]);
        frame++;
        i++;
    }

    function spare(rolls) {
    	arr.push(rolls[i] + rolls[i + 1] + rolls[i + 2] + rolls[i + 3]);
        frame++;
        i++;
    }

    function openFrame(rolls) {
		arr.push(rolls[i] + rolls[i + 1]);
        frame++;
        i++;
    }

    for (var i = 0; i < rolls.length; i++) {
        var isStrike = rolls[i] === 10;
        var isLastFrame = frame === 10;
        var isSpare = rolls[i] + rolls[i + 1] === 10;

        if (!isStrike && !isLastFrame && !isSpare) openFrame(rolls);
        else if (isSpare && !isLastFrame && !isStrike) spare(rolls);
        else if (isStrike && !isLastFrame) strike(rolls);

    }
    var score = arr.reduce(function(total, val) {
        return total + val;
    });
    console.log(arr);
    return score;
}


// tests //
console.log(bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])) // 0

console.log(bowlingScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9])) // 190
// bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) // 300
// bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10,1,0]) // 11
// bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10, 1,0]) // 12