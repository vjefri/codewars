// numbers ending with 1, return st
// numbers ending with 2, return nd
// numbers ending with 3, return rd
// numbers ending with 11, 12, 13 return th

function numberToOrdinal(n) {
	if (n === 0) return '0';
	
 	var j = n % 10,
        k = n % 100;
    if (j == 1 && k != 11) {
        return n + "st";
    }
    if (j == 2 && k != 12) {
        return n + "nd";
    }
    if (j == 3 && k != 13) {
        return n + "rd";
    }
    return n + "th";
}
	

// tests //
console.log(
	numberToOrdinal(1), // 1st
	numberToOrdinal(2), // 2nd
	numberToOrdinal(3), // 3rd
	numberToOrdinal(4), // 4th
	numberToOrdinal(11), // 11th
	numberToOrdinal(12), // 12th
	numberToOrdinal(33), // 33rd
	numberToOrdinal(92), // 92nd
	numberToOrdinal(112), // 112th
	numberToOrdinal(113) // 113th
	)