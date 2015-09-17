function sqrtApproximation(n) {
  // if the remainder is 0 then return k
  var squareRoot = Math.sqrt(Math.abs(n));
  var result = [];
  if (squareRoot % 1 === 0) {
    return squareRoot;
  }
  // if there is a remainder then return range arr
  else {
    var k = Math.floor(squareRoot);
    result.push(k);
    result.push(k + 1);
  }
  return result;
}

/// interesting solutions ///
function sqrtApproximation(number) {
	for (var i = 0; number >= i * i; i++) {
		if (i * i === number) return i;
	}
	return [i - 1, i];
}

function sqrtApproximation(number) {
	// find an initial value that should be close to the square root
	var root = 1,
		num = number >> 2;
	while (num < -1 || num > 1) {
		root <<= 1;
		root |= num & 1 | num >> 1 & 1;
		num >>= 2;
	}

	// use Newton's method to approximate the square root
	while (!(root * root <= number && (root + 1) * (root + 1) > number))
		root = root - (root * root - number) / (2 * root) | 0;

	return root * root == number ? root : [root, root + 1];
}

function sqrtApproximation(n) {
	for (i = 0; i * i < n; i++);
	return n % i === 0 || n === 0 ? ~~i : [~~i - 1, ~~i];
}

console.log(
	sqrtApproximation(4), // 2
	sqrtApproximation(5), // [2, 3]
	sqrtApproximation(12) // [3, 4]
);
