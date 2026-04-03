var args = process.argv;
var command = args[2];
function gcd(a, b) {  // {LCM} = Least Common Multiple
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function lcm(a, b) {
    var result = (a * b) / gcd(a, b);
    return result;
}
/* Call */
console.log(lcm(11, 21));