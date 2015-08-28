function presses(phrase) {
	var numPad = ['1', 'abc2', 'def3', 'ghi4', 'jkl5', 'mno6', 'pqrs7', 'tuv8', 'wxyz9', 'S0'];
	// replace spaces with capital S, strip from punctuation, turn into arr
	phrase = phrase.toLowerCase()
		.replace(/\s/g, 'S')
		.replace(/[^A-Za-z0-9]/g, "")
		.split("");
	var counter = 0;

	numPad.forEach(function(elem) {
		phrase.forEach(function(char) {
			var position = elem.indexOf(char);
			if (position !== -1) {
				counter += position + 1;
			}
		});
	});

	return counter;
}

console.log(
	presses("LOL"), // 9
	presses("HOW R U"), // 13
	presses("HOW, R U0") // 13
)

/// Interesting Solutions ///

// using map and reduce
var map = {};
['1', 'abc2', 'def3', 'ghi4', 'jkl5', 'mno6', 'pqrs7', 'tuv8', 'wxyz9', '*', ' 0', '#'].forEach(function (a)
{
  a.split('').forEach(function (b, i) { map[b] = i + 1; });
});

function presses(phrase)
{
  return phrase.toLowerCase().split('').reduce(function (r, a) { return r + map[a] | 0 }, 0);
}

// using reduce
function presses(phrase) {
  var letters = '1,abc2,def3,ghi4,jkl5,mno6,pqrs7,tuv8,wxyz9, 0'.split(',');

  return phrase.toLowerCase().split('').reduce(function (r, l) {
    return r + letters.reduce(function (r2, ls) {
      return r2 + ls.indexOf(l) + 1;
    }, 0);
  }, 0);
}

// best practice points
function presses(phrase) {
  var chunks = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'],
      phrase = phrase.toUpperCase().split(''),
      total = 0;

  phrase.forEach(function(l) {
    var key = chunks.filter(function(c) {
      return c.indexOf(l) > -1;
    })[0];
    total += key.indexOf(l) + 1;
  });

  return total;

}
