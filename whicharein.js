/*
Given two arrays of strings a1 and a2 return a sorted array in lexicographical order and without 
duplicates of the strings of a1 which are substrings of strings of a2.

Example: 

a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Note: Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
*/
// solve without using REGEX, using indexOf to solve
function inArray(a1, a2) {
  //1. flatten a2 into one string
  	var str = a2.reduce(function(sent, word) {
  		return sent.concat(word) + ",";
  	}, "");
  //2a. for each elem in a1
  	var result = [];
  	a1.forEach(function(subword) {
  		//2b. if subword in a2, push subword to *result arr
  		if (str.indexOf(subword) > -1) result.push(subword);
  	});
  	return result.sort();
}

var test1 = inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]);
// => ["arp", "live", "strong"]
var test2 = inArray(["live", "strong", "new"], ["lively", "alive", "harp", "sharp", "armstrong"]);
// => ["live", "strong"]
var test3 = inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]);
// => []

console.log(test1);
console.log(test2);
console.log(test3);


// clever //
function inArray(arr1, arr2) {
  return arr1.filter(function(needle) {
    return arr2.some(function(haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}


