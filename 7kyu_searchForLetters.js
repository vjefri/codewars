function change(string){
  var result = "";
  var str = string.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  alphabet.split('').forEach(function(letter) {
    if (str.indexOf(letter) === -1) result += "0";
    else result += "1";
  });
  return result;
}

/// Interesting Users Solutions ///

// using map
function change(string) {
  string = string.toLowerCase();
  return 'abcdefghijklmnopqrstuvwxyz'.split('').map(function (c) {
    return string.indexOf(c) !== -1 ? 1 : 0;
  }).join('');
}

// using reduce
function change(string){
  return string = string.toLowerCase(),
    'abcdefghijklmnopqrstuvwxyz'.split('').reduce(function(s, e){
      return s + +(string.search(e.toLowerCase()) > -1);
    }, '');
}

// using map call
function change(string){
  string = string.replace(/[^A-z]/,'').toLowerCase();
  return [].map.call('abcdefghijklmnopqrstuvwxyz',function(v,i){
    return (string.indexOf(v) !== -1) ? 1 : 0;
  }).join('');
}
