var args = process.argv;
var command = args[2];
function gcd(a, b) {       //{GCD} = Greatest Common Divisor
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
/* Call */
console.log(gcd(48, 18));