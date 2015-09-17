function min(arr, toReturn) {
	arr.sort(function(a, b) {
		return a - b
	});
	if (toReturn === 'value') {
		return arr[0];
	} else return arr.indexOf(arr[0]);
}

// tests //
console.log(min([1,2,3,4,5], 'value')); // 1
console.log(min([1,3,2,5,4], 'value')); // 1
console.log(min([1,3,12,0,4], 'value')); // 0
console.log(min([1,2,3,4,5], 'index')); // 0

//interesting
function min(arr, toReturn) {
	var val = Math.min.apply(null, arr)
	return toReturn == 'value' ? val : arr.indexOf(val)
}

