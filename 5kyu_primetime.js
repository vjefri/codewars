function prime(n) {
    var results = [];

    function isPrime(num) {
        var sqRoot = Math.sqrt(num);
        for (var i = 2; i <= sqRoot; i++)
            if (num % i === 0) return false;
        return num >= 2;
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
