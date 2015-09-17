function prime(n) {
    var results = [];

    function isPrime(num) {
        if (num < 2) return false;
        if (num != Math.round(num)) return false;

        var isPrime = true;

        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) isPrime = false
        }
        return isPrime;
    }
    for (var i = 0; i <= n; i++) {
        if (isPrime(i)) results.push(i);
    }
    return results; 
}


// tests //
console.log(
prime(11), // [2, 3, 5, 7, 11]
prime(6) // [2, 3, 5]
  )

