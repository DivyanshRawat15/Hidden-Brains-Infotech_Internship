var args = process.argv;
var command = args[2];
function reverseNumber(n) {
    var reversed = 0;
    while (n > 0) {
        var digit = n % 10;
        reversed = reversed * 10 + digit;
        n = Math.floor(n / 10);
    }
    return reversed;
}
/* Call */
console.log(reverseNumber(12345));