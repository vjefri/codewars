function squareSum(numbers){
  return numbers.map(function(n){
    return n * n;
  }).reduce(function(total, val){
    return total + val;
  });
}

// test //
console.log(
	squareSum([1, 2, 2]) // should return 9
	)

// interesting // 
function squareSum (numbers) {
	return numbers.reduce(function(sum, n) {
		return (n * n) + sum;
	}, 0);
}

