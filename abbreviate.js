function abbreviate(string) {
  var words = string.split(/([^a-z])/gi).map(function(word) {
    var length = word.length;

    if (length >= 4) {
      return word[0] + String(length - 2) + word[length - 1];
    }

    return word;
  });
  
  return words.join('');
}

console.log(abbreviate("apple")) // a3e
console.log(abbreviate("javascript-hi")) // j8t-hi
console.log(abbreviate("milk-cookie")) // m2k-c4e

console.log(abbreviate("You need, need not want, to complete this code-wars mission"))
// You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n

/// users responses ///
// var find = /[a-z]{4,}/gi;
// function replace(match) { return match[0] + (match.length - 2) + match[match.length - 1]; }

// function abbreviate(string) {
//   return string.replace(find, replace);
// }

// function abbreviate(string) {
//   return string.split('-').map(function(ar) {
//     return ar.split(' ').map(function(arr) {
//       return arr.split(',').map(function(arra) {
//         return arra.length > 3 ? arra.split('').reduce(function (p,c,i,a) {
//         return a[0]+(a.length-2)+a[a.length -1];
//       }) : arra;
//       })
//     }).join(' ');
//   }).join('-');
// }