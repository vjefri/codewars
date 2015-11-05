//*---------- Simple Pig Latin ----------*//
// Prompt: Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

function pigIt(str) {
  var words = str.split(' ');

  return words.map(function(word) {
    var firstLetter = word.substr(0, 1);
    word = word.substring(1);
    return word + firstLetter + "ay";
  }).join(' ');
}

var test = pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

console.log(test);

// Nice and Short, chaining

function pigIt(str) {
  return str.split(' ').map(function(el) {
    return el.slice(1) + el.slice(0, 1) + 'ay';
  }).join(' ');
}
