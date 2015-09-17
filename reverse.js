function reverse(arr) {
// 1. check to see if array is even or odd
	var len = Math.floor(arr.length / 2);
	var countFromEnd = arr.length - 1;
	for (var i = 0; i < len; i++) {
		var temp = arr[i];
		arr[i] = arr[countFromEnd];
		arr[countFromEnd] = temp;
		countFromEnd--;
	}
	return arr;
}

// tests //
console.log(reverse([1,2,3,4,5]));
console.log(reverse(['hello','world','how','are','you','?']));
console.log(reverse([{a:1},{b:2}]));

// intesting //
function reverse(arr) {
  var i;
  var length = arr.length;
  for(i=0; i < (length / 2); i++) {
    var tmp = arr[i];
    arr[i] = arr[length-i-1];
    arr[length-i-1] = tmp;
  }
  return arr;
}