var args = process.argv;
var command = args[2];
function customLowercase(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(code + 32);
        } else {
            result += str[i];
        }
    }
    return result;
}
/* Call */
console.log(customLowercase("HELLO WORLD"));