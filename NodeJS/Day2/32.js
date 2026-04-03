var args = process.argv;
var command = args[2];
function isPerfectSquare(n) {
    var i = 1;
    while (i * i <= n) {
        if (i * i === n) {
            return true;
        }
        i++;
    }
    return false;
}
/* Call */
console.log(isPerfectSquare(25));
console.log(isPerfectSquare(26));