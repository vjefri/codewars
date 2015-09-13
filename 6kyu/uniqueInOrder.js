/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder=function(iterable){
	// 1. if iterable is a string, convert into arr
	var arr = iterable;
	if (typeof iterable === 'string')  arr = iterable.split("");
	// 2. for each char
	var results = [];
	arr.forEach(function(ch) {
		// if what you pushed last is NOT equal to char, push char to results
		if (results[results.length - 1] !== ch) results.push(ch);
	});
	return results; 
}


// tests //
console.log(uniqueInOrder('AAAABBBCCDAABBB')); // == ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));         // == ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]));       // == [1,2,3]