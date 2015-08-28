/// Please try it on your own before you see solutions ///
// Psuedo Code
// Takes an Array of 

/// My Solution ///
function chained(functions) {
	return function() {
		return functions.reduce(function(total, func) {
			return func(total);
		}, arguments[0]);
	}
}

//// Users Solutions ///
/// using reduce ///
function chained(functions) {
	return function(input) {
		return functions.reduce(function(input, fn) {
			return fn(input)
		}, input);
	}
}

/// using reduce and bind ///
function chained(functions) {
	return [].reduce.bind(functions, function(result, fn) {
		return fn(result);
	});
}

/// using each ///
function chained(functions) {
	return function(x) {
		functions.forEach(function(fn) {
			x = fn(x);
		});
		return x;
	}
}

// tests //
function f1(x) {
	return x * 2
}

function f2(x) {
	return x + 2
}

function f3(x) {
	return Math.pow(x, 2)
}

function f4(x) {
	return x.split("")
		.concat()
		.reverse()
		.join("")
		.split(" ")
}

function f5(xs) {
	return xs.concat()
		.reverse()
}

function f6(xs) {
	return xs.join("_")
}

console.log(chained([f1, f2, f3])(0));
console.log(chained([f1, f2, f3])(2));
console.log(chained([f3, f2, f1])(2));

console.log(chained([f4, f5, f6])("lorem ipsum"), "merol_muspi");
