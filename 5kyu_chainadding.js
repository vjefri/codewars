function add(n){
  var fn = function(x) {
    return add(n + x);
  };
  
  fn.valueOf = function() {
    return n;
  };

  return fn;
}

// tests //

console.log(add(3)(5).valueOf()); // 8
console.log(add(1)(2)(3)); // 6
console.log(add(1)(2)(3)(4)); // 10
console.log(add(1)(2)(3)(4)(5)); // 15