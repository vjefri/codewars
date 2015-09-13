function validate(n){
	// 1. if n > 16, return false
	if (n <= 16) return false;
	// 1a. convert number to string and split into arr
	n = n.toString()
		 .split("")
		 .map(function(val) {
			return parseInt(val, 10);
		});
	// 2. if length of n is even, double every other digit starting with index 0
	var arr;
	if (n.length % 2 === 0) {
		arr = n.map(function(val, i) {
			if (i % 2 === 0) return val * 2; 
			else return val;
		});
	// 3. else, double every other digit starting with index 1
	} else {
		arr = n.map(function(val, i) {
			if (i % 2 != 0) return val * 2; 
			else return val;
		});
	}
	// 4. if result of each doubled elem is > 9, convert val to string, split, map parseInt, reduce add
	arr = arr.map(function(val) {
		if (val > 9) {
			return val.toString()
			  .split('')
			  .map(function(val) {
			  	return parseInt(val, 10);
			  })
			  .reduce(function(sum, val) {
			  	return sum + val;
			  });
		}
		else return val; 
	})
	// 5. sum all elems in arr
	.reduce(function(total, val) {
		return total + val; 
	});
	// 6. sum / 10
	var remainder = arr % 10
	// 7. if remainder equals 0, return true; else return false
	if (remainder === 0) return true;
	else return false; 
}

//tests//

console.log(validate(1714));
console.log(validate(12345));
console.log(validate(891));

// Part 1:
// 1714 => [2, 7, 2, 4]
// 12345 => [1, 4, 3, 8, 5]
// 891 => 8, 18, 1]

// Part 2:
// [8, 18, 1] => [8, (1+8), 1] => [8, 9, 1]

// clever //

function validate(n) {
  n = n.toString().split('').map(Number).reverse();
  return n.reduce(function (sum, digit, index) {
    if (index & 1) digit <<= 1;
    if (digit > 9) digit -= 9;
    return sum + digit;
  }, 0) % 10 == 0;
}


