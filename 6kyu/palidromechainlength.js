// Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes and 43, 194, 4773 are not palindromes.

// Write a method palindrome_chain_length which takes a positive number and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.

// Input will always be a positive integer.

// For example, start with 87:

// 87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884

// 4884 is a palindrome and we needed 4 steps to obtain it, so palindrome_chain_length(87) == 4

var palindromeChainLength = function(n) {
  var steps = 0;
  var num = n;

  function isPalidrome(num) {
  	return Number(num.toString().split("").reverse().join(""));
  }
  while (num !== isPalidrome(num)) {
    num += isPalidrome(num) ;
    steps++;
    }

    return steps;
};

// tests //
console.log(palindromeChainLength(87)); // 87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884
// => 4

// recursion //

var palindromeChainLength  = function(n) {  
  var x = parseInt( (""+n).split('').reverse().join('') );
  if(n != x){
    return 1 + palindromeChainLength (n + x);
  }
  return 0;
};
