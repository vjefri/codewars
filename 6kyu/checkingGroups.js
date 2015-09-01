function groupCheck(string) {
	string = string.split('');
	var temp = [];
	var matching = {
		"[": "]",
		"{": "}",
		"(": ")"
	};
	for (var i = 0; i < string.length; i++) {
		var char = string[i];
		var last = temp[temp.length - 1];

		if (temp.length > 0 && last === matching[char]) {
			temp.pop();
		}
		else {
			temp.push(char);
		}
	}
	if (temp.length === 0) return true;
	else return false;
}

console.log(
	groupCheck("()"), // true
	groupCheck("({})"), // true
	groupCheck("[[]()]"), // true
	groupCheck("[{()}]"), // true
	groupCheck("{(})"), // false
	groupCheck("([]"), // false
	groupCheck("[])") // false
)
