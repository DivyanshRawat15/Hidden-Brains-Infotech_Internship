var args = process.argv;
var command = args[2];
function isPrime(n) {
    if (n <= 1) return false;
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
/* Call */
console.log(isPrime(7));
console.log(isPrime(10));